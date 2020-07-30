import React, { useState } from 'react'
import Navbar from './NavBar'
import {
  Jumbotron, Card, Button, CardImg, CardTitle, CardText, CardGroup,
  CardSubtitle, CardBody, Popover, PopoverHeader, PopoverBody
} from 'reactstrap'

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
      <h1>My Projects</h1>
      <div className='container'>
        <CardGroup>
          <Card>
            <CardBody>
              <code>Javascript</code>
              <h4><a class="link hover-2" id='project-link' href='https://github.com/thchong-code/ExpenseTracker'>expenseTRACKER(MERN)</a></h4>
              <p id='content' className='lead'>Track spending and be in control to achieve your financial goals! <span>😄</span></p>
              <Button
                id="Popover1"
                type="button"
                onMouseEnter={onHover}
                onMouseLeave={onHoverLeave}
              >
                Screenshot
              </Button>
              <Popover
                placement="bottom"
                isOpen={popover}
                target="Popover1"
                toggle={toggle}
              >
                <PopoverBody>
                  <CardImg top width="100%" src="https://github.com/thchong-code/ExpenseTracker/blob/master/img/theme.jpg?raw=true" alt="Card image cap" />
                </PopoverBody>
              </Popover>
            </CardBody>
          </Card>
          <Card>
            <CardBody>
              <code>Python</code>
              <h4><a class="link hover-2" id='project-link' href='https://github.com/thchong-code/autoSORT'>autoSORTER</a></h4>
              <p id='content' className='lead'>Sort files according to extensions by a simple drag and drop operation</p>
              <Button
                id="Popover2"
                type="button"
                onMouseEnter={onHover1}
                onMouseLeave={onHoverLeave1}
              >
                Screenshot
              </Button>
              <Popover
                placement="bottom"
                isOpen={popover1}
                target="Popover2"
                toggle={toggle1}
              >
                <PopoverBody>
                  <CardImg top width="100%" src="https://github.com/thchong-code/autoSORT/raw/master/img/ss1.jpg" alt="Card image cap" />
                </PopoverBody>
              </Popover>
              <div>
              </div>
            </CardBody>
          </Card>
        </CardGroup>
        <p className='lead'>
          Created with Reactjs. The repository for this webpage can be found <a class="link hover-2" href='https://github.com/thchong-code/portfolio-webpage/'>here</a>
        </p>
        <p className='lead'>
          <a class="link hover-2" href='#/portfolio-webpage'>Home</a>
        </p>
      </div>
    </div>
  )
}