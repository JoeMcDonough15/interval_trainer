import { StackLayout } from "@progress/kendo-react-layout";
import IntervalPlayer from "./IntervalPlayer";
import IntervalOptions from "./IntervalOptions";
import IntervalSelection from "./IntervalSelection";
import UserStatsContextProvider from "../context/UserStats";
import StatsDashboard from "./StatsDashboard";

const App = () => {
  return (
    <main className="main-container">
      <StackLayout className="col">
        <h1>Interval Trainer</h1>
        <IntervalPlayer />
        <UserStatsContextProvider>
          <StatsDashboard />
          <IntervalSelection />
        </UserStatsContextProvider>

        <IntervalOptions />
      </StackLayout>
    </main>
  );
};

export default App;
