// TODO: Make this page dynamic

import { PageView } from "@util/Types";
import PageLayout from "@modules/Layout/Page";
import Image from "next/image";
import Col from "react-bootstrap/Col";

const SpecialThanks: PageView = () => {
  return (
    <PageLayout
      title="A Thank You From"
      description="We want to acknowledge some individuals who help with Stream-Pi behind the scenes"
      // underConstruction
      pageSource="/special-thanks.tsx"
    >
      <h1 className="text-center">We Want to Say Thank You!</h1>
      <p className="text-center">
        We are actively working on this page, we want to be sure everyone gets
        their credit!
      </p>
      <p className="text-center mb-5">
        There are certain individuals to whom we owe a very special thank you.
        Without them Stream-Pi would not be what it is today.
      </p>
      <section>
        <h4>Our Patrons!</h4>
        <div className="clearfix animate__animated animate__fadeInLeft">
          <Col xs="4" md="3" lg="2" className="float-start me-3">
            <Image
              src="/images/team/defpic.png"
              alt="Our Patrons"
              height="200"
              width="200"
            />
          </Col>
          <p className="fs-6">
            To everyone that supports us via Patreon, we owe you a tremendous
            thank you. This kind of support allows us to focus on expanding and
            improving our resources to deliver a better experience for everyone.
          </p>
          <p className="fs-6">
            We are currently looking for a way to list all of our patrons on
            this page!
          </p>
        </div>
      </section>
      <hr />
      <section>
        <h4>Brady Ruffner</h4>
        <div className="clearfix animate__animated animate__fadeInLeft">
          <Col xs="4" md="3" lg="2" className="float-start me-3">
            <Image
              src="/images/thanks/brady.webp"
              alt="Brady Ruffner"
              height="200"
              width="200"
            />
          </Col>
          <p className="fs-6">
            Back in 2019, Brady was active in the server, this was back when the
            project had lost a lot of steam.
          </p>
          <p className="fs-6">
            He kept interacting with members of the team, making great
            suggestions and kept pushing us to expand the team. He eventually
            joined the team himself and really improved internal communication.
          </p>
          <p className="fs-6 mb-0">
            In late 2020 into mid 2021 the Project became very active again and
            the team made major amounts of development progress. We owe that to
            Brady for bringing the project back to life and motivating Sam and
            Debayan to start working again.
          </p>
        </div>
      </section>
      <hr />
      <section>
        <h4>Trideb Dhar</h4>
        <div className="clearfix animate__animated animate__fadeInLeft">
          <Col xs="4" md="3" lg="2" className="float-start me-3">
            <Image
              src="https://pbs.twimg.com/profile_images/1357916841100906497/45_4MbTZ_400x400.jpg"
              height="200"
              width="200"
              alt="Trodeb Dhar"
            />
          </Col>
          <p className="fs-6 mb-0">
            Trideb Dhar - also known as Nevador - made our wonderful logo,
            please visit them on their{" "}
            <a
              href="https://twitter.com/Tridebdhar"
              target="_blank"
              rel="noopener noreferrer"
            >
              twitter
            </a>{" "}
            using the links below. Thank you for making a logo that manages to
            capture the essence of Stream-Pi!
          </p>
        </div>
      </section>
    </PageLayout>
  );
};

export default SpecialThanks;
