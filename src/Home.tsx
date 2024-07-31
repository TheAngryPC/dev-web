// src/components/Home.tsx
import React from "react";
import Widget from "./components/Widget.tsx";
import { Container, Row, Col } from "react-bootstrap";
import {
  fetchBlogPosts,
  BlogPost as BlogPostType,
} from "./utils/fetchBlogPosts";
import { stripHtmlTags } from "./utils/stripHtmlTags";

const Home: React.FC = () => {
  const widgets = fetchBlogPosts();

  return (
    <Container>
      <Row>
        {widgets.map((widget: BlogPostType, index: number) => (
          <Col key={index}>
            <Widget
              image={widget.image}
              title={widget.title}
              description={stripHtmlTags(widget.content).substring(0, 100)} // Short description without HTML
              link={`/blog/${widget.id}`}
            />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Home;
