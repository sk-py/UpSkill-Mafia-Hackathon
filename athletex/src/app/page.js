"use client";

import Link from "next/link";
import FAQ from "./components/FAQ.jsx";
import Carousel from "./components/Carousel.jsx";

export default function Home() {
  return (
    <>
      <section>
        <div className="container px-6 py-16 mx-auto my-5 text-center">
          <div className="max-w-lg mx-auto">
            <h1 className="text-3xl font-semibold text-gray-800 dark:text-white lg:text-4xl">
              Connect with Fellow Sports Enthusiasts
            </h1>
            <p className="mt-6 text-gray-500 dark:text-gray-300">
              Join our vibrant community to find like-minded individuals near
              you, discover exciting events, and engage in your favorite sports
              activities.
            </p>
            <Link href={"/login"}>
              <button className="px-5 py-2 mt-6 text-sm font-medium leading-5 text-center text-white capitalize bg-blue-600 rounded-lg hover:bg-blue-500 lg:mx-0 lg:w-auto focus:outline-none">
                Join Now
              </button>
            </Link>
          </div>

          <div className="flex justify-center mt-10">
            <img
              className="object-cover w-full h-96 rounded-xl lg:w-4/5"
              src="/Hero.webp"
              alt="App"
            />
          </div>
        </div>
        <Carousel />
        <FAQ />
      </section>
    </>
  );
}
