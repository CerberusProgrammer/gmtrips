import { useState } from "react";

export default function ListCheckbox({ onCheck }) {
  const [isChecked, setIsChecked] = useState(false);

  const handleChange = (event) => {
    setIsChecked(event.target.checked);
    onCheck(event.target.checked);
  };

  return (
    <div className="grid grid-cols-2 bg-white rounded-lg border-2 border-gray-200 px-4 py-4 w-full cursor-pointer">
      <p className="font-medium text-lg">¿Aplica viaje redondo?</p>
      <input
        onChange={handleChange}
        type="checkbox"
        checked={isChecked}
        className="checkbox justify-self-end"
      />
    </div>
  );
}
