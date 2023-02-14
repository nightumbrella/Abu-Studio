import React from "react";
import "./subscribe.css";
import logo from "../../assets/image/Logo.png";
import arrow from "../../assets/image/Arrow 1.png";
import { RiAppStoreLine, RiLinkedinFill, RiFacebookFill } from "react-icons/ri";
import { CiFacebook } from "react-icons/ci";
import { BsTwitter } from "react-icons/bs";

import {SiAppstore} from "react-icons/si"

const Subscribe = () => {
  return (
    <div className="subscribe">
      <div className="flex comp">
        <div>
          <img src={logo} alt="logo" />
        </div>
        <div>
          <h2>Subscribe our Newsletter</h2>
          <div className="contact__input">
            <input type="text" placeholder=" Enter Email" />
            <img src={arrow} alt="" />
          </div>
        </div>
        <div className="contact__send">
          <button className="contact__btn">
            <SiAppstore className="contact__btn__icon"/>
            Contact Us
          </button>
          <div className="flex social__icon">
            <RiFacebookFill className="contact__icon" />
            <BsTwitter className="contact__icon" />
            <RiLinkedinFill className="contact__icon"/>
          </div>
        </div>
      </div>
      <div className="hrline"></div>
      <h1>Copyrigh Abu Studio. All Rights Reserved.</h1>
    </div>
  );
};

export default Subscribe;
