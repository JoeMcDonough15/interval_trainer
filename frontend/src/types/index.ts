export interface EmptyInputsErrorType {
  noIntervalsIncluded?: string;
  noDirectionsIncluded?: string;
  noIntervalGuessed?: string;
}

export interface IntervalsInterface {
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

export interface DirectionsInterface {
  ascending: boolean;
  descending: boolean;
  composite: boolean;
}

export interface AvailableIntervalsInterface {
  availableIntervals: IntervalsInterface;
  setAvailableIntervals: React.Dispatch<
    React.SetStateAction<IntervalsInterface>
  >;
  availableDirections: DirectionsInterface;
  setAvailableDirections: React.Dispatch<
    React.SetStateAction<DirectionsInterface>
  >;
}

export interface SelectedIntervalInterface {
  intervalName: string;
  setIntervalName: React.Dispatch<React.SetStateAction<string>>;
  intervalDirection: string;
  setIntervalDirection: React.Dispatch<React.SetStateAction<string>>;
}

export interface UserStatsInterface {
  totalNumAnswered: number;
  setTotalNumAnswered: React.Dispatch<React.SetStateAction<number>>;
  numCorrect: number;
  setNumCorrect: React.Dispatch<React.SetStateAction<number>>;
  sendStatsToLocalStorage: () => void;
}
