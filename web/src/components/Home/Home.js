import React, { useState } from 'react'
import Foodscard from './foods'
import "./home.css"
export default function Home() {
  const foods = [
    {
      reggeli: 
      {
        eloetel: "Friss gyümölcs saláta mézzel és görög joghurttal.",
        foFogas: "Rántotta spárgával, paradicsommal és fűszerezett pirítóssal.",
        ital: "Frissen facsart narancslé vagy kávé."
      },

      ebed: 
      {
       Előétel: "Krémes zöldségleves pirított pirítóssal.",
       Főfogás: "Grillezett csirke mellfilé fokhagymás spenóttal és párolt barna rizzsel.",
       Desszert: "Almás pite vaníliafagyival. ",
       Ital: "Frissítő citromos jégtea vagy ásványvíz."
      },

      vacsora : 
      {
        eloetel: "Caprese saláta friss bazsalikommal és balzsamecettel.",
        foFogas: "Lazacfilé sült zöldségekkel (paprika, cukkini, hagyma) és petrezselymes burgonyapürével.",
        desszert: "Csokoládé mousse friss bogyós gyümölcsökkel.",
        ital: "Vörösbor vagy áfonya limonádé."
      }
    }
  ];


  







  const nevek = "Nevek";
  const nev1 = "Jancsii";
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
        {kaja && foods.map((food, index) => (
        <div key={index}>
          <h2>Reggeli</h2>
          <p>Előétel: {food.reggeli.eloetel}</p>
          <p>Fő fogás: {food.reggeli.foFogas}</p>
          <p>Ital: {food.reggeli.ital}</p>
        </div>))}

        {  italok && foods.map((food, index) => (
        <div key={index}>
          <h2>Ebed</h2>
          <p>Előétel: {food.reggeli.eloetel}</p>
          <p>Fő fogás: {food.reggeli.foFogas}</p>
          <p>Ital: {food.reggeli.ital}</p>
        </div>))}

        {kaja && foods.map((food, index) => (
        <div key={index}>
          <h2>vacsora</h2>
          <p>Előétel: {food.reggeli.eloetel}</p>
          <p>Fő fogás: {food.reggeli.foFogas}</p>
          <p>Ital: {food.reggeli.ital}</p>
        </div>))}

      {/* <p onClick={()=>{setkaja(!kaja );setItalok(false);setMenu(false)}}>Kajak </p>
      <p onClick={()=>{setItalok(!italok);setMenu(false);setkaja(false)}}>Italok</p>
      <p onClick={()=>{setMenu(!menu);setItalok(false);setkaja(false)}}>Menuk</p>
 */}



    

     







      {/* <button onClick={()=> {setnum()}}>+</button>
      {console.log(num)}
      <p>{num}</p>
      <button onClick={()=> {setnum(num-1)}}>-</button> */}
     <span onClick={food} className='p'>{showFood ? "Rejtsd el a kajakat" : "Mutast a kajakat"}</span>
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
