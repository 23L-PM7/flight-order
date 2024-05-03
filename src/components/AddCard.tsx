"use client";

import { Card, Modal, ModalClose, ModalDialog, Typography } from "@mui/joy";
import { FaCcVisa } from "react-icons/fa";
import { GoPlusCircle } from "react-icons/go";
import dayjs from "dayjs";

import { useState } from "react";
import CardModal from "./CardModal";
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
          <CardModal />
        </div>
      </Card>
    </Card>
  );
}
