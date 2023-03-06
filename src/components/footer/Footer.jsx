import React, { useEffect } from "react";
import { Container, Button } from "react-bootstrap";

const Footer = (props) => {

  return (
    <footer
      style={{
        paddingTop: 50,
        paddingBottom: 50,
      }}
    >
      <Container>{`${new Date().getFullYear()} - © Epicode | Developed for homework projects.`}
      </Container>

    </footer>
  );
};

export default Footer;
