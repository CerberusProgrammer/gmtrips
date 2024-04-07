import { useState } from "react";

export default function RouteCarousel({ routes }) {
  const [activeIndex, setActiveIndex] = useState(0);

  const goNext = () => {
    setActiveIndex((activeIndex + 1) % routes.length);
  };

  const goPrev = () => {
    setActiveIndex((activeIndex - 1 + routes.length) % routes.length);
  };

  return (
    <div className="relative w-full">
      {routes.map((route, index) => (
        <div
          key={route.id}
          className={`absolute w-full transition-opacity duration-500 ${
            index === activeIndex ? "opacity-100" : "opacity-0"
          }`}
        >
          <p>{route.name}</p>
        </div>
      ))}
      <button onClick={goPrev} className="absolute left-0 btn btn-circle">
        ❮
      </button>
      <button onClick={goNext} className="absolute right-0 btn btn-circle">
        ❯
      </button>
    </div>
  );
}
