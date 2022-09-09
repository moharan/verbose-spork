import { useEffect, useState } from "react";
import { API, Auth } from "aws-amplify";
import { postsByUsername } from "./../src/graphql/queries";
import Link from "next/link";

export default function Alerta() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetchPosts();
  }, []);
  async function fetchPosts() {
    const { username } = await Auth.currentAuthenticatedUser();
    const postData = await API.graphql({
      query: postsByUsername,
      variables: { username },
    });
    setPosts(postData.data.postsByUsername.items);
  }
  return (
    <div>
      <h1>Mis Alertas</h1>
      {posts.map((post, index) => (
        <Link key={index} href={`/posts/${post.id}`}>
          <div>
            <h2>{post.title}</h2>
            <p>Autor: {post.username}</p>
          </div>
        </Link>
      ))}
    </div>
  );
}
