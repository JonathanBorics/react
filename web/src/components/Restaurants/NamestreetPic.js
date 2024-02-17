import React from 'react'
import "../../App.css"
export default function NamestreetPic({menuu}) {
  return (
    <div>


<h2>{menuu.nev}</h2>
<p>Cím: {menuu.cim}</p>
<img src={menuu.kep} className='restaurant-kep' alt=""></img>    


    </div>
  )
}
