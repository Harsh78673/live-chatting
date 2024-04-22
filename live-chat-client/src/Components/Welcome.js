import React from "react";
import hi from "../Images/hi.gif";




import { useSelector } from "react-redux";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

function Welcome() {
  const lightTheme = useSelector((state) => state.themeKey);
  const userData = JSON.parse(localStorage.getItem("userData"));
  console.log(userData);
  const nav = useNavigate();
  if (!userData) {
    console.log("User not Authenticated");
    nav("/");
  }

  return (
    <div className={"welcome-container" + (lightTheme ? "" : " dark")}>
      
      
     

     <b style={{marginTop:"400px"}}>Hi,{userData.data.name} </b>
<p style={{fontStyle:""}}>WELCOME TO LIVECHAT</p>
      
    </div>
  );
}

export default Welcome;
