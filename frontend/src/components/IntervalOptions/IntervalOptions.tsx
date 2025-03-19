import { FormEvent, useContext, useState } from "react";
import {
  AvailableIntervalsContext,
  DirectionsInterface,
  IntervalsInterface,
} from "../../context/AvailableIntervals";
import { Checkbox } from "@progress/kendo-react-inputs";
import { Label } from "@progress/kendo-react-labels";
import { Button } from "@progress/kendo-react-buttons";
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

    // if no errors, update the state of the availableIntervals and availableDirections
    setIntervalOptionsError({});

    return;
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <fieldset>
          {intervalOptionsError.intervalError && (
            <p style={{ color: "red" }}>{intervalOptionsError.intervalError}</p>
          )}
          <legend>Intervals To Include</legend>
          <Label>
            {" "}
            Perfect Unison
            <Checkbox
              onChange={(e) => {
                e.target.element?.checked
                  ? setIntervals((prevIntervals) => {
                      return { ...prevIntervals, Unison: true };
                    })
                  : setIntervals((prevIntervals) => {
                      return { ...prevIntervals, Unison: false };
                    });
              }}
              defaultChecked={true}
            />
          </Label>
          <Label>
            {" "}
            minor 2nd
            <Checkbox
              onChange={(e) => {
                e.target.element?.checked
                  ? setIntervals((prevIntervals) => {
                      return { ...prevIntervals, min2: true };
                    })
                  : setIntervals((prevIntervals) => {
                      return { ...prevIntervals, min2: false };
                    });
              }}
              defaultChecked={true}
            />
          </Label>
          <Label>
            {" "}
            Major 2nd
            <Checkbox
              onChange={(e) => {
                e.target.element?.checked
                  ? setIntervals((prevIntervals) => {
                      return { ...prevIntervals, Maj2: true };
                    })
                  : setIntervals((prevIntervals) => {
                      return { ...prevIntervals, Maj2: false };
                    });
              }}
              defaultChecked={true}
            />
          </Label>
          <Label>
            {" "}
            minor 3rd
            <Checkbox
              onChange={(e) => {
                e.target.element?.checked
                  ? setIntervals((prevIntervals) => {
                      return { ...prevIntervals, min3: true };
                    })
                  : setIntervals((prevIntervals) => {
                      return { ...prevIntervals, min3: false };
                    });
              }}
              defaultChecked={true}
            />
          </Label>
          <Label>
            {" "}
            Major 3rd
            <Checkbox
              onChange={(e) => {
                e.target.element?.checked
                  ? setIntervals((prevIntervals) => {
                      return { ...prevIntervals, Maj3: true };
                    })
                  : setIntervals((prevIntervals) => {
                      return { ...prevIntervals, Maj3: false };
                    });
              }}
              defaultChecked={true}
            />
          </Label>
          <Label>
            {" "}
            Perfect 4th
            <Checkbox
              onChange={(e) => {
                e.target.element?.checked
                  ? setIntervals((prevIntervals) => {
                      return { ...prevIntervals, P4: true };
                    })
                  : setIntervals((prevIntervals) => {
                      return { ...prevIntervals, P4: false };
                    });
              }}
              defaultChecked={true}
            />
          </Label>
          <Label>
            {" "}
            Tritone
            <Checkbox
              onChange={(e) => {
                e.target.element?.checked
                  ? setIntervals((prevIntervals) => {
                      return { ...prevIntervals, Tritone: true };
                    })
                  : setIntervals((prevIntervals) => {
                      return { ...prevIntervals, Tritone: false };
                    });
              }}
              defaultChecked={true}
            />
          </Label>
          <Label>
            {" "}
            Perfect 5th
            <Checkbox
              onChange={(e) => {
                e.target.element?.checked
                  ? setIntervals((prevIntervals) => {
                      return { ...prevIntervals, P5: true };
                    })
                  : setIntervals((prevIntervals) => {
                      return { ...prevIntervals, P5: false };
                    });
              }}
              defaultChecked={true}
            />
          </Label>
          <Label>
            {" "}
            minor 6th
            <Checkbox
              onChange={(e) => {
                e.target.element?.checked
                  ? setIntervals((prevIntervals) => {
                      return { ...prevIntervals, min6: true };
                    })
                  : setIntervals((prevIntervals) => {
                      return { ...prevIntervals, min6: false };
                    });
              }}
              defaultChecked={true}
            />
          </Label>
          <Label>
            {" "}
            Major 6th
            <Checkbox
              onChange={(e) => {
                e.target.element?.checked
                  ? setIntervals((prevIntervals) => {
                      return { ...prevIntervals, Maj6: true };
                    })
                  : setIntervals((prevIntervals) => {
                      return { ...prevIntervals, Maj6: false };
                    });
              }}
              defaultChecked={true}
            />
          </Label>
          <Label>
            {" "}
            minor 7th
            <Checkbox
              onChange={(e) => {
                e.target.element?.checked
                  ? setIntervals((prevIntervals) => {
                      return { ...prevIntervals, min7: true };
                    })
                  : setIntervals((prevIntervals) => {
                      return { ...prevIntervals, min7: false };
                    });
              }}
              defaultChecked={true}
            />
          </Label>
          <Label>
            {" "}
            Major 7th
            <Checkbox
              onChange={(e) => {
                e.target.element?.checked
                  ? setIntervals((prevIntervals) => {
                      return { ...prevIntervals, Maj7: true };
                    })
                  : setIntervals((prevIntervals) => {
                      return { ...prevIntervals, Maj7: false };
                    });
              }}
              defaultChecked={true}
            />
          </Label>
          <Label>
            {" "}
            Perfect Octave
            <Checkbox
              onChange={(e) => {
                e.target.element?.checked
                  ? setIntervals((prevIntervals) => {
                      return { ...prevIntervals, Octave: true };
                    })
                  : setIntervals((prevIntervals) => {
                      return { ...prevIntervals, Octave: false };
                    });
              }}
              defaultChecked={true}
            />
          </Label>
        </fieldset>
        <fieldset>
          <legend>Directions To Include</legend>
          {intervalOptionsError.directionError && (
            <p style={{ color: "red" }}>
              {intervalOptionsError.directionError}
            </p>
          )}
          <Label>
            Ascending
            <Checkbox
              onChange={(e) => {
                e.target.element?.checked
                  ? setDirections((prevDirections) => {
                      return { ...prevDirections, ascending: true };
                    })
                  : setDirections((prevDirections) => {
                      return { ...prevDirections, ascending: false };
                    });
              }}
              defaultChecked={true}
            />
          </Label>
          <Label>
            Descending
            <Checkbox
              onChange={(e) => {
                e.target.element?.checked
                  ? setDirections((prevDirections) => {
                      return { ...prevDirections, descending: true };
                    })
                  : setDirections((prevDirections) => {
                      return { ...prevDirections, descending: false };
                    });
              }}
              defaultChecked={true}
            />
          </Label>
          <Label>
            Composite
            <Checkbox
              onChange={(e) => {
                e.target.element?.checked
                  ? setDirections((prevDirections) => {
                      return { ...prevDirections, composite: true };
                    })
                  : setDirections((prevDirections) => {
                      return { ...prevDirections, composite: false };
                    });
              }}
              defaultChecked={true}
            />
          </Label>
        </fieldset>
        <Button>Apply Changes</Button>
      </form>
    </>
  );
};

export default IntervalOptions;
