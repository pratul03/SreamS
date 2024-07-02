import type { NextPage } from "next";
import Header from "../components/Header";
import { useState, useEffect } from "react";
import Image from "next/image";
import Carousel from "../components/carousel/Carousel";
import card1 from "../public/demonslayer.jpg";
import card2 from "../public/garndson.jpg";
import card3 from "../public/onepiece.jpg";
import card4 from "../public/alya.jpg";
import card5 from "../public/jjk.jpg";
import card6 from "../public/joblessre.png";
import Head from "next/head";

// This is the main part of our app
const Home: NextPage = () => {
  const [message, setMessage] = useState<string>(
    "Any hidden gems in the anime world you think more people should know about? 💎"
  );
  useEffect(() => {
    const messages = [
      "Just finished Attack on Titan! That ending blew my mind! 🤯 What did you think about it?",
      "Binge-watching My Hero Academia this weekend! Who's your favorite hero? 💥",
      "I can't get over the animation quality in Demon Slayer! Which episode stood out the most for you? 🔥",
      "Starting Jujutsu Kaisen tonight! Any tips on what to look forward to? 👊",
      "The latest episode of One Piece was epic! 🚢 How do you think the series will end?",
      "Rewatching Fullmetal Alchemist: Brotherhood—it never gets old! 🔧 Which character's arc moved you the most?",
      "Just discovered Your Lie in April. The music and story are beautiful! 🎹 What other emotional anime do you recommend?",
      "Can't wait for the next season of Haikyuu!! 🏐 Who's your top pick for the best match so far?",
      "Any hidden gems in the anime world you think more people should know about? 💎",
      "If you could live in any anime universe, which one would it be and why? 🌏",
    ];
    const randomIndex = Math.floor(Math.random() * messages.length);
    setMessage(messages[randomIndex]);
  });

  //List of images
  const imageItems = [
    <Image src={card1} alt="card image" className="h-full w-full" />,
    <Image src={card2} alt="card image" className="h-full w-full" />,
    <Image src={card3} alt="card image" className="h-full w-full" />,
    <Image src={card4} alt="card image" className="h-full w-full" />,
    <Image src={card5} alt="card image" className="h-full w-full" />,
    <Image src={card6} alt="card image" className="h-full w-full" />,
  ];

  return (
    <div className="h-screen w-screen overflow-hidden bg-bg text-white">
      <Head>
        <title>This is SibuFlix.</title>
        <link rel="icon" href="logo.svg" />
      </Head>
      <Header className="fixed top-0 z-20 w-full" />

      <main className="flex w-full flex-1 flex-col items-center justify-center px-20 pt-20 text-center">
        <div className="mbb-10 flex flex-col justify-center space-y-6">
          <h1 className="text-4xl font-semibold md:text-5xl">{message}</h1>
          <p className="text-center text-xs opacity-75">
            Weebs glad to have you🖐️
          </p>
        </div>
        <Carousel items={imageItems} />
      </main>
    </div>
  );
};

export default Home;
