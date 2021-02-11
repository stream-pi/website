import { NextApiRequest, NextApiResponse } from "next";
import { prettyPrint } from "@util";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  res.setHeader("Content-Type", "application/json");
  res.statusCode = 200;
  // res.send(JSON.stringify({ Message: "Please hit an endpoint" }, null, 2));
  res.send(prettyPrint({ Message: "Please hit an endpoint" }));
};
