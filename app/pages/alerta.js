import { useEffect, useState } from "react";
import { API, Auth } from "aws-amplify";
import { Card, Button } from "antd";
import { postsByUsername } from "./../src/graphql/queries";
import Link from "next/link";
import Moment from "moment";
import 'moment/locale/es';
Moment.locale('es');
import { deletePost as deletePostMutation } from "../src/graphql/mutations";

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

  async function deletePost(id) {
    await API.graphql({
      query: deletePostMutation,
      variables: { input: { id } },
      authMode: "AMAZON_COGNITO_USER_POOLS",
    });
    fetchPosts();
  }

  return (
    <div>
      <h1>Mis Alertas</h1>
      {posts.map((post, index) => (
        <Card key={index}>
          <div>
            <p className="detail-title">{post.title}</p>
            <p className="detail-info">
              Fecha: {Moment(post.createdAt).format("ddd, MMM hh:mm a")}
            </p>
          </div>
          <div className="buttons">
            <p>
              <Button type="default">
                <Link href={`/editar/${post.id}`}>Editar</Link>
              </Button>
            </p>
            <p>
              <Button type="primary">
                <Link href={`/posts/${post.id}`}>Visualizar</Link>
              </Button>
            </p>
            <Button type="primary" danger onClick={() => deletePost(post.id)}>
              Eliminar
            </Button>
          </div>
        </Card>
      ))}
    </div>
  );
}
