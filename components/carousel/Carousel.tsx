import React, { useState } from "react";
import CarouselItem from "./CarouselItem";
import CarouselIndicater from "./CarouselIndicater";
import { IoIosArrowBack } from "react-icons/io";

export interface CarouselProps {
  width: number;
  height: number;
  items: React.ReactNode[];
}
const Carousel = ({ width, height, items }: CarouselProps) => {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  // const [, set] = useState();

  function handlePrevItemButton() {
    setActiveIndex((prevIndex) => {
      return prevIndex - 1 >= 0 ? prevIndex - 1 : prevIndex;
    });
  }

  function handleNextItemButton() {
    setActiveIndex((prevIndex) => {
      return prevIndex + 1 < items.length ? prevIndex + 1 : prevIndex;
    });
  }

  return (
    <div className="carousel-container mt-10">
      {activeIndex > 0 && (
        <button
          className="carousel-btn-switch-card-left carousel-btn-switch-card"
          onClick={handlePrevItemButton}
        >
          <IoIosArrowBack />
        </button>
      )}

      {/** Carousel */}
      {items?.map((item, index) => (
        <CarouselItem key={index} index={index} activeIndex={activeIndex}>
          {item}
        </CarouselItem>
      ))}


      {/** Next Button */}

      {activeIndex < items.length - 1 && (
        <button
          className="carousel-btn-switch-card-right carousel-btn-switch-card"
          onClick={handleNextItemButton}>
          <IoIosArrowBack
          style={{ transform: "rotate(180deg)" }}
          />
          </button>
      )}

      {/** Indicators */}

      <CarouselIndicater
        activeIndex={activeIndex}
        length={items.length}
        onSetActiveIndex={(activeIndex) => {
        setActiveIndex(activeIndex);
        }}>
        
      </CarouselIndicater>
    </div>
  );
};

export default Carousel;
