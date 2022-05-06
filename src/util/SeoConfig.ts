import type { DefaultSeoProps } from "next-seo";

const SEO: DefaultSeoProps = {
  canonical: process.env.NEXT_PUBLIC_BASE_URL,
  description:
    "A robust opensource macro keyboard, the Stream-Pi is a full fledged software designed for the Raspberry Pi, built with JavaFX, and with a want to make better peripherals more accessible.",
  titleTemplate: "Stream-Pi %s",
  twitter: {
    handle: "@stream_pi",
    cardType: "summary",
  },
  openGraph: {
    type: "website",
    url: process.env.NEXT_PUBLIC_BASE_URL,
    site_name: "Stream-Pi",
    images: [
      {
        url: `${process.env.NEXT_PUBLIC_BASE_URL}/images/logo.png`,
        alt: "Stream-Pi logo",
      },
    ],
  },
  additionalLinkTags: [{ rel: "icon", href: "/favicon.ico" }],
  additionalMetaTags: [
    { name: "viewport", content: "width=device-width, initial-scale=1" },
  ],
};

export default SEO;
