import React from "react";
import { AiOutlineSearch, AiOutlineUser } from "react-icons/ai";
import { useHistory } from "react-router-dom";
import HamburgerMenu from "./HamburgerMenu";
import "./style.css";

export default function NavBar() {
  const history = useHistory();
  return (
    <div className="d-flex justify-content-between container-nav align-items-center">
      <div className="logo">DARKHORSESTOCKS</div>
      <div className="icons d-flex justify-content-between align-items-center">
        <div
          className="icon search-icon"
          data-cursor="-menu -icon-blend"
          onClick={() => {
            history.push("/search");
          }}
        >
          search
        </div>
        <div
          onClick={() => {
            history.push("/login");
          }}
          className="icon user-icon"
          data-cursor="-menu -icon-blend"
        >
          Login
        </div>
        <div>
          <div className="icon user-icon">menu</div> <HamburgerMenu />{" "}
        </div>
      </div>
    </div>
  );
}
