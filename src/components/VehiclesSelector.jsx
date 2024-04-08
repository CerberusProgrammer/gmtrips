export default function VehiclesSelector({ title, onSelect }) {
  const handleChange = (event) => {
    onSelect(event.target.value);
  };

  return (
    <>
      <select
        defaultValue=""
        name="vehiculos"
        onChange={handleChange}
        className="select select-bordered select-lg w-full mt-2 font-medium text-xl border-2 border-gray-200"
      >
        <option disabled value="">
          {title}
        </option>
        <option value="Automóviles">Automóviles</option>
        <option value="Autobuses">Autobuses</option>
        <option value="Camiones">Camiones</option>
        <option value="Motocicleta">Motocicleta</option>
        <option value="Camión 3 ejes">Camión 3 ejes</option>
        <option value="Camión 4 ejes">Camión 4 ejes</option>
        <option value="Camión 5 ejes">Camión 5 ejes</option>
        <option value="Camión 6 ejes">Camión 6 ejes</option>
        <option value="Camión 7 ejes">Camión 7 ejes</option>
        <option value="Camión 8 ejes">Camión 8 ejes</option>
        <option value="Camión 9 ejes">Camión 9 ejes</option>
        <option value="Automóvil">Automóvil</option>
        <option value="Automóvil remolque 1 eje">
          Automóvil remolque 1 eje
        </option>
        <option value="Automóvil remolque 2 eje">
          Automóvil remolque 2 eje
        </option>
        <option value="Pick Ups">Pick Ups</option>
        <option value="Autobus 2 ejes">Autobus 2 ejes</option>
        <option value="Autobus 3 ejes">Autobus 3 ejes</option>
        <option value="Autobus 4 ejes">Autobus 4 ejes</option>
        <option value="Camión 2 ejes">Camión 2 ejes</option>
      </select>
    </>
  );
}
