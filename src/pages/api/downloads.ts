import { NextApiRequest, NextApiResponse } from "next";
import { prettyPrint, queryParser } from "@util";
import { getGithub, GithubResponse } from "@util/API";

/** Initial Count prior to 1.0.0 */
const init_count = {
  client: 1529,
  server: 1650,
};

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
      prettyPrint({
        "Total Downloads": sumTotalDownloads(repoDeets) + init_count[repo],
      })
    );
  } catch (error) {
    res.status(400).json(error.response.data);
  }
};
