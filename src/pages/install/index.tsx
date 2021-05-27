//TODO: try to condense picker logic

import { FC } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import StreamPiSEO from "@components/StreamPiSEO";
import CollapsePill from "@components/CollapsePill";

const StreamPiInstall: FC = () => {
  return (
    <>
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
          <FontAwesomeIcon icon={["fab", "raspberry-pi"]} />" on it! (it'll
          shake)
        </p>
      </div>
      {/* Disclaimer Start */}
      <div className="animate__animated animate__fadeIn">
        <CollapsePill
          id="anti-virus-disclaimer"
          titleText="Click for a disclaimer in regards to Anti-Virus Software"
          className="text-center"
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
            It is advised that you <strong>DO NOT</strong> run StreamPi on a
            public network, currently we do not encrypt the connection from
            client to server so the connection is vulnerable. Using a private
            network is safe.
          </p>
          <p>
            We hope that this sufficiently explains why some anti-virus software
            flags Stream-Pi, and, what solutions are available to overcome these
            issues.
          </p>
        </CollapsePill>
      </div>
      {/* Disclaimer End */}
      <div className="text-center">
        <p>
          We are currently looking for the best way to distribute and roll out
          the install instructions. Please bear with us while we make sure we
          can provide the best experience possible!
        </p>
      </div>
    </>
  );
};

export default StreamPiInstall;
