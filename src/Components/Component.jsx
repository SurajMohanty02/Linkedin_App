import React from "react";
import { IoMdAdd } from "react-icons/io";
import "./Component.css";
const Component = () => {
  return (
    <div className="component">
      <div className="component__top">
        <ul>
          <li>Groups</li>
          <li>Events</li>
          <li> Followed Hashtags</li>
        </ul>
        <IoMdAdd className="add" />
      </div>
      <div className="line"> </div>
      <div className="discover">
        <h6>Discover More</h6>
      </div>
    </div>
  );
};

export default Component;
