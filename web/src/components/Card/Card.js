// import React from 'react'
// import"./Card.css" 
// import Eloetel from './eloetel'
// import Foetel from './Foetel'
// import Deszert from './Deszert'
// export default function Card({nev,eloetel,ar,foetel,deszert,deszertosszetevo}) {
//   return (
//     <div className='unique-card'>
//         <p> menu neve {nev}</p>
//        <Eloetel eloetel={eloetel}></Eloetel>
//        <Foetel foetel={foetel}></Foetel>
//        <Deszert deszert={deszert} deszertosszetevo={deszertosszetevo}></Deszert>
//         <p>{ar}</p>
//     </div>
//   )
// }
import "../../App.css"
import React from 'react'
import Eloetel from './eloetel'
import Foetel from './Foetel'
import Deszert from './Deszert'
export default function Card({menu}) {
  return (
    
   
    <div className='unique-card'>
        <h2> {menu.nev}</h2>
       <Eloetel menu={menu}></Eloetel>
       <Foetel menu={menu}></Foetel>
       <Deszert menu={menu} ></Deszert>
        <p>{menu.ar}</p>
    </div>
    
    
  )
}
