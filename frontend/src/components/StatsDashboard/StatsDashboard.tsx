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
            <div className="section-one col">
              <div className="row num-correct-out-of-total">
                <div className="col labels-col">
                  <span>correct:</span>
                  <span>total:</span>{" "}
                </div>
                <div className="col values-col">
                  <span>{numCorrect}</span>
                  <span>{totalNumAnswered}</span>
                </div>
              </div>
              <Button
                onClick={() => {
                  setNumCorrect(0);
                  setTotalNumAnswered(0);
                }}
              >
                Reset
              </Button>
            </div>
            <div className="section-two">
              <p className="average">
                Your average is{" "}
                {Math.round((numCorrect / totalNumAnswered) * 100)}%
              </p>
            </div>
          </>
        ) : (
          <div className="instructions row">
            <p>Let's practice some intervals!</p>
          </div>
        )}
      </Card>
    </section>
  );
};

export default StatsDashboard;
