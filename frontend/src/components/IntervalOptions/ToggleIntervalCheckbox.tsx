import { Checkbox, CheckboxChangeEvent } from "@progress/kendo-react-inputs";
import { Label } from "@progress/kendo-react-labels";
import { Dispatch, SetStateAction } from "react";
import { IntervalsInterface } from "../../types";

interface Props {
  intervals: IntervalsInterface;
  setIntervals: Dispatch<SetStateAction<IntervalsInterface>>;
  intervalName: string;
}

const ToggleIntervalCheckbox = ({
  intervals,
  setIntervals,
  intervalName,
}: Props) => {
  const handleChange = (e: CheckboxChangeEvent) => {
    if (e.target.value) {
      setIntervals((prevIntervals) => {
        return {
          ...prevIntervals,
          [intervalName]: true,
        };
      });
    } else {
      setIntervals((prevIntervals) => {
        return { ...prevIntervals, [intervalName]: false };
      });
    }
  };

  return (
    <Label>
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
