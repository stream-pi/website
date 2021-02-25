//TODO: Implement more obvious legal text

import React from "react";
import LegalInfoModal from "@components/Modals/StreamPiGroup";

const StreamPiFooter: React.FC = () => {
  const currentYear = new Date().getFullYear();
  return (
    <>
      <main className="flex-fill"></main>
      <footer className="text-center footer mt-2">
        <p
          style={{
            marginTop: "0.5rem",
            marginBottom: "0.5rem",
            fontSize: "1.0rem",
          }}
        >
          &copy; 2019 - {currentYear}, <LegalInfoModal /> and its Affiliates
        </p>
      </footer>
    </>
  );
};

export default StreamPiFooter;
