import React, { useEffect, useState } from "react";
import { getDownloads } from "@util/API";
import { LoadingIndicator } from "./LoadingIndicator";

const DownloadCount: React.FC = () => {
  const [clientDownloads, setClientDownloads] = useState<number>(0);
  const [serverDownloads, setServerDownloads] = useState<number>(0);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    let mounted = true;

    // getDownloadsInternal("str").then(r => console.log(r.data)).catch(e => console.log(e.response.data));

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
    doFetch().then((info) => {
      if (mounted) {
        if (info instanceof Error) {
          console.log(info);
        } else {
          setServerDownloads(info[0].data["Total Downloads"]);
          setClientDownloads(info[1].data["Total Downloads"]);
        }
        setLoaded(true);
      }
    });
    return () => {
      mounted = false;
    };
  }, []);

  return (
    <div className="text-center">
      {!loaded ? (
        <LoadingIndicator />
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
