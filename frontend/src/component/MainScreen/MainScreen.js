import React from "react";
import "./Mstyle.css";
import { Container, Row } from "react-bootstrap";
const MainScreen = (props) => {
  return (
    <div className="mainback">
      <Container>
        <Row>
          <div className="page">
            {props.title && (
              <>
                <h1 className="heading">{props.title}</h1>
                <hr />
              </>
            )}
            {props.children}
          </div>
        </Row>
      </Container>
    </div>
  );
};

export default MainScreen;
