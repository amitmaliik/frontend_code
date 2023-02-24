import React, { useState } from "react";
import TinderCard from "react-tinder-card";

function SwipeCards({ recoData }) {
  const [lastDirection, setLastDirection] = useState();

  const swiped = (direction, nameToDelete, id) => {
    console.log("removing: " + nameToDelete);
    setLastDirection(direction);

    if (direction) {
      const token = localStorage.getItem("token");

      const raw = JSON.stringify({
        direction,
        id,
        token,
      });

      const reqObj = {
        method: "POST",
        body: raw,
        mode: "cors",
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      };

      fetch("http://localhost:5000/swipe-card", reqObj)
        .then((res) => res.json())
        .then((res) => {
          console.log(res, "res of swipe cards");
        })
        .catch((err) => alert(err.msg));
    }
  };

  const outOfFrame = (name) => {
    console.log(name + " left the screen!");
  };

  return (
    <div class="swipe-cards h-screen w-screen bg-wgite backdrop-blur-2xl">
      <div className="cardContainer">
        {recoData.map((character, index) => (
          <TinderCard
            className="swipe"
            key={index}
            onSwipe={(dir) => {
              swiped(dir, character.name, character.id);
            }}
            onCardLeftScreen={() => outOfFrame(character.name)}
          >
            <div
              style={{
                backgroundImage:
                  "url(" +
                  "https://avatars.githubusercontent.com/u/38307844?v=4" +
                  ")",
              }}
              className="card"
            >
              <div>
                <h3
                  style={{
                    position: "absolute",
                    bottom: 24,
                  }}
                >
                  {character.name}
                </h3>
                <h4 style={{ position: "absolute", bottom: 10, left: 10 }}>
                  {character.location}
                </h4>
              </div>
            </div>
          </TinderCard>
        ))}
      </div>
      {lastDirection ? (
        <h2 className="infoText">You swiped {lastDirection}</h2>
      ) : null}
    </div>
  );
}

export default SwipeCards;
