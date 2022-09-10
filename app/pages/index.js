import { useState, useEffect } from "react";
import { API } from "aws-amplify";
import { listPosts } from "./../src/graphql/queries";
import Link from "next/link";
import Image from "next/image";
import Logo from "./../images/sismoguia.svg";

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
    <div className="contain-page">
      <div className="logo">
        <Image src={Logo} layout="responsive" width={500} height={500} />
      </div>
      <div>
        <h1 className="">Inicio</h1>
        {posts.map((post, index) => (
          <Link key={index} href={`/posts/${post.id}`}>
            <div>
              <h2 className="" key={index}>
                {post.title}
              </h2>
              <p>Autor: {post.username}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
