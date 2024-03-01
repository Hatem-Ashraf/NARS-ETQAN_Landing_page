import React from "react";
import MultiplePizzas from "../assets/About.jpg";
import "../styles/About.css";
function About() {
  return (
    <div className="about">
      <div
        className="aboutTop"
        style={{ backgroundImage: `url(${MultiplePizzas})` }}
      ></div>
      <div className="aboutBottom">
        <h1> ABOUT US</h1>
        <p>
Quality assurance is a holistic approach covering all the processes in a higher education institution, to serve the students and other stakeholders in expected quality standards. One of the requirements to apply for accreditation is to have an internal auditing system, annual self-evaluation systems, and reports. The shift from paper-based to web-based systems for national academic reference standards in education has gained momentum in recent years. This transition offers numerous advantages in terms of quality assurance. This abstract explores the technical methods and approaches employed in ensuring the quality assurance of webbased reference standards. It discusses the use of version control systems, metadata and tagging, cross-referencing and hyperlinking, multimedia integration, interactive assessments, user feedback and collaboration tools, accessibility standards, user experience design, and testing and quality assurance processes. These technical methods contribute to the accuracy, consistency, accessibility, and usability of web-based reference standards. By implementing these approaches, educational stakeholders can benefit from real-time updates, enhanced collaboration, multimedia resources, and improved monitoring and evaluation mechanisms. This abstract highlights the importance of embracing web-based platforms to create a more efficient, inclusive, and effective education system while ensuring the quality and relevance of national academic reference standards. In general, the most important job of quality assurance is to safeguard quality and standards in universities and colleges, so that students have the best possible learning experience. Moreover, achieving high standards has always been important, but several recent developments make it even more necessary. the importance of embracing web-based platforms to create a more efficient, inclusive, and effective education system while ensuring the quality and relevance of national academic reference standards. In general, the most important job of quality assurance is to safeguard quality and standards in universities and colleges, so that students have the best possible learning experience. Moreover, achieving high standards has always been important, but there are a number of recent developments that make it even more necessary.          </p>
      </div>
    </div>
  );
}

export default About;
