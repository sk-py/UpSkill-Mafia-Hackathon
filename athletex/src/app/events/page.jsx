"use client";

import React from "react";
import Header from "../components/Header";
import { usePathname } from "next/navigation";
import { PathFinder } from "../Utils/PathFinder";

const page = () => {
  const pathname = usePathname();
  const path = PathFinder(pathname);
  return <Header link={path} />;
};

export default page;
