"use client";

import React from "react";
import Header from "../components/Header";
import { usePathname } from "next/navigation";
import { PathFinder } from "../Utils/PathFinder";
import EventCard from "../components/EventCard";

const page = () => {
  const pathname = usePathname();
  const path = PathFinder(pathname);

  const DummyCardsArray = [
    {
      happeningOn: "Mar 20, 2024",
      location: "Mumbra",
      eventName: "Volleyball Tournament",
      description:
        "Yearly Volleyball tournament will be happening at Shibli Nagar, Mumbra on 20th of March 2024. Organised by chairman of shibli complex. With Total cash prize of 60,000, the team securing first position will be awarded with trophy and 30,000 cash prize ",
      postedBy: "Shahbaz Shaikh",
      profileUrl:
        "https://images.unsplash.com/photo-1502980426475-b83966705988?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=40&q=80",
    },
    {
      happeningOn: "Apr 5, 2024",
      location: "London",
      eventName: "London Marathon",
      description:
        "The London Marathon is an annual marathon held in London, United Kingdom. The event was first run on 29 March 1981 and has been held in the spring of every year since. The marathon is currently sponsored by Virgin Money.",
      postedBy: "John Doe",
      profileUrl:
        "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=4&w=880&h=880&q=100",
    },
    {
      happeningOn: "May 15, 2024",
      location: "Chennai",
      eventName: "Tennis Open",
      description:
        "Experience the thrill of the Tennis Open at SDAT Tennis Stadium, Chennai on May 15, 2024. Cheer on your favorite players as they compete for victory.",
      postedBy: "Priya Singh",
      profileUrl:
        "https://images.unsplash.com/photo-1485178575877-1a13bf489dfe?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=4&w=1401&h=1401&q=80",
    },
    {
      happeningOn: "Jun 20, 2024",
      location: "Kolkata",
      eventName: "Football Championship",
      description:
        "The Football Championship is coming to Salt Lake Stadium, Kolkata on June 20, 2024. Get ready for intense matches and unforgettable moments.",
      postedBy: "Amit Patel",
      profileUrl:
        "https://images.unsplash.com/photo-1639149888905-fb39731f2e6c?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      happeningOn: "May 10, 2024",
      location: "New York City",
      eventName: "Basketball Championship",
      description:
        "The annual Basketball Championship will be held at Madison Square Garden in New York City on May 10, 2024. Don't miss out on the excitement as the top teams compete for the title.",
      postedBy: "Alex Smith",
      profileUrl:
        "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=4&w=880&h=880&q=80",
    },
    {
      happeningOn: "Jun 15, 2024",
      location: "Los Angeles",
      eventName: "Surfing Competition",
      description:
        "Join us for the annual Surfing Competition at Venice Beach in Los Angeles on June 15, 2024. Whether you're a seasoned pro or just starting out, there's something for everyone at this exciting event.",
      postedBy: "Michael Johnson",
      profileUrl:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzB8fHVzZXJ8ZW58MHx8MHx8fDA%3D",
    },
    {
      happeningOn: "Jul 20, 2024",
      location: "Tokyo",
      eventName: "Olympic Games",
      description:
        "The Olympic Games are coming to Tokyo! Join us for this historic event as athletes from around the world compete for gold. With competitions in a wide range of sports, there's something for everyone to enjoy.",
      postedBy: "Emily Wilson",
      profileUrl:
        "https://plus.unsplash.com/premium_photo-1688350808212-4e6908a03925?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fHVzZXJ8ZW58MHx8MHx8fDA%3D",
    },
    {
      happeningOn: "Apr 10, 2024",
      location: "Mumbai",
      eventName: "Cricket Tournament",
      description:
        "Don't miss the Cricket Tournament at Wankhede Stadium, Mumbai on April 10, 2024. Watch as the top teams battle it out for the championship title.",
      postedBy: "Rahul Gupta",
      profileUrl:
        "https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      happeningOn: "Jul 25, 2024",
      location: "Bangalore",
      eventName: "Badminton Masters",
      description:
        "Join us for the Badminton Masters at Koramangala Indoor Stadium, Bangalore on July 25, 2024. Witness top players showcase their skills in exciting matches.",
      postedBy: "Vikram Rao",
      profileUrl:
        "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?q=80&w=1978&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      happeningOn: "Aug 30, 2024",
      location: "Delhi",
      eventName: "Athletics Meet",
      description:
        "Don't miss the Athletics Meet at Jawaharlal Nehru Stadium, Delhi on August 30, 2024. Watch athletes compete in various track and field events.",
      postedBy: "Ananya Sharma",
      profileUrl:
        "https://images.unsplash.com/photo-1605993439219-9d09d2020fa5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzR8fHVzZXJ8ZW58MHx8MHx8fDA%3D",
    },
  ];

  return (
    <>
      <Header link={path} />
      <div className="w-[95vw] m-auto flex flex-col items-center justify-center gap-4 mt-6">
        <span className="text-center text-3xl">Upcoming events</span>
        {DummyCardsArray.map((event, index) => {
          return (
            <EventCard
              happeningOn={event.happeningOn}
              location={event.location}
              eventName={event.eventName}
              description={event.description}
              postedBy={event.postedBy}
              profileUrl={event.profileUrl}
              key={index}
            />
          );
        })}
      </div>
    </>
  );
};

export default page;
