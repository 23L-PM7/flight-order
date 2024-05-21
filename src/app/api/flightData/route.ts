import { dbRequest } from "../config/dbRequest";
export async function GET(request:Request) {
   try {
    const data = await dbRequest("flightData", "findOne");
    return Response.json(data);
   } catch (error) {
    console.log(error);
    throw new Error("Can't get flight data. Try Again!")
   }
}