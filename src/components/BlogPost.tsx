// src/components/media/blog/BlogPost.tsx
import React from "react";
import { Container, Row, Col } from "react-bootstrap";

interface BlogPostProps {
  title: string;
  author: string;
  date: string;
  content: string;
  image?: string;
}

const BlogPost: React.FC<BlogPostProps> = ({
  title,
  author,
  date,
  content,
  image,
}) => {
  return (
    <Container className="blog-post">
      <Row className="justify-content-center">
        <Col md={8}>
          {image && (
            <img
              src={image}
              alt={title}
              className="img-fluid blog-post-image"
            />
          )}
          <h1 className="blog-post-title">{title}</h1>
          <p className="blog-post-meta">
            By {author} on {date}
          </p>
          <div
            className="blog-post-content"
            dangerouslySetInnerHTML={{ __html: content }}
          />
        </Col>
      </Row>
    </Container>
  );
};

export default BlogPost;
