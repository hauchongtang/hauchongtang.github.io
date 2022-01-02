/* eslint-disable jsx-a11y/accessible-emoji */
import React, { useState } from 'react'
import {
  Button, Collapse
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
        <div>
          <Typing speed={0.5}>
            <h1>Hello!</h1>
          </Typing>
        </div>
        <Button color='link' class="link hover-2" onClick={toggle}>More About Me </Button>
        <Collapse isOpen={fadeIn} tag="p">
          <p>I am currently a CS undergraduate.</p>
          <p>Feel free to take a look at my <a class="link hover-2" href='#/projects'>projects</a></p>
        </Collapse>
        <h4>Currently I am ...</h4>
        <p className="lead">
          🚴‍♂️ or 💻 or 🍿
        </p>
        <h4>Find Me @</h4>
        <p className='lead'>
          <a class="link hover-2" href='https://github.com/hauchongtang/'>Github</a>&nbsp;&nbsp;
          <a class="link hover-2" href='mailto:thchong28@gmail.com'>Gmail</a>
        </p>
      </div>
    </div>
  );
};

export default HomeContent;