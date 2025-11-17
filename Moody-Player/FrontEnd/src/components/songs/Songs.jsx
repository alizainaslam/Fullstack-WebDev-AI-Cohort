const Songs = () => {
  const songList = [
    {
      name: "song_name",
      artist: "sone_artist",
    },
    {
      name: "song_name",
      artist: "sone_artist",
    },
    {
      name: "song_name",
      artist: "sone_artist",
    },
    {
      name: "song_name",
      artist: "sone_artist",
    },
  ];

  return (
    <>
      <h1 className="text-2xl font-semibold pb-4">Recommended</h1>
      {songList.map((song, idx) => {
        return (
          <ol key={idx} className="w-full flex justify-between items-center my-3">
            <div>
              <h2>{song.name}</h2>
              <small>{song.artist}</small>
            </div>
            <h2>icon</h2>
          </ol>
        );
      })}
    </>
  );
};

export default Songs;
