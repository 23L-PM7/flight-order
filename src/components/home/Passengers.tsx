"use client";

import * as React from "react";
import Popover from "@mui/material/Popover";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { IoMdPersonAdd } from "react-icons/io";
import { GiPerson } from "react-icons/gi";
import { FaChild } from "react-icons/fa6";
import { MdChildFriendly } from "react-icons/md";
import { FiPlusCircle } from "react-icons/fi";
import { FiMinusCircle } from "react-icons/fi";
import { useState } from "react";

export function Passengers() {
  const [anchorEl, setAnchorEl] = useState(null);
  const [adultQuantity, setAdultQuantity] = useState<number>(1);
  const [childQuantity, setChildQuantity] = useState<number>(1);
  const [infantQuantity, setInfantQuantity] = useState<number>(1);

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
    setAdultQuantity(adultQuantity - 1);
  };

  const childAdd = () => {
    setChildQuantity(childQuantity + 1);
  };

  const childSubtract = () => {
    setChildQuantity(childQuantity - 1);
  };

  const infantAdd = () => {
    setInfantQuantity(infantQuantity + 1);
  };

  const infantSubtract = () => {
    setInfantQuantity(infantQuantity - 1);
  };

  console.log(adultQuantity, childQuantity, infantQuantity);

  return (
    <div>
      <Button
        aria-describedby={id}
        className=" text-black gap-2"
        onClick={handleClick}
      >
        <IoMdPersonAdd />
        <div>1 Adult</div>
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
                <div className="flex items-center gap-1 mt-2">
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
                <div className="flex items-center gap-1 mt-2">
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
