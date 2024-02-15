// import React, { useState } from 'react'

// export default function Deszertosszetevo({deszertosszetevo}) {
//   const[deszert,setDeszert]= useState(false);
//     return (
//     <div>

//        {deszert && <p >deszertosszetevo: {deszertosszetevo}</p>}
//         <button onClick={()=> setDeszert(!deszert)}>click me</button>
//     </div>
//   )
// }

import React, { useState } from 'react'

export default function Deszertosszetevo({menu}) {

  
  const[deszert,setDeszert]= useState(false);
    return (
    <div>

       {deszert && <p >deszertosszetevo: {menu.deszertosszetevok}</p>}
        <button  onClick={()=> setDeszert(!deszert)}>click me</button>
    </div>
  )
}
