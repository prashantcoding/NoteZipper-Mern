import React from "react";
import { Container, Row,Button } from "react-bootstrap";
import "./Lsytle.css";
const LandingPage = () => {
  return (
    <div className="main">
      <Container>
        <Row>
          <div className="intro-text">
            <div>
              <h1 className="title">Welcome to Node Zipper</h1>
              <p className="subtitle">One Safe Place,For Your Notes</p>
            </div>
            <div className="buttonContainer">
            <a href="/login">
              <Button size="lg" className='landingbutton'>Login</Button>
            </a>
            <a href="/register" >
              <Button size="lg" className='landingbutton' variant='outline-primary'>SignUp</Button>
            </a>
          </div>
          </div>
         
        </Row>
      </Container>
    </div>
  );
};

export default LandingPage;
