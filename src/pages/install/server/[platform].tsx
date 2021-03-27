// https://nextjs.org/learn/basics/dynamic-routes
import { GetStaticPaths, GetStaticProps } from "next";
import React from "react";
import { capitalize } from "@util";
import {
  getPlatformNames,
  getInstallInstructions,
  Props,
  Params,
} from "@util/Markdown";
import StreamPiSEO from "@StreamPi/SEO";
import Layout from "@components/InstallLayout";

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getPlatformNames("server");
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }: Params) => {
  const { platform } = params;
  const installInstructions = await getInstallInstructions(platform, "server");

  return {
    props: {
      installInstructions,
    },
  };
};

const Server: React.FC<Props> = ({ installInstructions }) => {
  const { platform, ...rest } = installInstructions;
  return (
    <>
      <StreamPiSEO
        flipOrder
        title={`${capitalize(platform)} Server`}
        description={`Install Stream-Pi server on ${capitalize(platform)}`}
        slug={`install/server/${platform}`}
      />
      <Layout {...rest} />
    </>
  );
};

export default Server;
