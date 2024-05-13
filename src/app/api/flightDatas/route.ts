import { useState } from "react";
import { dbRequest } from "../config/dbRequest";

export async function GET(request: Request) {
  try {
    const { documents } = await dbRequest("flightData", "find");

    return Response.json(documents);
  } catch (error) {
    console.log(error);
    throw new Error("aldaa");
  }
}
