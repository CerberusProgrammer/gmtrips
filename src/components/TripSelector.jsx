export default function TripSelector({ title, onSelect, disabledValue }) {
  const handleChange = (event) => {
    onSelect(event.target.value);
  };

  return (
    <div>
      <select
        defaultValue=""
        onChange={handleChange}
        className="select select-bordered select-lg w-full font-medium text-xl border-2 border-gray-200"
      >
        <option disabled value="">
          {title}
        </option>
        <option disabled={disabledValue === "Mexicali"} value="Mexicali">
          Mexicali
        </option>
        <option disabled={disabledValue === "Rosarito"} value="Rosarito">
          Rosarito
        </option>
        <option disabled={disabledValue === "Tecate"} value="Tecate">
          Tecate
        </option>
        <option disabled={disabledValue === "Tijuana"} value="Tijuana">
          Tijuana
        </option>
        <option disabled={disabledValue === "Ensenada"} value="Ensenada">
          Ensenada
        </option>
      </select>
    </div>
  );
}
