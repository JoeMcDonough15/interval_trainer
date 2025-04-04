import { FormEvent, useContext, useEffect, useState } from "react";
import { AvailableIntervalsContext } from "../../context/AvailableIntervals";
import { SelectedIntervalContext } from "../../context/SelectedInterval";
import { UserStatsContext } from "../../context/UserStats";
import { FloatingActionButton } from "@progress/kendo-react-buttons";
import "./intervalSelection.css";
import SelectIntervalRadioField from "./SelectIntervalRadioField";
import {
  DirectionsInterface,
  EmptyInputsErrorType,
  IntervalsInterface,
} from "../../types";
import EmptyInputsErrorNotification from "../EmptyInputsErrorNotification";

interface Props {
  answerShown: boolean;
  setAnswerCorrect: React.Dispatch<React.SetStateAction<boolean>>;
  setAnswerIncorrect: React.Dispatch<React.SetStateAction<boolean>>;
}

const IntervalSelection = ({
  answerShown,
  setAnswerCorrect,
  setAnswerIncorrect,
}: Props) => {
  // we will need availableIntervals, availableDirections from AvailableIntervalsContext.
  // We must use the availableIntervals and availableDirections to randomly select a valid interval test question
  // and to render the correct radio inputs for all available interval options.
  const { availableIntervals, availableDirections } = useContext(
    AvailableIntervalsContext
  );

  // we will need access to intervalName to check the user's answer, and setIntervalName to be able to
  // randomly choose a new interval from SelectedIntervalContext.  We will also need to be able to
  // set the direction of the interval for use in its file path with setIntervalDirection
  const { intervalName, setIntervalName, setIntervalDirection } = useContext(
    SelectedIntervalContext
  );

  // We will need totalNumAnswered, setTotalNumAnswered, and setNumCorrect so that we can handle
  // the quiz logic.

  const {
    setTotalNumAnswered,
    numCorrect,
    setNumCorrect,
    consecutiveCorrect,
    setConsecutiveCorrect,
    setFiveInARow,
  } = useContext(UserStatsContext);

  const [userSubmission, setUserSubmission] = useState("");
  const [userSubmissionError, setUserSubmissionError] = useState(
    {} as EmptyInputsErrorType
  );

  // We also need a useEffect hook in this component because if the availableIntervals or availableDirections
  // ever change, we want to reselect a new random interval guaranteed to be in the availableIntervals and
  // availableDirections.  Since useEffect runs on a component's initial render, we can use this hook to
  // handle the initial interval selection for quizzing the user.  Anytime a user submits a correct answer to an interval played,
  // the numCorrect should update which would trigger a rerender of this component (since this component will be
  // using numCorrect in its dependency array). So every time a user submits a correct answer, a new interval will be randomly selected.

  useEffect(() => {
    // if the answer is currently shown, wait until user closes that notification to select a new interval.
    if (answerShown) return;

    const validIntervals = Object.keys(availableIntervals).filter(
      (interval) => availableIntervals[interval as keyof IntervalsInterface]
    );

    const validDirections = Object.keys(availableDirections).filter(
      (direction) => availableDirections[direction as keyof DirectionsInterface]
    );

    const validIntervalIndex: number = Math.floor(
      Math.random() * validIntervals.length
    );

    const validDirectionsIndex: number = Math.floor(
      Math.random() * validDirections.length
    );

    setIntervalName(validIntervals[validIntervalIndex]);
    setIntervalDirection(validDirections[validDirectionsIndex]);
    setUserSubmission("");
  }, [
    availableIntervals,
    availableDirections,
    numCorrect,
    answerShown,
    setUserSubmission,
  ]);

  const handleError = () => {
    const errors: EmptyInputsErrorType = {};

    if (!userSubmission) {
      errors.noIntervalGuessed =
        "Please select an interval before submitting your answer";
    }

    return errors;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const errorObj = handleError();
    if (Object.keys(errorObj).length) {
      setUserSubmissionError(errorObj);
      return;
    }
    setUserSubmissionError({});
    // check if the answer the user submitted matches the intervalName from SelectedIntervalContext
    if (userSubmission === intervalName) {
      setNumCorrect((prev) => prev + 1);
      // launch a notification that says correct
      setAnswerCorrect(true);
      setTimeout(() => {
        setAnswerCorrect(false);
      }, 2000);
      if (consecutiveCorrect === 4) {
        // if we have 4 correct, and got this one right, that's 5 in a row!
        setTimeout(() => {
          setFiveInARow(true);
        }, 2000); // leave 2 seconds for the Correct notification to show from answerCorrect being set to true
        setTimeout(() => {
          setFiveInARow(false);
        }, 4000);
        setConsecutiveCorrect(0); // reset consecutive back to 0 because the next correct answer should be 1 out of 5
      } else {
        // increment consecutiveCount because the answer was correct but it wasn't the 5th yet
        setConsecutiveCorrect((prev) => prev + 1);
      }
    } else {
      // launch a notification that says incorrect
      setAnswerIncorrect(true);
      setTimeout(() => {
        setAnswerIncorrect(false);
      }, 2000);
      // reset consecutiveCorrect to 0 because we broke the correct streak
      setConsecutiveCorrect(0);
      setUserSubmission(""); // set useSubmission back to an empty string so they can try again with their incorrect guess deselected from the radios
    }

    // then, user's right or wrong, increment totalNumAnswered, triggering useEffect to select a new interval
    setTotalNumAnswered((prev) => prev + 1);
  };

  return (
    <section className="interval-selection-section">
      <form className="interval-selection-form col" onSubmit={handleSubmit}>
        <fieldset>
          <div className="notification-container">
            <EmptyInputsErrorNotification
              errorObj={userSubmissionError}
              setErrorObj={setUserSubmissionError}
              specificError="noIntervalGuessed"
            />
          </div>
          <legend>Select the interval you hear!</legend>
          <div className="user-select-inputs row">
            {Object.keys(availableIntervals).map((interval) => {
              return (
                <SelectIntervalRadioField
                  key={interval}
                  intervalName={interval}
                  setUserSubmission={setUserSubmission}
                  userSubmission={userSubmission}
                  answerShown={answerShown}
                />
              );
            })}
          </div>
        </fieldset>
        <FloatingActionButton
          className="user-selection-button"
          type="submit"
          text="Submit Answer"
          disabled={answerShown}
        />
      </form>
    </section>
  );
};

export default IntervalSelection;
