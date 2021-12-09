import React, { useEffect } from "react";
import { Container, Row,Button } from "react-bootstrap";
import "./Lsytle.css";
import {Link} from "react-router-dom"
const LandingPage = () => {
  // useEffect(() => {
  //   const userInfo = localStorage.getItem("userinfo");
  //   console.log(userInfo);
  //   if (userInfo) {
  //     history.push("/mynotes");
  //   }
  // }, []);
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
            <Link to ="/login">
              <Button size="lg" className='landingbutton'>Login</Button>
            </Link>
            <Link to ="/register" >
              <Button size="lg" className='landingbutton' variant='outline-primary'>SignUp</Button>
            </Link>
          </div>
          </div>
         
        </Row>
      </Container>
    </div>
  );
};

export default LandingPage;
