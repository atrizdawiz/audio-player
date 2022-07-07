import { formatTime } from "../../helpers/helpers";
import styles from "./TimeDisplay.module.css";

const TimeDisplay = ({
  currentTrackDuration,
  trackProgress,
}: {
  currentTrackDuration: number | null;
  trackProgress: number | null;
}) => {
  return (
    <div className={styles.timeDisplay}>
      <span className={styles.trackProgress}>{formatTime(trackProgress)}</span>
      <span>/</span>
      <span className={styles.trackDuration}>
        {formatTime(currentTrackDuration)}
      </span>
    </div>
  );
};

export default TimeDisplay;
