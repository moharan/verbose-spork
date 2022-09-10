import { useState, useEffect } from "react";
import { Card, Popover } from "antd";
import { API, autoShowTooltip } from "aws-amplify";
import { listPosts } from "./../src/graphql/queries";
import Link from "next/link";
// import Image from "next/image";
// import Cuidado from "./../images/support.svg";
// import Durante from "./../images/psychology.svg";
// import Despues from "./../images/warning.svg";

export default function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetchPosts();
  }, []);

  async function fetchPosts() {
    const postData = await API.graphql({
      query: listPosts,
    });
    setPosts(postData.data.listPosts.items);
  }
  return (
    <div>
      <h1>Ultimos Eventos</h1>
      {/* Automatizar */}
      <Card
        size="small"
        title="Santiago"
        className="evento-card"
        extra={
          <div>
            <Popover content={"cuidado"} title="Medidas Precaución">
              <a href="/#" onClick={(e) => e.preventDefault()}>
                [Cuidado]
              </a>
            </Popover>
            <br />
            <Popover content={"- Durante el Sismo"} title="Información">
              <a href="/#" onClick={(e) => e.preventDefault()}>
                [Durante]
              </a>
            </Popover>
            <br />
            <Popover content={"- Después del Sismo"} title="Información">
              <a href="/#" onClick={(e) => e.preventDefault()}>
                [Despues]
              </a>
            </Popover>
          </div>
        }
      >
        <p>2022-07-21</p>
        <p>12:43:23</p>
        <p>62 km al S de Socaire</p>
        <p>264 KM</p>
        <h4>2.8</h4>
      </Card>
      <Card
        size="small"
        title="Santiago"
        extra={
          <div>
            <Popover content={"cuidado"} title="Medidas Precaución">
              <a href="/#" onClick={(e) => e.preventDefault()}>
                [Cuidado]
              </a>
            </Popover>
            <br />
            <Popover content={"- Durante el Sismo"} title="Información">
              <a href="/#" onClick={(e) => e.preventDefault()}>
                [Durante]
              </a>
            </Popover>
            <br />
            <Popover content={"- Después del Sismo"} title="Información">
              <a href="/#" onClick={(e) => e.preventDefault()}>
                [Despues]
              </a>
            </Popover>
          </div>
        }
      >
        <p>2022-07-21</p>
        <p>12:43:23</p>
        <p>62 km al S de Socaire</p>
        <p>264 KM</p>
        <h4>2.8</h4>
      </Card>
      <h1>Reportes cercanos</h1>
      {posts.map((post, index) => (
        <Link key={index} href={`/posts/${post.id}`}>
          <Card>
            <p className="detail-title" key={index}>{post.title}</p>
            <p className="detail-info">Autor: {post.username}</p>
          </Card>
        </Link>
      ))}
    </div>
  );
}
