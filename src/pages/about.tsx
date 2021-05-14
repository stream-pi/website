import { FC } from "react";
import StreamPiSEO from "@components/StreamPiSEO";
import {
  Developers,
  CommunityRelations,
  Infrastructure,
  UserExperience,
  RowCol,
  TeamMemberRow,
} from "@components/Page/About";

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
          Well, as the home page says it was created with the idea to make a
          robust macro keyboard alternative.
        </p>
        <p>
          There are other alternatives, but we found the functionality limiting,
          we wanted to be able to do more!
        </p>
        <p>The Stream-Pi seeks to make the experience as robust as possible;</p>
        <p>
          It actually integrates with software and utilizes API from OBS,
          Twitter, and more to bring an amazing user experience all for FREE.
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
      {/* Developers */}
      <TeamMemberRow teamMembers={Developers} identifier="Lead Developers" />

      {/* CR */}
      <TeamMemberRow
        teamMembers={CommunityRelations}
        identifier="Community Relations"
      />

      {/* User Experience */}
      <TeamMemberRow
        teamMembers={UserExperience}
        identifier="User Experience"
      />

      {/* INFRASTRUCTURE */}
      <TeamMemberRow teamMembers={Infrastructure} identifier="Infrastructure" />
      {/* How is it made? */}
      <RowCol className="mt-5 animate__animated animate__fadeIn">
        <h2 id="technology" className="streamPiAbout mt-3">
          How is it Made?
        </h2>
      </RowCol>
      <RowCol className="animate__animated animate__fadeIn">
        <p>
          Well, as it says on the homepage, Stream-Pi is made using the Java
          language and the JavaFX library. We use the Graal VM Community Edition
          as our JDK.
        </p>
        <p>
          We use a modular system to be able to break the project up into parts.
          The software is not just one Java "project" but several smaller
          projects that make up a whole.
        </p>
        <p>
          Originally we were only going to do this for our plugin system, but it
          was such a useful design patern that it was extened into a utility
          module and a theme API.
        </p>
        <p>
          In order to implement all of our Stream-Pi modules into the base
          Client and Server projects, we implemented maven. This additionally
          allows us to streamline a build system that is not platform
          restrictive.
        </p>
        <p>
          In order to compile the software into native platform images, we use
          the Gluon Client. Native images run directly on the platform like
          actual native apps, rather than running on a Java Virtual Machine,
          reducing footprint and resources needed.
        </p>
      </RowCol>
    </>
  );
};

export default StreamPiAbout;
