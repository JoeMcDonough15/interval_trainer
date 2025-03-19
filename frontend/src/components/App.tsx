import { StackLayout } from "@progress/kendo-react-layout";
import IntervalPlayer from "./IntervalPlayer";
import IntervalOptions from "./IntervalOptions";
import IntervalSelection from "./IntervalSelection";

const App = () => {
  return (
    <main>
      <StackLayout className="main-container">
        <h1>Interval Trainer</h1>
        <IntervalSelection />
        <IntervalPlayer />
        <IntervalOptions />
      </StackLayout>
    </main>
  );
};

export default App;
