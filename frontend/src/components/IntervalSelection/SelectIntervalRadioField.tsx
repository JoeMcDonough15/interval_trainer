import {
  RadioButton,
  RadioButtonChangeEvent,
} from "@progress/kendo-react-inputs";
import { Label } from "@progress/kendo-react-labels";
import { AvailableIntervalsContext } from "../../context/AvailableIntervals";
import { useContext } from "react";
import { IntervalsInterface } from "../../types";

interface Props {
  intervalName: string;
  userSubmission: string;
  setUserSubmission: (interval: string) => void;
  answerShown: boolean;
}

const SelectIntervalRadioField = ({
  setUserSubmission,
  userSubmission,
  intervalName,
  answerShown,
}: Props) => {
  const { availableIntervals } = useContext(AvailableIntervalsContext);

  const handleChange = (e: RadioButtonChangeEvent) => {
    const userSelected = e.target.element?.value;
    userSelected && setUserSubmission(userSelected);
  };

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
        className="user-select-radio-option"
        value={intervalName}
        checked={userSubmission === intervalName}
        disabled={
          !availableIntervals[intervalName as keyof IntervalsInterface] ||
          answerShown
        }
        name="user-selection"
        onChange={handleChange}
      />
    </Label>
  );
};

export default SelectIntervalRadioField;
