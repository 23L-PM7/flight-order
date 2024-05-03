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
  try {
    const data = await dbRequest("order", "insertOne", {
      document: {
        name: "test1",
        description: "test",
      },
    });

    return Response.json(data);
  } catch (error) {
    console.log(error);

    throw new Error("aldaa");
  }
}
export async function DELETE(request: Request) {
  try {
    const data = await dbRequest("order", "deleteOne", {
      filter: {
        _id: { $oid: "6632141f01fa922aad366cf0" },
      },
    });
    return Response.json({ message: "successfully deleted" });
  } catch (error) {
    console.log(error);
    throw new Error("error");
  }
}
export async function PUT(request: Request) {
  try {
    const data = await dbRequest("order", "replaceOne", {
      filter: {
        _id: { $oid: "6632141ee4ce112d94afda09" },
      },
      replacement: {
        name: "div",
      },
    });
  } catch (error) {
    console.log(error);
  }
}
