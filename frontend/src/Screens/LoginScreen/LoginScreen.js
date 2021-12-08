import React from "react";
import MainScreen from "../../component/MainScreen/MainScreen";
import { Form, Button, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import './loginS.css'
const LoginScreen = () => {
  return (
    <MainScreen title="LOGIN">
      <div className="loginContainer">
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
      <Row className="py-3">
          <Col>
            New Customer ? <Link to="/register">Register Here</Link>
          </Col>
        </Row>
      </div>
    </MainScreen>
  );
};

export default LoginScreen;
