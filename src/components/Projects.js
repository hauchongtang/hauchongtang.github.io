import React, { useState } from 'react'
import Navbar from './NavBar'
import { Card, Button, CardImg, CardGroup, CardBody, Popover, PopoverBody, Col } from 'reactstrap'
import ProjectCard from './projectcard/ProjectCard';

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
      <h1>Stuff I Made.</h1>
      <div className='container'>
        <CardGroup>
          <Col md='12'>
            <ProjectCard 
              codesArr={["Flutter", "Dart"]} 
              linkObj={{ github: "https://github.com/hauchongtang/todoapp", demo: 'https://github.com/hauchongtang/todoapp' }} 
              descStr={"Simple To-Do app on Android"} 
              title={"To-Do App"} 
            />
            <ProjectCard 
              codesArr={["Javascript"]} 
              linkObj={{ github: "https://github.com/hauchongtang/covid-dash", demo: 'https://hauchongtang.github.io/covid-dash/' }} 
              descStr={"Simple interactive dashboard that displays key covid trends since end-2019."} 
              title={"Covid Dashboard"} 
            />
            <ProjectCard 
              codesArr={["Javascript"]} 
              linkObj={{ github: "https://github.com/hauchongtang/rainorshine", demo: 'https://hauchongtang.github.io/rainorshine/' }} 
              descStr={"Did this for fun, allows me to quickly check the weather before I head out for a run/ ride"} 
              title={"Forecast Visualization"} 
            />
            <ProjectCard 
              codesArr={["Javascript"]} 
              linkObj={{ github: "https://github.com/hauchongtang/ExpenseTracker", demo: "https://sheltered-refuge-87677.herokuapp.com/" }} 
              descStr={"ExpenseTracker App :)"} 
              title={"Expense Tracker"} 
            />
            <ProjectCard
              codesArr={["Python"]}
              linkObj={{github: "https://github.com/hauchongtang/autoSORT", demo: "https://github.com/hauchongtang/autoSORT"}}
              descStr={"Sort files according to extensions by simple drag and drop operation while script is running."}
              title={"autoSORTER"}
            />
            <ProjectCard
              codesArr={["Python"]}
              linkObj={{github: "https://github.com/hauchongtang/github-follower-bot", demo: "https://github.com/hauchongtang/github-follower-bot"}}
              descStr={"Search for users and follow/unfollow using Selenium."}
              title={"Github-Follower-Bot"}
            />
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