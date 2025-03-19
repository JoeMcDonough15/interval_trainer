import { StackLayout } from "@progress/kendo-react-layout";
import IntervalPlayer from "./IntervalPlayer";
import IntervalOptions from "./IntervalOptions";
import IntervalSelection from "./IntervalSelection";
import UserStatsContextProvider from "../context/UserStats";
import StatsDashboard from "./StatsDashboard";

const App = () => {
  return (
    <main>
      <StackLayout className="main-container">
        <h1>Interval Trainer</h1>
        <UserStatsContextProvider>
          <StatsDashboard />
          <IntervalSelection />
        </UserStatsContextProvider>
        <IntervalPlayer />
        <IntervalOptions />
      </StackLayout>
    </main>
  );
};

export default App;
