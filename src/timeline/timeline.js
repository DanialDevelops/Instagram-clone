import React from "react";
import More from "../Images/More.png";
import post from "../Images/Thorfin.png";
import Avatar from "../Images/avatar.jpg";
import Like from "../Images/Like.png";
import Bookmark from "../Images/Bookmark.png";
import Share from "../Images/Share.png";
import Comment from "../Images/Comment.png";
import "./timeline.css";

const timeline = () => {
  return (
    <div className="container d-flex">
      <div className="posts">
        <div className="post-header d-flex justify-content-between">
          <div className="d-flex align-items-end">
            <img className="avatar" src={Avatar} alt="avatar" />
            <div className="d-flex flex-column">
              <div className="d-flex align-items-end">
                <h4 className="p-2 mb-0 user-text">Username</h4>
                <li className="p-2 hour-text">5h</li>
              </div>
            </div>
          </div>
          <div className="d-flex align-items-end">
            <img className="more" src={More} alt="more" />
          </div>
        </div>
        <div className="post-image">
          <img className="img-fluid image-fit" src={post} alt="avatar" />
        </div>
        <div className="interact-icons d-flex justify-content-between">
                <ul className="d-flex icons-group">
                    <li><img className="" src={Like} alt="heart" /></li>
                    <li><img className="" src={Comment} alt="avatar" /></li>
                    <li><img className="" src={Share} alt="avatar" /></li>
                </ul>
              <ul>
                  <li><img id="bookmark" src={Bookmark} alt="heart" /></li>
              </ul>
        </div>
      </div>
    </div>
  );
};

export default timeline;
