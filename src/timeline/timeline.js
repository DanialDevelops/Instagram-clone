import React from "react";
import More from "../Images/More.png";
import post from "../Images/Screenshot_15.png";
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
                <h4 className="p-2 mb-0 user-text">puzzle.paradise</h4>
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
            <li>
              <img className="" src={Like} alt="heart" />
            </li>
            <li>
              <img className="" src={Comment} alt="avatar" />
            </li>
            <li>
              <img className="" src={Share} alt="avatar" />
            </li>
          </ul>
          <ul>
            <li>
              <img id="bookmark" src={Bookmark} alt="heart" />
            </li>
          </ul>
        </div>
        <div>
          <p className="liked-post">
            Liked by <span className="font-weight">insta_user</span> and{" "}
            <span className="font-weight">others</span>
          </p>
        </div>
        <div className="">
          <p className="caption">
          <span className="font-weight">puzzle.paradise</span> White to play. Mate in 1 move. Can you find the solution? Comment
            below! Follow
            <a
              href="https://instagram.com/puzzle.paradise"
              className="instagram-handle"
            > 

              @puzzle.paradise
              
            </a>
            for daily chess puzzles!
          </p>
          <div className="d-flex flex-column dots">
          <span>.</span>
          <span>.</span>
          <span>.</span>
          </div>
          <p className="hashtags">
            #chess #chessmaster #chesstactics #chesstactic #chessplayer
            #chesscombinations #chesscombination #chesscom #chessdotcom
            #chessclub #chesstricks #dailychess #chesspuzzle #chesspuzzles
            #chessproblem #chessproblems #playchess #шахматы #shatranj #schach
            #schack #ajedrez #shah #scacchi #sjakk #szachy #scacco #shakh
            #echecs
          </p>
        </div>
      </div>
    </div>
  );
};

export default timeline;
