"use client"
import React from "react";
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
  return (
    <div className="grid grid-cols-3 p-4 items-center gap-4 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 xl:grid-cols-10">
      <div>{title}</div>
      <div className="hidden sm:flex">{location}</div>
      <div className="hidden sm:flex">{magnitude}</div>
      <div className="hidden sm:flex">{time}</div>
      <div className="hidden sm:flex">{tsunami}</div>
      <div className="hidden sm:flex">{type}</div>
      <div className="hidden sm:flex">
        <Link className="underline" href={url}>
          View on USGS
        </Link>
      </div>
      <div className="hidden sm:flex">{latitude}</div>
      <div className="hidden sm:flex">{longitude}</div>
      <Button
        className="rounded-full gap-0 ml-auto"
        size="sm"
        variant="outline"
      >
        View comments
      </Button>
    </div>
  );
};

export default RowComponent;
