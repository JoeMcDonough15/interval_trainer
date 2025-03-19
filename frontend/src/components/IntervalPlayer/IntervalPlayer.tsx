import { useContext } from "react";
import { SelectedIntervalContext } from "../../context/SelectedInterval";

// This component needs to access whatever the currently selected intervalName and intervalDirection is
// and form a string out of it with string interpolation. That string will act as the file path for that interval
// audio file.  Then we need to render an audio element whose src gets that file path string.

const IntervalPlayer = () => {
  const { intervalName, intervalDirection } = useContext(
    SelectedIntervalContext
  );
  const filePath = `/src/assets/intervals/${intervalName}-${intervalDirection}.wav`;
  return (
    <section className="interval-player">
      <audio controls src={filePath}></audio>
    </section>
  );
};

export default IntervalPlayer;
