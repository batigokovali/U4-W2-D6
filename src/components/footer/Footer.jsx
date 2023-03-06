import React, { useEffect } from "react";
import { Container, Button } from "react-bootstrap";

const Footer = (props) => {
  const getAuthors = async () => {
    await fetch("https://u4-w1-d4-production.up.railway.app/authors")
      .then(response => response.json())
      .then(data => console.log("authors:", data));
  }

  useEffect(() => {
    getAuthors()
  }, [])

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
