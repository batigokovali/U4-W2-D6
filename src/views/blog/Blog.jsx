import React, { useEffect, useState } from "react";
import { Container, Image } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import BlogAuthor from "../../components/blog/blog-author/BlogAuthor";
import BlogLike from "../../components/likes/BlogLike";
import posts from "../../data/posts.json";
import "./styles.css";

const Blog = (props) => {
  const [blog, setBlog] = useState([]);
  const [loading, setLoading] = useState(true);
  const params = useParams();
  const navigate = useNavigate();

  const url = process.env.REACT_APP_BE_URL;

  const { id } = params;

  const getBlogpost = async () => {
    try {
      const res = await fetch(url + "/blogposts")
      const data = await res.json()
      const blog = data?.find((post) => post.id.toString() === id);
      setBlog(blog)
      console.log(blog)
      setLoading(false)
    } catch (error) {

    }
  }

  useEffect(() => {
    getBlogpost()
  }, []);


  return (
    <div className="blog-details-root">
      <Container>
        <Image className="blog-details-cover" src={blog.coverURL} fluid />
        <h1 className="blog-details-title">{blog.title}</h1>

        <div className="blog-details-container">
          <div className="blog-details-author">
            <BlogAuthor {...blog.author} />
          </div>
          <div className="blog-details-info">
            <div>{blog.createdAt}</div>
            <div>{`${blog.readTime?.value} ${blog.readTime?.unit} read`}</div>
            <div
              style={{
                marginTop: 20,
              }}
            >
              <BlogLike defaultLikes={["123"]} onChange={console.log} />
            </div>
          </div>
        </div>

        <div
          dangerouslySetInnerHTML={{
            __html: blog.content,
          }}
        ></div>
      </Container>
    </div>
  );
};

export default Blog;
