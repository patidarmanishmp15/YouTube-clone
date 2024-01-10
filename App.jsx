import React, { useState } from 'react';
import './App.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import NavBar from './Frontend/components/NavBar';
import Home from './Frontend/pages/Home';
import VideoPlayer from './Frontend/pages/VideoPlayer';

export default function App() {
  const [searchQuery, setSearchQuery] = useState('india');

  return (
    <div id='App'>
      <BrowserRouter>
        <NavBar setSearchQuery={setSearchQuery} />

        <Routes>
          <Route path='/' element={<Home searchQuery={searchQuery} />} />
          <Route path='/video/:videoId' element={<VideoPlayer />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
