import { FC } from "react";

const SectionWrapper: FC = ({ children }) => {
  return (
    <>
      <hr className="capsule top-hr mb-0" />
      {children}
      <hr className="capsule bottom-hr mt-0" />
    </>
  );
};

export default SectionWrapper;
