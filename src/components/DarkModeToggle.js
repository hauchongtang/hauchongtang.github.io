import React from 'react'
import DarkModeToggle from 'react-dark-mode-toggle'
import useDarkMode from 'use-dark-mode'

import '../App.css'

const DarkToggle = () => {
  const darkMode = useDarkMode(false);

  return (
    <div className='dark-mode-toggle'>
      <DarkModeToggle size={45} checked={darkMode.value} onChange={darkMode.toggle} />
    </div>
  );
};

export default DarkToggle;