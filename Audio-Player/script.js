function selectElement(cls) {
  return document.querySelector(cls);
}

const audioUrl = selectElement("audio"),
  title = selectElement("h2"),
  singer = selectElement("p"),
  nextBtn = selectElement(".nextSongBtn"),
  prevBtn = selectElement(".prevSongBtn");
// ================== //
class MusicLibrary {
  constructor() {
    this.musicsDetails = [];
    this.currentSong = 0;
  }
  addMusic(...music) {
    this.musicsDetails.push(...music);
  }
  initiallPlay() {
    return this.musicsDetails[this.currentSong];
  }
  nextSong() {
    if (this.currentSong < this.musicsDetails.length - 1) this.currentSong++;
    return this.musicsDetails[this.currentSong];
  }
  prevSong() {
    if (this.currentSong > 0) this.currentSong--;
    return this.musicsDetails[this.currentSong];
  }
}
class Music {
  constructor(songTitle, singerName, url) {
    (this.songTitle = songTitle),
      (this.singerName = singerName),
      (this.url = url);
  }
}

const library = new MusicLibrary();
let song1 = new Music(
  "Song - 1",
  "Unknow",
  "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
);
let song2 = new Music(
  "Song - 2",
  "I Know",
  "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3"
);
let song3 = new Music(
  "Song - 3",
  "Someone",
  "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3"
);
let song4 = new Music(
  "Song - 4",
  "Another Singer",
  "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3"
);
let song5 = new Music(
  "Song - 5",
  "Famous Artist",
  "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-5.mp3"
);

library.addMusic(song1, song2, song3, song4, song5);

function loadSong(song) {
  title.textContent = song.songTitle;
  singer.textContent = song.singerName;
  audioUrl.src = song.url;
}
loadSong(library.initiallPlay());
nextBtn.addEventListener("click", () => {
  loadSong(library.nextSong());
});
prevBtn.addEventListener("click", () => {
  loadSong(library.prevSong());
});
