import "./ControlPanel.css";

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
      <button
        className="control-panel-button display-options-button"
        onClick={() => {
          setSettingsOpen((prevState) => {
            return !prevState;
          });
        }}
      >
        {settingsOpen ? "Hide" : "Show"} Options
      </button>
      <button
        className="control-panel-button show-answer-button"
        onClick={() => {
          setAnswerShown(true);
        }}
      >
        Show Answer
      </button>
    </section>
  );
};

export default ControlPanel;
