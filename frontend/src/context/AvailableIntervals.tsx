import { createContext, useState, PropsWithChildren } from "react";

interface AvailableIntervalsInterface {
  Unison: boolean;
  min2: boolean;
  Maj2: boolean;
  min3: boolean;
  Maj3: boolean;
  P4: boolean;
  Tritone: boolean;
  P5: boolean;
  min6: boolean;
  Maj6: boolean;
  min7: boolean;
  Maj7: boolean;
  Octave: boolean;
}

interface AvailableDirectionsInterface {
  ascending: boolean;
  descending: boolean;
  composite: boolean;
}

const AvailableIntervalsContext = createContext({});

const AvailableIntervalsProvider = ({ children }: PropsWithChildren) => {
  const [availableIntervals, setAvailableIntervals] = useState({
    Unison: true,
    min2: true,
    Maj2: true,
    min3: true,
    Maj3: true,
    P4: true,
    Tritone: true,
    P5: true,
    min6: true,
    Maj6: true,
    min7: true,
    Maj7: true,
    Octave: true,
  } as AvailableIntervalsInterface);

  const [availableDirections, setAvailableDirections] = useState({
    ascending: true,
    descending: true,
    composite: true,
  } as AvailableDirectionsInterface);

  const contextValue = {
    availableIntervals,
    setAvailableIntervals,
    availableDirections,
    setAvailableDirections,
  };

  return (
    <AvailableIntervalsContext.Provider value={contextValue}>
      {children}
    </AvailableIntervalsContext.Provider>
  );
};

export default AvailableIntervalsProvider;
