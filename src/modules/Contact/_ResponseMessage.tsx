import { FC, ReactNode } from "react";

type Props = {
  title: string;
  long_msg?: string;
  icon: ReactNode;
};

const ResponseMessage: FC<Props> = ({ title, long_msg, icon }) => {
  return (
    <>
      <h4>
        {icon} {title}
      </h4>
      {long_msg && <p className="m-0">{long_msg}</p>}
    </>
  );
};

export default ResponseMessage;
