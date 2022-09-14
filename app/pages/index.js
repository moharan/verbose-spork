import { useState, useEffect } from "react";
import { Card, Popover } from "antd";
import { API, autoShowTooltip } from "aws-amplify";
import { listPosts } from "./../src/graphql/queries";
import Link from "next/link";
import Image from "next/image";
import Cuidado from "./../images/support.svg";
import Durante from "./../images/psychology.svg";
import Despues from "./../images/warning.svg";

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
      <h1 className="alert-message">Ultimos Eventos</h1>
      {/* Automatizar */}
      <Card
        size="medium"
        title="Santiago"
        className="event-card"
        extra={
          <div className="bg-card">
            <Popover content={<a href="#">Ver más...</a>} title="Medidas Precaución">
              <a href="/#" onClick={(e) => e.preventDefault()}>
                <Image src={Cuidado} />
              </a>
            </Popover>
            <br />
            <Popover content={<a href="#">Ver más...</a>} title="Durante un Sismo">
              <a href="/#" onClick={(e) => e.preventDefault()}>
                <Image src={Durante} />
              </a>
            </Popover>
            <br />
            <Popover content={<a href="#">Ver más...</a>} title="Después del Sismo">
              <a href="/#" onClick={(e) => e.preventDefault()}>
                <Image src={Despues} />
              </a>
            </Popover>
          </div>
        }
      >
        <p>2022-09-14</p>
        <p>
          <b>13:39:18</b>
        </p>
        <p>49 km al SO de Mina Collahuasi</p>
        <p>116 km</p>
        <h4>2.8</h4>
      </Card>
      <Card
        size="medium"
        title="Santiago"
        className="event-card"
        extra={
          <div className="bg-card">
            <Popover content={<a href="#">Ver más...</a>} title="Medidas Precaución">
              <a href="/#" onClick={(e) => e.preventDefault()}>
                <Image src={Cuidado} />
              </a>
            </Popover>
            <br />
            <Popover content={<a href="#">Ver más...</a>} title="Durante un Sismo">
              <a href="/#" onClick={(e) => e.preventDefault()}>
                <Image src={Durante} />
              </a>
            </Popover>
            <br />
            <Popover content={<a href="#">Ver más...</a>} title="Después del Sismo">
              <a href="/#" onClick={(e) => e.preventDefault()}>
                <Image src={Despues} />
              </a>
            </Popover>
          </div>
        }
      >
        <p>2022-09-13 </p>
        <p>
          <b>16:57:27</b>
        </p>
        <p>55 km al SE de Antofagasta</p>
        <p>60 KM</p>
        <h4>4.1</h4>
      </Card>
      <h1>Reportes Cercanos</h1>
      {posts.map((post, index) => (
        <Link key={index} href={`/posts/${post.id}`}>
          <Card className="report-card">
            <p className="detail-title" key={index}>
              {post.title}
            </p>
            <p className="detail-info">
              <b>Autor:</b> {post.username}
            </p>
            {post.comments.items.length > 0 &&
              post.comments.items.map((comments, index) => (
                <div key={index}>
                  <div className="comment-message">
                    <p>{comments.message}</p>
                    <p className="detail-info">
                      <span className="detail-by">Comentario por:</span>{" "}
                      {comments.createdBy}
                    </p>
                  </div>
                </div>
              ))}
          </Card>
        </Link>
      ))}
    </div>
  );
}
