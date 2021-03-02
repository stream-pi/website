//TODO: try to condense picker logic

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Nav from "react-bootstrap/Nav";
import Tab from "react-bootstrap/Tab";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { getReleases } from "@util/API";
import { LatestRelease } from "@util/Types";
import StreamPiSEO from "@StreamPi/SEO";
import CollapsePill from "@components/CollapsePill";
import { LoadingIndicator } from "@components/LoadingIndicator";
import ThemedButton from "@components/ThemedButton";

type Releases = { Client: LatestRelease; Server: LatestRelease };
type InstallNavProps = {
  arr: LatestRelease["Downloads"];
  sercli: string;
  version: string;
};

const BlankDate: Releases = {
  Client: { Version: "0.0.0", "Release Page": "N/A", Downloads: [] },
  Server: { Version: "0.0.0", "Release Page": "N/A", Downloads: [] },
};

const fixDownloadName = (input: string, version: string, sercli: string) => {
  const no_id = input.replace(`StreamPi-${sercli}-${version}-`, "");
  return no_id
    .replace(/\.[A-Za-z0-9]+$/g, "")
    .replace("FINAL-EA-", "")
    .replace("-drm", "");
};

const InstallNav: React.FC<InstallNavProps> = ({ arr, sercli, version }) => {
  return (
    <Tab.Container id={`${sercli}-platform-instructions`}>
      {/* Nav item */}
      <Nav variant="pills" className="flex-column flex-md-row" justify>
        {arr.map((item, idx) => {
          const key = fixDownloadName(item.Name, version, sercli);
          return (
            <Nav.Item key={`${sercli}-${idx}-tab`}>
              <Nav.Link className="mx-1" eventKey={`${sercli}-${key}`}>
                {key}
                {key.includes("linux-arm7") && (
                  <>
                    {" "}
                    <FontAwesomeIcon
                      icon={["fab", "raspberry-pi"]}
                      className="animate__animated animate__heartBeat"
                    />
                  </>
                )}
              </Nav.Link>
            </Nav.Item>
          );
        })}
      </Nav>
      {/* Nav item end */}
      {/* Content */}
      <Tab.Content className="pt-2 mx-1 mx-md-5">
        {arr.map((item, idx) => {
          const key = fixDownloadName(item.Name, version, sercli);
          return (
            <Tab.Pane
              key={`${sercli}-${idx}-pane`}
              eventKey={`${sercli}-${key}`}
            >
              <div className="py-3">
                <p className="text-center">
                  By clicking the button below you will start downloading the{" "}
                  <strong>
                    {sercli} {key}
                  </strong>{" "}
                  build directly from github.
                </p>
                <ThemedButton
                  size="lg"
                  href={item.Link || ""}
                  target="_blank"
                  block
                >
                  Download
                </ThemedButton>
              </div>
              {key.includes("linux-arm7") && (
                <div className="pt-3">
                  <p className="text-center">
                    This build is the one for the <strong>Raspberry Pi</strong>{" "}
                    Please click the red button below for Pi specific
                    instructions.
                  </p>
                  <Link
                    href={`/install/${sercli.toLowerCase()}/raspberry-pi}`}
                    as={`/install/${sercli.toLowerCase()}/raspberry-pi`}
                    passHref
                  >
                    <ThemedButton variant="danger" size="lg" block>
                      <FontAwesomeIcon
                        icon={["fab", "raspberry-pi"]}
                        className="animate__animated animate__heartBeat"
                      />{" "}
                      Install Instructions
                    </ThemedButton>
                  </Link>
                </div>
              )}
              {/* install instructions */}
              <div style={{ paddingTop: "2rem" }}>
                <p className="text-center">
                  Once your download finishes, you can click the green button
                  below which will take you to an instructions page specific to
                  this build and platform.
                </p>
                <Link
                  href={`/install/${sercli.toLowerCase()}/${key.toLowerCase()}`}
                  as={`/install/${sercli.toLowerCase()}/${key.toLowerCase()}`}
                  passHref
                >
                  <ThemedButton variant="success" size="lg" block>
                    View Install Instructions
                  </ThemedButton>
                </Link>
              </div>
            </Tab.Pane>
          );
        })}
      </Tab.Content>
      {/* Content End */}
    </Tab.Container>
  );
};

const StreamPiInstall: React.FC = () => {
  const [releaseInfo, setReleaseInfo] = useState<Releases>(BlankDate);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    let mounted = true;
    const doFetch = async () => {
      try {
        const server = await getReleases("SERVER");
        const client = await getReleases("CLIENT");

        const info = await Promise.all([server, client]);
        return info;
      } catch (error) {
        return new Error(error.message);
      }
    };
    doFetch().then((info) => {
      if (mounted) {
        if (info instanceof Error) {
          console.log(info);
        } else {
          setReleaseInfo({ Client: info[1].data, Server: info[0].data });
        }
        setLoaded(true);
      }
    });
    return () => {
      mounted = false;
    };
  }, []);

  return (
    <React.Fragment>
      <StreamPiSEO
        title="Install"
        description="Download and Setup your Stream-Pi using these instructions!"
      />
      <div className="animate__animated animate__fadeIn">
        <h1 className="text-center pb-4">How to Setup Stream-Pi</h1>
        <p className="text-center">
          To view setup / install instructions, please click on the software
          type (server or client) and then click the button that pertains to
          your device.
        </p>
        <p style={{ fontSize: "1.2rem" }} className="text-center">
          NOTE: There are instructions for the{" "}
          <strong>
            Raspberry-Pi <FontAwesomeIcon icon={["fab", "raspberry-pi"]} />
          </strong>{" "}
          specifically, look for the button with the "
          <FontAwesomeIcon icon={["fab", "raspberry-pi"]} />" on it!
        </p>
      </div>
      {/* Disclaimer Start */}
      <div className="animate__animated animate__fadeInUp">
        <CollapsePill
          id="anti-virus-disclaimer"
          titleText="Click for a disclaimer in regards to Anti-Virus Software"
        >
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
        </CollapsePill>
      </div>
      {/* Disclaimer End */}

      {!loaded ? (
        <div className="text-center">
          <LoadingIndicator />
        </div>
      ) : (
        <>
          <div className="animate__animated animate__fadeInUp">
            <Tab.Container id="sercli-instructions">
              {/* NAV */}
              <Nav justify variant="pills">
                <Nav.Item>
                  <Nav.Link className="mx-1" eventKey="Client">
                    Client
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link className="mx-1" eventKey="Server">
                    Server
                  </Nav.Link>
                </Nav.Item>
              </Nav>
              {/* CONTENT */}
              <Tab.Content className="pt-2">
                <Tab.Pane eventKey="Client">
                  <InstallNav
                    arr={releaseInfo.Client.Downloads}
                    sercli="Client"
                    version={releaseInfo.Client.Version}
                  />
                </Tab.Pane>
                <Tab.Pane eventKey="Server">
                  <InstallNav
                    arr={releaseInfo.Server.Downloads}
                    sercli="Server"
                    version={releaseInfo.Server.Version}
                  />
                </Tab.Pane>
              </Tab.Content>
            </Tab.Container>
          </div>
        </>
      )}
    </React.Fragment>
  );
};

export default StreamPiInstall;
