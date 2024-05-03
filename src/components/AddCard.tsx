"use client";

import { Card, Checkbox, Typography } from "@mui/joy";
import { FaCcVisa } from "react-icons/fa";
import { GoPlusCircle } from "react-icons/go";
import dayjs from "dayjs";
import { useState } from "react";
export function AddCard() {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (e: any) => {
    setSelectedFile(e.target.files[0]);
  };
  const date = Date();
  return (
    <Card variant="soft">
      <Card style={{ backgroundColor: "#8DD3BB" }}>
        <div className="flex justify-between">
          <div className=" flex gap-2">
            <Typography level="h2">
              <FaCcVisa />
            </Typography>
            <p className="mt-1">{dayjs(date).format("YYYY-MM-DD")}</p>
          </div>
          <div className="flex items-center"></div>
        </div>
      </Card>
      <Card variant="soft" className="flex justify-center items-center py-10">
        <div className="mt-4">
          <input
            type="file"
            onChange={handleFileChange}
            className="hidden"
            id="file-input"
          />
          <label
            htmlFor="file-input"
            className="cursor-pointer  ounded-md py-2 px-4 text-center transition duration-300 hover:text-[#8DD3BB]"
          >
            <div className=" flex justify-center">
              <GoPlusCircle size={70} />
            </div>
            <p className="hover:text-[#8DD3BB] text-lg">Add new Card</p>
          </label>
        </div>
      </Card>
    </Card>
  );
}
