import type { NextApiRequest, NextApiResponse } from "next";
import { prettyPrint, queryParser } from "@util";
import { getGithub, GH } from "@util/Github";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  res.setHeader("Content-Type", "application/json");
  const repo = queryParser(req.query.TYPE);
  try {
    const repoDeets = await getGithub(repo);
    GH.ETag = repoDeets.headers.etag;

    const version = repoDeets.data[0].tag_name;
    const release = `https://github.com/${process.env.NEXT_PUBLIC_REPO_OWNER}/${repo}/releases`;

    const downloads = repoDeets.data[0].assets.map((asset) => ({
      Name: asset.name,
      Link: asset.browser_download_url,
    }));

    const final = {
      Version: version,
      "Release Page": release,
      Downloads: downloads,
    };

    res.statusCode = 200;
    // GH.ReleaseInfo = { ...final }; // creates new obj in memory
    GH.ReleaseInfo = final;
    res.send(prettyPrint(final));
  } catch (error) {
    if (error.response?.status === 304) {
      // console.log("Not a real error");
      res.send(prettyPrint(GH.ReleaseInfo));
    } else {
      res.status(400).json(error.response.data);
    }
  }
};
