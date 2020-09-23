import React from 'react';
import Bar from './Bar'; 
import './App.css';
import { getRandomLyrics } from './data/data'

function App() {
  const lyrics = getRandomLyrics();
  return (<Bar verses={lyrics.verses} author={lyrics.author} title={lyrics.title} year={lyrics.year}></Bar>);
}

export default App;