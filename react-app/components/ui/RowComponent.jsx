"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import Link from "./Link";
const RowComponent = ({
  title,
  location,
  magnitude,
  time,
  tsunami,
  type,
  url,
  latitude,
  longitude,
}) => {
  const [clicked, setClicked] = useState(1);
  const handleClick = () => {
    setClicked((n) => n + 1);
  };

  return (
    <div className="grid text-sm grid-cols-3 p-4 items-center gap-4 sm:grid-cols-5 lg:grid-cols-8 xl:grid-cols-10">
      <div>{title}</div>
      <div className="hidden sm:flex">{location}</div>
      <div className="hidden lg:flex">{magnitude}</div>
      <div className="hidden sm:flex">{time}</div>
      <div className="hidden lg:flex">{tsunami}</div>
      <div className="hidden sm:flex">{type}</div>
      <div className="hidden sm:flex">
        <Link className="underline" href={url}>
          View on USGS
        </Link>
      </div>
      <div className="hidden lg:flex">{`${latitude}`.slice(0, 8)}</div>
      <div className="hidden lg:flex">{`${longitude}`.slice(0, 8)}</div>
      <Button
        key={clicked}
        className={`rounded-full gap-0 ml-auto hidden lg:flex animate-shake`}
        variant="outline"
        onClick={handleClick}
      >
        View comments
      </Button>
    </div>
  );
};

export default RowComponent;
