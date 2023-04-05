
import "./profilecard.scss";


const ProfileCard = ({ currentUser,onEdit }) => {


  return (
    <>
      <div className="profile-card">
        <div className="edit-btn">
          <button onClick={ onEdit}>Edit</button>
        </div>
        <h3 className="username">{currentUser.name}</h3>
        <p className="useremail">{currentUser.email}</p>
      </div>
    </>
  );
};

export default ProfileCard;
