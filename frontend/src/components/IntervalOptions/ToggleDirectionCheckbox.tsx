import { Checkbox, CheckboxChangeEvent } from "@progress/kendo-react-inputs";
import { Label } from "@progress/kendo-react-labels";
import { Dispatch, SetStateAction } from "react";
import { DirectionsInterface } from "../../types";

interface Props {
  directions: DirectionsInterface;
  setDirections: Dispatch<SetStateAction<DirectionsInterface>>;
  directionName: string;
}

const ToggleDirectionCheckbox = ({
  directions,
  setDirections,
  directionName,
}: Props) => {
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
    <Label className="row centered-spaced-row">
      {" "}
      {directionName}
      <Checkbox
        onChange={handleChange}
        value={directionName}
        checked={directions[directionName as keyof DirectionsInterface]}
      />
    </Label>
  );
};

export default ToggleDirectionCheckbox;
