import React from "react";
import Link from "next/link";
import "./../../configureAmplify";
import { useState, useEffect } from "react";

const Navbar = () => {
  // const [signedUser, setSignedUser] = useState(false);
  return (
    <nav className="">
      {[
        ["Inicio", "/"],
        ["Crear Notificación", "/create-post"],
        ["Perfil", "/profile"],
      ].map(([title, url], index) => (
        <Link href={url} key={index}>
          <a className="">
            {title}
          </a>
        </Link>
      ))}
    </nav>
  );
};

export default Navbar;
