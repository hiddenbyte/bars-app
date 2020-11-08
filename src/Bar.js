import React from 'react';
import './assets/main.css';

function Bar(props) {
  return (
      <section>
        <blockquote className="container mx-auto p-2">
            {props.verses.map(verse => (<p className="mb-6"><span className="bg-pallete-black antialiased font-cursive text-5xl text-pallete-white">{verse}</span></p>))}
            <cite className="bg-pallete-lightorange font-cursive text-4xl text-pallete-black">- {props.title}, {props.author} ({props.year})</cite>
            <p className="mt-4">{props.media.map(m => (<a className="bg-black text-2xl text-white m-1 p-1" target="_blank" rel="noopener noreferrer" href={m.link}>{m.name}</a>))}</p>    
        </blockquote>
      </section>
    );
}

export default Bar;