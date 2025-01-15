import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_URI;

export default async function handler(req, res) {
  if (req.method === "POST") {
    try {
      const { name, profession } = req.body;

      const client = new MongoClient(uri);
      await client.connect();

      const db = client.db("test");
      const collection = db.collection("biodata");

      await collection.insertOne({ name, profession });
      client.close();

      res.status(200).json({ message: "Data added successfully!" });
    } catch (error) {
      res.status(500).json({ error: "Failed to add data" });
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
