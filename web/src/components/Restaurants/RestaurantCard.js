import React from 'react'
import"./restaurantCard.css" 
import { useState } from 'react';
import Contact from '../Contact/Contact';
import Rendezvenyek from './Rendezvenyek';
import Employees from './Employees';
import NamestreetPic from './NamestreetPic';
import "../../App.css"



export default function RestaurantCard({menuu }) {


  const [showEmployees, setShowEmployees] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const [showEvents, setShowEvents] = useState(false);
  return (
  <div className='back'>
  <div className='ress-card'>


    <NamestreetPic menuu={menuu}></NamestreetPic>


  
    <div className='button-container'>
          <p className={`button ${showEmployees && 'active'}`} onClick={() => {
            setShowEmployees(!showEmployees);
            setShowMenu(false);
            setShowEvents(false);
          }}>Munkatársak</p>

          <p className={`button ${showMenu && 'active'}`} onClick={() => {
            setShowMenu(!showMenu);
            setShowEmployees(false);
            setShowEvents(false);
          }}>Menuk</p>

          <p className={`button ${showEvents && 'active'}`} onClick={() => {
            setShowEvents(!showEvents);
            setShowEmployees(false);
            setShowMenu(false);
          }}>Rendezvenyek</p>
        </div>

        {showEmployees && <Employees menuu={menuu}></Employees>}
        {showMenu && <Contact menuu={menuu}></Contact>}
        {showEvents && <Rendezvenyek menuu={menuu}></Rendezvenyek>}
      </div>
    </div>

  )
}
