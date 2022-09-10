import { withAuthenticator } from "@aws-amplify/ui-react";
import { useState, useRef, React } from "react";
import { API, Auth } from "aws-amplify";
import { useRouter } from "next/router";
import { v4 as uuid } from "uuid";
import { createPost } from "../src/graphql/mutations";
// import SimpleMDE from "react-simplemde-editor";
import dynamic from "next/dynamic";
const SimpleMDE = dynamic(() => import("react-simplemde-editor"), { ssr: false });
import "easymde/dist/easymde.min.css";
import { Button, Input } from 'antd';

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
    const { username } = await Auth.currentAuthenticatedUser();
    post.username = username;

    await API.graphql({
      query: createPost,
      variables: { input: post },
      authMode: "AMAZON_COGNITO_USER_POOLS",
    });
    router.push(`/posts/${id}`)
  }
  return (
    <div>
      <h1>Nueva Alerta o Notificación</h1>
      <Input
        onChange={onChange}
        name = "title"
        placeholder="Titulo para el reporte"
        value={post.title}
        className=""
    />
    <SimpleMDE
        value={post.content}
        onChange={(value) => setPosts({...post, content:value})}
    />
    <Button type="primary" onClick={createNewPost}>
        Crear Reporte
    </Button>
    </div>
  );
}

export default withAuthenticator(Notificacion);
