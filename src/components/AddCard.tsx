"use client";

import { Card, Modal, ModalClose, ModalDialog, Typography } from "@mui/joy";
import { FaCcVisa } from "react-icons/fa";
import { GoPlusCircle } from "react-icons/go";
import dayjs from "dayjs";
import { useEffect, useState } from "react";
import CardModal from "./CardModal";
import { useCardData } from "@/app/order/Utils";
import { Visa } from "./icons/Visa";
import axios from "axios";
import { ListItemSecondaryAction } from "@mui/material";

export function AddCard({ Flight }: any) {
  const [selectedFile, setSelectedFile] = useState(null);
  const { fetchCardData, cardData }: any = useCardData();
  console.log(cardData, Flight);
  useEffect(() => {
    fetchCardData();
  }, []);

  console.log(cardData);
  const date = Date();

  if (cardData.length == 0) {
    return (
      <Card variant="plain">
        <Card style={{ backgroundColor: "#8DD3BB" }}>
          <div className="flex justify-between items-center">
            <div className=" flex gap-2">
              <FaCcVisa />

              <p className="mt-1">{dayjs(date).format("YY-MM-DD")}</p>
            </div>
          </div>
        </Card>
        <div className="border-dashed border-2 border-[#8DD3BB] ">
          <Card
            variant="plain"
            className="flex justify-center items-center py-10"
          >
            <div className="mt-4 ">
              <CardModal />
            </div>
          </Card>
        </div>
      </Card>
    );
  }
  if (cardData) {
    return (
      <div>
        {cardData.map((card: any) => {
          return (
            <Card variant="plain">
              <Card style={{ backgroundColor: "#8DD3BB" }}>
                <div className="flex justify-between items-center">
                  <div className=" flex gap-2">
                    <div className="flex items-center">
                      <FaCcVisa />
                    </div>
                    <p className="flex items-center">{card.cardNumber}</p>
                    <p className="flex items-center">
                      {dayjs(card.date).format("MM/YY")}
                    </p>
                  </div>
                </div>
              </Card>
              <div
                className="p-4 w-[378px] bg-[url('/Card.png')] bg-cover rounded-2xl "
                style={{ backgroundImage: "" }}
              >
                <div className="font-semibold text-2xl flex justify-end">
                  BANK
                </div>
                <div className="flex justify-between mt-[60px] p-[11px] items-center">
                  <div>
                    <div className="text-xl font-semibold">
                      {card.cardNumber}
                    </div>
                    <div className="text-xl font-semibold">
                      {card.nameOnCard}
                    </div>
                  </div>
                  <Visa />
                </div>
              </div>
            </Card>
          );
        })}
      </div>
    );
  }
}
