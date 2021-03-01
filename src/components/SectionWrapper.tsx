import React from "react";

const SectionWrapper: React.FC = ({ children }) => {
  return (
    <>
      <hr className="capsule top-hr mb-0" />
      {children}
      <hr className="capsule bottom-hr mt-0" />
    </>
  );
};

export default SectionWrapper;
