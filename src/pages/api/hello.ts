type Data = {
  name: string;
};

const handler: import("next").NextApiHandler<Data> = (req, res) => {
  switch (req.method) {
    case "GET":
      res.status(200).json({ name: "John Doe" });
      return;
    default:
      res.status(405).end();
  }
};

export default handler;
