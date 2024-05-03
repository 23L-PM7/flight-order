import Card from "@mui/joy/Card";
import { MdOutlineAirlineSeatReclineExtra } from "react-icons/md";
import { FaPlane } from "react-icons/fa";
import { FaWifi } from "react-icons/fa";
import dayjs from "dayjs";
import { IoFastFoodSharp } from "react-icons/io5";
import { WidthFull } from "@mui/icons-material";
export function FlightDetailsCard({ Flight }: any) {
  return (
    <Card variant="soft">
      <div className="flex justify-between">
        <p className="font-bold text-3xl">{Flight.aircraft}</p>
        <p className="font-bold text-red-400 text-xl">{Flight.price}</p>
      </div>
      <div className="flex justify-between  ">
        <p className=" text-xl font-bold">
          {dayjs(Flight.arrival_time).format("YYYY/MM/DD")}
        </p>
        <p className=" text-lg">{Flight.duration}</p>
      </div>
      <div className="flex justify-between my-8 ">
        <div className="font-bold flex">
          <img
            className="w-14"
            src="https://s3-alpha-sig.figma.com/img/5043/9fed/0f6d702c22dd1831e67b0be86ea8547a?Expires=1715558400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=odR8hjdp74vUxWHmwHF6iwlXJIXH26VU~PTg-54s2Vf5u9y~oZsnv2TIjVNCOQ1YXUgv1NfOyXiSpv5IY0urr0T3au8pVFlYCmwSAtyGJXTev6fPrGaIjESahohI-BWeR3ICh60ALB4EB7RGQR5yiRhnxx0gRSJAQeJ7mptH15vmglFsdVaz5otOz-vJFEVHKQZwfEc5TxgwPmcx61-n7RFr6CR8Ol2dYiCHnAlJ8U-Uap-CT1Z74dnfVth50xauNnm2ix1n9POtCGdCqF0hVon6JF~JkwzC8Os5YYO-Twr7mew1Zo4K2hdDowogX~9zkFlr4vO1cI7WmJbJccgySQ__"
          />
          {Flight.airline}
        </div>
        <div className="flex gap-4 justify-between">
          <FaPlane size={23} />
          <div className="h-[23px] w-[1px] bg-slate-400"></div>
          <FaWifi size={23} />
          <div className="h-[23px] w-[1px] bg-slate-400"></div>
          <IoFastFoodSharp size={23} />
          <div className="h-[23px] w-[1px] bg-slate-400"></div>
          <MdOutlineAirlineSeatReclineExtra size={23} />
        </div>
      </div>
      <div className="flex gap-10 text-center ">
        <div className="text-center text-2xl mt-3 ">
          {dayjs(Flight.departure_time).format("hA")}
        </div>
        <p className="text-center mt-3"> Newark(EWR)</p>
        <div className="h-[2px] w-20 bg-slate-700 mt-6"></div>
        <div className="">
          <FaPlane size={50} />
        </div>
        <div className="h-[2px] w-20 bg-slate-700 mt-6"></div>
        <div className="text-center text-2xl mt-3">
          {dayjs(Flight.arrival_time).format("hA")}
        </div>
        <p className="text-center mt-3"> Newark(EWR)</p>
      </div>
    </Card>
  );
}
