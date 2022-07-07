import { Dispatch, SetStateAction, useState } from "react";
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
              onClick={() => setTrackIndex(index)}
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

// const PlaylistItem = ({ item }: { item: PlaylistItem }) => {
//   return (
//     <li>
//       {item.artist} - {item.title} ({item.year})
//       <audio
//         onCanPlay={onCanPlayHandler}
//         ref={audioRef}
//         src={fakePlaylist.items[2].file}
//       >
//         Your browser does not support the
//         <code>audio</code> element.
//       </audio>
//     </li>
//   );
// };

export default Playlist;
