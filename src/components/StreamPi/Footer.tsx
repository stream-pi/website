//TODO: Implement more obvious legal text

import React from "react";
import LegalInfoModal from "@components/Modals/StreamPiGroup";

const StreamPiFooter: React.FC = () => {
  const currentYear = new Date().getFullYear();
  return (
    <>
      <main className="flex-fill"></main>
      <footer className="text-center footer">
        &copy; 2019 - {currentYear}, <LegalInfoModal /> and its Affiliates
      </footer>
    </>
  );
};

export default StreamPiFooter;
