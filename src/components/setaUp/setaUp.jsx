import React from "react";
import "./setaUp.css";
import { MdKeyboardDoubleArrowUp } from "react-icons/md";
import { Link, animateScroll as scroll } from "react-scroll";

export default function SetaUp() {
  return (
    <div className="scrollToTop">
      <Link to="headerTop" smooth={true} duration={400}>
        <div id="seta_up">
          <MdKeyboardDoubleArrowUp className="setaUp" />
        </div>
      </Link>
    </div>
  );
}
