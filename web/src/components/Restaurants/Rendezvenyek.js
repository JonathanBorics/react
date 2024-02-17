import React from 'react'
export default function Rendezvenyek({menuu}) {


  return (
    <div className='rendezveny'>

  <ul>
    {menuu.Rendezvények.map((rendezveny, index) => (
      <li className='lista-hatter' key={index}>
        <p>Férőhely: {rendezveny.Férőhely}</p>
        <p>Kínált lehetőségek:</p>
        <ul>
          <li className='cimek'>Esküvők:</li>
          <ul>
            <li>Esküvői menü: {rendezveny.Kínáltlehetőségek.Esküvők.Esküvőimenü}</li>
            <li>Italcsomagok: {rendezveny.Kínáltlehetőségek.Esküvők.Italcsomagok}</li>
            <li>Dekoráció: {rendezveny.Kínáltlehetőségek.Esküvők.Dekoráció}</li>
            <li>Hang- és fénytechnika: {rendezveny.Kínáltlehetőségek.Esküvők.Hangésfénytechnika}</li>
          </ul>
          <li className='cimek'>Születésnapok:</li>
          <ul>
            <li>Születésnapi menü: {rendezveny.Kínáltlehetőségek.Születésnapok.Születésnapimenü}</li>
            <li>Torta: {rendezveny.Kínáltlehetőségek.Születésnapok.Torta}</li>
            <li>Italcsomagok: {rendezveny.Kínáltlehetőségek.Születésnapok.Italcsomagok}</li>
          </ul>
        </ul>
        <p className='cimek'>Árak:</p>
        <li>
        <p>Esküvők esetében: {rendezveny.Árak.Esküvőkesetében}</p>
        <p>Születésnapok esetében: {rendezveny.Árak.Születésnapokesetében}</p>
        <p>Főbb jellemzők: {rendezveny.Főbbjellemzők.join(", ")}</p>
        </li>
      </li>
    ))}
  </ul>



















    </div>
  )
}
