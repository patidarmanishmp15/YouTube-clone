import React, { useEffect, useState } from "react";

import { Avatar } from "@mui/material";

import "./Home.css";
import Video from "../components/Video";

import HomeIcon from "@mui/icons-material/Home";
import SubscriptionsIcon from "@mui/icons-material/Subscriptions";
import Shorts from "@mui/icons-material/Webhook";

import Yourchannel from "@mui/icons-material/AccountCircle";
import HistoryIcon from "@mui/icons-material/History";
import SlideshowIcon from "@mui/icons-material/Slideshow";
import WatchLaterIcon from "@mui/icons-material/WatchLater";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default function Home({ searchQuery }) {
  let [Data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      let data = await fetch(
        `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=50&q=${searchQuery}&key=AIzaSyD0BXJeCAFXm6c1unsX5b-N3oBXfgG-vAE`
      );
      data = await data.json();
      console.log(data);
      setData(data.items);
    }
    fetchData();
  }, [searchQuery]);

  return (
    <div id="Home">
      <div id="SideBar">
        <div id="home">
          <ul>
            <li>
              <HomeIcon id="HomeIcon" />
              HOME
            </li>
            <li>
              <Shorts id="Shorts" />
              Shorts
            </li>
            <li>
              <SubscriptionsIcon id="SubscriptionsIcon" />
              Subscriptions
            </li>
          </ul>
          <hr />
        </div>

        <div id="you">
          You
          <ul>
            <li>
              <Yourchannel id="icon" /> Your channel
            </li>
            <li>
              <HistoryIcon id="icon" /> History
            </li>
            <li>
              <SlideshowIcon id="icon" /> Your videos
            </li>
            <li>
              <WatchLaterIcon id="icon" /> Watch Later
            </li>
            <li>
              <ExpandMoreIcon id="icon" /> Show more
            </li>
          </ul>
          <hr />
        </div>

        <div id="Subsciptions">
          Subsciptions
          <ul>
            <li>
              {
                <Avatar
                  id="Avtar"
                  alt="Remy Sharp"
                  src="https://upload.wikimedia.org/wikipedia/commons/0/04/Technical_Guruji_logo.jpg"
                  sx={{ width: 15, height: 24 }}
                />
              }
              Technical Guruji
            </li>
            <li>
              {
                <Avatar
                  id="Avtar"
                  alt="Remy Sharp"
                  src="https://pixlok.com/wp-content/uploads/2021/04/T-Series-PNG-Logo-300x300.jpg"
                  sx={{ width: 15, height: 24 }}
                />
              }
              T-Series
            </li>
            <li>
              {" "}
              <ExpandMoreIcon id="icon" />
              Show more
            </li>
          </ul>
          <hr />
        </div>

        <div id="Explore">
          Explore
          <ul>
            <li>Trending</li>
            <li>Shopping</li>
            <li>Music</li>
            <li>Films</li>
            <li>Live</li>
            <li>Gaming</li>
            <li>News</li>
            <li>Sport</li>
            <li>Learning</li>
            <li>Fashion % beauty</li>
            <li>Podcasts</li>
          </ul>
        </div>
      </div>

      <div id="Videos">
        {Data.map((e, index) => (
          <Video
            id={e.id.videoId}
            key={index}
            thumbnail={e.snippet.thumbnails.high.url}
            title={e.snippet.title}
            views={"2M"}
            publishDate={e.snippet.publishedAt}
            channelIcon={e.snippet.thumbnails.high.url}
          />
        ))}
      </div>
    </div>
  );
}
