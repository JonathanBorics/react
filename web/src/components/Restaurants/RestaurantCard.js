import React from 'react'
import"./restaurantCard.css" 
import { useState } from 'react';
export default function RestaurantCard({menu}) {

  const [showEmployees, setShowEmployees] = useState(false);
  return (
  <div className='back'>
  <div className='ress-card'>


          <h2>{menu.nev}</h2>
          <p>Cím: {menu.cim}</p>
          <img src={menu.kep} className='kep'></img>    
          <h3>Alkalmazottak:</h3>
          <button className='button' onClick={() => setShowEmployees(!showEmployees)}>Munkatársak</button>

            {showEmployees &&  <ul>
              {menu.alkalmazottak.map((employee, index) => (
              <li key={index}>
              <h4>{employee.nev}</h4>
              <p>Beosztás: {employee.beosztas}</p>
              <p>Szakterület: {employee.szakterulet}</p>
              <p>Tapasztalat: {employee.tapasztalat} év</p>
              </li>
                ))}
              </ul>}



        




    </div>
    </div>

  )
}
