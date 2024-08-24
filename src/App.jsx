import React from "react"
import { Routes, Route, Link, useLocation } from "react-router-dom"
import Home from "./components/Home"
import Details from "./components/Details"

function App() {

  const {search, pathname} = useLocation()
  console.log(search, pathname)

  return ( 
  <div className="h-screen w-screen flex">

    {(pathname != "/" || search.length > 0) && <Link to="/" className="absolute left-[17%] top-[3%] py-2 px-3 border rounded-full border-zinc-300 text-zinc-600">Home</Link>}
    
   
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/details/:id" element={<Details />} />
    </Routes>
    
  </div>
  )
}

export default App
