import React, { useEffect, useState } from "react";

import "./Home.css";
import Video from "../components/Video";

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
      <div id="SideBar">A</div>
      <div id="Videos">
        {Data.map((e, index) => (
          <Video id = {e.id.videoId}            key={index}
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
