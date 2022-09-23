import { useState, useEffect } from "react";
import { Card, Popover } from "antd";
import { API, autoShowTooltip } from "aws-amplify";
import { listPosts } from "./../src/graphql/queries";
import Link from "next/link";
import Image from "next/image";
import Cuidado from "./../images/support.svg";
import Durante from "./../images/psychology.svg";
import Despues from "./../images/warning.svg";
import LightboxCuidado from "./lightboxCuidado";
import LightboxDurante from "./lightboxDurante";
import LightboxDespues from "./lightboxDespues";
import LightboxKit from "./lightboxKit";

export default function Home() {
  const [posts, setPosts] = useState([]);
  const [isCuidado, setIsCuidado] = useState(false);
  const [isDurante, setIsDurante] = useState(false);
  const [isDespues, setIsDespues] = useState(false);
  const [isKit, setIsKit] = useState(false);

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
      {isCuidado ? (
        <LightboxCuidado isCuidado={isCuidado} setIsCuidado={setIsCuidado} />
      ) : null}
      {isDurante ? (
        <LightboxDurante isDurante={isDurante} setIsDurante={setIsDurante} />
      ) : null}
      {isDespues ? (
        <LightboxDespues isDespues={isDespues} setIsDespues={setIsDespues} />
      ) : null}
      {isKit ? (
        <LightboxKit isKit={isKit} setIsKit={setIsKit} />
      ) : null}
      <h1 className="alert-message">Ultimos Eventos</h1>
      <a href="#" onClick={() => setIsKit(true)}>
        Kit de Seguridad
      </a>
      {/* Automatizar */}
      <Card
        size="medium"
        title="Santiago"
        className="event-card"
        extra={
          <div className="bg-card">
            <Popover
              content={
                <a href="#" onClick={() => setIsCuidado(true)}>
                  Ver más...
                </a>
              }
              title="Medidas Precaución"
            >
              <a href="/#" onClick={(e) => e.preventDefault()}>
                <Image alt="Cuidado" src={Cuidado} />
              </a>
            </Popover>
            <br />
            <Popover
              content={
                <a href="#" onClick={() => setIsDurante(true)}>
                  Ver más...
                </a>
              }
              title="Durante un Sismo"
            >
              <a href="/#" onClick={(e) => e.preventDefault()}>
                <Image alt="Durante el sismo" src={Durante} />
              </a>
            </Popover>
            <br />
            <Popover
              content={
                <a href="#" onClick={() => setIsDespues(true)}>
                  Ver más...
                </a>
              }
              title="Después del Sismo"
            >
              <a href="/#" onClick={(e) => e.preventDefault()}>
                <Image alt="Después del sismo" src={Despues} />
              </a>
            </Popover>
          </div>
        }
      >
        <p>2022-09-22</p>
        <p>
          <b>22:50:36</b>
        </p>
        <p>150 km al O de Toltén</p>
        <p>35 km</p>
        <h4>3.9</h4>
      </Card>
      <Card
        size="medium"
        title="Santiago"
        className="event-card"
        extra={
          <div className="bg-card">
            <Popover
              content={
                <a href="#" onClick={() => setIsCuidado(true)}>
                  Ver más...
                </a>
              }
              title="Medidas Precaución"
            >
              <a href="/#" onClick={(e) => e.preventDefault()}>
                <Image alt="Cuidado" src={Cuidado} />
              </a>
            </Popover>
            <br />
            <Popover
              content={
                <a href="#" onClick={() => setIsDurante(true)}>
                  Ver más...
                </a>
              }
              title="Durante un Sismo"
            >
              <a href="/#" onClick={(e) => e.preventDefault()}>
                <Image alt="Durante el sismo" src={Durante} />
              </a>
            </Popover>
            <br />
            <Popover
              content={
                <a href="#" onClick={() => setIsDespues(true)}>
                  Ver más...
                </a>
              }
              title="Después del Sismo"
            >
              <a href="/#" onClick={(e) => e.preventDefault()}>
                <Image alt="Después del sismo" src={Despues} />
              </a>
            </Popover>
          </div>
        }
      >
        <p>2022-09-22 </p>
        <p>
          <b>22:39:37</b>
        </p>
        <p>82 km al O de Arica</p>
        <p>30 KM</p>
        <h4>3.7</h4>
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
