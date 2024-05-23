import { useState } from "react";
import { dbRequest } from "../config/dbRequest";
import { Filter } from "@mui/icons-material";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const userId = searchParams.get("userId");
  if (userId) {
    const { documents } = await dbRequest("order", "find", {
      filter: {
        userId: userId,
      },
    });

    return Response.json(documents);
  } else {
    const { documents } = await dbRequest("order", "find");
    return Response.json(documents);
  }
}

export async function POST(request: Request) {
  const body = await request.json();
  const { cartData, Flight, passengerData, user } = body;
  console.log(Flight);
  console.log({ passengerData });

  const data = await dbRequest("order", "insertMany", {
    documents: passengerData.map((passenger) => {
      return {
        userId: user.sub,
        FlightTicket: {
          passenger: {
            first_name: passenger.value.first,
            last_name: passenger.value.last,
            type: passenger.value.gender,
            date: passenger.value.date,
            email: user.email,
            phone: "+1234567890",
            address: "123 Main Street, City, Country",
          },
          flight: {
            number: Flight[0].flight_number,
            departure_airport: {
              code: Flight[0].departure_airport.code,
              name: Flight[0].departure_airport.name,
              city: Flight[0].departure_airport.city,
              country: Flight[0].departure_airport.country,
            },
            arrival_airport: {
              code: Flight[0].arrival_airport.code,
              name: Flight[0].arrival_airport.name,
              city: Flight[0].arrival_airport.city,
              country: Flight[0].arrival_airport.country,
            },
            departure_time: Flight[0].departure_time,
            arrival_time: Flight[0].arrival_time,
            duration: Flight[0].duration,
            airline: Flight[0].airline,

            aircraft: Flight[0].aircraft,

            seat: {
              number: passenger.value.selectedSeat,
              class: "Economy",
            },
          },
          ticket_status: "confirmed",
          price: Flight[0].price,
          currency: "USD",
          booking_date: "2024-05-20",
          booking_agent: {
            id: "AGT002",
            name: "FlightHub",
            email: "support@flighthub.com",
            phone: "+1122334455",
          },
          payment: {
            method: "credit_card",
            card_type: "Visa",
            last_four_digits: cartData.cardNumber,
            expiration_date: cartData.date,
          },
        },
      };
    }),
  });

  return Response.json(data);
}
