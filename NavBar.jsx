import React, { useState, useEffect } from "react";
import annyang from "annyang";
import "./NavBar.css";
import { Avatar } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import MicIcon from "@mui/icons-material/KeyboardVoice";
import VideoCallIcon from "@mui/icons-material/VideoCall";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";

export default function NavBar({ setSearchQuery }) {
  const [recognizedText, setRecognizedText] = useState("");
  const [searchInput, setSearchInput] = useState("");
  const [isListening, setIsListening] = useState(false);

  useEffect(() => {
    const commands = {
      "*text": (text) => {
        setRecognizedText(text);
        setSearchInput(text);
      },
    };

    annyang.addCommands(commands);

    return () => {
      annyang.abort();
      annyang.removeCommands();
    };
  }, []);

  const toggleListening = () => {
    if (isListening) {
      annyang.abort();
    } else {
      annyang.start();
    }
    setIsListening(!isListening);
  };

  const handleSearch = () => {
    setSearchQuery(searchInput);
    console.log("Search Query: ", searchInput);
  };

  return (
    <>
      <div className="NavBar">
        <div id="First">
          <MenuIcon id="MenuIcn" />
          <img src="/Media/Icons/YouTube-Logo.wine.png" alt="Youtube" />
        </div>

        <div id="Second">
          <div>
            <input
              type="search"
              placeholder="Search"
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
            />
            <SearchIcon id="SearchIcn" onClick={handleSearch} />
          </div>
          <MicIcon id="MicIcn" onClick={toggleListening} />
        </div>

        <div id="Third">
          <VideoCallIcon id="VIcon" />
          <NotificationsNoneIcon id="NIcon" />
          {
            <Avatar
              id="Avtar"
              alt="Remy Sharp"
              src="https://w7.pngwing.com/pngs/128/40/png-transparent-crayon-shin-chan-himawari-nohara-manga-television-show-action-kamen-manga-child-food-hand.png"
              sx={{ width: 24, height: 24 }}
            />
          }
        </div>
      </div>
    </>
  );
}
