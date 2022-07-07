import styles from "./TimeDisplay.module.css";

export const formatTime = (seconds: number | null) => {
  if (!seconds || seconds < 1) return "00:00";

  const sec = Math.trunc(seconds % 60);
  const min = Math.trunc(seconds / 60);

  const fsec: string = sec < 10 ? `0${sec}` : sec.toString();
  const fmin: string = min < 10 ? `0${min}` : min.toString();

  return `${fmin}:${fsec}`;
};
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
