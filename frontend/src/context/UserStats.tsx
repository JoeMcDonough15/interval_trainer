import { createContext, PropsWithChildren, useState } from "react";
import { UserStatsInterface } from "../types";

export const UserStatsContext = createContext({} as UserStatsInterface);

const UserStatsContextProvider = ({ children }: PropsWithChildren) => {
  const [totalNumAnswered, setTotalNumAnswered] = useState(
    Number(window.localStorage.getItem("totalNumAnswered"))
  );
  const [numCorrect, setNumCorrect] = useState(
    Number(window.localStorage.getItem("numCorrect"))
  );
  const [consecutiveCorrect, setConsecutiveCorrect] = useState(0);
  const [fiveInARow, setFiveInARow] = useState(false);

  // functions to send the totalNumAnswered and numCorrect to localStorage
  const sendStatsToLocalStorage = () => {
    window.localStorage.setItem(
      "totalNumAnswered",
      totalNumAnswered.toString()
    );
    window.localStorage.setItem("numCorrect", numCorrect.toString());
  };

  const contextValue = {
    totalNumAnswered,
    setTotalNumAnswered,
    numCorrect,
    setNumCorrect,
    sendStatsToLocalStorage,
    consecutiveCorrect,
    setConsecutiveCorrect,
    fiveInARow,
    setFiveInARow,
  };

  return (
    <UserStatsContext.Provider value={contextValue}>
      {children}
    </UserStatsContext.Provider>
  );
};

export default UserStatsContextProvider;
