import React from "react";
import Link from "next/link";
import "./../../configureAmplify";
import { useState, useEffect } from "react";
import { Auth, Hub } from "aws-amplify";

const Navbar = () => {
  const [signedUser, setSignedUser] = useState(false);
  useEffect(() => {
    authListener();
  }, []);

  async function authListener() {
    Hub.listen("auth", (data) => {
      switch (data.payload.event) {
        case "signIn":
          return setSignedUser(true);
        case "signOut":
          return setSignedUser(false);
      }
    });
    try {
      await Auth.currentAuthenticatedUser();
      setSignedUser(true);
    } catch (err) {}
  }

  return (
    <nav className="">
      {[
        ["Inicio", "/"],
        ["Crear Notificación", "/notificacion"],
        ["Perfil", "/perfil"],
      ].map(([title, url], index) => (
        <Link href={url} key={index}>
          <a className="">{title}</a>
        </Link>
      ))}
      {signedUser && (
        <Link href="/alerta">
          <a className="">Mis Alertas</a>
        </Link>
      )}
    </nav>
  );
};

export default Navbar;
