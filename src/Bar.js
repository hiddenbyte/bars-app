import React from 'react';
import './Bar.css';

function Bar(props) {
  return (
      <blockquote className="Bar">
          {props.verses.map(verse => (<p><span>{verse}</span></p>))}
          <cite>{props.author} - {props.title} ({props.year})</cite>
      </blockquote>
    );
}

export default Bar;