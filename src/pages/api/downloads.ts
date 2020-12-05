import { NextApiRequest, NextApiResponse } from "next";
import { queryParser } from "@util";
import { getGithub, GithubResponse } from "@util/API";

const sumTotalDownloads = (response: GithubResponse) => {
  const num_arr: number[] = response.data.map((item) => {
    return item.assets.reduce((a, b) => a + b.download_count, 0);
  });
  return num_arr.reduce((a, b) => a + b);
};

export default async (req: NextApiRequest, res: NextApiResponse) => {
  res.setHeader("Content-Type", "application/json");
  const repo = queryParser(req.query.REPO);
  try {
    const repoDeets = await getGithub(repo);
    res.statusCode = 200;
    res.send(
      JSON.stringify(
        { "Total Downloads": sumTotalDownloads(repoDeets) },
        null,
        2
      )
    );
  } catch (error) {
    res.status(400).json(error.response.data);
  }
};
