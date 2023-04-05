import React, { useState } from "react";
import ProfileCard from "./common/ProfileCard/ProfileCard";
import ProfileEdit from "./common/ProfileEdit/ProfileEdit";

export default function ProfileComponent({ currentUser }) {
  const [isEdit, setisEdit] = useState(false);

  const onEdit = () => {
    setisEdit(!isEdit);
  };
  return (
    <div>
      {isEdit ? (
        <ProfileEdit onEdit={onEdit} currentUser={currentUser} />
      ) : (
        <ProfileCard currentUser={currentUser} onEdit={onEdit} />
      )}
    </div>
  );
}