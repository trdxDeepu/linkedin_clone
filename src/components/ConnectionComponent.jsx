import React, { useEffect } from "react";
import "../sass/connectioncomponent.scss";
import { getAllUsers } from "../api/FirestoreApi";
import { useState } from "react";
import ConnectionUser from "./common/ConnectionUser/ConnectionUser";

const ConnectionComponent = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getAllUsers(setUsers);
  }, []);

  const getCurrentUser = (id) => {
    
  }

  return (
    <div className="connection-min">
      {users.map((user) => {
        return <ConnectionUser user={user} getCurrentUser={getCurrentUser} />;
      })}
    </div>
  );
};

export default ConnectionComponent;
