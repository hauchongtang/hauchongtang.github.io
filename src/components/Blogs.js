import React from 'react'
import Navbar from './NavBar'

export default function Blogs() {
  return (
    <div className="container">
      <Navbar />
      <div className="container">
        <h1>My Blog</h1>
        <p>Created with <a class="link hover-2" href="https://notion.so">Notion</a></p>
        <p className='lead'>
          <a class='link hover-2' href='https://www.notion.so/Using-react-router-dom-with-GitHub-Pages-d4bf687361ef44dda0a9a1990ed3b35d'>
            Using react-router-rom with GitHub Pages
          </a>
        </p>
        <p className='lead'>
          <a class='link hover-2' href='https://www.notion.so/Dark-Mode-Toggle-in-your-Webpage-31d76a29f8ae4cfbbe3f16262b87003d'>
            Dark Mode Toggle on your webpage
          </a>
        </p>
        <p className='lead'>
          <a class='link hover-2' href='https://www.notion.so/Configure-Jest-and-Supertest-for-tesing-APIs-Quick-Guide-Express-and-MongoDB-0158ba4367c447569a3383bb2d03d252'>
            Testing REST APIs with Jest and Supertest(Quick Guide) - Express and MongoDB
          </a>
        </p>
        <p className='lead'>
          <a class="link hover-2" href='/'>Home</a>
        </p>
      </div>
    </div>
  )
}