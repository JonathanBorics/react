import React from 'react'
import "../../App.css"
export default function Employees({menuu}) {

  return (
    <div className='munkatarsak'>

 <ul >
   { menuu.alkalmazottak.map((employee, index) => (
   <li key={index}>
   <h2>{employee.nev}</h2>
   <p>Beosztás: {employee.beosztas}</p>
   <p>Szakterület: {employee.szakterulet}</p>
   <p>Tapasztalat: {employee.tapasztalat} év</p>
   </li>
))}
</ul>


</div>
  )
}
