import { FC } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CollapsePill from "@components/CollapsePill";
import Layout from "@modules/Layout";

const StreamPiInstall: FC = () => {
  return (
    <Layout
      title="Install"
      description="Download and Setup your Stream-Pi using these instructions!"
    >
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
          id="software-disclaimer"
          titleText="Click for a disclaimer in regards to Security"
          className="text-center"
        >
          <p>
            Windows Smart Screen or any popular browser (Google Chrome,
            Microsoft Edge, Mozilla Firefox, etc.) may warn the user of the EXE
            installer being potentially malicious.
          </p>
          <p>
            This is because the EXE itself is not signed by Microsoft. The
            process to get the EXE signed requires a fee which we currently can
            not cover. However, as soon as that changes we will make getting the
            EXE signed a priority.
          </p>
          <p>
            If you are unsure then feel free to upload the ZIP file to
            VirusTotal, or your own chosen database, OR, Check the actual source
            code for yourself. We have nothing to hide.
          </p>
          <p>
            The code is open-source, so you as the user can see what goes into a
            build and can verify yourself that nothing malicious is in the
            code-base. This same privilage also allows you to compile your own
            builds straight from the source.
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
    </Layout>
  );
};

export default StreamPiInstall;
