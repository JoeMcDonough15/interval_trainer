import { FormEvent, useContext, useState } from "react";
import { AvailableIntervalsContext } from "../../context/AvailableIntervals";
import { Button } from "@progress/kendo-react-buttons";
import ToggleIntervalCheckbox from "./ToggleIntervalCheckbox";
import ToggleDirectionCheckbox from "./ToggleDirectionCheckbox";
import EmptyInputsErrorNotification from "../EmptyInputsErrorNotification";
import {
  DirectionsInterface,
  EmptyInputsErrorType,
  IntervalsInterface,
} from "../../types";
import "./IntervalOptions.css";
import { Slide } from "@progress/kendo-react-animation";
import { Notification } from "@progress/kendo-react-notification";

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

  const [intervalsIncluded, setIntervalsIncluded] = useState("all");

  const [changesApplied, setChangesApplied] = useState(false);

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

    // since the form was successfully submitted, we should update the state of changesApplied
    // using a setTimeout so the notification appears and then disappears on its own
    setChangesApplied(true);
    setTimeout(() => {
      setChangesApplied(false);
    }, 2000);

    return;
  };

  return (
    <section className="customize-intervals-section">
      <div
        className={`collapsable-options-container main-container ${
          settingsOpen ? "open" : ""
        }`}
      >
        <form onSubmit={handleSubmit}>
          <div className="notification-container">
            <Slide>
              {changesApplied && (
                <Notification type={{ style: "success" }}>
                  <span>Changes applied</span>
                </Notification>
              )}
            </Slide>
          </div>
          <div className="intervals-and-directions-container col">
            <fieldset className="intervals-included-section">
              <div className="notification-container">
                <EmptyInputsErrorNotification
                  errorObj={intervalOptionsError}
                  setErrorObj={setIntervalOptionsError}
                  specificError="noIntervalsIncluded"
                />
              </div>
              <legend>Intervals To Include</legend>
              <div className="row user-select-inputs">
                {Object.keys(availableIntervals).map((interval) => {
                  return (
                    <ToggleIntervalCheckbox
                      key={interval}
                      intervalName={interval}
                      setIntervals={setIntervals}
                      intervals={intervals}
                      setIntervalsIncluded={setIntervalsIncluded}
                    />
                  );
                })}
                <button
                  className="select-unselect-all-btn transparent-btn"
                  type="button"
                  onClick={() => {
                    if (
                      intervalsIncluded === "none" ||
                      intervalsIncluded === "some"
                    ) {
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
                      setIntervalsIncluded("all");
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
                      setIntervalsIncluded("none");
                    }
                  }}
                >
                  {intervalsIncluded === "all" ? "Unselect" : "Select"} All
                </button>
              </div>
            </fieldset>
            <fieldset className="directions-included-section">
              <legend>Directions To Include</legend>
              <div className="notification-container">
                <EmptyInputsErrorNotification
                  errorObj={intervalOptionsError}
                  setErrorObj={setIntervalOptionsError}
                  specificError="noDirectionsIncluded"
                />
              </div>
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

          <Button className="apply-changes-btn">Apply Changes</Button>
        </form>
      </div>
    </section>
  );
};

export default IntervalOptions;
