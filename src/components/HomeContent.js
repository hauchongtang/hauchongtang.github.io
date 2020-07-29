import React, { useState } from 'react'
import {
  Jumbotron, Button, Fade, Navbar, Card
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
    <div>
      <div>
        <Jumbotron>
          <Typing speed={100}>
            <h1>Hello World!</h1>
          </Typing>
          <p>This is the output from my first program when I started out a few years ago.</p>
        </Jumbotron>
        <div>
          <Typing speed={100}>
            <h4>Hello! :D I am Hau Chong</h4>
          </Typing>
        </div>
        <Button color="link" onClick={toggle}>More About Me </Button>
        <Fade in={fadeIn} tag="p">
          <p>I am a Software Developer from Singapore 🇸🇬 and I am an A Level grad.</p>
          <p>I am currently learning Full Stack Web Development and exploring new technologies.</p>
          <p>Feel free to take a look at my <a href='/projects'>projects</a></p>
        </Fade>
        <Jumbotron>
          <h4>Currently I am ...</h4>
          <p className="lead">
            Learning <a href='https://reactjs.org/'>React</a> and improving on my <a href='/projects'>projects</a>
          </p>
          <p className="lead">
            Watching videos on the tube ▶️
          </p>
          <h4>Find Me @</h4>
          <p className='lead'>
            <a href='https://github.com/thchong-code/'>Github</a>&nbsp;&nbsp;
            <a href='https://discord.com/channels/@me'>Discord</a>
          </p>
        </Jumbotron>
      </div>
    </div>
  );
};

export default HomeContent;