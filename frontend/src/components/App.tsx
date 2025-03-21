import { StackLayout } from "@progress/kendo-react-layout";
import IntervalPlayer from "./IntervalPlayer";
import IntervalOptions from "./IntervalOptions";
import IntervalSelection from "./IntervalSelection";
import UserStatsContextProvider from "../context/UserStats";
import StatsDashboard from "./StatsDashboard";
import "@progress/kendo-theme-default/dist/all.css";
import ControlPanel from "./ControlPanel";
import { useState } from "react";

const App = () => {
  const [settingsOpen, setSettingsOpen] = useState(false);
  const [answerShown, setAnswerShown] = useState(false);

  return (
    <main className="main-container">
      <StackLayout className="col">
        <h1>Interval Trainer</h1>
        <IntervalPlayer />
        <UserStatsContextProvider>
          <StatsDashboard />
          <IntervalSelection
            answerShown={answerShown}
            setAnswerShown={setAnswerShown}
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
