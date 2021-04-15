import { useEffect, useState, FC } from "react";
import { getDownloads } from "@util/API";
import SyncLoader from "react-spinners/SyncLoader";

const DownloadCount: FC = () => {
  const [clientDownloads, setClientDownloads] = useState<number>(0);
  const [serverDownloads, setServerDownloads] = useState<number>(0);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    let mounted = true;

    const doFetch = async () => {
      try {
        const server = await getDownloads("SERVER");
        const client = await getDownloads("CLIENT");

        const info = await Promise.all([server, client]);
        return info;
      } catch (error) {
        return new Error(error.message);
      }
    };
    if (mounted) {
      doFetch().then((info) => {
        if (info instanceof Error) {
          console.log(info);
        } else {
          setServerDownloads(info[0].data["Total Downloads"]);
          setClientDownloads(info[1].data["Total Downloads"]);
        }
        setLoaded(true);
      });
    }
    return () => {
      mounted = false;
    };
  }, []);

  return (
    <div className="d-flex justify-content-center">
      {!loaded ? (
        <SyncLoader color="var(--spi-color-text)" margin={4} />
      ) : (
        <>
          <p>Client Downloads - {clientDownloads}</p>
          <p>Server Downloads - {serverDownloads}</p>
        </>
      )}
    </div>
  );
};

export default DownloadCount;
