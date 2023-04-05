import React, { useState } from "react";
import ProfileCard from "./common/ProfileCard/ProfileCard";
import ProfileEdit from "../components/common/ProfileEdit/ProfileEdit";

const ProfileComponent = ({ currentUser }) => {
  const [isEdit, setIsEdit] = useState(false);

  const onEdit = () => {
    setIsEdit(!isEdit);
    console.log("first")
  };

  return (
    <div>
      {isEdit ? (
        <ProfileEdit onEdit={onEdit} />
      ) : (
        <ProfileCard currentUser={currentUser} onEdit={onEdit} />
      )}
    </div>
  );
};

export default ProfileComponent;
