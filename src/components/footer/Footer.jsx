import React, { useEffect } from "react";
import { Container, Button } from "react-bootstrap";

const Footer = (props) => {
  const getAuthors = async () => {
    await fetch("http://localhost:3001/authors")
      .then(response => response.json())
      .then(data => console.log("authors:", data));
  }

  const getSpecificAuthors = async () => {
    await fetch("http://localhost:3001/authors/dd82z1hfkleoccco4")
      .then(response => response.json())
      .then(data => console.log("Sample author:", data));
  }

  const getBlogposts = async () => {
    await fetch("http://localhost:3001/blogposts")
      .then(response => response.json())
      .then(data => console.log("Blogposts:", data));
  }

  const getAllCommentsFromSpecificBlogpost = async () => {
    await fetch("http://localhost:3001/blogposts")
      .then(response => response.json())
      .then(data => console.log("Blogposts:", data));
  }

  useEffect(() => {
    getAuthors()
    getBlogposts()
    getSpecificAuthors()
    getAllCommentsFromSpecificBlogpost()
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
