import { useContext, useEffect } from "react";
import { UserStatsContext } from "../../context/UserStats";
import { SelectedIntervalContext } from "../../context/SelectedInterval";
import { Card } from "@progress/kendo-react-layout";
import { Button } from "@progress/kendo-react-buttons";
import "./StatsDashboard.css";
import {
  NotificationGroup,
  Notification,
} from "@progress/kendo-react-notification";
import { Fade, Push } from "@progress/kendo-react-animation";
import { SvgIcon } from "@progress/kendo-react-common";
import { musicNotesIcon } from "@progress/kendo-svg-icons";

interface Props {
  answerShown: boolean;
  setAnswerShown: React.Dispatch<React.SetStateAction<boolean>>;
  answerCorrect: boolean;
  answerIncorrect: boolean;
}

const StatsDashboard = ({
  answerShown,
  setAnswerShown,
  answerCorrect,
  answerIncorrect,
}: Props) => {
  const {
    numCorrect,
    totalNumAnswered,
    setNumCorrect,
    setTotalNumAnswered,
    sendStatsToLocalStorage,
  } = useContext(UserStatsContext);

  const { intervalName } = useContext(SelectedIntervalContext);

  useEffect(() => {
    sendStatsToLocalStorage();
  }, [numCorrect, totalNumAnswered, sendStatsToLocalStorage]);

  return (
    <section className="row">
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
                size="small"
                className="reset-button transparent-btn"
                onClick={() => {
                  setNumCorrect(0);
                  setTotalNumAnswered(0);
                }}
              >
                Reset
              </Button>
            </div>
            <div className="section-two col">
              <SvgIcon icon={musicNotesIcon} size="large"></SvgIcon>
              <p className="average">
                Your average is{" "}
                {Math.round((numCorrect / totalNumAnswered) * 100)}%
              </p>
            </div>
          </>
        ) : (
          <div className="instructions row">
            <div className="instructions-text col">
              <p>Let's practice some intervals!</p>
              <p>Click the play button to get started.</p>
            </div>
          </div>
        )}
        <NotificationGroup className="user-answer-notifications">
          <div className="notification-container">
            <Fade>
              {answerCorrect && (
                <Notification className="user-feedback-notification correct-notification row">
                  <span>Correct!</span>
                </Notification>
              )}
            </Fade>
          </div>
          <div className="notification-container">
            <Fade>
              {answerIncorrect && (
                <Notification className="user-feedback-notification incorrect-notification row">
                  <span>Incorrect</span>
                </Notification>
              )}
            </Fade>
          </div>
        </NotificationGroup>
        <div className="notification-container show-answer-notification-container user-answer-notifications">
          <Push className="animation-container-for-show-answer">
            {answerShown && (
              <Notification
                className="show-answer-notification"
                closable={true}
                onClose={() => setAnswerShown(false)}
              >
                <span>That interval was: {intervalName} </span>
              </Notification>
            )}
          </Push>
        </div>
      </Card>
    </section>
  );
};

export default StatsDashboard;
