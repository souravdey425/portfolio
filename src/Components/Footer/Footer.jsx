import React from "react";
import "./Footer.css";
import Wave from "../../img/wave.png";
import Link from "@iconscout/react-unicons/icons/uil-linkedin";

import Gitub from "@iconscout/react-unicons/icons/uil-github";

const Footer = () => {
  return (
    <div className="footer">
      <img src={Wave} alt="" style={{ width: "100%" }} />
      <div className="f-content">
        <span>souravdey425.sd@gmail.com</span>
        <div className="f-icons">
          <Link color="white" size={"3rem"} />

          <Gitub color="white" size={"3rem"} />
        </div>
      </div>
    </div>
  );
};

export default Footer;
