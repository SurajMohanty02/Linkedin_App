import { Avatar, IconButton } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { BsThreeDots } from "react-icons/bs";
import pic from "./pic.jpg";
import "./CreatePost.css";
import { FiThumbsUp } from "react-icons/fi";
import { FaRegCommentDots, FaShare } from "react-icons/fa";
import { RiSendPlaneFill } from "react-icons/ri";
import db from "../firebase";
import Comment from "./Comment";
const CreatePost = () => {
  const [data, setdata] = useState([]);
  useEffect(() => {
    db.collection("linkedin")
      .orderBy("time", "desc")
      .onSnapshot((snap) => {
        setdata(
          snap.docs.map((info) => ({
            id: info.id,
            data: info.data(),
          }))
        );
      });
  }, []);
  // console.log(data);
  return (
    <section>
      {data.map((data, id) => (
        <div className="create" key={id}>
          <div className="create__container">
            <div className="create__header">
              <div className="create__header__left">
                <div className="details__content">
                  <div className="img">
                    <Avatar src={pic} />
                  </div>
                  <div className="details">
                    <h6>Suraj Mohanty</h6>
                    <p>
                      {data.data.time
                        ? new Date(data.data.time.toDate()).toLocaleTimeString()
                        : ""}
                    </p>
                  </div>
                </div>
              </div>
              <div className="create__header__right">
                <IconButton>
                  <BsThreeDots />
                </IconButton>
              </div>
            </div>
            <div className="create__content">
              <div className="content__data">
                <h6>{data.data.Text}</h6>
                <img src={data.data.image} alt="" />
              </div>
            </div>
            <ul className="create__footer">
              <li>
                <FiThumbsUp id="ficon" />
              </li>
              <li>
                <FaRegCommentDots id="ficon" />
              </li>
              <li>
                <FaShare id="ficon" />
              </li>
              <li>
                <RiSendPlaneFill id="ficon" />
              </li>
            </ul>
          </div>
          <Comment id={data.id} />
        </div>
      ))}
    </section>
  );
};

export default CreatePost;
