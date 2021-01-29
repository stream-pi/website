import React from "react";
import Head from "next/head";
import config from "../../config";

interface Props {
  title: string;
  flipOrder?: boolean;
  description: string;
}

const SEO: React.FC<Props> = ({ title, flipOrder, description }) => {
  const titleString = flipOrder
    ? `${config.title} ${title}`
    : `${title} ${config.title}`;

  const path = title.toLowerCase() === "home" ? "" : title.toLowerCase();

  return (
    <Head>
      <title>{titleString}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={titleString} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={config.title} />
      <meta property="og:image" content="https://stream-pi.com/images/logo.png" />
      <meta property="og:url" content={`https://stream-pi.com/${path}`} />
      <meta property="twitter:card" content="summary" />
      <meta property="twitter:creator" content={config.social.twitter} />
      <meta property="twitter:title" content={titleString} />
      <meta property="twitter:description" content={description} />
    </Head>
  );
};

export default SEO;
