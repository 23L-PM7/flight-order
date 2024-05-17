"use client";

import * as React from "react";
import { useState } from "react";
import { create } from "zustand";

// Material UI
import Popover from "@mui/material/Popover";
import Typography from "@mui/material/Typography";

// Joy UI
import Button from "@mui/joy/Button";
import { VariantProp } from "@mui/joy/styles";

import { IoMdPersonAdd } from "react-icons/io";
import { GiPerson } from "react-icons/gi";
import { FaChild } from "react-icons/fa6";
import { MdChildFriendly } from "react-icons/md";
import { FiPlusCircle } from "react-icons/fi";
import { FiMinusCircle } from "react-icons/fi";

type State = {
  adultQuantity: number;
  childQuantity: number;
  infantQuantity: number;
  // adultAdd: () => void;
  // adultSubtract: () => void;
  // childAdd: () => void;
  // childSubtract: () => void;
  // infantAdd: () => void;
  // infantSubtract: () => void;
  setAdultQuantity: (v: number) => void;
  setChildQuantity: (v: number) => void;
  setInfantQuantity: (v: number) => void;
};

export const passengersQuantityStore = create<State>((set) => ({
  adultQuantity: 1,
  childQuantity: 0,
  infantQuantity: 0,
  setAdultQuantity: (adultQuantity: number) =>
    set(() => ({ adultQuantity: adultQuantity })),
  // adultAdd: () => set((state) => ({ adultQuantity: state.adultQuantity + 1 })),
  // adultSubtract: () =>
  //   set((state) => ({
  //     adultQuantity: state.adultQuantity === 1 ? 1 : state.adultQuantity - 1,
  //   })),

  setChildQuantity: (childQuantity: number) =>
    set(() => ({ childQuantity: childQuantity })),
  setInfantQuantity: (infantQuantity: number) =>
    set(() => ({ infantQuantity: infantQuantity })),
}));

export function Passengers() {
  const [anchorEl, setAnchorEl] = useState(null);

  const {
    adultQuantity,
    childQuantity,
    infantQuantity,
    setAdultQuantity,
    setChildQuantity,
    setInfantQuantity,
  } = passengersQuantityStore();

  const handleClick = (event: any) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  const adultAdd = () => {
    setAdultQuantity(adultQuantity + 1);
  };

  const adultSubtract = () => {
    if (adultQuantity !== 1) {
      setAdultQuantity(adultQuantity - 1);
    }
  };

  const childAdd = () => {
    setChildQuantity(childQuantity + 1);
  };

  const childSubtract = () => {
    if (childQuantity !== 0) {
      setChildQuantity(childQuantity - 1);
    }
  };

  const infantAdd = () => {
    setInfantQuantity(infantQuantity + 1);
  };

  const infantSubtract = () => {
    if (infantQuantity !== 0) {
      setInfantQuantity(infantQuantity - 1);
    }
  };
  const [variant, setVariant] = React.useState<VariantProp>("soft");

  return (
    <div>
      <Button
        aria-describedby={id}
        variant={variant}
        color="neutral"
        onClick={handleClick}
      >
        <div className="flex items-center gap-2">
          <IoMdPersonAdd />
          {adultQuantity && (
            <div>
              {adultQuantity} {adultQuantity > 1 ? "Adults" : "Adult"}
            </div>
          )}
          {childQuantity !== 0 && (
            <div>
              {childQuantity} {childQuantity === 1 ? "Child" : "Children"}
            </div>
          )}
          {infantQuantity !== 0 && (
            <div>
              {infantQuantity} {infantQuantity === 1 ? "infant" : "Infants"}
            </div>
          )}
        </div>
      </Button>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        <Typography sx={{ p: 2 }}>
          <div>
            <div className="flex justify-between ">
              <div className="flex items-center gap-1 ">
                <GiPerson />
                <p>Adults</p>
              </div>
              <div className="flex items-center gap-1">
                <button onClick={adultSubtract} className="hover:bg-[#8DD3BB]">
                  <FiMinusCircle />
                </button>
                <div>{adultQuantity}</div>
                <button onClick={adultAdd} className="hover:bg-[#8DD3BB]">
                  <FiPlusCircle />
                </button>
              </div>
            </div>
            <div className="flex justify-between">
              <div>
                <div className="mt-2 flex items-center gap-1">
                  <FaChild />
                  <p>Children</p>
                </div>
                <p className="text-xs text-slate-400">
                  2-11 years at time of travel
                </p>
              </div>
              <div className="flex items-center gap-1">
                <button onClick={childSubtract} className="hover:bg-[#8DD3BB]">
                  <FiMinusCircle />
                </button>
                <div>{childQuantity}</div>
                <button onClick={childAdd} className="hover:bg-[#8DD3BB]">
                  <FiPlusCircle />
                </button>
              </div>
            </div>
            <div className="flex justify-between gap-3">
              <div>
                <div className="mt-2 flex items-center gap-1">
                  <MdChildFriendly />
                  <p>Infants</p>
                </div>
                <p className="text-xs text-slate-400">
                  Under 2 years at time of travel
                </p>
              </div>
              <div className="flex items-center gap-1">
                <button onClick={infantSubtract} className="hover:bg-[#8DD3BB]">
                  <FiMinusCircle />
                </button>
                <div>{infantQuantity}</div>
                <button onClick={infantAdd} className="hover:bg-[#8DD3BB]">
                  <FiPlusCircle />
                </button>
              </div>
            </div>
          </div>
        </Typography>
      </Popover>
    </div>
  );
}
