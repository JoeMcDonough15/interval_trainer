import { useContext, useEffect } from "react";
import { AvailableIntervalsContext } from "../../context/AvailableIntervals";
import { SelectedIntervalContext } from "../../context/SelectedInterval";
import { UserStatsContext } from "../../context/UserStats";

const IntervalSelection = () => {
  // unpack context
  // we will need availableIntervals, availableDirections from AvailableIntervalsContext.
  // We must use the availableIntervals and availableDirections to randomly select a valid interval test question
  // and to render the correct radio inputs for all available interval options.
  const { availableIntervals, availableDirections } = useContext(
    AvailableIntervalsContext
  );
  console.log(
    "available directions inside IntervalSelection: ",
    availableDirections
  );

  // we will need access to intervalName to check the user's answer, and setIntervalName to be able to
  // randomly choose a new interval from SelectedIntervalContext.  We will also need to be able to
  // set the direction of the interval for use in its file path with setIntervalDirection
  const { intervalName, setIntervalName, setIntervalDirection } = useContext(
    SelectedIntervalContext
  );
  console.log("currently selected interval: ", intervalName);

  // We will need totalNumAnswered, setTotalNumAnswered, and setNumCorrect so that we can handle
  // the quiz logic.

  const { totalNumAnswered, setTotalNumAnswered, setNumCorrect } =
    useContext(UserStatsContext);
  console.log("total number answered: ", totalNumAnswered);

  // We also need a useEffect hook in this component because if the availableIntervals or availableDirections
  // ever change, we want to reselect a new random interval guaranteed to be in the availableIntervals and
  // availableDirections.  Since useEffect runs on a component's initial render, we can use this hook to
  // handle all interval selection for quizzing the user.  Anytime a user submits an answer to an interval played,
  // the totalNumberAnswered should update which would trigger a rerender of this component (since this component will be
  // using the totalNumberAnsweredContext).  After that render, the useEffect hook would run because totalNumberAnswered
  // goes in its dependency array.  So every time a user submits an answer, a new interval will be randomly selected.

  useEffect(() => {
    // select a random interval based on what is available
  }, [availableIntervals, availableDirections, totalNumAnswered]);

  return <></>;
};

export default IntervalSelection;
