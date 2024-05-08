"use client";

import { WidthNormal } from "@mui/icons-material";
import { Checkbox, Stack, Typography } from "@mui/joy";
import Card from "@mui/joy/Card";
import React, { useEffect, useState } from "react";

export function PayCard() {
  const [payFull, setPayFull] = useState(false);
  const [payPart, setPayPart] = useState(false);

  const handlePayFullChange = () => {
    setPayFull(true);
    setPayPart(false);
  };

  const handlePayPartChange = () => {
    setPayPart(true);
    setPayFull(false);
  };

  return (
    <Card
      variant="outlined"
      sx={{ backgroundColor: "#ffff", borderColor: "#EAEDED" }}
    >
      <Card style={{ backgroundColor: "#8DD3BB" }}>
        <div className="flex justify-between font-sans">
          <div>
            <Typography level="h4">Pay in full</Typography>
            <Typography>Pay the total and you are all set</Typography>
          </div>
          <div className="flex items-center">
            <input
              className="size-4 rounded-sm"
              type="checkbox"
              checked={payFull}
              onChange={handlePayFullChange}
            />
          </div>
        </div>
      </Card>
      <Card style={{ backgroundColor: "#8DD3BB" }}>
        <div className="flex justify-between font-sans">
          <div>
            <Typography level="h4">Pay part now, part later</Typography>
            <Typography>
              Pay $207.43 now, and the rest ($207.43) will be automatically
              charged to the same payment method on Nov 14, 2022. No extra fees.
            </Typography>
          </div>
          <div className="flex items-center">
            <input
              className="size-4 rounded-sm "
              type="checkbox"
              checked={payPart}
              onChange={handlePayPartChange}
            />
          </div>
        </div>
      </Card>
    </Card>
  );
}
