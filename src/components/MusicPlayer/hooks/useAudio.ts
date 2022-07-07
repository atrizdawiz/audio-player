import { useEffect, useRef, useState } from "react";

const useAudio = (
  setTrackProgress: React.Dispatch<React.SetStateAction<number | null>>,
  currentTrackDuration: number | null
) => {
  const [isPlaying, setIsPlaying] = useState(false);
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
    console.log(audioRef);
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

  return { audioRef, setIsPlaying, isPlaying };
};

export default useAudio;
