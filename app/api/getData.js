import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_URI;

export default async function handler(req, res) {
  if (req.method === "GET") {
    try {
      const client = new MongoClient(uri);
      await client.connect();

      const db = client.db("test");
      const collection = db.collection("biodata");

      const data = await collection.find({}).toArray();
      client.close();

      res.status(200).json(data);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch data" });
    }
  } else {
    res.setHeader("Allow", ["GET"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
