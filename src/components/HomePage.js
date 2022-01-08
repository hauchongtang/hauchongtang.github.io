import React from 'react'
import Navbar from './NavBar'
import HomeContent from './HomeContent'

export default function HomePage() {
  return (
    <div className='container'>
      <Navbar />
      <HomeContent/>
    </div>
  )
}