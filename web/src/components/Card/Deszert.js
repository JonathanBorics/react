// import React from 'react'
// import Deszertosszetevo from './Deszertosszetevo'

// export default function Deszert({deszert, deszertosszetevo}) {
//   return (
//     <div style={{border:"1px solid green"}}>


//         <p>deszert {deszert}
        
//         </p>
//         <Deszertosszetevo deszertosszetevo={deszertosszetevo}></Deszertosszetevo>
//     </div>
//   )
// }
import React from 'react'
import Deszertosszetevo from './Deszertosszetevo'

export default function Deszert({menu}) {
  return (
    <div style={{border:"1px solid green", backgroundColor:"black"}}>


        <p>deszert {menu.deszert}
        
        </p>
        <Deszertosszetevo menu={menu}></Deszertosszetevo>
    </div>
  )
}
