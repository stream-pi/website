import React, { useEffect, useState, useRef } from "react";
import { getDownloads } from "@util/API";
import { LoadingIndicator } from "./LoadingIndicator";

const DownloadCount: React.FC = () => {
  const [clientDownloads, setClientDownloads] = useState<number>(0);
  const [serverDownloads, setServerDownloads] = useState<number>(0);
  const [loaded, setLoaded] = useState(false);

  // When the repos get reset, we'll need to know initial download counts
  const startingClient = useRef<any>(1255);
  const startingServer = useRef<any>(1460);

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
          setServerDownloads(info[0].data["Total Downloads"] + startingServer.current);
          setClientDownloads(info[1].data["Total Downloads"] + startingClient.current);
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
