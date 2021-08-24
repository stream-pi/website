import { FC } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ReactNode } from "react";

type ConstructionProps = {
  heading?: ReactNode;
};

const UnderConstruction: FC<ConstructionProps> = ({
  heading = <h2 className="mt-3">This Page is Under Construction</h2>,
  children,
}) => {
  return (
    <div className="text-center">
      <FontAwesomeIcon
        // style={{
        //   filter: "drop-shadow(0px 0px 20px rgb(0 0 0 / 0.8))",
        // }}
        size="10x"
        icon={["fas", "tools"]}
      />
      {heading}
      {children}
    </div>
  );
};

export default UnderConstruction;
