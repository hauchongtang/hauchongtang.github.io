/* eslint-disable jsx-a11y/accessible-emoji */
import React, { useState } from 'react'
import {
  Button, Collapse
} from 'reactstrap';
import Typing from 'react-typing-animation';
import Projects from './Projects';

const HomeContent = () => {
  const [fadeIn, setFadeIn] = useState(false)
  const toggle = () => {
    return (
      setFadeIn(!fadeIn)
    )
  }
  return (
    <div className='container'>
      <div className='container' id='content'>
        <div>
          <Typing speed={0.5}>
            <h1>Hello.</h1>
          </Typing>
          <p className='intro'>I am a Computer Science Student @NUS</p>
        </div>
        <h4>Currently I am ...</h4>
        <p className="lead">
          🚴‍♂️ or 💻 or 🍿
        </p>
        <p className='lead'>
          <a class="link hover-2" href='https://github.com/hauchongtang/'>Github</a>&nbsp;&nbsp;
          <a class="link hover-2" href='mailto:thchong28@gmail.com'>Gmail</a>
        </p>
      </div>
    </div>
  );
};

export default HomeContent;