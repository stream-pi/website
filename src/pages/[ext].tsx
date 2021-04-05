import { GetStaticPaths, GetStaticProps } from "next";
import Head from "next/head";
import React, { useEffect } from "react";
import BarLoader from "react-spinners/BarLoader";
import { ExternalObjs } from "@helpers/ExternalHelper";

type Params = {
  params: {
    ext: string;
  };
};

type Props = {
  postData: {
    name: string;
    link: string;
    ext: string;
  };
};

const ExtRedir: React.FC<Props> = ({ postData }) => {
  useEffect(() => {
    window.location.replace(postData.link);
  }, [postData.link]);

  return (
    <>
      <Head>
        <title>Redirect {postData.name}</title>
      </Head>
      <h1 className="text-center">Redirecting to {postData.name}</h1>
      <div className="mt-4 d-flex justify-content-center">
        <BarLoader loading={true} color="var(--spi-color-text)" />
      </div>
    </>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  // Return a list of possible value for id

  const paths = Object.keys(ExternalObjs).map((e) => {
    return { params: { ext: e } };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }: Params) => {
  const { ext } = params;
  // Fetch necessary data for the blog post using params.id
  const postData = { ext, ...ExternalObjs[ext] };
  return {
    props: {
      postData,
    },
  };
};

export default ExtRedir;
