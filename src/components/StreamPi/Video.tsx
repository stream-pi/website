import React from "react";
import Container from "react-bootstrap/Container";
import ResponsiveEmbed from "react-bootstrap/ResponsiveEmbed";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const StreamPiVideo: React.FC = () => {
  return (
    <Container style={{ paddingLeft: "10%", paddingRight: "10%" }}>
      <Row className="animate__animated animate__fadeInUp">
        <Col className="text-center">
          <h3>Curious? Watch the video!</h3>
          <ResponsiveEmbed aspectRatio="16by9">
            <iframe
              title="AboutStreamPi"
              className="embed-responsive-item"
              src="https://www.youtube.com/embed/UyT9OCnakBw"
              frameBorder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </ResponsiveEmbed>
        </Col>
      </Row>
    </Container>
  );
};

export default StreamPiVideo;
