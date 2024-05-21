import { GasMeter } from "@mui/icons-material";
import { dbRequest } from "../../config/dbRequest";
import { useSearchParams } from "next/navigation";

export async function GET(
  request: Request,
  { params }: { params: { id: string } },
) {
  const { document } = await dbRequest("flightData", "findOne", {
    filter: {
      _id: { $oid: params.id },
    },
  });

  return Response.json(document);
}

export async function DELETE(
  request: Request,
  { params }: { params: { id: string } },
) {
  await dbRequest("flightData", "deleteOne", {
    filter: {
      _id: { $oid: params.id },
    },
  });

  return Response.json({ message: "Success" });
}

export async function PUT(
  request: Request,
  { params }: { params: { id: string } },
) {
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

  await dbRequest("flightData", "updateOne", {
    filter: {
      _id: { $oid: params.id },
    },
    update: {
      $set: {
        flight_number: flightNumber,
        departure_airport: {
          code: "Flight.departure_airport.code",
          name: "Flight.departure_airport.name",
          city: depCity,
          // country: depCountry?.label,
        },
        departure_time: depTime,
        arrival_airport: {
          code: "Flight.arrival_airport.code",
          name: "Flight.arrival_airport.name",
          city: arrCity,
          // country: arrCountry.label,
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
    },
  });

  return Response.json({ message: "Success" });
}
