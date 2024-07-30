// Widget.tsx
import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

interface WidgetProps {
  image: string;
  title: string;
  description: string;
  link: string;
}

const Widget: React.FC<WidgetProps> = ({ image, title, description, link }) => {
  return (
    <Card style={{ width: "18rem", margin: "1rem" }}>
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{description}</Card.Text>
        <Link to={link} className="btn btn-secondary">
          Read More
        </Link>
      </Card.Body>
    </Card>
  );
};

export default Widget;
