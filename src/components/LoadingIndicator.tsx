import React from "react";

type Props = {
  loaded: boolean;
};

export const LoadingIndicator: React.FC = () => {
  return (
    <div className="lds-ellipsis">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};

export const IsLoadingHOC = <P extends object>(
  Component: React.ComponentType<P>
): React.FC<P & Props> => ({ loaded, ...props }: Props) =>
  !loaded ? <LoadingIndicator /> : <Component {...(props as P)} />;
