"use client";

import { Card, CircularProgress } from "@mui/joy";
import { FaCcVisa } from "react-icons/fa";

import dayjs from "dayjs";
import { useEffect, useState } from "react";
import CardModal from "./CardModal";
import { useCardData } from "@/app/order/Utils";
import { Visa } from "./icons/Visa";
import axios from "axios";
import { Toaster, toast } from "sonner";
export function AddCard({ Flight }: any) {
  const [selectedFile, setSelectedFile] = useState(null);
  const { fetchCardData, cardData }: any = useCardData();

  useEffect(() => {
    fetchCardData();
  }, []);

  const date = Date();
  console.log(cardData);

  if (cardData == null) {
    return (
      <div className="flex justify-center my-10">
        <CircularProgress color="primary" size="md" variant="soft" />
      </div>
    );
  }

  function orderButton() {
    try {
      axios
        .post("/api/order", {
          Flight,
          cardData,
        })
        .then(() => {
          toast.success("Successfully ticket ordered ");
        });
    } catch (error) {
      console.log(error);
    }
  }

  console.log(cardData);

  if (cardData.length == 0) {
    return (
      <Card variant="plain" sx={{ backgroundColor: "#ffff" }}>
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
      <>
        <div className="bg-white">
          {cardData.map((card: any) => {
            return (
              <Card
                variant="outlined"
                sx={{ backgroundColor: "#ffff", borderColor: "#EAEDED" }}
              >
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

              </div>
              <button
                onClick={orderButton}
                className="mt-[50px] flex justify-center items-center bg-[#8DD3BB] hover:bg-[#81cab1] p-4 rounded-xl cursor-pointer hover:text-green-600 font-bold text-xl"
              >
                Order now
              </button>
            </Card>
          );
        })}
      </div>
    );
  }
}
