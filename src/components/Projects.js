import React, { useState } from 'react'
import Navbar from './NavBar'
import { Card, Button, CardImg, CardGroup, CardBody, Popover, PopoverBody, Col } from 'reactstrap'

export default function Projects() {
  const [popover, setPopover] = useState(false)

  const toggle = () => {
    setPopover(!popover)
  }

  const onHover = () => {
    setPopover(true)
  }

  const onHoverLeave = () => {
    setPopover(false)
  }

  const [popover1, setPopover1] = useState(false)

  const toggle1 = () => {
    setPopover(!popover1)
  }

  const onHover1 = () => {
    setPopover1(true)
  }

  const onHoverLeave1 = () => {
    setPopover1(false)
  }

  return (
    <div className='container'>
      <Navbar />
      <h1>Stuff I Made</h1>
      <div className='container'>
        <CardGroup>
          <Col md='12'>
            <Card className='mb-4'>
              <CardBody>
                <code>Flutter, Dart</code>
                <h4>
                  <a class="link hover-2" id='project-link' href='https://github.com/hauchongtang/todoapp'>To-Do App</a>
                </h4>
                <a class='link hover-2' href='https://github.com/hauchongtang/todoapp'>Demo</a>
                <p id='content' className='lead'>Simple To-Do app</p>
              </CardBody>
            </Card>
            <Card className='mb-4'>
              <CardBody>
                <code>Javascript</code>
                <h4><a class="link hover-2" id='project-link' href='https://github.com/hauchongtang/covid-dash'>Covid Dashboard</a></h4>
                <a class='link hover-2' href='https://hauchongtang.github.io/covid-dash/#/'>Demo</a>
                <p id='content' className='lead'>An interactive dashboard w.r.t covid 19 trends worldwide <span>😄</span></p>
              </CardBody>
            </Card>
            <Card className='mb-4'>
              <CardBody>
                <code>Javascript</code>
                <h4><a class="link hover-2" id='project-link' href='https://github.com/hauchongtang/rainorshine'>Forecast</a></h4>
                <a class='link hover-2' href='https://hauchongtang.github.io/rainorshine/'>Demo</a>
                <p id='content' className='lead'>Did this for fun, it allows me to check the weather before I head out for a bike ride.</p>
              </CardBody>
            </Card>
            <Card className='mb-4'>
              <CardBody>
                <code>Python</code>
                <h4><a class="link hover-2" id='project-link' href='https://github.com/hauchongtang/autoSORT'>autoSORTER</a></h4>
                <a class='link hover-2' href='https://github.com/hauchongtang/autoSORT'>Demo</a>
                <p id='content' className='lead'>Sort files according to extensions by a simple drag and drop operation.</p>
                <div>
                </div>
              </CardBody>
            </Card>
            <Card className='mb-4'>
              <CardBody>
                <code>Python</code>
                <h4><a class="link hover-2" id='project-link' href='https://github.com/hauchongtang/github-follower-bot'>Github-Follower-Bot</a></h4>
                <a class='link hover-2' href='https://github.com/hauchongtang/github-follower-bot'>Demo</a>
                <p id='content' className='lead'>
                  Python bot to search for users and follow/ unfollow them using Selenium.
                </p>
                <div>
                </div>
              </CardBody>
            </Card>
          </Col>
        </CardGroup>
        <p className='lead'>
          Created with React. The repository for this webpage can be found <a class="link hover-2" href='https://github.com/hauchongtang/portfolio-webpage/'>here</a>
        </p>
        <p className='lead'>
          <a class="link hover-2" href='/'>Home</a>
        </p>
      </div>
    </div>
  )
}