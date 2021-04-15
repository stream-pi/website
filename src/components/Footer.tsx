import { FC } from "react";
import LegalInfoModal from "@components/Modals/TermsOfUse";

const StreamPiFooter: FC = () => {
  const currentYear = new Date().getFullYear();
  return (
    <>
      <main className="flex-fill"></main>
      <footer className="text-center footer p-3 mt-2">
        <p className="mb-1">
          &copy; 2019 - {currentYear}, Stream-Pi Group and its Affiliates
        </p>
        <p className="mb-1">
          <LegalInfoModal />
        </p>
        <p className="mb-0">
          Website Version <strong>{process.env.NEXT_PUBLIC_WEB_VERSION}</strong>
        </p>
      </footer>
    </>
  );
};

export default StreamPiFooter;
