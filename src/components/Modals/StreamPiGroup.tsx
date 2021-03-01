import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Modal from "react-bootstrap/Modal";
import Tooltip from "react-bootstrap/Tooltip";

const LegalInfoModal: React.FC = () => {
  const [modalShow, setModalShow] = useState<boolean>(false);

  const handleShow = () => {
    setModalShow(true);
  };
  const handleHide = () => {
    setModalShow(false);
  };

  return (
    <React.Fragment>
      <OverlayTrigger
        placement="top"
        overlay={<Tooltip id="tooltip-legal-info">View Legal Info</Tooltip>}
      >
        <span className="modal-text-span" onClick={handleShow}>
          Stream-Pi Group
        </span>
      </OverlayTrigger>

      <Modal
        className="my-modal"
        dialogClassName="modal-55w"
        show={modalShow}
        onHide={handleHide}
        aria-labelledby="stream-pi-group-modal"
      >
        <Modal.Header closeButton>
          <Modal.Title id="stream-pi-group-modal">
            StreamPi Group Legal Info
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="small-modal">
          <p className="text-center">
            <strong>This is in reference to the Stream-Pi Software</strong>
          </p>
          <p className="mb-1">
            Stream-Pi - Free &amp; Open-Source Modular Cross-Platform
            Programmable Macropad
          </p>
          <p>
            Copyright (C) 2019-2021 Debayan Sutradhar (rnayabed), Samuel
            Quiñones (SamuelQuinones)
          </p>
          <p className="mb-1">
            The Stream-Pi program is free software: you can redistribute it
            and/or modify it under the terms of the GNU General Public License
            as published by the Free Software Foundation, either version 3 of
            the License, or (at your option) any later version.
          </p>
          <p>
            The Stream-Pi program is distributed in the hope that it will be
            useful, but WITHOUT ANY WARRANTY; without even the implied warranty
            of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU
            General Public License for more details.
          </p>
          <p>Written by : Debayan Sutradhar (rnayabed)</p>
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

export default LegalInfoModal;
