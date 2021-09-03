//* Core
import { useEffect } from "react";
import {
  ExternalObjs,
  ExtParams,
  ExtProps,
  LoadingIndicator,
} from "@modules/Ext";
import { PageView } from "@util/Types";
import StreamPiSEO from "@modules/Layout/Head";

const ExtRedir: PageView<ExtProps> = ({ pageData }) => {
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

ExtRedir.hideNavbar = true;
export default ExtRedir;
