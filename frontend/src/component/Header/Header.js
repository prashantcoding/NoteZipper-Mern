import React from "react";
import {
  Container,
  Form,
  FormControl,
  Nav,
  Navbar,
  NavDropdown,
} from "react-bootstrap";
import {Link, useHistory} from "react-router-dom"
const Header = () => {
  const history=useHistory()
  return (
    <div>
      <Navbar bg="primary" expand="lg" variant="dark">
        <Container>
          <Navbar.Brand>
            <Link to="/">NoteZipper</Link></Navbar.Brand>
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
              <Nav.Link><Link to="/mynotes">MyNotes</Link></Nav.Link>
              
              <NavDropdown title="Prashant" id="basic-nav-dropdown">
                <NavDropdown.Item href="">My profile</NavDropdown.Item>

                <NavDropdown.Divider />
                <NavDropdown.Item onClick={()=>{
                  localStorage.removeItem('userinfo')
                  history.push('/')
                }}>
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
