import React,{useState} from "react";
import "./profileedit.scss";

const ProfileEdit = ({ onEdit }) => {

    const [editInput,setEditInput] = useState({});

  const getInput = (e) => {
    let { name , value} = e.target
    let input = {[name]:value};
    setEditInput({...editInput,...input})

  };
  console.log(editInput)

  return (
    <div className="profile-card">
      <div className="edit-btn">
        <button onClick={onEdit}>Go back</button>
      </div>
      <div className="profileedit-input">
        <input
          className="common-input"
          type="text"
          placeholder="Name"
          name="name"
          onChange={getInput}
        />

        <input
          className="common-input"
          type="text"
          placeholder="Headline"
          name="headline"
          onChange={getInput}
        />

        <input
          className="common-input"
          type="text"
          placeholder="Location"
          name="location"
          onChange={getInput}
        />

        <input
          className="common-input"
          type="text"
          placeholder="Company"
          name="company"
          onChange={getInput}
        />

        <input
          className="common-input"
          type="text"
          placeholder="college"
          name="college"
          onChange={getInput}
        />
      </div>
    </div>
  );
};

export default ProfileEdit;
