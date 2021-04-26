import { FC } from "react";
import Link from "next/link";
import Nav from "react-bootstrap/Nav";
import Tab from "react-bootstrap/Tab";
import Button from "react-bootstrap/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { ReleaseDownloads } from "@util/Types";

export type InstallNavProps = {
  arr: ReleaseDownloads[];
  sercli: string;
  version: string;
};

const InstallNav: FC<InstallNavProps> = ({ arr, sercli, version }) => {
  const fixDownloadName = (input: string, version: string) => {
    const plat_arch = input.replace(
      /^(client|server)-([A-Za-z]+)-([A-Za-z0-9]+)/i,
      `$2-$3`
    );
    return plat_arch
      .replace(`-${version}`, "")
      .replace(/-(EA|GA)\+[0-9]*\.[A-Za-z0-9]+/i, "");
  };

  return (
    <Tab.Container id={`${sercli}-platform-instructions`}>
      {/* Nav item */}
      <Nav variant="pills" className="flex-column flex-md-row" justify>
        {arr.map((item, idx) => {
          const key = fixDownloadName(item.Name, version);
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
          const key = fixDownloadName(item.Name, version);
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
                <Button size="lg" href={item.Link || ""} target="_blank" block>
                  Download
                </Button>
              </div>
              {key.includes("linux-arm7") && (
                <div className="pt-3">
                  <p className="text-center">
                    This build is the one for the <strong>Raspberry Pi</strong>{" "}
                    Please click the red button below for Pi specific
                    instructions.
                  </p>
                  <Link
                    href={`/install/${sercli.toLowerCase()}/[platform]}`}
                    as={`/install/${sercli.toLowerCase()}/raspberry-pi`}
                    passHref
                  >
                    <Button variant="danger" size="lg" block>
                      <FontAwesomeIcon
                        icon={["fab", "raspberry-pi"]}
                        className="animate__animated animate__heartBeat"
                      />{" "}
                      Install Instructions
                    </Button>
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
                  href={`/install/${sercli.toLowerCase()}/[platform]`}
                  as={`/install/${sercli.toLowerCase()}/${key.toLowerCase()}`}
                  passHref
                >
                  <Button variant="success" size="lg" block>
                    View Install Instructions
                  </Button>
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

export default InstallNav;
