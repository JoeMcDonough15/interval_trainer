import { useContext, useEffect } from "react";
import { UserStatsContext } from "../../context/UserStats";
import { Card } from "@progress/kendo-react-layout";
import { Button } from "@progress/kendo-react-buttons";
import "./StatsDashboard.css";

const StatsDashboard = () => {
  const {
    numCorrect,
    totalNumAnswered,
    setNumCorrect,
    setTotalNumAnswered,
    sendStatsToLocalStorage,
  } = useContext(UserStatsContext);

  useEffect(() => {
    sendStatsToLocalStorage();
  }, [numCorrect, totalNumAnswered, sendStatsToLocalStorage]);

  return (
    <section className="row dashboard-container">
      <Card className="row dashboard-card">
        {totalNumAnswered > 0 ? (
          <>
            <div className="row num-correct-out-of-total">
              <span>{numCorrect}</span>
              <span>/</span>
              <span>{totalNumAnswered}</span>
            </div>

            <p className="average">
              Your average is{" "}
              {Math.round((numCorrect / totalNumAnswered) * 100)}%
            </p>
          </>
        ) : (
          <p className="instructions">Let's practice some intervals!</p>
        )}
        <Button
          onClick={() => {
            setNumCorrect(0);
            setTotalNumAnswered(0);
          }}
        >
          Reset
        </Button>
      </Card>
    </section>
  );
};

export default StatsDashboard;
