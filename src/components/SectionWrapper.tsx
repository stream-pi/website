import React from "react";

const SectionWrapper: React.FC = (props) => {
  return (
    <>
      <hr className="capsule top-hr mb-0" />
      {props.children}
      <hr className="capsule bottom-hr mt-0" />
    </>
  );
};

export default SectionWrapper;
