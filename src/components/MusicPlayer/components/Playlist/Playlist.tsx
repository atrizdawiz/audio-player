import { useState } from "react";
import styles from "./Playlist.module.css";

interface Playlist {
  items: PlaylistItem[];
}

interface PlaylistItem {
  id: string;
  file: string;
  title: string;
  artist: string;
  year: number;
}

const Playlist = ({ playlist }: { playlist: Playlist }) => {
  const [show, setShow] = useState(false);
  return (
    <>
      <button className={styles.toggle} onClick={() => setShow(!show)}>
        {show ? "hide" : "show"} playlist
      </button>
      {show && (
        <ul className={styles.playlist}>
          {playlist.items.map((item) => (
            <li>
              {item.artist} - {item.title} ({item.year})
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default Playlist;
