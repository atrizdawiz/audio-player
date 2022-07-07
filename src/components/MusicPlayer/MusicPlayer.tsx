import styles from "./MusicPlayer.module.css";
import { useEffect, useRef, useState } from "react";
import ProgressBar from "./components/ProgressBar/ProgressBar";
import mp3file from "../../../assets/audio/peace.mp3";
import Playlist from "./components/Playlist/Playlist";
import fakePlaylist from "./components/Playlist/__fixtures__/fakePlaylist";
import TimeDisplay from "./components/TimeDisplay/TimeDisplay";

const MusicPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [trackIndex, setTrackIndex] = useState(0);
  const [trackProgress, setTrackProgress] = useState<number | null>(null);
  const [currentTrackDuration, setCurrentTrackDuration] = useState<
    number | null
  >(null);
  const audioRef = useRef<HTMLAudioElement>(null);
  const intervalRef = useRef<any>(null);

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

  const onCanPlayHandler = () => {
    console.log("I can play handler!");
    if (audioRef.current) {
      setTrackProgress(audioRef.current.currentTime);
      setCurrentTrackDuration(audioRef.current.duration);
    }
  };

  return (
    <figure className={styles.audioPlayer}>
      <div className={styles.mainDisplay}>
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
          <TimeDisplay
            currentTrackDuration={currentTrackDuration}
            trackProgress={trackProgress}
          />
        </div>
      </div>
      <Playlist playlist={fakePlaylist} />
      <audio onCanPlay={onCanPlayHandler} ref={audioRef} src={mp3file}>
        Your browser does not support the
        <code>audio</code> element.
      </audio>
    </figure>
  );
};

export default MusicPlayer;
