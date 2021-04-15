import { FC, useEffect, useState, Fragment, CSSProperties } from "react";
import Head from "next/head";
import Link from "next/link";
import Button from "react-bootstrap/Button";
import { useRouter } from "next/router";

const NotFound: FC = () => {
  const [path, setPath] = useState("");
  const router = useRouter();

  useEffect(() => {
    let mounted = true;

    if (mounted) setPath(router.asPath);
    return () => {
      mounted = false;
    };
  }, []); /* eslint-disable-line react-hooks/exhaustive-deps */

  const code: CSSProperties = { color: "inherit", fontWeight: "bold" };
  return (
    <Fragment>
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

        <Button className="mt-5" variant="info" onClick={() => router.back()}>
          Go Back
        </Button>
        {"\n"}
        <Link href="/" as="/" passHref>
          <Button className="mt-5">Go Home</Button>
        </Link>
      </div>
    </Fragment>
  );
};

export default NotFound;
