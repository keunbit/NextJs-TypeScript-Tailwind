import { NextApiRequest, NextApiResponse } from 'next';

export interface ResponseType {
  [key: string]: unknown;
}

export default function withHandler(method: 'GET' | 'POST', fn: (req: NextApiRequest, res: NextApiResponse) => void) {
  return async function (req: NextApiRequest, res: NextApiResponse): Promise<unknown> {
    if (req.method !== method) {
      return res.status(405).end();
    }
    try {
      await fn(req, res);
    } catch (error) {
      console.log(error);
      return res.status(500).json({ error });
    }
  };
}
