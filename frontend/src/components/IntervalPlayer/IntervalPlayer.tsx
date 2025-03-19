import { useContext } from "react";
import { AvailableIntervalsContext } from "../../context/AvailableIntervals";

const IntervalPlayer = () => {
  const { availableIntervals, availableDirections } = useContext(
    AvailableIntervalsContext
  );
  console.log(
    "available intervals inside IntervalPlayer: ",
    availableIntervals
  );
  console.log(
    "available directions inside IntervalPlayer: ",
    availableDirections
  );
  return <></>;
};

export default IntervalPlayer;
