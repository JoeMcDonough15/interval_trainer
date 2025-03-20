import { useContext } from "react";
import { SelectedIntervalContext } from "../../context/SelectedInterval";
import { SvgIcon } from "@progress/kendo-react-common";
import {
  playIcon,
  pauseIcon,
  volumeDownIcon,
  volumeUpIcon,
} from "@progress/kendo-svg-icons";
import "./intervalPlayer.css";

// This component needs to access whatever the currently selected intervalName and intervalDirection is
// and form a string out of it with string interpolation. That string will act as the file path for that interval
// audio file.  Then we need to render an audio element whose src gets that file path string.

const IntervalPlayer = () => {
  const { intervalName, intervalDirection } = useContext(
    SelectedIntervalContext
  );
  const filePath = `/src/assets/intervals/${intervalName}-${intervalDirection}.wav`;
  const audioObj = new Audio(filePath);
  return (
    <section className="interval-player-container row">
      <div className="background"></div>
      <div className="interface row ">
        <button
          onClick={() => {
            audioObj.play();
          }}
          className="interval-player-button"
        >
          <SvgIcon className="svg-icon" size="medium" icon={playIcon} />
        </button>
        <button
          onClick={() => {
            audioObj.pause();
          }}
          className="interval-player-button"
        >
          <SvgIcon className="svg-icon" size="medium" icon={pauseIcon} />
        </button>
        <button
          onClick={() => {
            if (audioObj.volume > 0.1) audioObj.volume -= 0.1;
          }}
          className="interval-player-button"
        >
          <SvgIcon className="svg-icon" size="medium" icon={volumeDownIcon} />
        </button>
        <button
          onClick={() => {
            if (audioObj.volume < 1) audioObj.volume += 0.1;
          }}
          className="interval-player-button"
        >
          <SvgIcon className="svg-icon" size="medium" icon={volumeUpIcon} />
        </button>
      </div>
    </section>
  );
};

export default IntervalPlayer;
