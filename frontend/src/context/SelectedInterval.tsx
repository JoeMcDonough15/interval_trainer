import { createContext, PropsWithChildren, useState } from "react";

interface SelectedIntervalInterface {
  intervalName: string;
  setIntervalName: (nameOfInterval: string) => void;
  intervalFilePath: string;
  setIntervalFilePath: (path: string) => void;
}

export const SelectedIntervalContext = createContext(
  {} as SelectedIntervalInterface
);

const SelectedIntervalContextProvider = ({ children }: PropsWithChildren) => {
  const [intervalName, setIntervalName] = useState("");
  const [intervalFilePath, setIntervalFilePath] = useState("");

  const contextValue = {
    intervalName,
    setIntervalName,
    intervalFilePath,
    setIntervalFilePath,
  };

  return (
    <SelectedIntervalContext.Provider value={contextValue}>
      {children}
    </SelectedIntervalContext.Provider>
  );
};

export default SelectedIntervalContextProvider;
