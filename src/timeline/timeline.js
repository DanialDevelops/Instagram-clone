import React from "react";
import More from "../Images/More.png";
import post from "../Images/Thorfin.png";
import Avatar from "../Images/avatar.jpg";
import "./timeline.css";

const timeline = () => {
  return (
    <div className="container">
      <div className="posts">
        <div className="post-header d-flex">
          <div className="d-flex align-items-end">
            <img className="avatar" src={Avatar} alt="avatar" />
            <div className="d-flex flex-column">
              <div className="d-flex align-items-end">
                <h4 className="p-2 mb-0">Username</h4>
                <li className="p-2">5h</li>
              </div>
            </div>
          </div>
          <div>
            <img className="more" src={More} alt="more" />
          </div>
        </div>
        <div className="post-image">
          <img className="img-fluid image-fit" src={post} alt="avatar" />
        </div>
      </div>
    </div>
  );
};

export default timeline;
