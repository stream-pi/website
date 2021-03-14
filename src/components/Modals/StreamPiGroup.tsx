import React from "react";
import StreamPiModal from "@StreamPi/Modal";

const LegalInfoModal: React.FC = () => {
  const currentYear = new Date().getFullYear();
  return (
    <StreamPiModal
      modalTitle="StreamPi Group Legal Info"
      htmlId="stream-pi-group-modal"
      dialogClassName="modal-55w"
      triggerText="Stream-Pi Group"
      modalBodyClass="small-modal"
      overlay
      tooltipText="View Legal Info"
    >
      <p className="text-center">
        <strong>This is in reference to the Stream-Pi Software</strong>
      </p>
      <p className="mb-1">
        Stream-Pi - Free &amp; Open-Source Modular Cross-Platform Programmable
        Macropad
      </p>
      <p>
        Copyright &copy; 2019-{currentYear} Debayan Sutradhar (rnayabed), Samuel
        Quiñones (SamuelQuinones)
      </p>
      <p className="mb-1">
        The Stream-Pi program is free software: you can redistribute it and/or
        modify it under the terms of the GNU General Public License as published
        by the Free Software Foundation, either version 3 of the License, or (at
        your option) any later version.
      </p>
      <p>
        The Stream-Pi program is distributed in the hope that it will be useful,
        but WITHOUT ANY WARRANTY; without even the implied warranty of
        MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU General
        Public License for more details.
      </p>
      <p>Written by : Debayan Sutradhar (rnayabed)</p>
    </StreamPiModal>
  );
};

export default LegalInfoModal;
