import React from 'react';
import ReactDOM from 'react-dom';
import ImageSlider from './ImageSlider';
import Bomb from './Bomb';

ReactDOM.render(
  <div>
    <ImageSlider />
    <Bomb initialCount={120} />
    <Bomb initialCount={234} />
    <Bomb initialCount={543} />
    <Bomb initialCount={123} />
  </div>,
  document.getElementById('root')
);
