import React from "react";

export default function VehiclesSelector({ title, onSelect }) {
  const handleChange = (event) => {
    onSelect(event.target.value);
  };

  return (
    <>
      <select
        onChange={handleChange}
        name="vehiculos"
        className="select select-bordered select-lg w-full mt-2 font-medium text-lg border-2 border-gray-200"
      >
        <option disabled selected>
          {title}
        </option>
        <option value="A">Automóviles</option>
        <option value="B">Autobuses</option>
        <option value="C">Camiones</option>
        <option value="1">Motocicleta </option>
        <option value="10">Camión 3 ejes </option>
        <option value="11">Camión 4 ejes </option>
        <option value="12">Camión 5 ejes </option>
        <option value="13">Camión 6 ejes </option>
        <option value="14">Camión 7 ejes </option>
        <option value="15">Camión 8 ejes </option>
        <option value="16">Camión 9 ejes </option>
        <option value="2">Automóvil </option>
        <option value="3">Automóvil remolque 1 eje </option>
        <option value="4">Automóvil remolque 2 eje </option>
        <option value="5">Pick Ups </option>
        <option value="6">Autobus 2 ejes </option>
        <option value="7">Autobus 3 ejes </option>
        <option value="8">Autobus 4 ejes </option>
        <option value="9">Camión 2 ejes </option>
      </select>
    </>
  );
}
