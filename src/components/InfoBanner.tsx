import React, { useEffect } from "react";
import dayjs from "dayjs";
import { toast } from "react-toastify";
import isSameOrAfter from "dayjs/plugin/isSameOrAfter";
import Button from "react-bootstrap/Button";

dayjs.extend(isSameOrAfter);

type Props = {
  children: React.ReactNode;
  toastId: string;
  variant: "info" | "success" | "warning" | "error" | "default" | "dark";
  parentFunction: () => any;
};

const InfoBanner: React.FC<Props> = ({
  children,
  toastId,
  variant,
  parentFunction,
}) => {
  const closeToast = () => {
    toast.dismiss(toastId);
  };

  const parentCall = () => {
    closeToast();
    parentFunction();
  };

  return (
    <>
      <div>{children}</div>
      <hr className="my-2" />
      <div className="d-flex justify-content-end">
        <Button
          size="sm"
          variant={`outline-${variant === "error" ? "danger" : variant}`}
          onClick={closeToast}
          className="mx-1"
        >
          I Understand
        </Button>
        <Button
          size="sm"
          variant={`outline-${variant === "error" ? "danger" : variant}`}
          onClick={parentCall}
          className="mx-1"
        >
          Don't Show Me This Again
        </Button>
      </div>
    </>
  );
};

export const useInfoBanner = (
  message: string,
  toastId: string,
  stopShowing: string | Date,
  variant:
    | "info"
    | "success"
    | "warning"
    | "error"
    | "default"
    | "dark" = "warning",
  keyToDelete?: string
) => {
  /** If the announcement 'expires' after a certain day, this will check to see if that date has passed */
  useEffect(() => {
    const sameOrAfter = dayjs().isSameOrAfter(stopShowing, "day");
    sameOrAfter && localStorage.setItem(toastId, "true");
  }, [stopShowing, toastId]);

  /** If the user has clicked "don't show this again" then it won't pop up */
  useEffect(() => {
    const val = localStorage.getItem(toastId) === "true" ? true : false;
    if (!val) {
      toast[variant](
        <InfoBanner
          variant={variant}
          toastId={toastId}
          parentFunction={() => localStorage.setItem(toastId, "true")}
        >
          {message}
        </InfoBanner>,
        { containerId: "BannerToasts", toastId, delay: 1000 }
      );
    }
  }, [toastId, message, variant]);

  /** Removes an old key if specified - keeps things not clutered */
  useEffect(() => {
    keyToDelete && localStorage.removeItem(keyToDelete);
  }, [keyToDelete]);
};
