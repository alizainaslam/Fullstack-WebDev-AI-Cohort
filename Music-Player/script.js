class MusicLibrary {
  constructor() {
    this.musicsDetails = [];
  }
  addMusic(...music) {
    this.musicsDetails.push(...music);
  }
}
class Music {
  constructor(songTitle, singerName, url) {
    (this.songTitle = songTitle),
      (this.singerName = singerName),
      (this.url = url);
  }
  getMusicDetails() {
    return `${this.singerName}`;
  }
}

MusicLibrary.prototype.nextSong = ">>";
MusicLibrary.prototype.prevSong = "<<";

const library = new MusicLibrary();
let song1 = new Music("Song - 1", "Unknow", "upcoming...");
let song2 = new Music("Song - 2", "I Know", "upcoming...");
let song3 = new Music("Song - 3", "Someone", "upcoming...");
let song4 = new Music("Song - 4", "Another Singer", "upcoming...");
let song5 = new Music("Song - 5", "Famous Artist", "upcoming...");
library.addMusic(song1, song2, song3, song4, song5);
console.log(song2.singerName);
