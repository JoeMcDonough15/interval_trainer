import { useContext, useEffect } from "react";
import { UserStatsContext } from "../../context/UserStats";
import { Card } from "@progress/kendo-react-layout";
import "./StatsDashboard.css";

const StatsDashboard = () => {
  const { numCorrect, totalNumAnswered, sendStatsToLocalStorage } =
    useContext(UserStatsContext);

  useEffect(() => {
    sendStatsToLocalStorage();
  }, [numCorrect, totalNumAnswered, sendStatsToLocalStorage]);

  return (
    <section className="row dashboard-container">
      <Card className="row dashboard-card">
        <div className="row num-correct-out-of-total">
          <span>{numCorrect}</span>
          <span>/</span>
          <span>{totalNumAnswered}</span>
        </div>

        {totalNumAnswered > 0 && (
          <p className="average">
            Your average is {Math.round((numCorrect / totalNumAnswered) * 100)}%
          </p>
        )}
      </Card>
    </section>
  );
};

export default StatsDashboard;
