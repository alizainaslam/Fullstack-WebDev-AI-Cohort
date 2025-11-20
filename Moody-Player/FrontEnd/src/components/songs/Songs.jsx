import { useContext, useEffect, useState } from "react";
import play from "/play.svg";
import instance from "../../api/Apiconfig";
import { moodContext } from "../../context/MoodContext";

const Songs = () => {
  const { userMood } = useContext(moodContext);
  const [songList, setSongList] = useState([]);

  const fetchSong = async (mood) => {
    try {
      const { data } = await instance.get(`/song?mood=${mood}`);
      setSongList(data.findSong);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    {
      userMood && fetchSong(userMood);
    }
  }, [userMood]);

  return (
    <>
      <h1 className="text-2xl font-semibold pb-4">Recommended</h1>
      {songList.length > 0 ? (
        songList.map((song, idx) => (
          <ol
            key={idx}
            className="w-full flex flex-col lg:flex-row justify-between lg:items-center my-3 gap-5"
          >
            <div>
              <h2 className="text-lg font-semibold">{song.title}</h2>
              <small>{song.artist}</small>
            </div>
            <audio src={song.audio} controls preload="none" />
          </ol>
        ))
      ) : (
        <h3>You don't have any recommended song!</h3>
      )}
    </>
  );
};

export default Songs;
