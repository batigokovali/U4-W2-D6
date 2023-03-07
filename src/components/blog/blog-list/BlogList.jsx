import React from "react";
import { Col, Row, Card } from "react-bootstrap";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const BlogList = (props) => {

  const [blogpost, setBlogpost] = useState([])

  const getBlogposts = async () => {
    try {
      let response = await fetch(process.env.REACT_APP_BE_URL + "/blogposts")
      const data = await response.json()
      setBlogpost(data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getBlogposts()
  }, [])

  console.log(blogpost)

  return (
    <Row>
      {blogpost && blogpost.map((post) => {
        return (

          <Col className="border p-3" xs={3} md={3} lg={3}>
            <Link to={`/blog/${post.id}`}>
              <Card.Img variant="top" src={post.coverURL} className="blog-cover" />
              <Card.Body>
                <Card.Title>Title: {post.title}</Card.Title>
              </Card.Body>
              <Card.Footer>
                <Card.Title>Author: {post.author.name} </Card.Title>
              </Card.Footer>
              <a onClick={e => e.stopPropagation} href={`${process.env.REACT_APP_BE_URL}/blogposts/${post.id}/pdf`}>
                Download as pdf!
              </a>
            </Link>
          </Col>
        )
      })}
    </Row>
  );
};

export default BlogList;
