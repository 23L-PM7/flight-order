import { Button } from "@mui/joy";
import Link from "next/link";
import * as React from "react";
import { MdFlightTakeoff, MdHotel } from "react-icons/md";

interface CardTypes {
  title: string;
  description: string;
  imageSrc: string;
  buttonIcon: JSX.Element;
  altText: string;
  cardLink: string;
}

const CardData: CardTypes[] = [
  {
    title: "Flights",
    description:
      "Search Flights, Cars & Places Hire to our most popular destinations.",
    imageSrc: "/Flight.png",
    buttonIcon: <MdFlightTakeoff />,
    altText: "Image of an airplane in flight",
    cardLink: "/flightlist",
  },
  {
    title: "Rentcars",
    description:
      "Search Flights, Cars & Places Hire to our most popular destinations.",
    imageSrc: "/Rentcar.jpg",
    buttonIcon: <MdHotel />,
    altText: "Image of a hotel",
    cardLink: "/comingsoon",
  },
];

const Card = ({
  title,
  description,
  imageSrc,
  buttonIcon,
  altText,
  cardLink,
}: CardTypes) => (
  <Link href={cardLink}>
    <div className="relative w-full cursor-pointer opacity-95 hover:opacity-100">
      <img
        src={imageSrc}
        alt={altText}
        className="w-full rounded-[20px] object-cover lg:h-[600px]"
      />
      <div className="absolute bottom-0 mb-5 flex w-full flex-col gap-3 text-center text-white">
        <div className="font-bold md:text-[20px] lg:text-[40px]">{title}</div>
        <div>{description}</div>
        <div>
          <Button
            sx={{ backgroundColor: "#8DD3BB" }}
            className="text-black hover:bg-[#7cc4ab]"
            size="lg"
          >
            {buttonIcon}
            <div className="ml-2">Show {title}</div>
          </Button>
        </div>
      </div>
    </div>
  </Link>
);

export default function ChooseCard() {
  return (
    <>
      <div className="mt-20 grid justify-center gap-2 md:grid-cols-2">
        {CardData.map((card, index) => (
          <Card key={index} {...card} />
        ))}
      </div>
    </>
  );
}
