"use client";

import { WidthNormal } from "@mui/icons-material";
import { Checkbox, Stack, Typography } from "@mui/joy";
import Card from "@mui/joy/Card";
import React, { useState } from "react";

export function PayCard() {
  const [payFull, setPayFull] = React.useState(true);
  const [payPart, setPayPart] = React.useState(false);
  const handleChangePayFull = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPayFull(event.target.checked);
    console.log(payFull);
  };
  const handleChangePayPart = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPayPart(event.target.checked);
    console.log(payPart);
  };

  return (
    <Card variant="soft">
      <Card style={{ backgroundColor: "#8DD3BB" }}>
        <div className="flex justify-between">
          <div>
            <Typography level="h2">Pay part now, part later</Typography>
            <Typography>
              Pay $207.43 now, and the rest ($207.43) will be automatically
              charged to the same payment method on Nov 14, 2022. No extra fees.
            </Typography>
          </div>
          <div className="flex items-center">
            <Checkbox
              color="success"
              checked={payFull}
              onChange={handleChangePayFull}
            />
          </div>
        </div>
      </Card>
      <Card style={{ backgroundColor: "#8DD3BB" }}>
        <div className="flex justify-between">
          <div>
            <Typography level="h2">Pay in full</Typography>
            <Typography>Pay the total and you are all set</Typography>
          </div>
          <div className="flex items-center">
            <Checkbox
              color="success"
              checked={payPart}
              onChange={handleChangePayPart}
            />
          </div>
        </div>
      </Card>
    </Card>
  );
}
