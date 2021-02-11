import { NextApiRequest, NextApiResponse } from "next";
import { prettyPrint, queryParser } from "@util";
import { getGithub } from "@util/API";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  res.setHeader("Content-Type", "application/json");
  const repo = queryParser(req.query.TYPE);
  try {
    const repoDeets = await getGithub(repo);
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
    res.send(prettyPrint(final));
  } catch (error) {
    res.status(400).json(error.response.data);
  }
};
