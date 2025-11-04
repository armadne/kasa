// components/Profile.jsx
import "../styles/Profile.scss";

function Profile({ name, picture }) {
  return (
    <div className="profile">
      <p className="profile__name">{name}</p>
      <img src={picture} alt={name} className="profile__img" />
    </div>
  );
}

export default Profile;
