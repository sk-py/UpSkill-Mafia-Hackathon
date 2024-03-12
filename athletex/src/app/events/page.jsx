"use client";

import React from "react";
import Header from "../components/Header";
import { usePathname } from "next/navigation";
import { PathFinder } from "../Utils/PathFinder";
import EventCard from "../components/EventCard";

const page = () => {
  const pathname = usePathname();
  const path = PathFinder(pathname);

  const DummyCardsArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

  return (
    <>
      <Header link={path} />
      <div className="w-[95vw] m-auto flex flex-col items-center justify-center gap-4 mt-6">
        <span className="text-center text-3xl">Upcoming events</span>
        {DummyCardsArray.map((element, index) => {
          return <EventCard key={index} />;
        })}
      </div>
    </>
  );
};

export default page;
