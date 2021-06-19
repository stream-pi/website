import { FC } from "react";
import StreamPiSEO from "@components/StreamPiSEO";
import {
  CoreDevelopers,
  CoreCommunityRelations,
  CoreInfrastructure,
  CoreUserExperience,
  RowCol,
  TeamMemberRow,
  JavaDevelopers,
} from "@components/Page/About";
import { TestingAuditing } from "@components/Page/About/Helper";

const StreamPiAbout: FC = () => {
  return (
    <>
      <StreamPiSEO
        title="About"
        description="Learn about Stream-Pi and the team behind it"
      />
      <RowCol className="animate__animated animate__fadeIn">
        <h2 className="streamPiAbout">What is "Stream-Pi"?</h2>
      </RowCol>
      <RowCol className="mt-4 animate__animated animate__fadeInUp">
        <p>
          Stream-Pi was created to fill the gap in the open-source for a proper,
          powerful macro pad keyboard software.
        </p>
        <p>
          The existing free alternatives are either proprietary or are limited
          in terms of personalization or expansion.
        </p>
        <p>
          Stream-Pi exists as a proper open-source alternative as it offers a
          rich Theme System, that users can use to personalize every crook and
          nook of the UI System with CSS.
        </p>
        <p>
          Stream-Pi also offers a rich API, that developers can use to write
          their own custom plug-ins – just like some paid and proprietary
          options currently available. The big difference here is that Stream-Pi
          is completely Free!
        </p>
      </RowCol>
      <RowCol className="mt-4 animate__animated animate__fadeInUp">
        <h1 id="theTeam" className="streamPiAbout mt-3">
          Meet the Team!
        </h1>
        <p>
          These are the people behind Stream-Pi, they make sure everything runs
          smoothly.
        </p>
      </RowCol>
      {/* Lead Developers */}
      <TeamMemberRow
        teamMembers={CoreDevelopers}
        identifier="Lead Developers"
        coreTeamRow
      />
      {/* Other Developers */}
      <TeamMemberRow
        teamMembers={JavaDevelopers}
        identifier="Java Developers"
      />

      {/* User Experience */}
      <TeamMemberRow
        teamMembers={CoreUserExperience}
        identifier="User Experience"
        coreTeamRow
      />
      {/* Testing Auditing */}
      <TeamMemberRow
        teamMembers={TestingAuditing}
        identifier="Testing &amp; Auditing"
      />

      {/* CR */}
      <TeamMemberRow
        teamMembers={CoreCommunityRelations}
        identifier="Community Relations"
        coreTeamRow
      />

      {/* INFRASTRUCTURE */}
      <TeamMemberRow
        teamMembers={CoreInfrastructure}
        identifier="Infrastructure"
        coreTeamRow
      />
      {/* How is it made? */}
      <RowCol className="mt-5 animate__animated animate__fadeIn">
        <h2 id="how-its-made" className="streamPiAbout mt-3">
          How is it Made?
        </h2>
      </RowCol>
      <RowCol className="animate__animated animate__fadeIn">
        <p>Stream-Pi is completely built using Java and JavaFX technology.</p>
        <p>
          The{" "}
          <a
            href="https://github.com/stream-pi/theme-api"
            target="_blank"
            rel="noopener noreferrer"
          >
            theme system
          </a>{" "}
          makes use of JavaFX CSS for stylizing the UI.
        </p>
        <p>
          The{" "}
          <a
            href="https://github.com/stream-pi/action-api"
            target="_blank"
            rel="noopener noreferrer"
          >
            Action API
          </a>{" "}
          makes use of the Java Platform Module System or JPMS. This system
          allows developers to write their own plug-ins.
        </p>
        <p>
          The{" "}
          <a
            href="https://github.com/stream-pi/essential-actions"
            target="_blank"
            rel="noopener noreferrer"
          >
            essential actions
          </a>{" "}
          that are pre-bundled with Stream-Pi public builds, are all based on
          this system.
        </p>
        <p>
          The Android and iOS builds, unlike the other builds, run natively and
          are compiled "Ahead-Of-Time" (AOT). This is possible because Stream-Pi
          uses{" "}
          <a
            href="https://gluonhq.com/products/javafx/"
            target="_blank"
            rel="noopener noreferrer"
          >
            GluonFX technology
          </a>
          , which itself makes use of{" "}
          <a
            href="https://www.graalvm.org/reference-manual/native-image/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Oracle’s GraalVM native image
          </a>{" "}
          tool to create natively run, Ahead-Of-Time (AOT) executables, that do
          not run on JVM, and consume far less memory and resources.
        </p>
        <p>
          The Linux ARM builds makes use of Gluon’s DRM library, that allows
          Stream-Pi to leverage hardware acceleration via OpenGL ES on ARM
          systems that offer DRM/KMS support (Example: Raspberry Pi). In case if
          the system has no DRM support, Stream-Pi can still run on X Server,
          although the performance will be slower since Stream-Pi will not be
          able to leverage hardware acceleration.
        </p>
      </RowCol>
      {/* How it works */}
      <RowCol className="mt-5 animate__animated animate__fadeIn">
        <h2 id="how-it-works" className="streamPiAbout mt-3">
          How does it Work?
        </h2>
      </RowCol>
      <RowCol className="animate__animated animate__fadeIn">
        <p>
          Stream-Pi consists of two main components – Server and Client. The
          Server is meant to be run on the host PC, and the Client is what you
          want to use as the macropad (Example: Android device, Raspberry Pi,
          iPad, etc.)
        </p>
        <p>
          The Server and Client are connected to and communicate with each other
          over your local network. When the Client registers the user clicking
          on an action, it talks to the Server about the clicked action – which
          the Server then proceeds to execute. If failed, the Server replies
          back with an error, and a danger icon is shown on the action box on
          the client, and an alert popup is shown to the user on the Server.
        </p>
      </RowCol>
    </>
  );
};

export default StreamPiAbout;
