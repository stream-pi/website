import React from "react";

type Props = {
  lastUpdated: string;
  streamPiVersion: string;
  editedBy: string;
  contentHtml: string;
};

/** Layout for the dynamic install instructions pages */
const Layout: React.FC<Props> = ({
  lastUpdated,
  streamPiVersion,
  editedBy,
  contentHtml,
}) => {
  return (
    <div>
      <div className="animate__animated animate__fadeIn">
        <p className="mb-2">Last Updated On {lastUpdated}</p>
        <p className="mb-2">
          For Stream-Pi <strong>{streamPiVersion}</strong>
        </p>
        <p className="mb-2">
          Last Edited By <strong>{editedBy}</strong>
        </p>
      </div>
      <div
        className="spi-markdown animate__animated animate__fadeIn"
        dangerouslySetInnerHTML={{ __html: contentHtml }}
      />
    </div>
  );
};

export default Layout;
