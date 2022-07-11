import styles from "./MusicPlayer.module.css";
import { useEffect, useRef, useState } from "react";
import ProgressBar from "./components/ProgressBar/ProgressBar";
import Playlist from "./components/Playlist/Playlist";
import fakePlaylist from "./components/Playlist/__fixtures__/fakePlaylist";
import TimeDisplay from "./components/TimeDisplay/TimeDisplay";
import useAudio from "./hooks/useAudio";

const MusicPlayer = () => {
  const [trackProgress, setTrackProgress] = useState<number | null>(null);
  const [currentTrackDuration, setCurrentTrackDuration] = useState<
    number | null
  >(null);
  const [playlist, setPlaylist] = useState(fakePlaylist);

  const { audioRef, isPlaying, setIsPlaying } = useAudio(
    setTrackProgress,
    currentTrackDuration
  );

  const onCanPlayHandler = () => {
    if (audioRef.current) {
      setTrackProgress(audioRef.current.currentTime);
      setCurrentTrackDuration(audioRef.current.duration);
    }
  };

  useEffect(() => {
    let playlistResponse;
    const getPlaylist = async () => {
      console.log("getting playlist");
      const playlistPromise = new Promise((resolve, reject) => {
        setTimeout(() => resolve(fakePlaylist), 5); // ignored
        setTimeout(() => reject(new Error("…")), 6); // ignored
      });
      playlistResponse = (await playlistPromise) as any;

      setPlaylist(playlistResponse);
    };
    getPlaylist();
  }, []);

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
      <audio
        onCanPlay={onCanPlayHandler}
        ref={audioRef}
        src={playlist.items[2].file}
      >
        Your browser does not support the
        <code>audio</code> element.
      </audio>
    </figure>
  );
};

export default MusicPlayer;
