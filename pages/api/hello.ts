import type { NextApiHandler } from "next";

type Data = {
  name: string;
};

const handler: NextApiHandler<Data> = (req, res) => {
  switch (req.method) {
    case "GET":
      res.status(200).json({ name: "John Doe" });
      break;
    default:
      return res.status(405).end();
  }
};

export default handler;
