// https://nextjs.org/learn/basics/dynamic-routes
import { capitalize } from "@util";
import {
  getPlatformNames,
  getInstallInstructions,
  Props,
  Params,
} from "@util/Markdown";
import StreamPiSEO from "@StreamPi/SEO";
import Layout from "@components/InstallLayout";

export const getStaticPaths = async () => {
  const paths = getPlatformNames("client");
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params }: Params) => {
  const { platform } = params;
  const installInstructions = await getInstallInstructions(platform, "client");

  return {
    props: {
      installInstructions,
    },
  };
};

const Client = ({ installInstructions }: Props) => {
  const { platform, ...rest } = installInstructions;
  return (
    <>
      <StreamPiSEO
        flipOrder
        title={`${capitalize(platform)} Client`}
        description={`Install Stream-Pi client on ${capitalize(platform)}`}
        slug={`install/client/${platform}`}
      />
      <Layout {...rest} />
    </>
  );
};

export default Client;
