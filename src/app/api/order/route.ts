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
  const { cartData, Flight, seat, user } = body;
  try {
    const data = await dbRequest("order", "insertOne", {
      document: {
        FlightTicket: {
          passenger: {
            userId: user.sub,
            first_name: user.name,
            last_name: user.family_name,
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
            last_four_digits: cartData.cardNumber,
            expiration_date: cartData.date,
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

// const creatOrder = (req, res) => {
//   const { order, orderItems } = req;
//   const { userId, price, ticketId, orderId } = orderItem;

//   const newOrder = await OrderModel.create({
//     price: order.price,
//     userId: order.userId,
//   });

//   const newOrderItems = await OrderItemsModel.insertMany(orderItems);

//   respose.json(order);
// };

// const Component = () => {
//   const [cart, setCart] = useState({
//     price: 0,
//   });

//   const [cartItems, setCartItems] = useState([]);

//   const addCardItem = (item: any, quantity: number) => {
//     setCartItems([...cartItems, { ...item, quantity }]);

//     setCart(cart.price + item.price);
//   };
// };
