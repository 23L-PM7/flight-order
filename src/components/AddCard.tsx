"use client";
import { Card, CircularProgress, Drawer } from "@mui/joy";
import { FaCcVisa } from "react-icons/fa";
import dayjs from "dayjs";
import { useEffect, useState } from "react";
import CardModal from "./CardModal";
import { useCartData, usePassengerStore, useSeat } from "@/app/order/Utils";
import { Visa } from "./icons/Visa";
import axios from "axios";
import { Button, Stack } from "@mui/material";
import { toast } from "sonner";
import { useUser } from "@auth0/nextjs-auth0/client";
import { useRouter } from "next/navigation";
import { CardLoader } from "./loader/CardLoader";

export function AddCard({ Flight }: any) {
  const router = useRouter();
  const { cartData, setCartData, fetchCartData }: any = useCartData();
  const { passengerData }: any = usePassengerStore();
  const { user, isLoading } = useUser();
  const { seat }: any = useSeat();
  const userId = user?.sub;
  useEffect(() => {
    if (!user) return;
    fetchCartData(userId);
  }, [user]);

  console.log(passengerData, "asdf");
  if (!user && isLoading) {
    return <CardLoader />;
  }

  // if (!user && !isLoading) {
  //   router.push("/");
  //   return;
  // }

  const date = Date();

  function orderButton() {
    if (Flight && cartData && user && passengerData) {
      if (confirm("Get Ticket ?") == true) {
        try {
          axios
            .post("/api/order", {
              Flight,
              cartData,
              passengerData,
              user,
            })
            .then(() => {
              toast.success("Successfully ticket ordered ");
            });
        } catch (error) {
          console.log(error);
        }
      }
    } else {
      alert("fill all option");
    }
  }
  if (cartData == null) {
    return <CardLoader />;
  }
  console.log(cartData);
  if (cartData.length == 0) {
    return (
      <Card variant="plain" sx={{ backgroundColor: "#ffff" }}>
        <Card style={{ backgroundColor: "#8DD3BB" }}>
          <div className="flex items-center justify-between">
            <div className=" flex gap-2">
              <FaCcVisa />
              <p className="mt-1">{dayjs(date).format("YY-MM-DD")}</p>
            </div>
          </div>
        </Card>
        <div className="border-2 border-dashed border-[#8DD3BB] ">
          <Card
            variant="plain"
            className="flex items-center justify-center py-10"
          >
            <div className="mt-4 ">
              <CardModal />
            </div>
          </Card>
        </div>
      </Card>
    );
  }
  if (cartData) {
    return (
      <div className="bg-white">
        {cartData.map((card: any) => {
          return (
            <Card
              key={card._id}
              variant="plain"
              sx={{ backgroundColor: "#ffff", borderColor: "#EAEDED" }}
            >
              <Card style={{ backgroundColor: "#8DD3BB" }}>
                <div className="flex items-center justify-between">
                  <div className=" flex gap-2">
                    <div className="flex items-center">
                      <FaCcVisa />
                    </div>
                    <p className="text-bold flex items-center">
                      {card.cardNumber}
                    </p>

                    <p className="flex items-center">
                      {dayjs(card.date).format("MM/YY")}
                    </p>
                  </div>
                </div>
              </Card>
              <div
                className="w-[378px] rounded-2xl bg-[url('/Card.png')] bg-cover p-4 "
                style={{ backgroundImage: "" }}
              >
                <div className="flex justify-end text-2xl font-semibold">
                  BANK
                </div>
                <div className="mt-[60px] flex items-center justify-between p-[11px]">
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
        <div>
          <a
            onClick={orderButton}
            className="mt-[50px] flex w-full cursor-pointer items-center justify-center rounded-xl bg-[#8DD3BB] p-4 text-xl font-bold hover:bg-[#81cab1] hover:text-green-600"
          >
            Order Now
          </a>
        </div>
      </div>
    );
  }
}
