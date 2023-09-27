/** @format */

import React from "react";

interface WeatherButtonProps {
  cities: string[];
  setCity: (city: string) => void;
  selectedCity: string;
}

const WeatherButton = ({
  cities,
  setCity,
  selectedCity,
}: WeatherButtonProps) => {
  return (
    <div className="bg-cyan-600 p-5 border rounded-lg text-white ">
      <button
        className="bg-cyan-800 p-3 hover:bg-cyan-700  rounded"
        onClick={() => setCity("")}
      >
        Current Location
      </button>
      {cities.map((city, index) => (
        <button
          className="bg-cyan-400 hover:bg-cyan-300 p-3 rounded ml-2"
          key={index}
          onClick={() => setCity(city)}
        >
          {city}
        </button>
      ))}
    </div>
  );
};

export default WeatherButton;
