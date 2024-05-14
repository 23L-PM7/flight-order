import { Filter, Search } from "@mui/icons-material";
import { dbRequest } from "../config/dbRequest";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const userId = searchParams.get("userId");
  if (userId) {
    try {
      const { documents } = await dbRequest("cardData", "find", {
        filter: {
          userId: userId,
        },
      });

      console.log({ documents });
      return Response.json(documents);
    } catch (error) {
      console.log(error);
      throw new Error("aldaa1");
    }
  } else {
    try {
      const { documents } = await dbRequest("cardData", "find");
      console.log({ documents });
      return Response.json(documents);
    } catch (error) {
      console.log(error);
      throw new Error("aldaa1");
    }
  }
}
export async function POST(request: Request) {
  const body = await request.json();
  const { cvc, userId, region, nameOnCard, cardNumber, date } = body;
  console.log(userId);
  try {
    const data = await dbRequest("cardData", "insertOne", {
      document: {
        cvc: cvc,
        userId: userId,
        nameOnCard: nameOnCard,
        date: date,
        cardNumber: cardNumber,
        region: region,
      },
    });

    return Response.json(data);
  } catch (error) {
    console.log(error);

    throw new Error("aldaa");
  }
}
