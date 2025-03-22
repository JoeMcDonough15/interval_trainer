import { RadioButton } from "@progress/kendo-react-inputs";
import { Label } from "@progress/kendo-react-labels";
import { AvailableIntervalsContext } from "../../context/AvailableIntervals";
import { useContext } from "react";
import { IntervalsInterface } from "../../types";

interface Props {
  intervalName: string;
  setUserSubmission: (interval: string) => void;
  answerShown: boolean;
}

const SelectIntervalRadioField = ({
  setUserSubmission,
  intervalName,
  answerShown,
}: Props) => {
  const { availableIntervals } = useContext(AvailableIntervalsContext);

  return (
    <Label
      className={`row centered-spaced-row ${
        !availableIntervals[intervalName as keyof IntervalsInterface] ||
        answerShown
          ? "disabled-input"
          : ""
      }`}
    >
      {" "}
      <span className="label-text">{intervalName}</span>
      <RadioButton
        disabled={
          !availableIntervals[intervalName as keyof IntervalsInterface] ||
          answerShown
        }
        name="user-selection"
        onChange={(e) => {
          e.target.element?.checked && setUserSubmission(intervalName);
        }}
      />
    </Label>
  );
};

export default SelectIntervalRadioField;
