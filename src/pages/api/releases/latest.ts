import type { NextApiRequest, NextApiResponse } from "next";
import { prettyPrint } from "@util";
import { queryParser } from "@modules/API/services";
import { callGithubAndUpdateCache } from "@modules/API/github/functions";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  res.setHeader("Content-Type", "application/json");
  const repo = queryParser(req.query.REPO);

  if (repo === "Bad_Call") {
    res.status(400).json(prettyPrint({ message: "Bad Call" }));
    return;
  }

  try {
    const response = await callGithubAndUpdateCache(repo);
    res.statusCode = 200;
    res.send(prettyPrint(response.LatestRelease));
  } catch (error) {
    res.status(400).json({ Error: error });
  }
};
export default handler;
