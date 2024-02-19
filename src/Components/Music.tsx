import React, { useEffect, useState } from "react";
import MusicMP3 from "../Assets/Music.mp3";

const MusicPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  useEffect(() => {
    let audio = new Audio(MusicMP3);
    audio.loop = true;
    audio.play().catch(function (error) {
      console.log(
        "Chrome cannot play sound without user interaction first" + error
      );
    });
  }, [isPlaying]);

  return <div></div>;
};

export default MusicPlayer;
