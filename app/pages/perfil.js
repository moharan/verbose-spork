import { withAuthenticator, AmplifySignOut } from "@aws-amplify/ui-react";
import { Auth } from "aws-amplify";
import { Card } from "antd";
import { useState, useEffect } from "react";

function Perfil() {
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
    <Card>
      <h1>Perfil</h1>
      <div className="profile">
        <div>
          <h2 className="detail-title">Username: {user.username}</h2>
          <p className="detail-info">Email: {user.attributes.email}</p>
        </div>
        <AmplifySignOut />
      </div>
    </Card>
  );
}

export default withAuthenticator(Perfil);
