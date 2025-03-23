import { FormEvent, useContext, useState } from "react";
import { AvailableIntervalsContext } from "../../context/AvailableIntervals";
import { Button } from "@progress/kendo-react-buttons";
import ToggleIntervalCheckbox from "./ToggleIntervalCheckbox";
import ToggleDirectionCheckbox from "./ToggleDirectionCheckbox";
import EmptyInputsErrorNotification from "../EmptyInputsErrorNotification";
import {
  AllOrNone,
  DirectionsInterface,
  EmptyInputsErrorType,
  IntervalsInterface,
} from "../../types";
import "./IntervalOptions.css";

interface Props {
  setSettingsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const IntervalOptions = ({ setSettingsOpen }: Props) => {
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

  const [intervalsIncluded, setIntervalsIncluded] = useState<AllOrNone>("all");

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

    // and close the modal
    setSettingsOpen(false);

    return;
  };

  return (
    <div
      onClick={() => {
        setSettingsOpen(false);
      }}
      className="settings-container"
    >
      <section
        onClick={(e) => {
          e.stopPropagation();
        }}
        className="settings-content"
      >
        <div className="customize-intervals-section main-container">
          <div className="header-and-close row">
            <h2 className="customize-intervals-header">Options</h2>
            <button
              className="settings-close-button"
              onClick={() => {
                setSettingsOpen(false);
              }}
            >
              Close
            </button>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="intervals-and-directions-container col">
              <fieldset className="intervals-included-section">
                <legend>Intervals To Include</legend>
                <div className="user-select-inputs row">
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
                  <div className="select-unselect-all-btn-container row">
                    <Button
                      size="small"
                      className="select-unselect-all-btn"
                      type="button"
                      onClick={() => {
                        if (intervalsIncluded === "none") {
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
                        } else if (intervalsIncluded === "all") {
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
                    </Button>
                  </div>
                </div>
                <div className="notification-container">
                  <EmptyInputsErrorNotification
                    errorObj={intervalOptionsError}
                    setErrorObj={setIntervalOptionsError}
                    specificError="noIntervalsIncluded"
                    direction="up"
                  />
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
    </div>
  );
};

export default IntervalOptions;
