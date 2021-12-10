import { FC } from "react";
import Container from "react-bootstrap/Container";
import Ratio from "react-bootstrap/Ratio";

const StreamPiVideo: FC = () => {
  return (
    <Container style={{ paddingLeft: "10%", paddingRight: "10%" }}>
      <div className="animate__animated animate__fadeInUp text-center">
        <h3 className="mb-1">Curious? Watch the video!</h3>
        <small className="mb-2 d-block">
          We are making a new updated video which will be out soon!
        </small>
        <Ratio aspectRatio="16x9">
          <iframe
            style={{ borderRadius: "0.7rem" }}
            title="Video About Stream-Pi"
            src="https://www.youtube.com/embed/UyT9OCnakBw"
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </Ratio>
      </div>
    </Container>
  );
};

export default StreamPiVideo;
