import React from "react";
import { Col, Row, Card } from "react-bootstrap";

import BlogItem from "../blog-item/BlogItem";
import { useEffect, useState } from "react";

const BlogList = (props) => {

  const [blogpost, setBlogpost] = useState()

  const getBlogposts = async () => {
    await fetch("https://u4-w1-d4-production.up.railway.app/blogposts")
      .then(response => response.json())
      .then(data => console.log("blogposts:", data))
      .then(data => setBlogpost(data))
  }

  useEffect(() => {
    getBlogposts()
  }, [])

  console.log(blogpost)

  return (
    <Row>
      {blogpost && blogpost.map((post) => {
        return (<Card className="blog-card">
          <Card.Img variant="top" src={post.coverURL} className="blog-cover" />
          <Card.Body>
            <Card.Title>{post.title}</Card.Title>
          </Card.Body>
          <Card.Footer>
            <Card.Title>{post.author.name} </Card.Title>
          </Card.Footer>
        </Card>)
      })}
    </Row>
  );
};

export default BlogList;
