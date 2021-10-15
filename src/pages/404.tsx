import { PageView } from "@util/Types";
import { useRouter } from "next/router";
import Link from "next/link";
import Button from "@components/Button";
import PageLayout from "@modules/Layout/Page";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Custom404: PageView = () => {
  const router = useRouter();

  return (
    <PageLayout
      title="404: This page could not be found"
      containerClasses="d-flex flex-column justify-content-center align-items-center"
    >
      <h2 className="mt-5">Error 404</h2>
      <h1>Resource Not found</h1>
      <p className="mt-5 text-center">
        The page you requested could not be found
      </p>
      <p className="text-center">
        If you believe this to be a mistake, please send us an email over on our
        contact page!
      </p>
      <Link href="/" passHref>
        <Button style={{ maxWidth: "350px" }} className="m-2 w-100">
          Go to the Home Page{" "}
          <FontAwesomeIcon
            height="1em"
            width="1em"
            icon={["fas", "house-user"]}
          />
        </Button>
      </Link>
      <Button
        style={{ maxWidth: "350px" }}
        className="m-2 w-100"
        variant="info"
        onClick={() => router.back()}
      >
        <FontAwesomeIcon
          icon={["fas", "arrow-left"]}
          height="1em"
          width="1em"
        />{" "}
        Go Back
      </Button>
    </PageLayout>
  );
};

export default Custom404;
