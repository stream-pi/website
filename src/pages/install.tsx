//TODO: try to condense picker logic

import React from "react";
import Head from "next/head";
import Nav from "react-bootstrap/Nav";
import Tab from "react-bootstrap/Tab";
import { Software } from "@helpers/InstallHelper";
import DownloadCount from "@components/DownloadCount";

const StreamPiDownload: React.FC = () => {
  return (
    <React.Fragment>
      <Head>
        <title>Install StreamPi</title>
        <meta property="og:title" content="Install StreamPi" />
        <meta property="og:url" content="https://stream-pi.com/install" />
      </Head>
      <div>
        <h1 className="text-center pb-4">This will be a setup page</h1>
        <p className="text-center">
          <strong>Totals currently not accurate</strong>
        </p>
        <DownloadCount />
      </div>
      <p className="text-center">
        To view setup / install instructions, please click on the software type
        (server or client) and then click the button that pertains to your device.
      </p>
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
                      {JSON.stringify(plat.install)}
                    </Tab.Pane>
                  ))}
                </Tab.Content>
              </Tab.Container>
            </Tab.Pane>
          ))}
        </Tab.Content>
      </Tab.Container>
    </React.Fragment>
  );
};

export default StreamPiDownload;
