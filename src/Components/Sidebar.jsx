import React from "react";
import "./Sidebar.css";
import pic from "../Components/pic.jpg";
import { FaBookmark, FaRegBookmark } from "react-icons/fa";
const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar__container">
        <div className="sidebar__top"></div>
        <div className="top__data">
          <img src={pic} alt="" />
          <h4>Suraj Mohanty</h4>
          <p>Student at Biju Patnaik University of Technology, Odisha</p>
          <div className="line"></div>
        </div>
        <div className="sidebar__last">
          <div className="connection">
            <div className="text">
              <p>connections</p>
              <h6>Grow Your Network</h6>
            </div>
            <span>3</span>
          </div>
          <div className="premium">
            <p>Access exclusive tools & insights</p>
            <div className="custom">
              <div className="color"></div>
              <h6>Try premium Free for 1 Month</h6>
            </div>
          </div>
          <div className="line"></div>
          <div className="items">
            <FaBookmark color="gray" />
            <h6>My Items</h6>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
