import { useState } from "react";
import { dbRequest } from "../config/dbRequest";

export async function GET(request: Request) {
  try {
    const { documents } = await dbRequest("order", "find");

    return Response.json(documents);
  } catch (error) {
    console.log(error);
    throw new Error("aldaa");
  }
}

export async function POST(request: Request) {
  const body = await request.json();
  const { cardData, Flight, seat } = body;
  console.log(seat);
  try {
    const data = await dbRequest("order", "insertOne", {
      document: {
        FlightTicket: {
          passenger: {
            first_name: "Alice",
            last_name: "Smith",
            email: "alice@example.com",
            phone: "+1234567890",
            address: "123 Main Street, City, Country",
          },

          flight: {
            number: Flight.flight_number,
            departure_airport: {
              code: Flight.departure_airport.code,
              name: Flight.departure_airport.name,
              city: Flight.departure_airport.city,
              country: Flight.departure_airport.country,
            },
            arrival_airport: {
              code: Flight.arrival_airport.code,
              name: Flight.arrival_airport.name,
              city: Flight.arrival_airport.city,
              country: Flight.arrival_airport.country,
            },
            departure_time: Flight.departure_time,
            arrival_time: Flight.arrival_time,
            duration: Flight.duration,
            airline: Flight.airline,

            aircraft: Flight.aircraft,

            seat: {
              number: seat,
              class: "Economy",
            },
          },
          ticket_status: "confirmed",
          price: Flight.price,
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
            last_four_digits: cardData.cardNumber,
            expiration_date: cardData.date,
          },
        },
      },
    });

    return Response.json(data);
  } catch (error) {
    console.log(error);

    throw new Error("aldaa");
  }
}
