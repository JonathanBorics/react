import React, { useEffect } from 'react'
import Card from '../Card/Card'

export default function Contact() {

 
  
  const menu0={
    nev:"csirke menu ",
   ar:"500din",
   eloetel:" csirke leves",
   foetel:" csirkes cheesburger",
   deszert:"szilvas gomboc ",
   deszertosszetevok:"csoki,slag,szilva"
  }
const menu1={
  nev:"gulas menu",
   ar:"400din",
   eloetel:"kaposzta",
   foetel:"gulas",
   deszert:"palacsinta",
   deszertosszetevok:"meggy,csoki,plazma"
}
const menu2={
   nev:"hamburger menu ",
   ar:"200din",
   eloetel:"leves",
   foetel:"cheesburger",
   deszert:"torta",
   deszertosszetevok:"meggy,csoki"
}

const menuLista = [menu0, menu1, menu2]
  return (
    <div style={{display:"flex", flexDirection:"row"}}>
    {/* <Card nev={"hambureg" }  ar={"ar1"} eloetel={"leves"} foetel={"cheesburger"} deszert={"torta"} deszertosszetevo={"meggy,csoki"} ></Card> */}
   {/* <Card menu={menu2}></Card>
   <Card menu={menu1}></Card>
   <Card menu={menu0}></Card> */}
   {menuLista.map((menuElem)=> (<Card menu={menuElem}></Card>))}
    
    </div>
  )
}
