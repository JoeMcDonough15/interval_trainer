import { Checkbox } from "@progress/kendo-react-inputs";
import { Label } from "@progress/kendo-react-labels";
import { IntervalsInterface } from "../../context/AvailableIntervals";
import { Dispatch, SetStateAction } from "react";

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
