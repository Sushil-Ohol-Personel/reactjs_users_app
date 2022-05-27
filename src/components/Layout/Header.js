import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";

export default function Header() {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">
          <img
            alt=""
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png"
            width="30"
            height="30"
            className="d-inline-block align-top"
          />
          {"   "}
          مدیریت کاربران با React
        </Navbar.Brand>

        <Nav>
          <h2 className="text-light"> راکت </h2>
        </Nav>
      </Container>
    </Navbar>
  );
}
