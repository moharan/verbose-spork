import { withAuthenticator } from "@aws-amplify/ui-react";
import { useState, useRef, React, useEffect } from "react";
import { API, Auth, Storage } from "aws-amplify";
import { useRouter } from "next/router";
import dynamic from "next/dynamic";
const SimpleMDE = dynamic(() => import("react-simplemde-editor"), {
  ssr: false,
});
import "easymde/dist/easymde.min.css";
import { updatePost } from "../../src/graphql/mutations";
import { getPost } from "../../src/graphql/queries";
import { v4 as uuid } from "uuid";

function EditPost() {
  const [post, setPost] = useState(null);
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    fetchPost();
    async function fetchPost() {
      if (!id) return;
      const postData = await API.graphql({
        query: getPost,
        variables: { id },
      });
      setPost(postData.data.getPost);
    }
  }, [id]);

  if (!post) return null;

  function onChange(e) {
    setPost(() => ({ ...post, [e.target.name]: e.target.value }));
  }

  const { title, content } = post;

  async function updateCurrentPost() {
    if (!title || !content) return;
    const postUpdated = {
      id,
      content,
      title,
    };
    await API.graphql({
      query: updatePost,
      variables: { input: postUpdated },
      authMode: "AMAZON_COGNITO_USER_POOLS",
    });
    router.push("/editar");
  }

  return (
    <div>
      <h1>Editar</h1>
      <input
        onChange={onChange}
        name="title"
        placeholder="Title"
        value={post.target}
        className=""
      />
      <SimpleMDE
        value={post.content}
        onChange={(value) => setPost({ ...post, content: value })}
      />
      <button onClick={updateCurrentPost}>Update Post</button>
    </div>
  );
}

export default EditPost;
