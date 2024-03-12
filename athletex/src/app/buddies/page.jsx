"use client";

import { usePathname } from "next/navigation";
import Header from "../components/Header";
import { PathFinder } from "../Utils/PathFinder";

const Buddies = () => {
  const pathname = usePathname();
  const path = PathFinder(pathname);
  return <Header link={path} />;
};

export default Buddies;
