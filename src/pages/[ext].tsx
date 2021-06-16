//* Core
import { useEffect } from "react";
import {
  ExternalObjs,
  ExtParams,
  ExtProps,
  LoadingIndicator,
} from "@components/Page/Ext";
import StreamPiSEO from "@components/StreamPiSEO";

const ExtRedir = ({ pageData }: ExtProps) => {
  useEffect(() => {
    window.location.replace(pageData.link);
  }, [pageData.link]);

  return (
    <>
      <StreamPiSEO
        flipOrder
        title={`Redirect ${pageData.name}`}
        description={`Redirecting to ${pageData.name}`}
        hideNavbar
        slug={pageData.link}
      />

      <h1 className="text-center">Redirecting to {pageData.name}</h1>
      <LoadingIndicator />
    </>
  );
};

export const getStaticPaths = async () => {
  const paths = Object.keys(ExternalObjs).map((e) => {
    return { params: { ext: e } };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params }: ExtParams) => {
  const { ext } = params;
  const pageData = { ext, ...ExternalObjs[ext] };
  return {
    props: {
      pageData,
    },
  };
};

export default ExtRedir;
