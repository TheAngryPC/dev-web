// Home.tsx
import React from "react";
import Widget from "../Widget";
import { Container, Row, Col } from "react-bootstrap";
import widgetData from "./blog/widgets.json"; // Import the JSON data
import { Widget as WidgetType } from "../types/Widget";

const Home: React.FC = () => {
  const widgets: WidgetType[] = widgetData;

  return (
    <Container>
      <p></p>
      <Row>
        {widgets.map((widget, index) => (
          <Col key={index}>
            <Widget
              image={widget.image}
              title={widget.title}
              description={widget.description}
              link={widget.link}
            />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Home;
