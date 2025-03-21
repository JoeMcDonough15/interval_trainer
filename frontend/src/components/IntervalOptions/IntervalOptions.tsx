import { FormEvent, useContext, useState } from "react";
import { AvailableIntervalsContext } from "../../context/AvailableIntervals";
import { Button } from "@progress/kendo-react-buttons";
import ToggleIntervalCheckbox from "./ToggleIntervalCheckbox";
import ToggleDirectionCheckbox from "./ToggleDirectionCheckbox";
import EmptyInputsError from "../EmptyInputsError";
import "./IntervalOptions.css";
import {
  DirectionsInterface,
  EmptyInputsErrorType,
  IntervalsInterface,
} from "../../types";

interface Props {
  settingsOpen: boolean;
}

const IntervalOptions = ({ settingsOpen }: Props) => {
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

  const [noIntervalsSelected, setNoIntervalsSelected] = useState(false);

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
      {/* <button
        className="display-options-button"
        onClick={() => {
          setSettingsOpen((prevState) => {
            return !prevState;
          });
        }}
      >
        {settingsOpen ? "Hide" : "Show"} Options
      </button> */}
      <div
        className={`collapsable-options-container ${
          settingsOpen ? "open" : ""
        }`}
      >
        <form onSubmit={handleSubmit}>
          <div className="intervals-and-directions-container">
            <fieldset className="intervals-included-section">
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
                      intervals={intervals}
                    />
                  );
                })}
                <button
                  type="button"
                  onClick={() => {
                    if (noIntervalsSelected) {
                      setIntervals({
                        Unison: true,
                        min2: true,
                        Maj2: true,
                        min3: true,
                        Maj3: true,
                        P4: true,
                        Tritone: true,
                        P5: true,
                        min6: true,
                        Maj6: true,
                        min7: true,
                        Maj7: true,
                        Octave: true,
                      });
                      setNoIntervalsSelected(false);
                    } else {
                      setIntervals({
                        Unison: false,
                        min2: false,
                        Maj2: false,
                        min3: false,
                        Maj3: false,
                        P4: false,
                        Tritone: false,
                        P5: false,
                        min6: false,
                        Maj6: false,
                        min7: false,
                        Maj7: false,
                        Octave: false,
                      });
                      setNoIntervalsSelected(true);
                    }
                  }}
                >
                  {noIntervalsSelected ? "Select" : "Unselect"} All
                </button>
              </div>
            </fieldset>
            <fieldset className="directions-included-section">
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
          </div>

          <Button>Apply Changes</Button>
        </form>
      </div>
    </section>
  );
};

export default IntervalOptions;
