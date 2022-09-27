/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/no-misused-promises */
import withHandler, { ResponseType } from "@libs/server/withHandler";
import type { NextApiRequest, NextApiResponse } from "next";

const handler = async (
  req: NextApiRequest,
  res: NextApiResponse<ResponseType>
) => {
  console.log(req.body);
  return res.status(200).json({ name: "John Doe" });
};

export default withHandler("POST", handler);
