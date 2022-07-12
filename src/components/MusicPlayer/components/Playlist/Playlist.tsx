import { Dispatch, SetStateAction, useState } from "react";
import styles from "./Playlist.module.css";

interface Playlist {
  items: PlaylistItem[];
}

interface PlaylistItem {
  id: string;
  src: string;
  title: string;
  artist: string;
  year: number;
}

const Playlist = ({
  playlist,
  audioRef,
}: {
  playlist: Playlist;
  audioRef: any;
}) => {
  const [show, setShow] = useState(false);
  const [trackIndex, setTrackIndex] = useState(0);
  return (
    <>
      <button className={styles.toggle} onClick={() => setShow(!show)}>
        {show ? "hide" : "show"} playlist
      </button>
      {show && (
        <ul className={styles.playlist}>
          {playlist.items.map((item, index) => (
            <li
              onClick={() => {
                audioRef.current.src = item.src;
                audioRef.current.load();
                setTrackIndex(index);
              }}
              key={item.id}
              className={index === trackIndex ? styles.currentTrack : ""}
            >
              {item.artist} - {item.title} ({item.year})
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default Playlist;
