import { StackLayout } from "@progress/kendo-react-layout";
import IntervalPlayer from "./IntervalPlayer";
import IntervalOptions from "./IntervalOptions";

const App = () => {
  return (
    <main>
      <StackLayout className="main-container">
        <h1>Interval Trainer</h1>
        <IntervalPlayer />
        <p>User Select Interval</p>
        <IntervalOptions />
      </StackLayout>
    </main>
  );
};

export default App;
