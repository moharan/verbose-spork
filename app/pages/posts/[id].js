import { API, Auth, Hub } from "aws-amplify";
import { useRouter } from "next/router";
import Reactmarkdown from "react-markdown";
import "../../configureAmplify";
import { Button } from "antd";
import { listPosts, getPost } from "../../src/graphql/queries";
import { createComment } from "../../src/graphql/mutations";
import { useState } from "react";
import { v4 as uuid } from "uuid";
import dynamic from "next/dynamic";
const SimpleMDE = dynamic(() => import("react-simplemde-editor"), {
  ssr: false,
});
import "easymde/dist/easymde.min.css";

const initialState = { message: "" };

export default function Post({ post }) {
  const [comment, setComment] = useState(initialState);
  const [showMe, setShowMe] = useState(false);
  const { message } = comment;
  const router = useRouter();

  function toggle() {
    setShowMe(!showMe);
  }

  if (router.isFallback) {
    return <div>Cargando ...</div>;
  }

  async function createTheComment() {
    if (!message) return;
    const id = uuid();
    comment.id = id;
    try {
      await API.graphql({
        query: createComment,
        variables: { input: comment },
        authMode: "AMAZON_COGNITO_USER_POOLS",
      });
    } catch (error) {
      console.log(error);
    }
    router.push("/alerta");
  }

  return (
    <>
      <p className="detail-title">{post.title}</p>
      <p className="detail-info">Por: {post.username}</p>
      <div>
        <Reactmarkdown className="prose" children={post.content} />
      </div>
      <div>
        <Button type="default" onClick={toggle}>
          Escribe un comentario
        </Button>
        {
          <div style={{ display: showMe ? "block" : "none" }}>
            <SimpleMDE
              value={comment.message}
              onChange={(value) =>
                setComment({ ...comment, message: value, postID: post.id })
              }
            />
            <Button
              type="primary"
              onClick={createTheComment}>
                Guardar
            </Button>
          </div>
        }
      </div>
    </>
  );
}

export async function getStaticPaths() {
  const postData = await API.graphql({
    query: listPosts,
  });

  const paths = postData.data.listPosts.items.map((post) => ({
    params: { id: post.id },
  }));
  return {
    paths,
    fallback: true,
  };
}

export async function getStaticProps({ params }) {
  const { id } = params;
  const postData = await API.graphql({
    query: getPost,
    variables: { id },
  });
  return {
    props: {
      post: postData.data.getPost,
    },
    revalidate: 1,
  };
}
