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
    <Card variant="plain">
      <Card style={{ backgroundColor: "#8DD3BB" }}>
        <div className="flex justify-between">
          <div>
            <div className="font-bold text-xl">Pay in full</div>
            <div className="text-sm">Pay the total and you are all set</div>
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
            <div className="font-bold text-xl">Pay part now, part later</div>
            <div className="text-sm">
              {" "}
              Pay $207.43 now, and the rest ($207.43) will be automatically
              charged to the same payment method on Nov 14, 2022. No extra fees.
            </div>
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
