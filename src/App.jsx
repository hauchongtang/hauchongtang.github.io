import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import AllPageComponents from "./AllPageComponents";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AllPageComponents />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;