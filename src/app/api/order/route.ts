import { useState } from "react";
import { dbRequest } from "../config/dbRequest";
import { Filter } from "@mui/icons-material";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const userId = searchParams.get("userId");
  if (userId) {
    try {
      const { documents } = await dbRequest("order", "find", {
        filter: {
          userId: userId,
        },
      });

      return Response.json(documents);
    } catch (error) {
      console.log(error);
      throw new Error("aldaa");
    }
  } else {
    try {
      const { documents } = await dbRequest("order", "find");

      return Response.json(documents);
    } catch (error) {
      console.log(error);
      throw new Error("aldaa");
    }
  }
}

export async function POST(request: Request) {
  const body = await request.json();
  const { cartData, Flight, passengerData, user } = body;
  console.log(passengerData);
  console.log({ passengerData });
  try {
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
                number: passenger.value.selectedSeat,
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
              last_four_digits: cartData.cardNumber,
              expiration_date: cartData.date,
            },
          },
        };
      }),
    });

    return Response.json(data);
  } catch (error) {
    console.log(error);
    throw new Error("aldaa");
  }
}
