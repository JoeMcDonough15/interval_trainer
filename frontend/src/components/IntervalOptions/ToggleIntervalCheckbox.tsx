import { Checkbox, CheckboxChangeEvent } from "@progress/kendo-react-inputs";
import { Label } from "@progress/kendo-react-labels";
import { IntervalsInterface } from "../../types";

interface Props {
  intervals: IntervalsInterface;
  setIntervals: React.Dispatch<React.SetStateAction<IntervalsInterface>>;
  intervalName: string;
  setIntervalsIncluded: React.Dispatch<React.SetStateAction<string>>;
}

const ToggleIntervalCheckbox = ({
  intervals,
  setIntervals,
  intervalName,
  setIntervalsIncluded,
}: Props) => {
  const handleChange = (e: CheckboxChangeEvent) => {
    if (e.target.element?.checked) {
      // see if every other is checked
      if (Object.values(intervals).filter((boolVal) => boolVal).length === 12) {
        setIntervalsIncluded("all");
      }
      setIntervals((prevIntervals) => {
        return {
          ...prevIntervals,
          [intervalName]: true,
        };
      });
    } else {
      // see if every other is unchecked
      if (
        Object.values(intervals).filter((boolVal) => !boolVal).length === 12
      ) {
        setIntervalsIncluded("none");
      }
      setIntervals((prevIntervals) => {
        return { ...prevIntervals, [intervalName]: false };
      });
    }
  };

  return (
    <Label className="row centered-spaced-row">
      {" "}
      {intervalName}
      <Checkbox
        onChange={handleChange}
        checked={intervals[intervalName as keyof IntervalsInterface]}
      />
    </Label>
  );
};

export default ToggleIntervalCheckbox;
