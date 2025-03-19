import { createContext, PropsWithChildren, useState } from "react";

interface UserStatsInterface {
  totalNumAnswered: number;
  setTotalNumAnswered: (num: number) => void;
  numCorrect: number;
  setNumCorrect: (num: number) => void;
}

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
