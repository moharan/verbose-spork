import { useEffect, useState } from "react";
import { API, Auth } from "aws-amplify";
import { postsByUsername } from "./../src/graphql/queries";
import Link from "next/link";
import Moment from "moment";

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
        <div className="" key={index}>
          {/* {post.coverImage && (
          <img
            src={post.coverImage}
          />
        )} */}
          <div>
            <p>{post.title}</p>
            <p>
              Created on: {Moment(post.createdAt).format("ddd, MMM hh:mm a")}
            </p>
          </div>
          <div>
            <p>
              <Link href={`/edit-post/${post.id}`}>Edit Post</Link>
            </p>
            <p>
              <Link href={`/posts/${post.id}`}>View Post</Link>
            </p>
            <button onClick={() => deletePost(post.id)}>Delete Post</button>
          </div>
        </div>
      ))}
    </div>
  );
}
