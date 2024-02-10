import React, { useState } from 'react'
import Foodscard from './foods'

export default function Home() {
  
  const nevek = "Nevek";
  const nev1 = "Jancsi";
  const nev2 = "Juli";
  const nev3 = "Janos";
  const[valt,setvalt] = useState(false);

  const[kaja,setkaja]= useState(false);
  const[italok,setItalok]= useState(false);
  const[menu,setMenu]= useState(false);


  const[num,setnum]= useState(0);
  
  const [showFood, setShowFood]=useState(false)
   const [names ,setNames]= useState("Nevek")
  const valtozik =()=>{
    setvalt(!valt)
  }
 
  const food=() =>{
    setShowFood(!showFood)
  } 
  
  return (
    <div>
      { kaja && <p>hambi ,gyros , pljesko</p>}
      { italok&&<p> cola, fanta,pepsi</p>}
      { menu&&<p> reggeli, ebed</p>}
      <p onClick={()=>{setkaja(!kaja );setItalok(false);setMenu(false)}}>Kajak </p>
      <p onClick={()=>{setItalok(!italok);setMenu(false);setkaja(false)}}>Italok</p>
      <p onClick={()=>{setMenu(!menu);setItalok(false);setkaja(false)}}>Menuk</p>
      <button onClick={()=> {setnum()}}>+</button>
      {console.log(num)}
      <p>{num}</p>
      <button onClick={()=> {setnum(num-1)}}>-</button>
      <button onClick={food}>{showFood ? "Rejtsd el a kajakat" : "Mutast a kajakat"}</button>
      {showFood && <Foodscard showFood={showFood} setShowFood={setShowFood}/>}
      {names==="Nevek" ? null : <p>{names===nev1? `${nev1} anyus`: names }  </p>}

      <p onClick={valtozik}>
        
        {names}  
      </p>
        { valt &&
        <div onClick={valtozik}>        
         <p onClick={()=>{setNames(nev1);setnum("anyus")}}>
        {nev1}
        </p >
        <p onClick={()=>{setNames(nev2)}}>
        {nev2}
        </p>
        <p onClick={()=>{setNames(nev3)}}>
        {nev3}
        </p>
        </div>

       }
     
      </div>
  )
}
