import React from "react";

const StreamPiFooter: React.FC = () => {
  const currentYear = new Date().getFullYear();
  return (
    <>
      <main className="flex-fill"></main>
      <footer className="text-center footer">
        &copy; 2019 - {currentYear}, Stream-Pi Group and its Affiliates
      </footer>
    </>
  );
};

export default StreamPiFooter;
