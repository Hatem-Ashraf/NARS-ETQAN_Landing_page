import React from "react";
import { Link } from "react-router-dom";
import BannerImage from "../assets/Main.jpg";
import ABETImage from "../assets/ABET2.jpg";
import NARQAImage from "../assets/NARQA_Name.jpg";
import "../styles/Home.css";

function Home() {
  const paragraphContainerStyle = {
    backgroundColor: "#5841416b",
    padding: "20px",
    // margin: "20px", 
  };

  const buttonStyles = {
    marginLeft: "5%",
    marginTop: "10px"
  };
  

  return (
    <div className="home" style={{ backgroundImage: `url(${BannerImage})` }}>
      <div className="headerContainer">
        <h1> ETQAN-NARQA Web-Based System</h1>
        <div style={paragraphContainerStyle}>
          <p>
            {/* <img src={ABETImage} alt="ABET Logo" style={{ marginRight: "10px", width: "300px", height: "150px" }} /> */}
            
            ETQAN is an online platform, It is designed to assist in managing
            and assessing engineering and computing programs in higher education
            institutions. The platform aims to help Egyptian universities
            achieve the ABET accreditation certificate by preparing each program
            to meet the ABET criteria.
          </p>
          <p>
          {/* <img src={NARQAImage} alt="ABET Logo" style={{ marginRight: "10px", width: "300px", height: "150px" }} /> */}
            NARQA is a quality assurance system, It focuses on ensuring the
            quality of higher education programs. The system aims to provide a
            comprehensive framework for quality assessment and improvement in
            the field of computer systems engineering in the electrical
            engineering department.
          </p>
        </div>
        <Link to="/menu">
          <button style={buttonStyles}> CHOOSE NOW </button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
