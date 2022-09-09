import { withAuthenticator, AmplifySignOut } from "@aws-amplify/ui-react";
import { Auth } from "aws-amplify";
import { useState, useEffect } from "react";

function Profile() {
  const [user, setUser] = useState(null);
  useEffect(() => {
    checkUser();
  }, []);

  async function checkUser() {
    const user = await Auth.currentAuthenticatedUser();
    setUser(user);
  }

  if (!user) return null;
  return (
    <>
      <h1>Perfil</h1>
      <h1>Username: {user.username}</h1>
      <p>Email: {user.attributes.email}</p>
      <AmplifySignOut/>
    </>
  );
}

export default withAuthenticator(Profile);
