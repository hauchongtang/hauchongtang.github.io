/* eslint-disable jsx-a11y/accessible-emoji */
import React, { useState } from 'react'
import {
  Button, Fade
} from 'reactstrap';
import Typing from 'react-typing-animation';

const HomeContent = () => {
  const [fadeIn, setFadeIn] = useState(false)
  const toggle = () => {
    return (
      setFadeIn(!fadeIn)
    )
  }
  return (
    <div className='container'>
      <div>
        <Typing speed={100}>
          <h1>Hello World!</h1>
        </Typing>
        <p>This is the output from my first program when I started out a few years ago.</p>
        <div>
          <Typing speed={100}>
            <h4>Hello! :D I am Hau Chong</h4>
          </Typing>
        </div>
        <Button color="link" onClick={toggle}>More About Me </Button>
        <Fade in={fadeIn} tag="p">
          <p>I am a Software Developer from Singapore 🇸🇬 and I am an A Level grad.</p>
          <p>I am working on a Food Finder App.</p>
          <p>Feel free to take a look at my <a class="link hover-2" href='#/projects'>projects</a></p>
        </Fade>
        <h4>Currently I am ...</h4>
        <p className="lead">
          Learning <a class="link hover-2" href='https://reactjs.org/'>React</a> and maintaining <a class="link hover-2" href='#/projects'>projects</a>
        </p>
        <p className="lead">
          Watching videos on the tube ▶️
          </p>
        <h4>Find Me @</h4>
        <p className='lead'>
          <a class="link hover-2" href='https://github.com/thchong-code/'>Github</a>&nbsp;&nbsp;
            <a class="link hover-2" href='mailto:hchtang2000@gmail.com'>Gmail</a>
        </p>
      </div>
    </div>
  );
};

export default HomeContent;