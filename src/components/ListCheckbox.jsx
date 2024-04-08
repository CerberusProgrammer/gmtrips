import { useState } from "react";

export default function ListCheckbox({ onCheck }) {
  const [isChecked, setIsChecked] = useState(false);

  const handleDivClick = () => {
    const newCheckedState = !isChecked;
    setIsChecked(newCheckedState);
    onCheck(newCheckedState);
  };

  return (
    <div
      onClick={handleDivClick}
      className="grid grid-cols-2 bg-white rounded-lg border-2 border-gray-200 px-4 py-4 w-full cursor-pointer"
    >
      <p className="font-medium text-xl">¿Aplica viaje redondo?</p>
      <input
        type="checkbox"
        checked={isChecked}
        className="checkbox justify-self-end"
        readOnly
      />
    </div>
  );
}
