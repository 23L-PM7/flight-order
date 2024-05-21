// import { MongoClient } from "mongodb";
// import dotenv from "dotenv";
// import { NextApiRequest, NextApiResponse } from "next";

// dotenv.config();
// export async function GET(req: NextApiRequest, res: NextApiResponse) {
//   const mongoConnect = process.env.MONGO_URI;
//   const client = new MongoClient(mongoConnect, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   });

//   try {
//     await client.connect();
//     const database = client.db("Flight");
//     const collection = database.collection("flightData");
//     const { origin } = req.query;

//     const amadeusResponse = await fetch(
//       `https://test.api.amadeus.com/v1/shopping/flight-destinations?origin=${origin}`
//     );
//     const amadeusData = await amadeusResponse.json();

//     const flightData = await collection.find({ origin }).toArray();
//     res.status(200).json({ flightData, amadeusData });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: "Internal Server Error" });
//   } finally {
//     await client.close();
//   }
// }

// export async function GET(req: any, res: any) {
//   const mongoDb_URL = process.env.MONGO_SECRET;
//   const client = new MongoClient(mongoDb_URL, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   });
//   try {
//     await client.connect();
//     const database = client.db("flights");
//     const collection = database.collection("flightSearchData");

//     const flightDataResponse = await axios.get("", {
//       params: {
//         apiKey: process.env.CLIENT_ID,
//         apiSecret: process.env.CLIENT_SECRET,
//       },
//     });
//     await collection.insertMany(flightDataResponse.data);

//     res.status(200).json({ message: "FLIGHT DATA RESTORED SUCSESSFULLY" });
//   } catch (error) {
//     res
//       .status(500)
//       .json({ message: "ERROR FETCHIMG AND STORING FLIGHT DATA", error });
//   } finally {
//     await client.close();
//   }
// }
