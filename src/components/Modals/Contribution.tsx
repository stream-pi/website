import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const ContributionModal: React.FC = () => {
  const [modalShow, setModalShow] = useState<boolean>(false);

  const handleShow = () => {
    setModalShow(true);
  };
  const handleHide = () => {
    setModalShow(false);
  };

  return (
    <React.Fragment>
      <span className="modal-text-span" onClick={handleShow}>
        here
      </span>

      <Modal
        className="my-modal"
        dialogClassName="modal-70w"
        show={modalShow}
        onHide={handleHide}
        aria-labelledby="contribution-modal"
      >
        <Modal.Header closeButton>
          <Modal.Title id="contribution-modal">About Contributing</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>
            If you are interested in joining the Stream-Pi development team or
            contributing in a more official capacity, then please send us an
            email to get started.
          </p>
          <p>
            In your initial email, be sure to specify how you'd like to
            contribute. (i.e. helping with translation, assistance with the
            website, assistance with the software itself, etc.).
          </p>
          <p>
            Be sure to include your Github username that you'd like to
            contribute with, and your Discord username and also EXPLICIT written
            permission that we can contact you on those platforms.
          </p>
          <p>
            The Stream-Pi Team uses Discord to communicate internally, so you
            will need to have or make an account.
          </p>
          <p>
            Then, with the same username you just gave us, open an issue under
            our "Contribution" repository. We will use this to confirm you are
            who you say you are.
          </p>
          <p>
            Beyond the initial issue creation, please do not leave any
            additional comments on the repo or issue, this is to avoid too much
            clutter.
          </p>
          <p>
            Any email not found with all required elements will be ignored, as
            well as any email that does not have a corresponding issue.
          </p>
          <p>
            After this initial point-of-contact, we will follow up with more
            instructions.
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="dark" onClick={handleHide}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </React.Fragment>
  );
};

export default ContributionModal;