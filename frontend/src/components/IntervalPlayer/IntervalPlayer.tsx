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
  return <></>;
};

export default IntervalPlayer;
