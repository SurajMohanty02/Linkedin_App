import React from "react";
import Component from "./Component";
import "./Content.css";
import CreatePost from "./CreatePost";
import Modal from "./Modal";
import Post from "./Post";
import Sidebar from "./Sidebar";
import Weighed from "./Weighed";
const Content = () => {
  return (
    <section>
      <div className="content">
        <div className="sidebar__group">
          <Sidebar />
          <Component />
        </div>
        <div className="postcol">
          <Post />
          <CreatePost />
        </div>

        <Weighed />
      </div>
    </section>
  );
};

export default Content;
