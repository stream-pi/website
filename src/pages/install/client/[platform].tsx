// https://nextjs.org/learn/basics/dynamic-routes
import { GetStaticPaths, GetStaticProps } from "next";
import React from "react";
import { capitalize } from "@util";
import { getPlatformNames, getInstallInstructions } from "@util/Instructions";
import StreamPiSEO from "@components/StreamPi/SEO";

type Params = {
  params: {
    platform: string;
  };
};

type Props = {
  installInstructions: {
    platform: string;
    contentHtml: string;
    lastUpdated: string;
  };
};

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

const Platform: React.FC<Props> = ({ installInstructions }) => {
  const { lastUpdated, platform, contentHtml } = installInstructions;
  return (
    <>
      <StreamPiSEO
        flipOrder
        title={`${capitalize(platform)} Client`}
        description={`Install Stream-Pi client on ${capitalize(platform)}`}
      />
      <div>
        <p>{platform}</p>
        <br />
        <p>{lastUpdated}</p>
        <br />
        <div dangerouslySetInnerHTML={{ __html: contentHtml }} />
      </div>
    </>
  );
};

export default Platform;
