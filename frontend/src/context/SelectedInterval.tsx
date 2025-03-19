import { createContext, PropsWithChildren, useState } from "react";

interface SelectedIntervalInterface {
  intervalName: string;
  setIntervalName: (nameOfInterval: string) => void;
  intervalDirection: string;
  setIntervalDirection: (path: string) => void;
}

export const SelectedIntervalContext = createContext(
  {} as SelectedIntervalInterface
);

const SelectedIntervalContextProvider = ({ children }: PropsWithChildren) => {
  const [intervalName, setIntervalName] = useState("");
  const [intervalDirection, setIntervalDirection] = useState("");

  const contextValue = {
    intervalName,
    setIntervalName,
    intervalDirection,
    setIntervalDirection,
  };

  return (
    <SelectedIntervalContext.Provider value={contextValue}>
      {children}
    </SelectedIntervalContext.Provider>
  );
};

export default SelectedIntervalContextProvider;
