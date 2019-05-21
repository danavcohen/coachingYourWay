import React, { Component } from "react";
import Box from "../Banner";
import Heading from "reusecore/src/elements/Heading";
import Icon from "react-icons-kit";
import { cornerDownRight } from "react-icons-kit/feather/cornerDownRight";
const mainHeader = {
  textAlign: "center",
  display: "flex",
  flexDirection: "column",
  marginTop: "10vh"
  // marginBottom: "auto",
};
const childHeader = {
  width: "100%",
  textAlign: "center",
  // marginBottom: "auto",
};
const  nameStyle=  {
  as: "h4",
  color: "black",
  fontSize: ["38px", "38px", "44px", "50px", "46px"],
  fontWeight: "500",
  mb: "6px"
};
  const roleStyle={
    as: "h4",
    fontSize: ["18px", "18px", "18px", "18px", "20px"],
    fontWeight: "500",
    color: "color",
    mb: "0",
    ml: "10px"
  };


  class MainHead extends Component{
  render() {
    return(
      <div style={mainHeader}>
        <Heading content="COACHING YOUR WAY" {...nameStyle} />
        <div style={childHeader}>
          <Icon
            icon={cornerDownRight}
            style={{ color: "#3444f1" ,display: "inline"}}
            size={22}
          />
          <Heading content="יוסי שוע המאמן האישי שלך" {...roleStyle} style={{display: "inline"}} />
        </div>
      </div>
    );
  };
}

export default MainHead;