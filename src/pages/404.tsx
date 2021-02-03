import React, { useEffect, useState } from "react";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import ThemedButton from "@components/ThemedButton";

const NotFound: React.FC = () => {
  const [path, setPath] = useState("");
  const router = useRouter();

  useEffect(() => {
    let mounted = true;

    if (mounted) setPath(router.asPath);
    return () => {
      mounted = false;
    };
  }, []);

  const code: React.CSSProperties = { color: "inherit", fontWeight: "bold" };
  return (
    <React.Fragment>
      <Head>
        <title>Resource Not Found</title>
      </Head>
      <div className="text-center">
        <h2 className="mt-5">Error 404</h2>
        <h1>Resource Not found</h1>
        <p className="mt-5">
          Tried to find <code style={code}>{path}</code> but could not.
        </p>
        <p>
          If you believe this to be a mistake, please send us an email over on
          our contact page!
        </p>

        <ThemedButton
          className="mt-5"
          variant="info"
          onClick={() => router.back()}
        >
          Go Back
        </ThemedButton>
        {"\n"}
        <Link href="/" as="/" passHref>
          <ThemedButton className="mt-5">Go Home</ThemedButton>
        </Link>
      </div>
    </React.Fragment>
  );
};

export default NotFound;
