//TODO: try to condense picker logic

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Nav from "react-bootstrap/Nav";
import Tab from "react-bootstrap/Tab";
import { getReleases, LatestRelease } from "@util/API";
import { Software } from "@helpers/InstallHelper";
import StreamPiSEO from "@StreamPi/SEO";
import DownloadCount from "@components/DownloadCount";
import CollapsePill from "@components/CollapsePill";
import { LoadingIndicator } from "@components/LoadingIndicator";
import ThemedButton from "@components/ThemedButton";

type Releases = { Client: LatestRelease; Server: LatestRelease };
type SerCli = "Server" | "Client";

const BlankDate: Releases = {
  Client: { Version: "0.0.0", "Release Page": "N/A", Downloads: [] },
  Server: { Version: "0.0.0", "Release Page": "N/A", Downloads: [] },
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

  const findDownLoad = (sercli: SerCli, platform: string) => {
    const base = releaseInfo[sercli].Downloads;
    if (base.length > 0) {
      switch (platform) {
        case "Android":
          return base[base.findIndex((x) => x.Name === "client.apk")].Link;

        case "Raspberry-Pi":
          return base[
            base.findIndex((x) =>
              x.Name.toLowerCase().includes("linux-arm7-drm")
            )
          ].Link;

        default:
          return base[
            base.findIndex((x) =>
              x.Name.toLowerCase().includes(platform.toLowerCase())
            )
          ].Link;
      }
    } else {
      return "";
    }
  };

  return (
    <React.Fragment>
      <StreamPiSEO
        title="Install"
        description="Download and Setup your Stream-Pi using these instructions!"
      />
      <div className="animate__animated animate__fadeIn">
        <h1 className="text-center pb-4">How to Setup Stream-Pi</h1>
        <DownloadCount />
        <p className="text-center">
          To view setup / install instructions, please click on the software
          type (server or client) and then click the button that pertains to
          your device.
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
        <LoadingIndicator />
      ) : (
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
                        <Nav.Item key={`${soft.name}${plat}`}>
                          <Nav.Link
                            eventKey={`${soft.name}${plat}`}
                            className="mx-1"
                          >
                            {plat}
                          </Nav.Link>
                        </Nav.Item>
                      ))}
                    </Nav>
                    {/* install steps / download */}
                    <Tab.Content className="pt-2 mx-1 mx-md-5">
                      {soft.platforms.map((plat) => (
                        <Tab.Pane
                          key={`${soft.name}${plat}Pane`}
                          eventKey={`${soft.name}${plat}`}
                        >
                          {/* DOWNLOAD LINK */}
                          <div className="py-3">
                            <p className="text-center">
                              By Clicking The button below, you will start
                              downloading the{" "}
                              <strong>
                                {plat.toLowerCase()} {soft.name.toLowerCase()}
                              </strong>{" "}
                              build direct from github.
                            </p>
                            <ThemedButton
                              size="lg"
                              href={findDownLoad(soft.name as SerCli, plat)}
                              target="_blank"
                              block
                            >
                              Download
                            </ThemedButton>
                          </div>
                          {/* DOWNLOAD LINK END */}
                          <hr />
                          {/* INSTALL INSTRUCTIONS */}
                          <div className="pt-3">
                            <p className="text-center">
                              Once your download finishes, you can click the
                              green button below which will take you to an
                              instructions page specific to this build and
                              platform.
                            </p>
                            <Link
                              href={`/install/${soft.name.toLowerCase()}/${plat.toLowerCase()}`}
                              as={`/install/${soft.name.toLowerCase()}/${plat.toLowerCase()}`}
                              passHref
                            >
                              <ThemedButton block variant="success" size="lg">
                                View Install Instructions
                              </ThemedButton>
                            </Link>
                          </div>
                          {/* INSTALL INSTRUCTIONS END */}
                        </Tab.Pane>
                      ))}
                    </Tab.Content>
                  </Tab.Container>
                </Tab.Pane>
              ))}
            </Tab.Content>
          </Tab.Container>
        </div>
      )}
    </React.Fragment>
  );
};

export default StreamPiInstall;
