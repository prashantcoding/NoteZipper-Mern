import React from "react";
import {
  Container,
  Form,
  FormControl,
  Nav,
  Navbar,
  NavDropdown,
} from "react-bootstrap";
const Header = () => {
  return (
    <div>
      <Navbar bg="primary" expand="lg" variant="dark">
        <Container>
          <Navbar.Brand href="#">NoteZipper</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav className="m-auto">
              <Form className="d-flex">
                <FormControl
                  type="search"
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search"
                />
              </Form>
            </Nav>
            <Nav style={{ maxHeight: "100px" }} navbarScroll>
              <Nav.Link href="#action1">MyNotes</Nav.Link>
              
              <NavDropdown title="Prashant" id="basic-nav-dropdown">
                <NavDropdown.Item href="">My profile</NavDropdown.Item>

                <NavDropdown.Divider />
                <NavDropdown.Item href="#">
                LogOut
                </NavDropdown.Item>
              </NavDropdown>
              
            </Nav>

          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
