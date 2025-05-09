// /pages/api/join.js

import { MongoClient } from 'mongodb';

const client = new MongoClient(process.env.MONGODB_URI);

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { email, name } = req.body;

    // Basic validation
    if (!email || !name) {
      return res.status(400).json({ error: 'Email and name are required' });
    }

    try {
      await client.connect();
      const db = client.db('landingpage'); // Use your DB name here
      const collection = db.collection('flingland'); // Choose your collection

      const existingUser = await collection.findOne({ email });
      if (existingUser) {
        return res.status(409).json({ error: 'User already exists' });
      }

      const result = await collection.insertOne({ email, name });

      res.status(201).json({ message: 'User added successfully', user: result.ops[0] });
    } catch (error) {
      res.status(500).json({ error: 'Database error' });
    } finally {
      await client.close();
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}
