import { useContext } from "react";
import { UserStatsContext } from "../../context/UserStats";
import { Card } from "@progress/kendo-react-layout";

const StatsDashboard = () => {
  const { numCorrect, totalNumAnswered } = useContext(UserStatsContext);
  return (
    <section className="dashboard">
      <Card>
        <span>{numCorrect}</span> / <span>{totalNumAnswered}</span>
        {totalNumAnswered > 0 && (
          <p>
            Your average is {Math.round((numCorrect / totalNumAnswered) * 100)}%
          </p>
        )}
      </Card>
    </section>
  );
};

export default StatsDashboard;
