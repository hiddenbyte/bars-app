import React from 'react';
import Header from './Header'; 
import Footer from './Footer'; 
import Bar from './Bar'; 
import './App.css';
import './assets/main.css';
import { getRandomLyrics } from './data/data'

function App() {
  const lyrics = getRandomLyrics();
  return (<>
    <Header></Header>
    <Bar verses={lyrics.verses} author={lyrics.author} title={lyrics.title}  year={lyrics.year} media={lyrics.media}></Bar>
    <Footer></Footer>
    </>);
}

export default App;