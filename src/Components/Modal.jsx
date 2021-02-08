import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./Modal.css";
import { IoCloseOutline } from "react-icons/io5";
import { Avatar, IconButton } from "@material-ui/core";
import pic from "../Components/pic.jpg";
import { FaGlobeAsia, FaRegFileAlt } from "react-icons/fa";
import { ImPlay } from "react-icons/im";
import { AiFillPicture } from "react-icons/ai";
import { IoMdAdd, IoMdArrowDropdown } from "react-icons/io";
import db from "../firebase";
import { storage } from "../firebase";
import firebase from "firebase";

const Modal = () => {
  const modal = useSelector((state) => state.DataReducer.modal);
  const dispatch = useDispatch();
  //console.log(modal);
  const [input, setinput] = useState();
  const [img, setimg] = useState();

  const [postimg, setPostimg] = useState();
  const [progressbar, setprogressbar] = useState(0);
  const handelInput = (e) => {
    setinput(e.target.value);
  };
  const imgInput = (e) => {
    let image = e.target.files[0];
    setimg(image);
    if (img) {
      setPostimg(img);
    }
  };
  console.log(img);
  const postmsg = () => {
    if (img.name) {
      const uploadTask = storage.ref(`images/${img.name}`).put(img);
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress = Math.round(
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100
          );
          setprogressbar(progress);
          console.log(progress);
        },
        (error) => {
          alert(error.message);
        },
        () => {
          storage
            .ref("images")
            .child(img.name)
            .getDownloadURL()
            .then((url) => {
              db.collection("linkedin").add({
                Text: input,
                image: url,
                // username: user.displayName,
                time: firebase.firestore.FieldValue.serverTimestamp(),
              });
              dispatch({ type: "CLOSE_MODAL" });
              setinput("");
            });
        }
      );
    } else {
      db.collection("linkedin").add({
        Text: input,
        image: null,
        //username: user.displayName,
        time: firebase.firestore.FieldValue.serverTimestamp(),
      });
      dispatch({ type: "CLOSE_MODAL" });
      setinput("");
    }
  };
  const closemodal = () => {
    dispatch({ type: "CLOSE_MODAL" });
    setinput("");
  };

  return (
    <section>
      {modal ? (
        <div className="modal">
          <div className="modal__container">
            <div className="heading">
              <h1>Creat a post</h1>
              <IconButton onClick={() => closemodal()}>
                <IoCloseOutline />
              </IconButton>
            </div>

            <div className="modal__top">
              <div className="top__container">
                <div className="container__left">
                  <Avatar src={pic} />
                  <div className="container__right">
                    <h6>Suraj Mohanty</h6>
                    <div className="right__bottom">
                      <FaGlobeAsia />
                      <h6>Anyone</h6>
                      <IoMdArrowDropdown />
                    </div>
                  </div>
                </div>
                <div className="inputs">
                  <textarea
                    name="content"
                    id="content"
                    cols="35"
                    rows="10"
                    placeholder="What do u want to talk about?"
                    className="txt"
                    onChange={handelInput}
                    value={input}
                  ></textarea>
                </div>
              </div>
              {progressbar ? (
                <section>
                  <label htmlFor="file">Uploading progress: </label>
                  <progress id="file" value={progressbar} max="100">
                    {progressbar}
                  </progress>
                </section>
              ) : (
                ""
              )}
            </div>

            <div className="modal__bottom">
              <div className="bottom__container">
                <div className="bottom__container__top">
                  <div className="bottom__icons">
                    <IconButton>
                      <IoMdAdd color="blue" />
                    </IconButton>
                    <input
                      type="file"
                      id="pic"
                      style={{ display: "none" }}
                      onChange={imgInput}
                    />

                    <label htmlFor="pic" className="circle">
                      <AiFillPicture />
                    </label>

                    <IconButton>
                      <ImPlay />
                    </IconButton>
                    <IconButton>
                      <FaRegFileAlt />
                    </IconButton>
                  </div>
                  <button className="btn__post" onClick={() => postmsg()}>
                    Post
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </section>
  );
};

export default Modal;
