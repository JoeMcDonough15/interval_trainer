import { FormEvent, useContext, useEffect, useState } from "react";
import {
  AvailableIntervalsContext,
  IntervalsInterface,
  DirectionsInterface,
} from "../../context/AvailableIntervals";
import { SelectedIntervalContext } from "../../context/SelectedInterval";
import { UserStatsContext } from "../../context/UserStats";
import { FloatingActionButton } from "@progress/kendo-react-buttons";
import { RadioButton } from "@progress/kendo-react-inputs";
import { Label } from "@progress/kendo-react-labels";
import {
  NotificationGroup,
  Notification,
} from "@progress/kendo-react-notification";
import { Fade } from "@progress/kendo-react-animation";
import "./interval-selection.css";

const IntervalSelection = () => {
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

  const { totalNumAnswered, setTotalNumAnswered, setNumCorrect } =
    useContext(UserStatsContext);

  // We also need a useEffect hook in this component because if the availableIntervals or availableDirections
  // ever change, we want to reselect a new random interval guaranteed to be in the availableIntervals and
  // availableDirections.  Since useEffect runs on a component's initial render, we can use this hook to
  // handle all interval selection for quizzing the user.  Anytime a user submits an answer to an interval played,
  // the totalNumberAnswered should update which would trigger a rerender of this component (since this component will be
  // using the totalNumberAnsweredContext).  After that render, the useEffect hook would run because totalNumberAnswered
  // goes in its dependency array.  So every time a user submits an answer, a new interval will be randomly selected.

  useEffect(() => {
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
  }, [availableIntervals, availableDirections, totalNumAnswered]);

  const [userSubmission, setUserSubmission] = useState("");
  const [userSubmissionError, setUserSubmissionError] = useState("");
  const [answerCorrect, setAnswerCorrect] = useState(false);
  const [answerIncorrect, setAnswerIncorrect] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!userSubmission) {
      setUserSubmissionError(
        "Please select an interval before submitting your answer"
      );
      return;
    }
    setUserSubmissionError("");
    // check if the answer the user submitted matches the intervalName from SelectedIntervalContext
    if (userSubmission === intervalName) {
      setNumCorrect((prev) => prev + 1);
      // launch a notification that says correct
      setTimeout(() => {
        setAnswerCorrect(true);
      }, 0);
      setTimeout(() => {
        setAnswerCorrect(false);
      }, 2000);
    } else {
      // launch a notification that says incorrect
      setTimeout(() => {
        setAnswerIncorrect(true);
      }, 0);
      setTimeout(() => {
        setAnswerIncorrect(false);
      }, 2000);
    }

    // then, user's right or wrong, increment totalNumAnswered, triggering useEffect to select a new interval
    setTotalNumAnswered((prev) => prev + 1);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <fieldset>
          {userSubmissionError && (
            <p style={{ color: "red" }}>{userSubmissionError}</p>
          )}
          <legend>Select the interval you hear!</legend>

          <Label
            className={!availableIntervals["Unison"] ? "disabled-input" : ""}
          >
            {" "}
            Perfect Unison
            <RadioButton
              disabled={!availableIntervals["Unison"]}
              name="user-selection"
              onChange={(e) => {
                e.target.element?.checked && setUserSubmission("Unison");
              }}
            />
          </Label>
          <Label
            className={!availableIntervals["min2"] ? "disabled-input" : ""}
          >
            {" "}
            minor 2nd
            <RadioButton
              disabled={!availableIntervals["min2"]}
              name="user-selection"
              onChange={(e) => {
                e.target.element?.checked && setUserSubmission("min2");
              }}
            />
          </Label>
          <Label
            className={!availableIntervals["Maj2"] ? "disabled-input" : ""}
          >
            {" "}
            Major 2nd
            <RadioButton
              disabled={!availableIntervals["Maj2"]}
              name="user-selection"
              onChange={(e) => {
                e.target.element?.checked && setUserSubmission("Maj2");
              }}
            />
          </Label>
          <Label
            className={!availableIntervals["min3"] ? "disabled-input" : ""}
          >
            {" "}
            minor 3rd
            <RadioButton
              disabled={!availableIntervals["min3"]}
              name="user-selection"
              onChange={(e) => {
                e.target.element?.checked && setUserSubmission("min3");
              }}
            />
          </Label>
          <Label
            className={!availableIntervals["Maj3"] ? "disabled-input" : ""}
          >
            {" "}
            Major 3rd
            <RadioButton
              disabled={!availableIntervals["Maj3"]}
              name="user-selection"
              onChange={(e) => {
                e.target.element?.checked && setUserSubmission("Maj3");
              }}
            />
          </Label>
          <Label className={!availableIntervals["P4"] ? "disabled-input" : ""}>
            {" "}
            Perfect 4th
            <RadioButton
              disabled={!availableIntervals["P4"]}
              name="user-selection"
              onChange={(e) => {
                e.target.element?.checked && setUserSubmission("P4");
              }}
            />
          </Label>
          <Label
            className={!availableIntervals["Tritone"] ? "disabled-input" : ""}
          >
            {" "}
            Tritone
            <RadioButton
              disabled={!availableIntervals["Tritone"]}
              name="user-selection"
              onChange={(e) => {
                e.target.element?.checked && setUserSubmission("Tritone");
              }}
            />
          </Label>
          <Label className={!availableIntervals["P5"] ? "disabled-input" : ""}>
            {" "}
            Perfect 5th
            <RadioButton
              disabled={!availableIntervals["P5"]}
              name="user-selection"
              onChange={(e) => {
                e.target.element?.checked && setUserSubmission("P5");
              }}
            />
          </Label>
          <Label
            className={!availableIntervals["min6"] ? "disabled-input" : ""}
          >
            {" "}
            minor 6th
            <RadioButton
              disabled={!availableIntervals["min6"]}
              name="user-selection"
              onChange={(e) => {
                e.target.element?.checked && setUserSubmission("min6");
              }}
            />
          </Label>
          <Label
            className={!availableIntervals["Maj6"] ? "disabled-input" : ""}
          >
            {" "}
            Major 6th
            <RadioButton
              disabled={!availableIntervals["Maj6"]}
              name="user-selection"
              onChange={(e) => {
                e.target.element?.checked && setUserSubmission("Maj6");
              }}
            />
          </Label>
          <Label
            className={!availableIntervals["min7"] ? "disabled-input" : ""}
          >
            {" "}
            minor 7th
            <RadioButton
              disabled={!availableIntervals["min7"]}
              name="user-selection"
              onChange={(e) => {
                e.target.element?.checked && setUserSubmission("min7");
              }}
            />
          </Label>
          <Label
            className={!availableIntervals["Maj7"] ? "disabled-input" : ""}
          >
            {" "}
            Major 7th
            <RadioButton
              disabled={!availableIntervals["Maj7"]}
              name="user-selection"
              onChange={(e) => {
                e.target.element?.checked && setUserSubmission("Maj7");
              }}
            />
          </Label>
          <Label
            className={!availableIntervals["Octave"] ? "disabled-input" : ""}
          >
            {" "}
            Perfect Octave
            <RadioButton
              disabled={!availableIntervals["Octave"]}
              name="user-selection"
              onChange={(e) => {
                e.target.element?.checked && setUserSubmission("Octave");
              }}
            />
          </Label>
        </fieldset>
        <FloatingActionButton type="submit" text="Submit Answer" />
      </form>
      <NotificationGroup>
        <Fade>
          {answerCorrect && (
            <Notification>
              <span>Correct!</span>
            </Notification>
          )}
        </Fade>
        <Fade>
          {answerIncorrect && (
            <Notification>
              <span>That's incorrect</span>
            </Notification>
          )}
        </Fade>
      </NotificationGroup>
    </>
  );
};

export default IntervalSelection;
