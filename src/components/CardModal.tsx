"use client";

import * as React from "react";
import Button from "@mui/joy/Button";
import Modal from "@mui/joy/Modal";
import ModalClose from "@mui/joy/ModalClose";
import Typography from "@mui/joy/Typography";
import Sheet from "@mui/joy/Sheet";
import { GoPlusCircle } from "react-icons/go";
import { Checkbox, Input, Option, Select } from "@mui/joy";
import SelectCountry from "./SelectCountry";
import { Toaster, toast } from "sonner";
import { useRegion, useFlight, useCartData } from "@/app/order/Utils";
import axios from "axios";
import { Visa } from "./icons/Visa";
import { useUser } from "@auth0/nextjs-auth0/client";

export default function CardModal() {
  const [open, setOpen] = React.useState<boolean>(false);
  const [cardNumber, setCardNumber] = React.useState();
  const [date, setDate] = React.useState();
  const [cvc, setCvc] = React.useState();
  const [nameOnCard, SetNameOnCard] = React.useState();
  const { region }: any = useRegion();
  const { fetchCardData, cardData }: any = useCartData();
  const { user } = useUser();
  const userId = user?.sub;
  const { cartData, setCartData, fetchCartData }: any = useCartData();
  function addCard() {
    setOpen(false);
    try {
      axios
        .post("/api/cardData", {
          cvc,
          nameOnCard,
          date,
          cardNumber,
          region,
          userId,
        })
        .then(() => {
          fetchCartData(userId);
          toast.success("Card uploaded");
        });
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <React.Fragment>
      <Button variant="plain" color="neutral" onClick={() => setOpen(true)}>
        <div className="cursor-pointer rounded-md text-center transition duration-300 hover:text-[#8DD3BB] text-slate-500 text-sm font-medium">
          <div className=" flex justify-center">
            <GoPlusCircle size={50} />
          </div>
          <p className="">Add new Card</p>
        </div>
      </Button>
      <Toaster position="top-right" richColors />
      <Modal
        aria-labelledby="modal-title"
        aria-describedby="modal-desc"
        open={open}
        onClose={() => setOpen(false)}
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        <Sheet
          variant="outlined"
          sx={{
            maxWidth: 500,
            borderRadius: "md",
            p: 3,
            boxShadow: "lg",
          }}
        >
          <ModalClose variant="plain" sx={{ m: 1 }} />
          <Typography
            component="h2"
            id="modal-title"
            level="h4"
            textColor="inherit"
            fontWeight="lg"
            mb={1}
          >
            Add a New Card
          </Typography>

          <div>
            <Input
              onChange={(event: any) => {
                setCardNumber(event.target.value);
              }}
              defaultValue="**** **** **** 1234"
              className="mb-3"
              placeholder="Card Number"
            />
            <div className="flex justify-between gap-4 mb-3">
              <Input
                onChange={(event: any) => {
                  setDate(event.target.value);
                }}
                className="flex-1"
                type="date"
                placeholder="Date"
              />
              <Input
                className="flex-1"
                type="number"
                placeholder="cvc"
                defaultValue="123"
                onChange={(event: any) => {
                  setCvc(event.target.value);
                }}
              />
            </div>
            <Input
              className="w-full mb-3"
              defaultValue="Joe"
              placeholder="Name on Card"
              onChange={(event: any) => {
                SetNameOnCard(event.target.value);
              }}
            />
            <SelectCountry />
            <Checkbox
              className="mb-10 mt-4"
              label="Securely save my information for 1-click checkout"
            />
            <Button
              className="w-full  bg-[#8DD3BB] text-black hover:bg-slate-200 hover:border-emerald-800 mb-5"
              onClick={addCard}
            >
              Add Card
            </Button>
            <p className="text-[8px]">
              By confirming your subscription, you allow The Outdoor Inn Crowd
              Limited to charge your card for this payment and future payments
              in accordance with their terms. You can always cancel your
              subscription.
            </p>
          </div>
        </Sheet>
      </Modal>
    </React.Fragment>
  );
}
