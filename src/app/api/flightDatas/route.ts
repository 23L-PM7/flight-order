import { GasMeter } from "@mui/icons-material";
import { dbRequest } from "../config/dbRequest";
import { useSearchParams } from "next/navigation";
import { log } from "console";

export async function GET(request: Request) {

  const { documents } = await dbRequest("flightData", "find");
  return Response.json(documents);
}

export async function POST(request: Request) {
  const body = await request.json();

  const {
    flightNumber,
    airline,
    aircraft,
    gate,
    depCountry,
    depCity,
    depTime,
    arrCountry,
    arrCity,
    arrTime,
    price,
    duration,
  } = body;

  const data = await dbRequest("flightData", "insertOne", {
    document: {
      flight_number: flightNumber,
      departure_airport: {
        code: "Flight.departure_airport.code",
        name: "Flight.departure_airport.name",
        city: depCity,
        country: depCountry.label,
      },
      departure_time: depTime,
      arrival_airport: {
        code: "Flight.arrival_airport.code",
        name: "Flight.arrival_airport.name",
        city: arrCity,
        country: arrCountry.label,
      },
      arrival_time: arrTime,
      airline: airline,
      aircraft: aircraft,
      status: "On time",
      gate: gate,
      terminal: "Terminal 4",
      duration: duration,
      price: price,
      price_details: {
        base_fare: 200,
        taxes: 30,
        fees: 20,
      },
      service_details: {
        luggage_allowance: "2 bags, 23kg each",
        meal_service: true,
        wifi_available: false,
        entertainment: ["In-flight movies", "Music"],
      },
    },
  });

  return Response.json(data);
}
