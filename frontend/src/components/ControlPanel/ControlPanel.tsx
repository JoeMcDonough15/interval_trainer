import "./ControlPanel.css";
import { Button } from "@progress/kendo-react-buttons";

interface Props {
  settingsOpen: boolean;
  setSettingsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setAnswerShown: React.Dispatch<React.SetStateAction<boolean>>;
}

const ControlPanel = ({
  settingsOpen,
  setSettingsOpen,
  setAnswerShown,
}: Props) => {
  return (
    <section className="control-panel row">
      <Button
        className="control-panel-button display-options-button transparent-btn"
        onClick={() => {
          setSettingsOpen((prevState) => {
            return !prevState;
          });
        }}
      >
        {settingsOpen ? "Hide" : "Show"} Options
      </Button>
      <Button
        className="control-panel-button show-answer-button transparent-btn"
        onClick={() => {
          setAnswerShown(true);
        }}
      >
        Show Answer
      </Button>
    </section>
  );
};

export default ControlPanel;
