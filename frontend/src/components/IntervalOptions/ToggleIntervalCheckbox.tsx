import { Checkbox } from "@progress/kendo-react-inputs";
import { Label } from "@progress/kendo-react-labels";
import { Dispatch, SetStateAction } from "react";
import { IntervalsInterface } from "../../types";

interface Props {
  setIntervals: Dispatch<SetStateAction<IntervalsInterface>>;
  intervalName: string;
}

const ToggleIntervalCheckbox = ({ setIntervals, intervalName }: Props) => {
  return (
    <Label>
      {" "}
      {intervalName}
      <Checkbox
        className="interval-checkbox"
        onChange={(e) => {
          e.target.element?.checked
            ? setIntervals((prevIntervals) => {
                return {
                  ...prevIntervals,
                  [intervalName]: true,
                };
              })
            : setIntervals((prevIntervals) => {
                return { ...prevIntervals, [intervalName]: false };
              });
        }}
        defaultChecked={true}
      />
    </Label>
  );
};

export default ToggleIntervalCheckbox;
