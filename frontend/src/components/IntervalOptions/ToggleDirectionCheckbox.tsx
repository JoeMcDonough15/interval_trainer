import { Checkbox, CheckboxChangeEvent } from "@progress/kendo-react-inputs";
import { Label } from "@progress/kendo-react-labels";
import { Dispatch, SetStateAction } from "react";
import { DirectionsInterface } from "../../types";

interface Props {
  setDirections: Dispatch<SetStateAction<DirectionsInterface>>;
  directionName: string;
}

const ToggleDirectionCheckbox = ({ setDirections, directionName }: Props) => {
  const handleChange = (e: CheckboxChangeEvent) => {
    if (e.target.value) {
      setDirections((prevDirections) => {
        return {
          ...prevDirections,
          [directionName]: true,
        };
      });
    } else {
      setDirections((prevDirections) => {
        return { ...prevDirections, [directionName]: false };
      });
    }
  };

  return (
    <Label>
      {" "}
      {directionName}
      <Checkbox onChange={handleChange} defaultChecked={true} />
    </Label>
  );
};

export default ToggleDirectionCheckbox;
