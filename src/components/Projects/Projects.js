import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import HealthCare from "../../Assets/Projects/HealthCare.jpg";
// import emotion from "../../Assets/Projects/emotion.png";
import DispatchMassMail from "../../Assets/Projects/Dispatch_Mass_Mail.png";
import EMPManagement from "../../Assets/Projects/EMP Management.png";
// import suicide from "../../Assets/Projects/suicide.png";
import ECommerce from "../../Assets/Projects/E-commerce.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={EMPManagement}
              isBlog={false}
              title="EMP Management"
              description="This Employee Management System is built with ReactJS for the frontend and Node.js with MongoDB for the backend. It supports separate login for employees, HR, and managers. Employees can punch in/out, log lunch breaks, and submit daily reports. HR and managers can view reports, manage employee data, and monitor attendance. APIs are tested using Postman to ensure smooth and secure operations across roles."
              // ghLink="https://github.com/ashishkumarkandu/EMP Management"
              // demoLink="https://chatify-49.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ECommerce}
              isBlog={false}
              title="E-Commerce Website"
              description="This E-commerce platform features a ReactJS frontend and a Node.js backend with MongoDB. Users can sign in, view products, add items to the cart, and (if authorized) add new products. APIs are tested using Postman to ensure smooth functionality and integration."
              ghLink="https://github.com/ashishkumarkandu/e-commerce"
              // demoLink="https://blogs.soumya-jit.tech/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={DispatchMassMail}
              isBlog={false}
              title="Dispatch Mass Mail"
              description="This Mass Mail Dispatch System is developed using Python for backend logic and HTML/CSS for the frontend interface. It allows users to compose and send personalized emails to multiple recipients efficiently. The system supports email templates, contact management, and bulk sending with proper formatting. Ideal for announcements, newsletters, and automated communication tasks."
              ghLink="https://github.com/ashishkumarkandu/Dispatch_Mass_Mail"
              // demoLink="https://editor.soumya-jit.tech/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={HealthCare}
              isBlog={false}
              title="HealthCare System"
              description="This healthcare system features a ReactJS frontend and a Node.js backend with MongoDB. Users can sign in, view doctors and appointments, book consultations, and (if authorized) add or manage medical records. APIs are tested using Postman to ensure smooth functionality and integration."
              ghLink="https://github.com/ashishkumarkandu/HealthCare_System"
              // demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col>

          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Ai For Social Good"
              description="Using 'Natural Launguage Processing' for the detection of suicide-related posts and user's suicide ideation in cyberspace  and thus helping in sucide prevention."
              ghLink="https://github.com/soumyajit4419/AI_For_Social_Good"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col> */}

          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Face Recognition and Emotion Detection"
              description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
              Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
              ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col> */}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
