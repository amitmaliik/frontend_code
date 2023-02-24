import React from "react";

export default function RightSideBar({ recoData }) {
  return (
    <div className="right-side-bar">
      <div className="who-to-follow-sec">
        <h1>Recommendations</h1>
        {recoData.map((el) => (
          <FollowUser
            key={el.id}
            name={el.name}
            userName={
              el.bio?.length < 15 ? el.bio : el.bio?.substr(0, 15) + "..."
            }
            avatar={el.image}
          />
        ))}
      </div>
    </div>
  );
}

function FollowUser(props) {
  return (
    <div className="user-follow flex">
      <div className="flex">
        <img
          src={
            "https://res.cloudinary.com/apideck/image/upload/v1599819545/icons/openai.jpg"
          }
          alt="user-avatar"
        />
        <div className="user-name">
          <h3>{props.name}</h3>
          <h4>{props.userName}</h4>
        </div>
      </div>
      <button>Follow</button>
    </div>
  );
}
