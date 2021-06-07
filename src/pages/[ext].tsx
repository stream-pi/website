//* Core
import { useEffect } from "react";
import BarLoader from "react-spinners/BarLoader";
import { ExternalObjs } from "@util/ExternalRedirects";
import StreamPiSEO from "@components/StreamPiSEO";

type Params = {
  params: {
    ext: string;
  };
};

type Props = {
  pageData: {
    name: string;
    link: string;
    ext: string;
  };
};

const ExtRedir = ({ pageData }: Props) => {
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
      />

      <h1 className="text-center">Redirecting to {pageData.name}</h1>
      <div className="mt-4 d-flex justify-content-center">
        <BarLoader loading={true} color="var(--spi-color-text)" />
      </div>
    </>
  );
};

export const getStaticPaths = async () => {
  // Return a list of possible value for id

  const paths = Object.keys(ExternalObjs).map((e) => {
    return { params: { ext: e } };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params }: Params) => {
  const { ext } = params;
  // Fetch necessary data for the blog post using params.id
  const pageData = { ext, ...ExternalObjs[ext] };
  return {
    props: {
      pageData,
    },
  };
};

export default ExtRedir;
