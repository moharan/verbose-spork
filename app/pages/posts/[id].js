import { API } from "aws-amplify";
import { useRouter } from "next/router";
import reactmarkdown from "react-markdown";
import "../../configureAmplify";
import { listPosts, getPost } from "../../src/graphql/queries";

export default function Post({ post }) {
  const router = useRouter();
  if (router.isFallback) {
    return <div>Cargando ...</div>;
  }
  return (
    <>
      <h1 className="">{post.title}</h1>
      <p>Por: {post.username}</p>
      <div>
      <p reactmarkdown="prose">{post.content}</p>
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
    revalidate: 1
  };
}
