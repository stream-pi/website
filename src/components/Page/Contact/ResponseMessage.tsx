import React from "react";

const ResponseMessage: React.FC<{ title: string; long_msg: string }> = ({
  title,
  long_msg,
}) => {
  return (
    <>
      <h4>{title}</h4>
      {long_msg !== "NONE" && <p className="m-0">{long_msg}</p>}
    </>
  );
};

export default ResponseMessage;
