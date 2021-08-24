import { FC } from "react";
import Container from "react-bootstrap/Container";
import Ratio from "react-bootstrap/Ratio";

const StreamPiVideo: FC = () => {
  return (
    <Container style={{ paddingLeft: "10%", paddingRight: "10%" }}>
      <div className="animate__animated animate__fadeInUp text-center">
        <h3>Curious? Watch the video!</h3>
        <Ratio aspectRatio="16x9">
          <iframe
            title="About Stream-Pi"
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
