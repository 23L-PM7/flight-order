import { dbRequest } from "../config/dbRequest";

export async function GET(request: Request) {
  try {
    const data = await dbRequest("order", "find");

    return Response.json(data);
  } catch (error) {
    console.log(error);
    throw new Error("aldaa");
  }
}

export async function POST(request: Request) {
  const body = await request.json();
  const { cardData, FlightData } = body;
  try {
    const data = await dbRequest("order", "insertOne", {
      document: {
        FlightTicket: {
          id: "FLT987654321",
          booking_reference: "XYZ789",
          passenger: {
            first_name: "Alice",
            last_name: "Smith",
            email: "alice@example.com",
            phone: "+1234567890",
            address: "123 Main Street, City, Country",
          },

          flight: {
            number: FlightData.flight_number,
            departure_airport: {
              code: "JFK",
              name: "John F. Kennedy International Airport",
              city: "New York",
              country: "USA",
            },
            arrival_airport: {
              code: "LHR",
              name: "Heathrow Airport",
              city: "London",
              country: "UK",
            },
            departure_time: "2024-06-15T10:00:00Z",
            arrival_time: "2024-06-15T22:00:00Z",
            duration: "12h",
            airline: {
              name: "American Airlines",
            },
            seat: {
              number: "15B",
              class: "Economy",
            },
          },
          ticket_status: "confirmed",
          price: 800,
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
            last_four_digits: "1234",
            expiration_date: "2025-12",
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

// test crud on data api

// export async function DELETE(request: Request) {
//   try {
//     const data = await dbRequest("order", "deleteOne", {
//       filter: {
//         _id: { $oid: "6632141f01fa922aad366cf0" },
//       },
//     });
//     return Response.json({ message: "successfully deleted" });
//   } catch (error) {
//     console.log(error);
//     throw new Error("error");
//   }
// }
// export async function PUT(request: Request) {
//   try {
//     const data = await dbRequest("order", "replaceOne", {
//       filter: {
//         _id: { $oid: "6632141ee4ce112d94afda09" },
//       },
//       replacement: {
//         name: "div",
//       },
//     });
//   } catch (error) {
//     console.log(error);
//   }
// }
