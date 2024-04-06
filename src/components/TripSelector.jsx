import React from "react";

export default function TripSelector({ title, onSelect }) {
  const handleChange = (event) => {
    onSelect(event.target.value);
  };

  return (
    <div>
      <select
        onChange={handleChange}
        className="select select-bordered select-lg w-full font-medium text-lg border-2 border-gray-200"
      >
        <option disabled selected>
          {title}
        </option>
        <option>Mexicali</option>
        <option>Rosarito</option>
        <option>Tecate</option>
        <option>Tijuana</option>
        <option>Ensenada</option>
      </select>
    </div>
  );
}
