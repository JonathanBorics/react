import React from 'react'
import RestaurantCard from './RestaurantCard'
export default function Restaurant() {

const restaurant0 = {
    kep: "./pic/res1.jpg",
    nev: "Gastronomic Oasis",
    cim: "456 Elm Avenue, Townsville",
    alkalmazottak: [
        {
            nev: "Szabo Janos",
            beosztas: "Szakács",
            szakterulet: "Húsok és főételek",
            tapasztalat: 5,
        },
        {
            nev: "Kovacs Anna",
            beosztas: "Szakács",
            szakterulet: "Vegetáriánus és vegán ételek",
            tapasztalat: 3,
        },
        {
            nev: "Nagy Istvan",
            beosztas: "Séf",
            szakterulet: ["Magyar konyha", "Modern fine dining"],
            tapasztalat: 20,
        },
        {
            nev: "Kis Seva",
            beosztas: "Cukrász",
            szakterulet: ["Desszertek", "Francia cukrászat"],
            tapasztalat: 10,
        },
        {
            nev: "Horváth László",
            beosztas: "Pizzakészítő",
            szakterulet: "Tradicionális olasz pizzák",
            tapasztalat: 8,
        },
        {
            nev: "Tóth Bence",
            beosztas: "Pizzakészítő",
            szakterulet: "Gourmet pizzák, kreatív feltétek",
            tapasztalat: 4,
        }
    ],

    Rendezvények: [
        {
          Férőhely: "Maximum 100 fő részére",
          Kínáltlehetőségek: {
            Esküvők: {
              Esküvőimenü: "Háromfogásos, összeállítható menük választhatók, melyek tartalmazzák az előételt, főételt és desszertet.",
              Italcsomagok: "Különböző italcsomagok állnak rendelkezésre, melyek tartalmazzák a pezsgőt, bort és üdítőket.",
              Dekoráció: "Esküvői dekorációk biztosítása az étterem részéről.",
              Hangésfénytechnika: "Professzionális hang- és fénytechnikai eszközök biztosítása a rendezvényhez."
            },
            Születésnapok: {
              Születésnapimenü: "Választható menük különböző fogásokkal, melyek tartalmazzák az előételt, főételt és desszertet.",
              Torta: "Egyedi torták rendelhetők különböző méretekben és ízekben.",
              Italcsomagok: "Születésnapi italcsomagok, melyek tartalmazzák az üdítőket és pezsgőt."
            }
          },
          Árak: {
            Esküvőkesetében: "Árajánlat egyedi elképzelések alapján, kérjen árajánlatot.",
            Születésnapokesetében: "Árajánlat egyedi igények alapján, kérjen árajánlatot."
          },
          Főbbjellemzők: [
            "Külön terem bérelhető",
            "Személyre szabott menük",
            "Professzionális szolgáltatás és kiszolgálás",
            "Hangulatos, elegáns környezet",
            "Rugalmas foglalási feltételek"
          ]
        }
     ]







};
const restaurant1 = {
    kep: "./pic/res2.jpg",
    nev: "Gastronomic Oasis",
    cim: "456 Elm Avenue, Townsville",
    alkalmazottak: [
        {
            nev: "Szabo Janos",
            beosztas: "Szakács",
            szakterulet: "Húsok és főételek",
            tapasztalat: 5,
        },
        {
            nev: "Kovacs Anna",
            beosztas: "Szakács",
            szakterulet: "Vegetáriánus és vegán ételek",
            tapasztalat: 3,
        },
        {
            nev: "Nagy Istvan",
            beosztas: "Séf",
            szakterulet: ["Magyar konyha", "Modern fine dining"],
            tapasztalat: 20,
        },
        {
            nev: "Kis Seva",
            beosztas: "Cukrász",
            szakterulet: ["Desszertek", "Francia cukrászat"],
            tapasztalat: 10,
        },
        {
            nev: "Horváth László",
            beosztas: "Pizzakészítő",
            szakterulet: "Tradicionális olasz pizzák",
            tapasztalat: 8,
        },
        {
            nev: "Tóth Bence",
            beosztas: "Pizzakészítő",
            szakterulet: "Gourmet pizzák, kreatív feltétek",
            tapasztalat: 4,
        }
    ],

    Rendezvények: [
        {
          Férőhely: "Maximum 100 fő részére",
          Kínáltlehetőségek: {
            Esküvők: {
              Esküvőimenü: "Háromfogásos, összeállítható menük választhatók, melyek tartalmazzák az előételt, főételt és desszertet.",
              Italcsomagok: "Különböző italcsomagok állnak rendelkezésre, melyek tartalmazzák a pezsgőt, bort és üdítőket.",
              Dekoráció: "Esküvői dekorációk biztosítása az étterem részéről.",
              Hangésfénytechnika: "Professzionális hang- és fénytechnikai eszközök biztosítása a rendezvényhez."
            },
            Születésnapok: {
              Születésnapimenü: "Választható menük különböző fogásokkal, melyek tartalmazzák az előételt, főételt és desszertet.",
              Torta: "Egyedi torták rendelhetők különböző méretekben és ízekben.",
              Italcsomagok: "Születésnapi italcsomagok, melyek tartalmazzák az üdítőket és pezsgőt."
            }
          },
          Árak: {
            Esküvőkesetében: "Árajánlat egyedi elképzelések alapján, kérjen árajánlatot.",
            Születésnapokesetében: "Árajánlat egyedi igények alapján, kérjen árajánlatot."
          },
          Főbbjellemzők: [
            "Külön terem bérelhető",
            "Személyre szabott menük",
            "Professzionális szolgáltatás és kiszolgálás",
            "Hangulatos, elegáns környezet",
            "Rugalmas foglalási feltételek"
          ]
        }
     ]





};
   
const restaurant2 = {
    kep: "./pic/res3.jpg",
    nev: "Gastronomic Oasis",
    cim: "456 Elm Avenue, Townsville",
    alkalmazottak: [
        {
            nev: "Szabo Janos",
            beosztas: "Szakács",
            szakterulet: "Húsok és főételek",
            tapasztalat: 5,
        },
        {
            nev: "Kovacs Anna",
            beosztas: "Szakács",
            szakterulet: "Vegetáriánus és vegán ételek",
            tapasztalat: 3,
        },
        {
            nev: "Nagy Istvan",
            beosztas: "Séf",
            szakterulet: ["Magyar konyha", "Modern fine dining"],
            tapasztalat: 20,
        },
        {
            nev: "Kis Seva",
            beosztas: "Cukrász",
            szakterulet: ["Desszertek", "Francia cukrászat"],
            tapasztalat: 10,
        },
        {
            nev: "Horváth László",
            beosztas: "Pizzakészítő",
            szakterulet: "Tradicionális olasz pizzák",
            tapasztalat: 8,
        },
        {
            nev: "Tóth Bence",
            beosztas: "Pizzakészítő",
            szakterulet: "Gourmet pizzák, kreatív feltétek",
            tapasztalat: 4,
        }
    ],

    Rendezvények: [
        {
          Férőhely: "Maximum 100 fő részére",
          Kínáltlehetőségek: {
            Esküvők: {
              Esküvőimenü: "Háromfogásos, összeállítható menük választhatók, melyek tartalmazzák az előételt, főételt és desszertet.",
              Italcsomagok: "Különböző italcsomagok állnak rendelkezésre, melyek tartalmazzák a pezsgőt, bort és üdítőket.",
              Dekoráció: "Esküvői dekorációk biztosítása az étterem részéről.",
              Hangésfénytechnika: "Professzionális hang- és fénytechnikai eszközök biztosítása a rendezvényhez."
            },
            Születésnapok: {
              Születésnapimenü: "Választható menük különböző fogásokkal, melyek tartalmazzák az előételt, főételt és desszertet.",
              Torta: "Egyedi torták rendelhetők különböző méretekben és ízekben.",
              Italcsomagok: "Születésnapi italcsomagok, melyek tartalmazzák az üdítőket és pezsgőt."
            }
          },
          Árak: {
            Esküvőkesetében: "Árajánlat egyedi elképzelések alapján, kérjen árajánlatot.",
            Születésnapokesetében: "Árajánlat egyedi igények alapján, kérjen árajánlatot."
          },
          Főbbjellemzők: [
            "Külön terem bérelhető",
            "Személyre szabott menük",
            "Professzionális szolgáltatás és kiszolgálás",
            "Hangulatos, elegáns környezet",
            "Rugalmas foglalási feltételek"
          ]
        }
     ]






};
   
const restaurant3 = {
    kep: "./pic/res4.jpg",
    nev: "Gastronomic Oasis",
    cim: "456 Elm Avenue, Townsville",
    alkalmazottak: [
        {
            nev: "Szabo Janos",
            beosztas: "Szakács",
            szakterulet: "Húsok és főételek",
            tapasztalat: 5,
        },
        {
            nev: "Kovacs Anna",
            beosztas: "Szakács",
            szakterulet: "Vegetáriánus és vegán ételek",
            tapasztalat: 3,
        },
        {
            nev: "Nagy Istvan",
            beosztas: "Séf",
            szakterulet: ["Magyar konyha", "Modern fine dining"],
            tapasztalat: 20,
        },
        {
            nev: "Kis Seva",
            beosztas: "Cukrász",
            szakterulet: ["Desszertek", "Francia cukrászat"],
            tapasztalat: 10,
        },
        {
            nev: "Horváth László",
            beosztas: "Pizzakészítő",
            szakterulet: "Tradicionális olasz pizzák",
            tapasztalat: 8,
        },
        {
            nev: "Tóth Bence",
            beosztas: "Pizzakészítő",
            szakterulet: "Gourmet pizzák, kreatív feltétek",
            tapasztalat: 4,
        }
    ],
    Rendezvények: [
        {
          Férőhely: "Maximum 100 fő részére",
          Kínáltlehetőségek: {
            Esküvők: {
              Esküvőimenü: "Háromfogásos, összeállítható menük választhatók, melyek tartalmazzák az előételt, főételt és desszertet.",
              Italcsomagok: "Különböző italcsomagok állnak rendelkezésre, melyek tartalmazzák a pezsgőt, bort és üdítőket.",
              Dekoráció: "Esküvői dekorációk biztosítása az étterem részéről.",
              Hangésfénytechnika: "Professzionális hang- és fénytechnikai eszközök biztosítása a rendezvényhez."
            },
            Születésnapok: {
              Születésnapimenü: "Választható menük különböző fogásokkal, melyek tartalmazzák az előételt, főételt és desszertet.",
              Torta: "Egyedi torták rendelhetők különböző méretekben és ízekben.",
              Italcsomagok: "Születésnapi italcsomagok, melyek tartalmazzák az üdítőket és pezsgőt."
            }
          },
          Árak: {
            Esküvőkesetében: "Árajánlat egyedi elképzelések alapján, kérjen árajánlatot.",
            Születésnapokesetében: "Árajánlat egyedi igények alapján, kérjen árajánlatot."
          },
          Főbbjellemzők: [
            "Külön terem bérelhető",
            "Személyre szabott menük",
            "Professzionális szolgáltatás és kiszolgálás",
            "Hangulatos, elegáns környezet",
            "Rugalmas foglalási feltételek"
          ]
        }
     ]

};
   
const lista=[restaurant0,restaurant1,restaurant2,restaurant3];


  return (
    
    <div className='car' >
    
    
           {lista.map((menuElem)=> (<RestaurantCard menuu={menuElem}></RestaurantCard>))}

    </div>
    
  )
  }





