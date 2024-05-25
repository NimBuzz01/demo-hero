"use client";
import Header from "@/components/Header";
import Image from "@/components/Image";
import Loader from "@/components/Loader";
import Subtitle from "@/components/Subtitle";
import Title from "@/components/Title";
import { AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      setTimeout(() => {
        setLoading(false);
        document.body.style.cursor = "default";
        window.scrollTo(0, 0);
      }, 2000);
    })();
  }, []);

  return (
    <main className="min-h-screen bg-[#fcf6e3] text-[#322C2B]">
      <AnimatePresence mode="wait">
        <Header key={2} />
        {loading && <Loader key={1} />}
        <div className="flex flex-col lg:flex-row gap-10 p-6 sm:p-10 items-center justify-center min-h-screen pt-24 sm:pt-40 lg:pt-20">
          <div className="flex flex-col gap-6 sm:gap-10 lg:w-3/5 w-full">
            <Title
              text="Welcome to Plantica - Where Creativity Blooms!"
              key={2}
            />
            <Subtitle
              text="Experience the magic of flowers at Plantica, founded by Takashi Kimura. From elegant arrangements to stunning displays, we bring nature's beauty to life."
              key={3}
            />
          </div>
          <Image className="lg:w-2/5 w-full" />
        </div>
      </AnimatePresence>
    </main>
  );
}
