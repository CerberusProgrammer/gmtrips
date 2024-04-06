import React, { useState, useRef } from "react";
import TripSelector from "./TripSelector";
import ListCheckbox from "./ListCheckbox";
import InputNumber from "./InputNumber";
import VehiclesSelector from "./VehiclesSelector";
import FilledButton from "./FilledButton";

export default function FormCreateTrip() {
  const [initialDestination, setInitialDestination] = useState("");
  const [finalDestination, setFinalDestination] = useState("");
  const [isRoundTrip, setIsRoundTrip] = useState(false);
  const [passengerCount, setPassengerCount] = useState(0);
  const [vehicleType, setVehicleType] = useState("");

  const handleContinue = () => {
    console.log(`Initial Destination: ${initialDestination}`);
    console.log(`Final Destination: ${finalDestination}`);
    console.log(`Is Round Trip: ${isRoundTrip}`);
    console.log(`Passenger Count: ${passengerCount}`);
    console.log(`Vehicle Type: ${vehicleType}`);
  };

  return (
    <>
      <div className="space-y-2">
        <div className="grid grid-cols-2">
          <div className="pr-2">
            <TripSelector
              title="Destino inicial"
              onSelect={setInitialDestination}
            />
          </div>
          <TripSelector title="Destino final" onSelect={setFinalDestination} />
        </div>
        <div className="mt-2"></div>
        <ListCheckbox onCheck={setIsRoundTrip} />
        <InputNumber
          title="Cantidad de pasajeros"
          onInput={setPassengerCount}
        />
        <VehiclesSelector title="Tipo de vehiculo" onSelect={setVehicleType} />
        <div className="grid grid-cols-2">
          <div></div>
          <FilledButton
            title="Continuar"
            enabled={true}
            onTap={handleContinue}
          />
        </div>
      </div>
    </>
  );
}