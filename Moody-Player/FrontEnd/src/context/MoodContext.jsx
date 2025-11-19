import { createContext, useState } from "react";

export const moodContext = createContext();

const MoodContext = (props) => {
  const [userMood, setUserMood] = useState();

  return (
    <moodContext.Provider value={{ userMood, setUserMood }}>
      {props.children}
    </moodContext.Provider>
  );
};

export default MoodContext;
