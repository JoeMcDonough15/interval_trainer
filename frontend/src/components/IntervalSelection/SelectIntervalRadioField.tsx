import { RadioButton } from "@progress/kendo-react-inputs";
import { Label } from "@progress/kendo-react-labels";
import { AvailableIntervalsContext } from "../../context/AvailableIntervals";
import { useContext } from "react";
import { IntervalsInterface } from "../../types";

interface Props {
  intervalName: string;
  setUserSubmission: (interval: string) => void;
}

const SelectIntervalRadioField = ({
  setUserSubmission,
  intervalName,
}: Props) => {
  const { availableIntervals } = useContext(AvailableIntervalsContext);

  return (
    <Label
      className={`row radio-label ${
        !availableIntervals[intervalName as keyof IntervalsInterface]
          ? "disabled-input"
          : ""
      }`}
    >
      {" "}
      <span className="label-text">{intervalName}</span>
      <RadioButton
        disabled={!availableIntervals[intervalName as keyof IntervalsInterface]}
        name="user-selection"
        onChange={(e) => {
          e.target.element?.checked && setUserSubmission(intervalName);
        }}
      />
    </Label>
  );
};

export default SelectIntervalRadioField;
