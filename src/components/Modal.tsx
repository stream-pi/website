import { useState, ReactNode, FC, useMemo } from "react";
import Button from "@components/Button";
import Modal from "react-bootstrap/Modal";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
//* REDUX
import { useAppSelector } from "@store/hooks";
import { getColorTheme } from "@store/selectors";

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
  const colorTheme = useAppSelector(getColorTheme);

  const handleShow = () => {
    setModalShow(true);
  };
  const handleHide = () => {
    setModalShow(false);
  };

  const closeVariant = useMemo(
    () => (colorTheme === "dark" ? "white" : undefined),
    [colorTheme]
  );

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
        <button className="modal-text-btn" onClick={handleShow}>
          {triggerText}
        </button>
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
        <Modal.Header
          closeButton
          closeVariant={closeVariant}
          closeLabel="Close This Modal"
        >
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
