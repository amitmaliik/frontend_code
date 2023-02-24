import React, { useEffect, useState } from "react";

export default function MiddleBar() {
  const [data, setData] = useState(null);
  let token = localStorage.getItem("token");

  useEffect(() => {
    if (token) {
      const URL = "http://35.174.167.230/youtube";
      fetch(URL)
        .then((res) => res.json())
        .then((res) => {
          console.log(res[0]?.feed, "ressssss");
          setData(res[0]?.feed);
        });
    }
  }, [token]);

  return (
    <div className="middle-bar">
      {data &&
        data.map((el, index) => (
          <a href="##" className="tweet-container">
            <div className="tweet-data-sec">
              <div
                className="youtube-card"
                dangerouslySetInnerHTML={{ __html: el }}
              />
            </div>
          </a>
        ))}
    </div>
  );
}
