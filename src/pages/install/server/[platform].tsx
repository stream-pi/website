// https://nextjs.org/learn/basics/dynamic-routes
import { GetStaticPaths, GetStaticProps } from "next";
import React from "react";
import { capitalize } from "@util";
import { getPlatformNames, getInstallInstructions } from "src/instructions";
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

const Platform: React.FC<Props> = ({ installInstructions }) => {
  const { lastUpdated, platform, contentHtml } = installInstructions;
  return (
    <>
      <StreamPiSEO
        flipOrder
        title={`${capitalize(platform)} Server`}
        description={`Install Stream-Pi server on ${capitalize(platform)}`}
      />
      <div>
        <p className="mb-2">Last Updated On {lastUpdated}</p>
        <div
          className="spi-markdown"
          dangerouslySetInnerHTML={{ __html: contentHtml }}
        />
      </div>
    </>
  );
};

export default Platform;
