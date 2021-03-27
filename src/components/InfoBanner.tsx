import React, { useEffect } from "react";
import dayjs from "dayjs";
import { toast } from "react-toastify";
import isSameOrAfter from "dayjs/plugin/isSameOrAfter";
import Button from "react-bootstrap/Button";

dayjs.extend(isSameOrAfter);

type VAR = "info" | "success" | "warning" | "error" | "dark";

type Hook = {
  message: string;
  toastId: string;
  stopShowing: string | Date;
  variant?: VAR;
  keyToDelete?: string;
};

type Props = {
  children: React.ReactNode;
  toastId: string;
  variant: VAR;
  parentFunction: () => any;
};

const getVariant = (input: VAR) => {
  switch (input) {
    case "dark":
      return "outline-dark";
    case "info":
      return "outline-info";
    case "success":
      return "outline-success";
    case "warning":
      return "outline-warning";
    case "error":
      return "outline-warning";
    default:
      return "outline-primary";
  }
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
          variant={getVariant(variant)}
          onClick={closeToast}
          className="mx-1"
        >
          I Understand
        </Button>
        <Button
          size="sm"
          variant={getVariant(variant)}
          onClick={parentCall}
          className="mx-1"
        >
          Don't Show Me This Again
        </Button>
      </div>
    </>
  );
};

/**
 * Uses React Toastify to send a toast to a container with the intention of being a site-wide announcement.
 *
 * Requires an expiry date - when it will stop popping up on its own.
 */
export const useInfoBanner = ({
  message,
  toastId,
  stopShowing,
  variant,
  keyToDelete,
}: Hook) => {
  /** If the announcement 'expires' after a certain day, this will check to see if that date has passed */
  useEffect(() => {
    const sameOrAfter = dayjs().isSameOrAfter(stopShowing, "day");
    sameOrAfter && localStorage.setItem(toastId, "true");
  }, [stopShowing, toastId]);

  /** If the user has clicked "don't show this again" then it won't pop up */
  useEffect(() => {
    const val = localStorage.getItem(toastId) === "true" ? true : false;
    if (!val) {
      toast(
        <InfoBanner
          variant={variant}
          toastId={toastId}
          parentFunction={() => localStorage.setItem(toastId, "true")}
        >
          {message}
        </InfoBanner>,
        {
          containerId: "BannerToasts",
          toastId,
          delay: 1000,
          type: variant || "default",
        }
      );
    }
  }, [toastId, message, variant]);

  /** Removes an old key if specified - keeps things not clutered */
  useEffect(() => {
    keyToDelete && localStorage.removeItem(keyToDelete);
  }, [keyToDelete]);
};