import play from "/play.svg";

const Songs = () => {
  const songList = [
    {
      name: "song_name",
      artist: "song_artist",
    },
    {
      name: "song_name",
      artist: "song_artist",
    },
    {
      name: "song_name",
      artist: "song_artist",
    },
    {
      name: "song_name",
      artist: "song_artist",
    },
  ];

  return (
    <>
      <h1 className="text-2xl font-semibold pb-4">Recommended</h1>
      {songList.map((song, idx) => {
        return (
          <ol
            key={idx}
            className="w-full flex justify-between items-center my-3"
          >
            <div>
              <h2 className="text-lg font-semibold">{song.name}</h2>
              <small>{song.artist}</small>
            </div>
            <img
              src={play}
              alt="play-icon"
              className="h-5 w-5 cursor-pointer"
            />
          </ol>
        );
      })}
    </>
  );
};

export default Songs;
