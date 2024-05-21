import dotenv from "dotenv";
import { NextApiRequest } from "next";
import { NextRequest } from "next/server";

dotenv.config();
export async function GET(req: NextRequest) {
  const body = await req.json();
  const { start, end, date } = body;

  try {
    const amadeusResponse = await fetch(
      `https://test.api.amadeus.com/v2/shopping/flight-offers?originLocationCode=${start}&destinationLocationCode=${end}&departureDate=${date}`,
    );
    const amadeusData = await amadeusResponse.json();
    Response.json(amadeusData);
  } catch (error) {
    console.error(error);
    Response.json({ error: "Internal Server Error" });
  }
}
