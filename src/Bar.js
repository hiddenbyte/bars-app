import React from 'react';
import './Bar.css';

function Bar(props) {
  return (
      <section>
        <blockquote className="Bar">
            {props.verses.map(verse => (<p><span>{verse}</span></p>))}
            <cite>{props.author} - {props.title} ({props.year})</cite>
            <p className="Media">{props.media.map(m => (<a target="_blank" rel="noopener noreferrer" href={m.link}>{m.name}</a>))}</p>    
        </blockquote>
      </section>
    );
}

export default Bar;