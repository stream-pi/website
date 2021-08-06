import { FC, CSSProperties } from "react";
import Head from "next/head";
import Link from "next/link";
import Button from "@components/Button";
import { useRouter } from "next/router";

const Custom404: FC = () => {
  const router = useRouter();

  const code: CSSProperties = { color: "inherit", fontWeight: "bold" };
  return (
    <>
      <Head>
        <title>Resource Not Found</title>
      </Head>
      <div className="text-center">
        <h2 className="mt-5">Error 404</h2>
        <h1>Resource Not found</h1>
        <p className="mt-5">
          Tried to find <code style={code}>{router.asPath}</code> but could not.
        </p>
        <p>
          If you believe this to be a mistake, please send us an email over on
          our contact page!
        </p>
        <Button className="mt-5" variant="info" onClick={() => router.back()}>
          Go Back
        </Button>
        &nbsp;
        <Link href="/" passHref>
          <Button className="mt-5">Go Home</Button>
        </Link>
      </div>
    </>
  );
};

export default Custom404;
