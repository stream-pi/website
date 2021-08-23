//* Core
import { FC } from "react";
import Head from "next/head";
import { MetaData } from "@util/Config";

export type SEOProps = {
  title: string;
  flipOrder?: boolean;
  description?: string;
  slug?: string;
  hideNavbar?: boolean;
};

const StreamPiSEO: FC<SEOProps> = ({
  title,
  flipOrder,
  description = MetaData.description,
  slug,
}) => {
  const titleString = flipOrder
    ? `${MetaData.title} ${title}`
    : `${title} ${MetaData.title}`;

  const path = title.toLowerCase() === "home" ? "" : title.toLowerCase();

  return (
    <Head>
      <title>{titleString}</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
      <meta name="description" content={description} />
      <meta property="og:title" content={titleString} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={MetaData.title} />
      <meta
        property="og:image"
        content={`${process.env.NEXT_PUBLIC_BASE_URL}/images/logo.png`}
      />
      <meta
        property="og:url"
        content={`${process.env.NEXT_PUBLIC_BASE_URL}/${
          slug?.toLowerCase() || path
        }`}
      />
      <meta property="twitter:card" content="summary" />
      <meta property="twitter:creator" content={MetaData.social.twitter} />
      <meta property="twitter:title" content={titleString} />
      <meta property="twitter:description" content={description} />
      <meta
        property="twitter:image"
        content={`${process.env.NEXT_PUBLIC_BASE_URL}/images/logo.png`}
      />
    </Head>
  );
};

export default StreamPiSEO;
