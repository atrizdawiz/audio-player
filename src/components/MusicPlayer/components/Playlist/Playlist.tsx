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
  return (
    <ul className={styles.playlist}>
      {playlist.items.map((item) => (
        <li>
          {item.artist} - {item.title} ({item.year})
        </li>
      ))}
    </ul>
  );
};

export default Playlist;
