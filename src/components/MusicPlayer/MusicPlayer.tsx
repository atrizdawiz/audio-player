import styles from "./MusicPlayer.module.css";
import { useEffect, useRef, useState } from "react";
import ProgressBar from "./components/ProgressBar/ProgressBar";
import mp3file from "../../../assets/audio/peace.mp3";

export const formatTime = (seconds: number | null) => {
  if (!seconds) return;

  const sec = Math.trunc(seconds % 60);
  const min = Math.trunc(seconds / 60);

  const fsec: string = sec < 10 ? `0${sec}` : sec.toString();
  const fmin: string = min < 10 ? `0${min}` : min.toString();

  return `${fmin}:${fsec}`;
};

const MusicPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [trackIndex, setTrackIndex] = useState(0);
  const [trackProgress, setTrackProgress] = useState(0);
  const [currentTrackDuration, setCurrentTrackDuration] = useState<
    number | null
  >(null);
  const audioRef = useRef<HTMLAudioElement>(null);
  const intervalRef = useRef<any>();

  useEffect(() => {
    if (isPlaying) {
      audioRef?.current?.play();
      startTimer();
    } else {
      clearInterval(intervalRef.current);
      audioRef?.current?.pause();
    }
  }, [isPlaying]);

  useEffect(() => {
    // Pause and clean up on unmount
    return () => {
      audioRef.current?.pause();
      clearInterval(intervalRef.current);
    };
  }, []);

  const startTimer = () => {
    clearInterval(intervalRef?.current);
    if (currentTrackDuration && audioRef.current) {
      intervalRef.current = setInterval(() => {
        if (audioRef.current?.ended) {
          setTrackProgress(currentTrackDuration);
          setIsPlaying(false);
        } else {
          if (audioRef?.current?.currentTime) {
            setTrackProgress(audioRef.current.currentTime);
          }
        }
      }, 1000);
    }
  };

  return (
    <figure className={styles.audioPlayer}>
      <button
        className={styles.playPauseButton}
        onClick={() => setIsPlaying(!isPlaying)}
      >
        {isPlaying ? "Pause" : "Play"}
      </button>
      <div className={styles.timeData}>
        <ProgressBar
          audioRef={audioRef}
          setTrackProgress={setTrackProgress}
          trackDuration={currentTrackDuration}
          trackProgress={trackProgress}
        />
        <div className={styles.timeDisplay}>
          <span className={styles.trackProgress}>
            {formatTime(trackProgress)}
          </span>
          <span>/</span>
          <span className={styles.trackDuration}>
            {formatTime(currentTrackDuration)}
          </span>
        </div>
      </div>
      <audio
        onCanPlay={() => {
          if (audioRef?.current?.duration != null) {
            setCurrentTrackDuration(audioRef.current.duration);
          }
        }}
        ref={audioRef}
        src={mp3file}
      >
        Your browser does not support the
        <code>audio</code> element.
      </audio>
    </figure>
  );
};

export default MusicPlayer;
