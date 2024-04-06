import React, { useState } from "react";

export default function ListCheckbox({ onCheck }) {
  const [isChecked, setIsChecked] = useState(false);

  const handleChange = (event) => {
    onCheck(event.target.checked);
  };

  const handleDivClick = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div
      className="grid grid-cols-2 bg-white rounded-lg border-2 border-gray-200 px-4 py-4 w-full cursor-pointer"
      onClick={handleDivClick}
    >
      <p className="font-medium text-lg">¿Aplica viaje redondo?</p>
      <input
        onChange={handleChange}
        type="checkbox"
        checked={isChecked}
        className="checkbox justify-self-end"
        readOnly
      />
    </div>
  );
}
