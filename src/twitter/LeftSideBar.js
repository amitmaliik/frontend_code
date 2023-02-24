import React from "react";
import { FiHash, FiMail, FiChevronDown } from "react-icons/fi";
import { HiOutlineUser } from "react-icons/hi";
import { useNavigate } from "react-router-dom";

import { CgMoreO } from "react-icons/cg";

export default function LeftSideBar() {
  let navigate = useNavigate();
  return (
    <div className="left-side-bar flex">
      <div className="top-content">
        <img
          className="logo"
          src="https://pngimg.com/uploads/twitter/twitter_PNG15.png"
          alt="logo"
        />
        <div className="nav-tab-container">
          <LEFT_NAV_TAB icon={<FiHash />} text="Explore" />
          <LEFT_NAV_TAB icon={<FiMail />} text="Messages" />
          <LEFT_NAV_TAB
            icon={<HiOutlineUser />}
            text="Profile"
            onClick={() => navigate("/", { replace: true })}
          />
          <LEFT_NAV_TAB icon={<CgMoreO />} text="More" />
        </div>
      </div>
      <div className="bottom-content flex">
        <div className="flex">
          <img
            className="user-avatar"
            src="https://avatars2.githubusercontent.com/u/38307844?s=460&u=f545a10c52359525a21efe75562a272f241ab57d&v=4"
            alt="user-avatar"
          />
          <div className="middle-sec">
            <h3>Deepak Sharma</h3>
            <p>@dasjideepak</p>
          </div>
        </div>
        <FiChevronDown />
      </div>
    </div>
  );
}

function LEFT_NAV_TAB(props) {
  return (
    <a href="##" className="tab" onClick={props.onClick}>
      {props.icon}
      <h3>{props.text}</h3>
    </a>
  );
}
