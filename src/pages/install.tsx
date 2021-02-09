//TODO: try to condense picker logic

import React, { useState } from "react";
import Nav from "react-bootstrap/Nav";
import Tab from "react-bootstrap/Tab";
import Collapse from "react-bootstrap/Collapse";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Software } from "@helpers/InstallHelper";
import StreamPiSEO from "@StreamPi/SEO";
import DownloadCount from "@components/DownloadCount";
import SectionWrapper from "@components/SectionWrapper";

const Disclaimer: React.FC = () => {
  const [open, setOpen] = useState(false);

  return (
    <SectionWrapper>
      <p
        id="anti-virus-toggle"
        onClick={() => setOpen(!open)}
        className="text-center mb-1"
        aria-controls="anti-virus-disclaimer"
        aria-expanded={open}
      >
        Click for a disclaimer in regards to Anti-Virus Software
        <FontAwesomeIcon
          className="ml-3"
          icon={["fas", open ? "angle-up" : "angle-down"]}
          size="lg"
        />
      </p>
      <Collapse in={open}>
        <div id="anti-virus-disclaimer">
          <br />
          <p>
            Currently, Stream-Pi is known that it may be picked up by SOME
            anti-virus software solutions, often as a PUP (Potentially Unwanted
            Program), due to how new Stream-Pi is it has very little presence on
            existing Anti-Virus databases and so has no KNOWN state as to
            whether or not it truly is a PUP, as we upload more entries to the
            various anti-virus databases this issue SHOULD eventually resolve
            itself, for now all we can do is assure you that it is NOT a PUP,
            Malware, or, Virus.
          </p>
          <p>
            Another contributing factor is that Stream-Pi is launched via a{" "}
            <strong>VBS SCRIPT</strong> which is unconventional, and we are
            currently working on a more standard solution.
          </p>
          <p>
            If you are unsure then feel free to upload the ZIP file to
            VirusTotal, or your own chosen database, OR, Check the actual source
            code for yourself. We have nothing to hide.
          </p>
          <p>
            If you're still unsure and don't trust Stream-Pi running on your
            system then the only thing we can further advise you to do is to{" "}
            <strong>NOT USE IT.</strong>
          </p>
          <p>
            We hope that this sufficiently explains why some anti-virus software
            flags Stream-Pi, and, what solutions are available to overcome these
            issues.
          </p>
        </div>
      </Collapse>
    </SectionWrapper>
  );
};

const StreamPiInstall: React.FC = () => {
  return (
    <React.Fragment>
      <StreamPiSEO
        title="Install"
        description="Download and Setup your Stream-Pi using these instructions!"
      />
      <div className="animate__animated animate__fadeIn">
        <h1 className="text-center pb-4">How to Setup Stream-Pi</h1>
        <p className="text-center">
          <strong>Totals currently not accurate</strong>
        </p>
        <DownloadCount />
        <p className="text-center">
          To view setup / install instructions, please click on the software
          type (server or client) and then click the button that pertains to
          your device.
        </p>
      </div>
      {/* Disclaimer Start */}
      <div className="animate__animated animate__fadeInUp">
        <Disclaimer />
      </div>
      {/* Disclaimer End */}
      <div className="animate__animated animate__fadeInUp">
        <Tab.Container id="sercli-instructions">
          {/* Server or Client */}
          <Nav justify variant="pills">
            {Software.map((soft, idx) => (
              <Nav.Item key={`sofware${idx}`}>
                <Nav.Link eventKey={soft.name} className="mx-1">
                  {soft.name}
                </Nav.Link>
              </Nav.Item>
            ))}
          </Nav>
          {/* Platforms */}
          <Tab.Content className="pt-2">
            {Software.map((soft) => (
              <Tab.Pane key={`${soft.name}Pane`} eventKey={soft.name}>
                <Tab.Container id="platform-instructions">
                  <Nav
                    justify
                    variant="pills" /* className="flex-column flex-sm-row" */
                  >
                    {soft.platforms.map((plat) => (
                      <Nav.Item key={`${soft.name}${plat.platform}`}>
                        <Nav.Link
                          eventKey={`${soft.name}${plat.platform}`}
                          className="mx-1"
                        >
                          {plat.platform}
                        </Nav.Link>
                      </Nav.Item>
                    ))}
                  </Nav>
                  {/* install steps */}
                  <Tab.Content className="pt-2">
                    {soft.platforms.map((plat) => (
                      <Tab.Pane
                        key={`${soft.name}${plat.platform}Pane`}
                        eventKey={`${soft.name}${plat.platform}`}
                      >
                        {/* {JSON.stringify(plat.install)} */}
                        <div className="text-center">
                          Instructions Coming Soon!
                        </div>
                      </Tab.Pane>
                    ))}
                  </Tab.Content>
                </Tab.Container>
              </Tab.Pane>
            ))}
          </Tab.Content>
        </Tab.Container>
      </div>
    </React.Fragment>
  );
};

export default StreamPiInstall;
