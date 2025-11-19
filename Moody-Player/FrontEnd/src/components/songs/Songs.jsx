import { useContext, useState } from "react";
import play from "/play.svg";
import instance from "../../api/Apiconfig";
import { moodContext } from "../../context/MoodContext";

const Songs = () => {
  const { userMood } = useContext(moodContext);
  const [songList, setSongList] = useState([]);
  const fetchSong = async (mood) => {
    try {
      const { data } = await instance.get(`/song?mood=${mood}`);
      const response = data.findSong[0];
      setSongList(response);
      console.log(songList);
    } catch (error) {
      console.log(error);
    }
  };

  {
    userMood && fetchSong(userMood);
  }

  return (
    <>
      <h1 className="text-2xl font-semibold pb-4">Recommended</h1>
      {/* {songList.map((song, idx) => {
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
      })} */}
    </>
  );
};

export default Songs;
