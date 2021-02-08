import React, { useEffect, useState } from "react";
import "./Header.css";
import { FaBriefcase, FaHome, FaLinkedin } from "react-icons/fa";
import { IoMdNotifications, IoMdSearch } from "react-icons/io";
import { HiOutlineUsers } from "react-icons/hi";
import { RiHandbagFill } from "react-icons/ri";
import { BiMessageDetail } from "react-icons/bi";
import { MdApps, MdExpandMore } from "react-icons/md";
import { Avatar } from "@material-ui/core";
import { GiHamburgerMenu } from "react-icons/gi";
import pic from "../Components/pic.jpg";
const Header = () => {
  const [clicked, setClicked] = useState(false);
  const [Home, sethome] = useState(true);
  const [network, setnetwork] = useState(false);
  const [job, setjob] = useState(false);
  const [msg, setmsg] = useState(false);
  const [noti, setnoti] = useState(false);
  const [toggle, setToggle] = useState(true);
  useEffect(() => {
    if (window.innerWidth < 830) {
      setToggle(true);
      if (window.innerWidth > 830) {
        setToggle(true);
      }
    }
  }, []);

  const homeclick = () => {
    sethome(true);
    setnetwork(false);
    setjob(false);
    setmsg(false);
    setnoti(false);
  };
  const networkclick = () => {
    sethome(false);
    setnetwork(true);
    setjob(false);
    setmsg(false);
    setnoti(false);
  };
  const jobclick = () => {
    sethome(false);
    setnetwork(false);
    setjob(true);
    setmsg(false);
    setnoti(false);
  };
  const msgclick = () => {
    sethome(false);
    setnetwork(false);
    setjob(false);
    setmsg(true);
    setnoti(false);
  };
  const noticlick = () => {
    sethome(false);
    setnetwork(false);
    setjob(false);
    setmsg(false);
    setnoti(true);
  };
  return (
    <div className="header">
      <div className="header__container">
        <div className="header__left">
          <FaLinkedin color="blue" style={{ fontSize: "35px" }} />
          <div className="search">
            <IoMdSearch color="gray" fontSize="x-large" />
            <input type="text" placeholder="Search" />
          </div>
        </div>

        <ul className={toggle ? "header__right" : "header__right1"}>
          <li className={Home ? "list" : ""} onClick={() => homeclick()}>
            <FaHome fontSize="x-large" />
            <h6 className="hide">Home</h6>
          </li>
          <li className={network ? "list" : ""} onClick={() => networkclick()}>
            <HiOutlineUsers fontSize="x-large" />
            <h6>My Network</h6>
          </li>
          <li className={job ? "list" : ""} onClick={() => jobclick()}>
            <FaBriefcase fontSize="x-large" />
            <h6>Jobs</h6>
          </li>
          <li className={msg ? "list" : ""} onClick={() => msgclick()}>
            <BiMessageDetail fontSize="x-large" />
            <h6>Messaging</h6>
          </li>
          <li className={noti ? "list" : ""} onClick={() => noticlick()}>
            <IoMdNotifications fontSize="x-large" />
            <h6>Notifications</h6>
          </li>
          <li className="col">
            <Avatar fontSize="large" src={pic} className="image" />
            <div className="row">
              <h6>Me</h6>
              <MdExpandMore id="hide" />
            </div>
          </li>
          <p className="border"></p>
          <li>
            <MdApps fontSize="x-large" />
            <div className="row">
              <h6>Work</h6>
              <MdExpandMore id="hide" />
            </div>
          </li>
          <li>
            <RiHandbagFill fontSize="x-large" />
            <h6>Post a Job</h6>
          </li>
          <div className="contents"></div>
        </ul>

        <GiHamburgerMenu id="icons" onClick={() => setToggle(!toggle)} />
      </div>
    </div>
  );
};

export default Header;
