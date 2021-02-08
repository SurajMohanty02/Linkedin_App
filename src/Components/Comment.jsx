import { Avatar } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import db from "../firebase";
import "./Comment.css";
import pic from "./pic.jpg";
import firebase from "firebase";
const Comment = (id) => {
  const [postComment, setPostComment] = useState();
  const [getcomment, setgetcomment] = useState([]);
  const CommentInput = (e) => {
    let comment = e.target.value;
    if (comment) {
      setPostComment(comment);
    }
  };
  //console.log(postComment);
  const PostComment = (id) => {
    // console.log(id.id);
    db.collection("linkedin").doc(id.id).collection("comment").add({
      comment: postComment,
      time: firebase.firestore.FieldValue.serverTimestamp(),
    });

    setPostComment("");
  };
  useEffect(() => {
    db.collection("linkedin")
      .doc(id.id)
      .collection("comment")
      .onSnapshot((snap) => {
        setgetcomment(
          snap.docs.map((info) => ({
            id: info.id,
            data: info.data(),
          }))
        );
      });
  }, [id.id]);
  //console.log(getcomment);
  return (
    <div className="comment">
      <div className="comment__container">
        <div className="comment__left">
          <Avatar src={pic} />
        </div>
        <div className="comment__right">
          <input
            type="text"
            onChange={CommentInput}
            value={postComment}
            placeholder="Add a comment..."
          />
          <button className="comment__post" onClick={() => PostComment(id)}>
            Post
          </button>
        </div>
      </div>
      {getcomment.map((data) => (
        <div className="comments" key={data.id}>
          <div className="comment__left">
            <Avatar src={pic} />
          </div>
          <div className="cmt">
            <div className="cmt__data">
              <h5>Suraj Mohanty</h5>
              <h6>{data.data.comment}</h6>
            </div>
            <p>
              {data.data.time
                ? new Date(data.data.time.toDate()).toLocaleTimeString()
                : ""}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Comment;
