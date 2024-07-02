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
  const [showVideo, setShowVideo] = useState(false);
  const [episodes, setEpisodes] = useState([]);
  const [selectedEpisode, setSelectedEpisode] = useState<number | null>(null);
  const [selectedTitle, setSelectedTitle] = useState<string>("Series_first");

  useEffect(() => {
    const fetchEpisode = async () => {
      const response = await fetch(`/api/episodes?title${selectedTitle}`);
      const data = await response.json();
      setEpisodes(data);
    };

    fetchEpisode();

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
  }, [selectedTitle]);

  const handleImageClick = (title: string) => {
    setSelectedEpisode(0);
    setSelectedTitle(title);
    setShowVideo(true);
  };

  const handleEpisodeClick = (index: number) => {
    setSelectedEpisode(index);
  };

  //List of images
  const imageItems = [
    <Image
      src={card1}
      alt="card image"
      className="h-full w-full"
      onClick={() => handleImageClick("Series_first")}
    />,
    <Image
      src={card2}
      alt="card image"
      className="h-full w-full"
      onClick={() => handleImageClick("Series_second")}
    />,
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
        {!showVideo && (
          <div className="mbb-10 flex flex-col justify-center space-y-6">
            <h1 className="text-4xl font-semibold md:text-5xl">{message}</h1>
            <p className="text-center text-xs opacity-75">
              Weebs glad to have you🖐️
            </p>
          </div>
        )}

        {showVideo && selectedEpisode !== null && episodes.length > 0 ? (
          <div className="video-section flex flex-col items-center">
            <div className="video-container overflow-hidden rounded-lg">
              <video
                key={episodes[selectedEpisode].video}
                controls
                className="h-auto w-full"
              >
                <source
                  src={`/${selectedTitle}/${episodes[selectedEpisode].video}`}
                  type="video/mp4"
                />
                <track
                  src={`/${selectedTitle}/${episodes[selectedEpisode].subtitle}`}
                  kind="subtitle"
                  srcLang="en"
                  label="English"
                  default
                />
              </video>
            </div>

            <div className="episodes-list-container mt-4 w-full max-w-md overflow-y-auto">
              <div className="episodes-list">
                {episodes.map((episode, index) => (
                  <div
                    key={index}
                    className="episode-item mb-4 flex cursor-pointer items-center justify-center rounded bg-gradient-to-r from-purple-600 p-4"
                    onClick={() => handleEpisodeClick(index)}
                  >
                    <div className="flex items-center">
                      <img
                        src="/play.png"
                        alt="play button"
                        className="mr-2 h-6 w-6"
                      />
                      <span className="font-semibold text-white">
                        Episode {index + 1}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ) : (
          <Carousel items={imageItems} />
        )}
      </main>
    </div>
  );
};

export default Home;
