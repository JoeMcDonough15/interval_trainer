import { FormEvent, useContext, useState } from "react";
import {
  AvailableIntervalsContext,
  DirectionsInterface,
  IntervalsInterface,
} from "../../context/AvailableIntervals";
import { Button } from "@progress/kendo-react-buttons";
import ToggleIntervalCheckbox from "./ToggleIntervalCheckbox";
import ToggleDirectionCheckbox from "./ToggleDirectionCheckbox";
import { EmptyInputsErrorType } from "../IntervalSelection/IntervalSelection";
import EmptyInputsError from "../EmptyInputsError";
import "./IntervalOptions.css";

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
    {} as EmptyInputsErrorType
  );

  const handleError = () => {
    const errors: EmptyInputsErrorType = {};
    const intervalNames = Object.values(intervals);
    if (intervalNames.every((intervalChosen) => !intervalChosen)) {
      errors.noIntervalsIncluded =
        "Please include at least one interval for testing";
    }

    const directionNames = Object.values(directions);
    if (directionNames.every((directionChosen) => !directionChosen)) {
      errors.noDirectionsIncluded =
        "Please include at least one interval direction for testing";
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
          <EmptyInputsError
            errorObj={intervalOptionsError}
            setErrorObj={setIntervalOptionsError}
            specificError="noIntervalsIncluded"
          />
          <legend>Intervals To Include</legend>
          <div className="row user-select-inputs">
            {Object.keys(availableIntervals).map((interval) => {
              return (
                <ToggleIntervalCheckbox
                  key={interval}
                  intervalName={interval}
                  setIntervals={setIntervals}
                />
              );
            })}
          </div>
        </fieldset>
        <fieldset>
          <legend>Directions To Include</legend>
          <EmptyInputsError
            errorObj={intervalOptionsError}
            setErrorObj={setIntervalOptionsError}
            specificError="noDirectionsIncluded"
          />
          <div className="row user-select-inputs">
            {Object.keys(availableDirections).map((direction) => {
              return (
                <ToggleDirectionCheckbox
                  key={direction}
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
