import { createContext, PropsWithChildren, useState } from "react";
import { UserStatsInterface } from "../types";

export const UserStatsContext = createContext({} as UserStatsInterface);

const UserStatsContextProvider = ({ children }: PropsWithChildren) => {
  const [totalNumAnswered, setTotalNumAnswered] = useState(0); // either what's in  localStorage or else 0
  const [numCorrect, setNumCorrect] = useState(0); // either what's in localStorage or else 0

  const contextValue = {
    totalNumAnswered,
    setTotalNumAnswered,
    numCorrect,
    setNumCorrect,
  };

  return (
    <UserStatsContext.Provider value={contextValue}>
      {children}
    </UserStatsContext.Provider>
  );
};

export default UserStatsContextProvider;
