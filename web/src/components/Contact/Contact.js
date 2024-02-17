import Card from '../Card/Card'
import "../../App.css"
export default function Contact() {

 
  
  const menu0={
    nev:"Mediterrán Menü",
    eloetel:" Caprese Saláta (mozzarella, paradicsom, bazsalikom, olívaolaj)",
    foetel:" Lazacos Penne Pestoval (friss lazac, penne tészta, pesto szósz)",
    deszert:"Tiramisu  ",
    deszertosszetevok:"(mascarpone krém, kávé áztatott piskóta, kakaópor)",
    ar:"890din",
  }
const menu1={
  nev:"Vegetáriánus Menü",
  eloetel:"Grillezett Zöldség Tál (padlizsán, cukkini, paprika, paradicsom)",
  foetel:"Quinoa Burgonyapürével (quinoa, sült burgonya, friss zöldségek)",
  deszert:"Gyümölcsös Jogurt",
  deszertosszetevok:"(friss gyümölcsök, natúr joghurt, méz)",
  ar:"900din",
}
const menu2={
   nev:"Ázsiai Menü",
   eloetel:"Vegán Tavaszi Tekercs (rizslap, friss zöldségek, tofu, mártás)",
   foetel:"Csirkés Csípős Pad Thai (csirkemell, rizstészta, zöldségek, csípős szósz)",
   deszert:"Mangós Rizsfelfújt",
   deszertosszetevok:"(rizs, mangó, kókusztej, vanília)",
   ar:"980din",
}
const menu3={
  nev:"Ázsiai Menü",
  eloetel:"Vegán Tavaszi Tekercs (rizslap, friss zöldségek, tofu, mártás)",
  foetel:"Csirkés Csípős Pad Thai (csirkemell, rizstészta, zöldségek, csípős szósz)",
  deszert:"Mangós Rizsfelfújt",
  deszertosszetevok:"(rizs, mangó, kókusztej, vanília)",
  ar:"980din",
}

const menu4={
  nev:"Ázsiai Menü",
  eloetel:"Vegán Tavaszi Tekercs (rizslap, friss zöldségek, tofu, mártás)",
  foetel:"Csirkés Csípős Pad Thai (csirkemell, rizstészta, zöldségek, csípős szósz)",
  deszert:"Mangós Rizsfelfújt",
  deszertosszetevok:"(rizs, mangó, kókusztej, vanília)",
  ar:"980din",
}
const menuLista = [menu0, menu1, menu2,menu3,menu4]
  return (
    <div className='car' >
   
   {menuLista.map((menuElem)=> (<Card menu={menuElem}></Card>))}
  
    </div>
  )
}
