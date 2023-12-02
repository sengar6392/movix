/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { HiOutlineSearch } from "react-icons/hi";
import { SlMenu } from "react-icons/sl";
import { VscChromeClose } from "react-icons/vsc";
import { useNavigate, useLocation } from "react-router-dom";

import "./style.scss";
import logo from "../../../assets/movix-logo.svg";
import { Box } from "@mui/material";

const Header = () => {
  const [show, setShow] = useState("top");
  const [lastScrollY, setLastScrollY] = useState(0);
  const navigate = useNavigate();

  const handleNavigation = (type) => {
    navigate(`/explore/${type}`);
  };

  const handleScroll=(value)=>{
    if(value>50){
        if(value>lastScrollY){
            setShow("hide")
        }
        else{
            setShow("show")
        }
    }else{
        setShow("top")
    }
    setLastScrollY(value)
  }
  useEffect(()=>{
    window.addEventListener("scroll",()=>{
        handleScroll(window.scrollY)
    })
  },[lastScrollY])
  return (
    <Box
      className={show}
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        color: "white",
        px: "1rem",
        py: "1rem",
        position:"fixed",
        width: "100%",
        zIndex:"10",
        transition: "all ease 0.5s"
      }}
    >
      <Box>
        <img src={logo} alt="" />
      </Box>
      <ul className="menu-items">
        <li className="menu-item" onClick={() => handleNavigation("movie")}>
          Movies
        </li>
        <li className="menu-item" onClick={() => handleNavigation("tv")}>
          TV shows
        </li>
      </ul>
    </Box>
  );
};

export default Header;
