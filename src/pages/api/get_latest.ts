import type { NextApiRequest, NextApiResponse } from "next";
import { prettyPrint, queryParser } from "@util";
import { getGithub, GH } from "@util/Github";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  res.setHeader("Content-Type", "application/json");
  const repo = queryParser(req.query.REPO);
  if (repo === "Bad_Call") {
    res.status(400).json(prettyPrint({ message: "Bad Call" }));
  } else {
    try {
      const repoDeets = await getGithub(repo);
      GH[repo].ETag = repoDeets.headers.etag;

      const version = repoDeets.data[0].tag_name;
      const release = `https://github.com/${process.env.NEXT_PUBLIC_REPO_OWNER}/${repo}/releases`;

      const downloads = repoDeets.data[0].assets.map((asset) => ({
        Name: asset.name,
        Link: asset.browser_download_url,
      }));

      const final = {
        Version: version,
        ReleasePage: release,
        Downloads: downloads,
      };

      res.statusCode = 200;
      GH[repo].ReleaseInfo = { ...final };
      res.send(prettyPrint(final));
    } catch (error) {
      // console.log(error);
      if (error.response?.status === 304) {
        console.log("Not a real error");
        res.send(prettyPrint(GH[repo].ReleaseInfo));
      } else {
        res.status(400).json(error.response.data);
      }
    }
  }
};
export default handler;
