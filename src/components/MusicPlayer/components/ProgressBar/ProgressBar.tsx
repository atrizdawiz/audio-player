import { RefObject, useEffect, useRef, useState } from "react";
import styles from "./ProgressBar.module.css";

interface Props {
  setTrackProgress: React.Dispatch<React.SetStateAction<number | null>>;
  trackProgress: number | null;
  trackDuration: number | null;
  audioRef: RefObject<HTMLAudioElement>;
}

const ProgressBar = ({
  setTrackProgress,
  trackProgress,
  trackDuration,
  audioRef,
}: Props) => {
  const resolvePercentage = () => {
    if (trackDuration && trackProgress) {
      return `${Math.trunc((trackProgress / trackDuration) * 100)}%`;
    } else {
      return "0%";
    }
  };
  const [percentFinished, setPercentFinished] = useState(resolvePercentage());
  const progressContainer = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (audioRef?.current?.ended) setPercentFinished("100%");
    else setPercentFinished(resolvePercentage());
  }, [trackProgress]);

  const handleProgressBarClick = (e: any) => {
    if (progressContainer.current) {
      const clickOffset =
        (e.pageX - progressContainer.current.offsetLeft) /
        progressContainer.current.clientWidth;
      if (audioRef.current && trackDuration) {
        setTrackProgress(Math.trunc(trackDuration * clickOffset));
        audioRef.current.currentTime = Math.trunc(trackDuration * clickOffset);
      }
    }
  };

  return (
    <div
      ref={progressContainer}
      className={styles.progressBarContainer}
      onMouseDown={handleProgressBarClick}
    >
      <div
        className={styles.progressBar}
        style={{ width: percentFinished }}
      ></div>
    </div>
  );
};

export default ProgressBar;
