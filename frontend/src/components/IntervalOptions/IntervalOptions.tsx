import { FormEvent, useContext, useState } from "react";
import {
  AvailableIntervalsContext,
  DirectionsInterface,
  IntervalsInterface,
} from "../../context/AvailableIntervals";
import { Button } from "@progress/kendo-react-buttons";
import ToggleIntervalCheckbox from "./ToggleIntervalCheckbox";
import ToggleDirectionCheckbox from "./ToggleDirectionCheckbox";
import "./IntervalOptions.css";

interface IntervalOptionsErrorInterface {
  intervalError?: string;
  directionError?: string;
}

const IntervalOptions = () => {
  const {
    availableIntervals,
    setAvailableIntervals,
    availableDirections,
    setAvailableDirections,
  } = useContext(AvailableIntervalsContext);

  const [intervals, setIntervals] = useState(
    availableIntervals as IntervalsInterface
  );
  const [directions, setDirections] = useState(
    availableDirections as DirectionsInterface
  );
  const [intervalOptionsError, setIntervalOptionsError] = useState(
    {} as IntervalOptionsErrorInterface
  );

  const handleError = () => {
    const errors: IntervalOptionsErrorInterface = {};
    const intervalNames = Object.values(intervals);
    if (intervalNames.every((intervalChosen) => !intervalChosen)) {
      errors.intervalError = "Please select at least one interval";
    }

    const directionNames = Object.values(directions);
    if (directionNames.every((directionChosen) => !directionChosen)) {
      errors.directionError = "Please select at least one interval direction";
    }

    return errors;
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    // check for errors
    const errors = handleError();
    if (Object.keys(errors).length) {
      setIntervalOptionsError(errors);
      return;
    }

    setIntervalOptionsError({});

    // if no errors, update the state of the availableIntervals and availableDirections
    setAvailableIntervals(intervals);
    setAvailableDirections(directions);
    return;
  };

  return (
    <section className="customize-intervals-section">
      <form onSubmit={handleSubmit}>
        <fieldset>
          {intervalOptionsError.intervalError && (
            <p style={{ color: "red" }}>{intervalOptionsError.intervalError}</p>
          )}
          <legend>Intervals To Include</legend>
          <div className="row user-select-inputs">
            {Object.keys(availableIntervals).map((interval) => {
              return (
                <ToggleIntervalCheckbox
                  intervalName={interval}
                  setIntervals={setIntervals}
                />
              );
            })}
          </div>
        </fieldset>
        <fieldset>
          <legend>Directions To Include</legend>
          {intervalOptionsError.directionError && (
            <p style={{ color: "red" }}>
              {intervalOptionsError.directionError}
            </p>
          )}

          <div className="row user-select-inputs">
            {Object.keys(availableDirections).map((direction) => {
              return (
                <ToggleDirectionCheckbox
                  directionName={direction}
                  setDirections={setDirections}
                />
              );
            })}
          </div>
        </fieldset>
        <Button>Apply Changes</Button>
      </form>
    </section>
  );
};

export default IntervalOptions;
