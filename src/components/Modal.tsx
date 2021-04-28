import { useState, ReactNode, FC } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";

type CommonProps = {
  triggerText: string;
  dialogClassName?: string;
  htmlId: string;
  modalTitle: ReactNode;
  modalBodyClass?: string;
  size?: "sm" | "lg" | "xl";
};

type WithOverlay = CommonProps & {
  overlay?: boolean;
  tooltipText: string;
};

type WoutOverlay = CommonProps & {
  overlay?: never;
  tooltipText?: never;
};

const StreamPiModal: FC<WoutOverlay | WithOverlay> = ({
  triggerText,
  dialogClassName,
  htmlId,
  modalTitle,
  children,
  modalBodyClass,
  overlay = false,
  tooltipText,
  size,
}) => {
  const [modalShow, setModalShow] = useState<boolean>(false);

  const handleShow = () => {
    setModalShow(true);
  };
  const handleHide = () => {
    setModalShow(false);
  };

  const ModalTrigger = () => {
    return overlay ? (
      <OverlayTrigger
        placement="top"
        overlay={
          <Tooltip style={{ fontSize: "initial" }} id={`tooltip-${htmlId}`}>
            {tooltipText}
          </Tooltip>
        }
      >
        {(props) => (
          <button {...props} className="modal-text-btn" onClick={handleShow}>
            {triggerText}
          </button>
        )}
      </OverlayTrigger>
    ) : (
      <button className="modal-text-btn" onClick={handleShow}>
        {triggerText}
      </button>
    );
  };

  return (
    <>
      <ModalTrigger />

      <Modal
        className="my-modal"
        dialogClassName={dialogClassName}
        show={modalShow}
        onHide={handleHide}
        aria-labelledby={htmlId}
        size={size}
      >
        <Modal.Header closeButton>
          <Modal.Title id={htmlId}>{modalTitle}</Modal.Title>
        </Modal.Header>
        <Modal.Body className={modalBodyClass}>{children}</Modal.Body>
        <Modal.Footer>
          <Button variant="dark" onClick={handleHide}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default StreamPiModal;
