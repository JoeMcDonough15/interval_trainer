import { Checkbox } from "@progress/kendo-react-inputs";
import { Label } from "@progress/kendo-react-labels";
import { DirectionsInterface } from "../../context/AvailableIntervals";
import { Dispatch, SetStateAction } from "react";

interface Props {
  setDirections: Dispatch<SetStateAction<DirectionsInterface>>;
  directionName: string;
}

const ToggleDirectionCheckbox = ({ setDirections, directionName }: Props) => {
  return (
    <Label>
      {" "}
      {directionName}
      <Checkbox
        onChange={(e) => {
          e.target.element?.checked
            ? setDirections((prevDirections) => {
                return {
                  ...prevDirections,
                  [directionName]: true,
                };
              })
            : setDirections((prevDirections) => {
                return { ...prevDirections, [directionName]: false };
              });
        }}
        defaultChecked={true}
      />
    </Label>
  );
};

export default ToggleDirectionCheckbox;
