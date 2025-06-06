import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Ashish Kumar Kandu </span>
            from <span className="purple"> Noida, India.</span>
            <br />
            I am currently employed as a Full Stack Developer at Merakii Group.
            <br />
            I have completed Bachelor of Technology (B.Tech.) in Computer Science & Engineering at IMS Engineering College.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Writing Tech Blogs
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "A cup of coffee can change your perspective ☕"{" "}
          </p>
          <footer className="blockquote-footer">Ashish</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
