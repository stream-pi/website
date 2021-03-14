// https://nextjs.org/learn/basics/dynamic-routes
import { GetStaticPaths, GetStaticProps } from "next";
import React from "react";
import { capitalize } from "@util";
import {
  getPlatformNames,
  getInstallInstructions,
  Props,
  Params,
} from "src/instructions";
import StreamPiSEO from "@StreamPi/SEO";
import Layout from "@components/InstallLayout";

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getPlatformNames("client");
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }: Params) => {
  const { platform } = params;
  const installInstructions = await getInstallInstructions(platform, "client");

  return {
    props: {
      installInstructions,
    },
  };
};

const Client: React.FC<Props> = ({ installInstructions }) => {
  const { platform, ...rest } = installInstructions;
  return (
    <>
      <StreamPiSEO
        flipOrder
        title={`${capitalize(platform)} Client`}
        description={`Install Stream-Pi client on ${capitalize(platform)}`}
      />
      <Layout {...rest} />
    </>
  );
};

export default Client;
