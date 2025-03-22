import { StackLayout } from "@progress/kendo-react-layout";
import IntervalPlayer from "./IntervalPlayer";
import IntervalOptions from "./IntervalOptions";
import IntervalSelection from "./IntervalSelection";
import UserStatsContextProvider from "../context/UserStats";
import StatsDashboard from "./StatsDashboard";
import "@progress/kendo-theme-default/dist/all.css";
import ControlPanel from "./ControlPanel";
import { useState } from "react";
import GradientHeader from "./GradientHeader";

const App = () => {
  const [settingsOpen, setSettingsOpen] = useState(false);
  const [answerShown, setAnswerShown] = useState(false);
  const [answerCorrect, setAnswerCorrect] = useState(false);
  const [answerIncorrect, setAnswerIncorrect] = useState(false);

  return (
    <main className="main-container">
      <StackLayout className="col">
        <GradientHeader
          settingsOpen={settingsOpen}
          headerText={"Interval Trainer"}
        />
        <UserStatsContextProvider>
          <StatsDashboard
            answerShown={answerShown}
            setAnswerShown={setAnswerShown}
            answerCorrect={answerCorrect}
            answerIncorrect={answerIncorrect}
          />
          <IntervalPlayer />
          <IntervalSelection
            answerShown={answerShown}
            // setAnswerShown={setAnswerShown}
            // answerCorrect={answerCorrect}
            setAnswerCorrect={setAnswerCorrect}
            // answerIncorrect={answerIncorrect}
            setAnswerIncorrect={setAnswerIncorrect}
          />
        </UserStatsContextProvider>
        <ControlPanel
          settingsOpen={settingsOpen}
          setSettingsOpen={setSettingsOpen}
          setAnswerShown={setAnswerShown}
        />
        <IntervalOptions settingsOpen={settingsOpen} />
      </StackLayout>
    </main>
  );
};

export default App;
