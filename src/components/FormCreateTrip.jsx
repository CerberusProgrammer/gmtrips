import { useEffect, useState } from "react";
import TripSelector from "./TripSelector";
import ListCheckbox from "./ListCheckbox";
import InputNumber from "./InputNumber";
import VehiclesSelector from "./VehiclesSelector";
import FilledButton from "./util/FilledButton";
import { domain } from "../domain";
import CircularLoader from "./util/CircularLoader";

export default function FormCreateTrip() {
  const [initialDestination, setInitialDestination] = useState("");
  const [finalDestination, setFinalDestination] = useState("");
  const [destinations, setDestinations] = useState([]);
  const [isRoundTrip, setIsRoundTrip] = useState(false);
  const [passengerCount, setPassengerCount] = useState(0);
  const [vehicleType, setVehicleType] = useState("");
  const [isButtonEnabled, setIsButtonEnabled] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");

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
      vehicleType &&
      selectedDate &&
      selectedTime
    ) {
      setIsButtonEnabled(true);
    } else {
      setIsButtonEnabled(false);
    }
  }, [
    initialDestination,
    finalDestination,
    passengerCount,
    vehicleType,
    selectedDate,
    selectedTime,
  ]);

  const handleContinue = async () => {
    setIsLoading(true);

    const token = localStorage.getItem("token");

    const dateTime = new Date(`${selectedDate}T${selectedTime}`);

    const isoDateTime = dateTime.toISOString();

    const response = await fetch(`${domain}/api/trips/generate/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`,
      },
      body: JSON.stringify({
        destinations: destinations,
        passengers: passengerCount,
        vehicle: vehicleType,
        datetime: isoDateTime,
      }),
    });

    console.log(
      JSON.stringify({
        destinations: destinations,
        passengers: passengerCount,
        vehicle: vehicleType,
        datetime: isoDateTime,
      })
    );

    const data = await response.json();

    window.location.href = `/routes/${data["id"]}`;

    setIsLoading(false);
    resetData();
  };

  const resetData = () => {
    setInitialDestination("");
    setFinalDestination("");
    setDestinations([]);
    setIsRoundTrip(false);
    setPassengerCount(0);
    setVehicleType("");
    setSelectedDate("");
    setSelectedTime("");
  };

  return (
    <>
      {isLoading ? (
        <CircularLoader></CircularLoader>
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
          <div className="grid grid-cols-2">
            <div className="pr-2">
              <input
                type="date"
                onChange={(e) => setSelectedDate(e.target.value)}
                className="form-control rounded-lg px-4 py-4 w-full font-medium text-lg border-2 border-gray-200"
              />
            </div>
            <input
              type="time"
              onChange={(e) => setSelectedTime(e.target.value)}
              className="form-control rounded-lg px-4 py-4 w-full font-medium text-lg border-2 border-gray-200"
            />
          </div>
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
