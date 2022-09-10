import { API, Auth, Hub } from "aws-amplify";
import { useRouter } from "next/router";
import Reactmarkdown from "react-markdown";
import "../../configureAmplify";
import { Button } from "antd";
import { listPosts, getPost } from "../../src/graphql/queries";
import { createComment } from "../../src/graphql/mutations";
import { useState } from "react";
import dynamic from "next/dynamic";
const SimpleMDE = dynamic(() => import("react-simplemde-editor"), {
  ssr: false,
});
import "easymde/dist/easymde.min.css";

const initialState = { message: "" };

export default function Post({ post }) {
  const [comment, setComment] = useState(initialState);
  const [showMe, setShowMe] = useState(false);

  function toggle() {
    setShowMe(!showMe);
  }

  const router = useRouter();
  if (router.isFallback) {
    return <div>Cargando ...</div>;
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
          <div style={{ display: showMe ? "Block" : "none" }}>
            <SimpleMDE value="Cuéntanos que está pasando" />
            <Button type="primary">Guardar</Button>
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
