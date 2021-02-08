import React, { useState } from "react";
import "./Post.css";
import { FiEdit } from "react-icons/fi";
import { MdPhotoSizeSelectActual } from "react-icons/md";
import { IoLogoYoutube } from "react-icons/io";
import { BiCalendar } from "react-icons/bi";
import { RiArticleLine } from "react-icons/ri";
import { useDispatch } from "react-redux";
import Modal from "./Modal";
import CreatePost from "./CreatePost";
const Post = () => {
  const dispatch = useDispatch();
  return (
    <section>
      <div className="post">
        <div className="post__container">
          <div
            className="post__top"
            onClick={() => dispatch({ type: "OPEN_MODAL" })}
          >
            <FiEdit fontSize="x-large" className="edit" />
            <h6>Start a Post</h6>
          </div>
          <div className="post__bottom">
            <ul>
              <li>
                <MdPhotoSizeSelectActual color="#70b5f9" />
                <h6>Photo</h6>
              </li>
              <li>
                <IoLogoYoutube color="#e7a33e" />
                <h6>Video</h6>
              </li>
              <li>
                <BiCalendar color="#a0b4b7" />
                <h6>Event</h6>
              </li>
              <li>
                <RiArticleLine color="#F5987E" />
                <h6>Write article</h6>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Post;
