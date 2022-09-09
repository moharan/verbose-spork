import { withAuthenticator } from "@aws-amplify/ui-react";
import { useState, useRef, React } from "react";
import { API } from "aws-amplify";
import { useRouter } from "next/router";
import { v4 as uuid } from "uuid";
import { createPost } from "../src/graphql/mutations";

const initialState = { title: "", content: "" };
function Notificacion() {
  const [post, setPosts] = useState(initialState);
  const { title, content } = post;
  const router = useRouter();

  function onChange(e) {
    setPosts(() => ({
      ...post,
      [e.target.name]: e.target.value,
    }));
  }

  async function createNewPost() {
    if (!title || !content) return;
    const id = uuid();
    post.id = id;

    await API.graphql({
      query: createPost,
      variables: {input: post},
      authMode: "AMAZON_COGNITO_USER_POOLS"
    });
    // router.push(`/post/${id}`)
  }
  return (
    <div>
        <h1>Crear Nueva Notificación</h1>
    </div>
  )
}

export default Notificacion;