import React from "react";
import StreamPiModal from "@components/Modal";

const ContributionModal: React.FC = () => {
  return (
    <StreamPiModal
      modalTitle="About Joining Our Team"
      htmlId="contribution-modal"
      triggerText="here"
      size="xl"
    >
      <p>
        If you are interested in joining the Stream-Pi development team or
        contributing in a more official capacity, then please send us an email
        to get started.
      </p>
      <p>
        In your initial email, be sure to specify how you'd like to contribute.
        (i.e. helping with translation, assistance with the website, assistance
        with the software itself, etc.).
      </p>
      <p>
        Be sure to include your Github username that you'd like to contribute
        with, and your Discord username and also EXPLICIT written permission
        that we can contact you on those platforms.
      </p>
      <p>
        The Stream-Pi Team uses Discord to communicate internally, so you will
        need to have or make an account.
      </p>
      <p>
        Any email not found with all required elements will be ignored, as well
        as any email that does not have a corresponding issue.
      </p>
      <p>
        After this initial point-of-contact, we will follow up with more
        instructions.
      </p>
    </StreamPiModal>
  );
};

export default ContributionModal;
