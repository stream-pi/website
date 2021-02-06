//TODO: try to condense picker logic

import React from "react";
import Nav from "react-bootstrap/Nav";
import Tab from "react-bootstrap/Tab";
import { Software } from "@helpers/InstallHelper";
import StreamPiSEO from "@StreamPi/SEO";
import DownloadCount from "@components/DownloadCount";
import SectionWrapper from "@components/SectionWrapper";

const StreamPiDownload: React.FC = () => {
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
      <SectionWrapper>
        <p className="text-center">Also, a disclaimer:</p>
        <p className="text-center mb-1">
          Currently, there are some anti-virus software that will prevent
          Stream-Pi from running.
        </p>
        <p className="text-center mb-1">
          This is because the launch is handled by a <strong>vbs script</strong>
          .
        </p>
        <p className="text-center mb-1">
          We are working to upload and provide samples to anti-virus databases
          so that in the future this will not be a problem.
        </p>
        {/* <p className="text-center mb-1">
          If you are interested in helping with this, please click here for more
          info.
        </p> */}
      </SectionWrapper>
      <div className="animate__animated animate__fadeIn">
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

export default StreamPiDownload;
