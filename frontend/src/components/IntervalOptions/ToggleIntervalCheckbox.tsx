import { Checkbox, CheckboxChangeEvent } from "@progress/kendo-react-inputs";
import { Label } from "@progress/kendo-react-labels";
import { Dispatch, SetStateAction } from "react";
import { IntervalsInterface } from "../../types";

interface Props {
  setIntervals: Dispatch<SetStateAction<IntervalsInterface>>;
  intervalName: string;
}

const ToggleIntervalCheckbox = ({ setIntervals, intervalName }: Props) => {
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
      <Checkbox onChange={handleChange} defaultChecked={true} />
    </Label>
  );
};

export default ToggleIntervalCheckbox;
