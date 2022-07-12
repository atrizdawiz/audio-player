import mp3src from "../../../../../../assets/audio/peace.mp3";
import mp3src2 from "../../../../../../assets/audio/angeleyes.mp3";

const fakePlaylist = {
  items: [
    {
      id: "1",
      artist: "Pelle",
      year: 1969,
      title: "My song",
      src: mp3src,
      type: "audio/mp3",
    },
    {
      id: "2",
      artist: "Palle",
      year: 1969,
      title: "Another song",
      src: mp3src2,
      type: "audio/mp3",
    },
  ],
};

export default fakePlaylist;
