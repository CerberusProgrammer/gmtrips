import { useState } from "react";
import type { Route } from "../models/Route";

interface RouteCarouselProps {
  routes: Route[];
}

export default function RouteCarousel({ routes }: RouteCarouselProps) {
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
          <div className="bg-white rounded-lg px-16 py-4 text-xl font-bold">
            <p>{route.name}</p>
            <p>{route.length} KM</p>
            <p>{route.time} Horas</p>
            {route.stand ? (
              <>
                <p>
                  {route.stand.name} ${route.stand.vehicles[0].cost} MXN
                </p>
              </>
            ) : (
              <></>
            )}
            <h1 className=" opacity-50">Ruta #{index + 1}</h1>
          </div>
        </div>
      ))}
      <button onClick={goPrev} className="absolute left-2 top-2 btn btn-circle">
        ❮
      </button>
      <button
        onClick={goNext}
        className="absolute right-2 top-2 btn btn-circle"
      >
        ❯
      </button>
    </div>
  );
}
