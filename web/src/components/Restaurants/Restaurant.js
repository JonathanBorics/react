import React from 'react'
import Contact from '../Contact/Contact'
import { useState } from 'react'
import RestaurantCard from './RestaurantCard'
export default function Restaurant({menu}) {

const [muti,setmuti]=useState(false);

const [showEmployees, setShowEmployees] = useState(false);

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
    ]
};
   
const lista=[restaurant0,restaurant1,restaurant2,restaurant3];



  return (
    
    <div >
    
    


{lista.map((menuElem)=> (<RestaurantCard menu={menuElem}></RestaurantCard>))}


    <button  onClick={()=> setmuti(!muti)}>Menuk</button>
    {muti &&<Contact menu={menu}> </Contact>}<br></br><br></br>
    <RestaurantCard menu={restaurant0}></RestaurantCard>




    </div>
    
  )
}





