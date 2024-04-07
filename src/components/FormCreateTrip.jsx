import { useEffect, useState } from "react";
import TripSelector from "./TripSelector";
import ListCheckbox from "./ListCheckbox";
import InputNumber from "./InputNumber";
import VehiclesSelector from "./VehiclesSelector";
import FilledButton from "./FilledButton";

export default function FormCreateTrip() {
  const [initialDestination, setInitialDestination] = useState("");
  const [finalDestination, setFinalDestination] = useState("");
  const [destinations, setDestinations] = useState([]);
  const [isRoundTrip, setIsRoundTrip] = useState(false);
  const [passengerCount, setPassengerCount] = useState(0);
  const [vehicleType, setVehicleType] = useState("");
  const [isButtonEnabled, setIsButtonEnabled] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    let newDestinations = [initialDestination, finalDestination];
    if (isRoundTrip) {
      newDestinations.push(initialDestination);
    }
    setDestinations(newDestinations);
  }, [initialDestination, finalDestination, isRoundTrip]);

  useEffect(() => {
    if (
      initialDestination &&
      finalDestination &&
      passengerCount > 0 &&
      vehicleType
    ) {
      setIsButtonEnabled(true);
    } else {
      setIsButtonEnabled(false);
    }
  }, [initialDestination, finalDestination, passengerCount, vehicleType]);

  const handleContinue = async () => {
    console.log(`Initial Destination: ${initialDestination}`);
    console.log(`Final Destination: ${finalDestination}`);
    console.log(`Destinations: ${destinations}`);
    console.log(`Is Round Trip: ${isRoundTrip}`);
    console.log(`Passenger Count: ${passengerCount}`);
    console.log(`Vehicle Type: ${vehicleType}`);

    setIsLoading(true);

    const response = await fetch("https://jsonplaceholder.typicode.com/users", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      // body: JSON.stringify({
      //   initialDestination,
      //   finalDestination,
      //   isRoundTrip,
      //   passengerCount,
      //   vehicleType,
      // }),
    });

    const data = await response.json();
    console.log(data);
    window.location.href = "/routes/";

    setIsLoading(false);
  };

  return (
    <>
      {isLoading ? (
        <span className="loading loading-spinner loading-lg bg-orange-500"></span>
      ) : (
        <div className="space-y-2">
          <div className="grid grid-cols-2">
            <div className="pr-2">
              <TripSelector
                title="Destino inicial"
                onSelect={setInitialDestination}
                disabledValue={finalDestination}
              />
            </div>
            <TripSelector
              title="Destino final"
              onSelect={setFinalDestination}
              disabledValue={initialDestination}
            />
          </div>
          <div className="mt-2"></div>
          <ListCheckbox onCheck={setIsRoundTrip} />
          <InputNumber
            title="Cantidad de pasajeros"
            onInput={setPassengerCount}
          />
          <VehiclesSelector
            title="Tipo de vehiculo"
            onSelect={setVehicleType}
          />
          <div className="grid grid-cols-2">
            <div></div>
            <FilledButton
              title="Generar"
              enabled={isButtonEnabled}
              onTap={handleContinue}
            />
          </div>
        </div>
      )}
    </>
  );
}
