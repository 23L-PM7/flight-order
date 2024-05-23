import React from "react";
import Kekw from "../destination/Kekw";
import ChooseCard from "./ChooseCard";


const Trip = () => {

  return (
    <div className="m-auto flex w-10/12 flex-col gap-10">
      <div className="flex flex-col gap-10">
        <Kekw />
        <ChooseCard />
      </div>
    </div>
  );
};

export default Trip;
