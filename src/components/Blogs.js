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
          <a class="link hover-2" href='#/portfolio-webpage'>Home</a>
        </p>
      </div>
    </div>
  )
}