import React from "react";
import "./Weighed.css";
import { BsDot, BsInfoSquare } from "react-icons/bs";
import { IconButton } from "@material-ui/core";
import { IconBase } from "react-icons/lib";
const Weighed = () => {
  return (
    <div className="weigh">
      <div className="weigh__container">
        <div className="weigh__top">
          <h6>Linkedin News</h6>
          <BsInfoSquare />
        </div>
        <div className="weigh__bottom">
          <div className="rows">
            <BsDot style={{ fontSize: "45px" }} color="#70b5f9" />
            <div className="cols">
              <p>The key to a breakthrough</p>
              <h6>2d ago • 3,952 readers</h6>
            </div>
          </div>
          <div className="rows">
            <BsDot style={{ fontSize: "45px" }} color="#70b5f9" />
            <div className="cols">
              <p>The 9-5 may soon become a 3-2-2</p>
              <h6> 3d ago • 15,548 readers</h6>
            </div>
          </div>
          <div className="rows">
            <BsDot style={{ fontSize: "45px" }} color="#70b5f9" />
            <div className="cols">
              <p>Vaccine: What comes next</p>
              <h6> 2d ago • 6,438 readers 2</h6>
            </div>
          </div>
          <div className="rows">
            <BsDot style={{ fontSize: "45px" }} color="#70b5f9" />
            <div className="cols">
              <p>Are we too dependent on Apple?</p>
              <h6> 3d ago • 6,788 readerst</h6>
            </div>
          </div>
          <div className="rows">
            <BsDot style={{ fontSize: "45px" }} color="#70b5f9" />
            <div className="cols">
              <p>A bright future for digital nomads</p>
              <h6> 3d ago • 6,254 readers </h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Weighed;
