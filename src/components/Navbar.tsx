import React from 'react';
import Navbar from 'react-bootstrap/Navbar'

export const NavBar =()=> {
  return(
    <Navbar bg="dark"className="pb-2 " variant="dark">
    <Navbar.Brand href="#home">
      React Bootstrap
    </Navbar.Brand>
  </Navbar>
  )
}

