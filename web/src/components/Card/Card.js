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

import React from 'react'
import"./Card.css" 
import Eloetel from './eloetel'
import Foetel from './Foetel'
import Deszert from './Deszert'
export default function Card({menu}) {
  return (
    <div className='unique-card'>
        <p> menu neve {menu.nev}</p>
       <Eloetel menu={menu}></Eloetel>
       <Foetel menu={menu}></Foetel>
       <Deszert menu={menu} ></Deszert>
        <p>{menu.ar}</p>
    </div>
  )
}
