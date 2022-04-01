import React, { useEffect, useState } from "react";
import { useSwipeable } from "react-swipeable";
import "./Carousel.css";

import spriteLeft from "./imgs/spriteLeft.png";
import spriteRight from "./imgs/spriteRight.png";

export const CarouselItem = ({ children, width }) => {
  return (
    <div className="carousel-item" style={{ width: width }}>
      {children}
    </div>
  );
};

const CarouselMobile = ({ children }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  const updateIndex = (newIndex) => {
    if (newIndex < 0) {
      newIndex = React.Children.count(children) - 1;
    } else if (newIndex >= React.Children.count(children)) {
      newIndex = 0;
    }

    setActiveIndex(newIndex);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (!paused) {
        updateIndex(activeIndex + 1);
      }
    }, 3000);

    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  });

  const handlers = useSwipeable({
    onSwipedLeft: () => updateIndex(activeIndex + 1),
    onSwipedRight: () => updateIndex(activeIndex - 1),
  });

  return (
    <div
      {...handlers}
      className="carousel"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div
        className="inner"
        style={{ transform: `translateX(-${activeIndex * 100}%)` }}
      >
        {React.Children.map(children, (child, index) => {
          return React.cloneElement(child, { width: "100%" });
        })}
      </div>
      <div className="slideNav">
        <button
          id="leftBtn"
          onClick={() => {
            updateIndex(activeIndex - 1);
          }}
        >
          <img src={spriteLeft} />
        </button>
        <button
          id="rightBtn"
          onClick={() => {
            updateIndex(activeIndex + 1);
          }}
        >
          <img src={spriteRight} />
        </button>
      </div>
      <div className="indicators">
        {React.Children.map(children, (child, index) => {
          return (
            <button
              id="indicatorButton"
              className={`${index === activeIndex ? "active" : ""}`}
              onClick={() => {
                updateIndex(index);
              }}
            >
              {""}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default CarouselMobile;
