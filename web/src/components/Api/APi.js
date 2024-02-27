import React, { useEffect, useState } from "react";
import ApiCard from "./ApiCard";

function APi() {
  const [karakterek, setKarakterek] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();
  // harom ertek lehetseges ha komponensekbe hasznalunk fatch-et
  //elso allapot a loading
  // masodik az error ha van error
  // harmadik allapot  teljesitett keres amikor megkapjuk a valaszt
  //plusz allapot nem kapunk hibat , a vaszat megkapkuk,de a valasz ures lista,objektum vagy barmi mas .

  useEffect(() => {
    const fetchData = async () => {
      // aszinkron funkcio , ami var egy adatot.
      try {
        // ebben a blokkban probalja lefutattni
        const response = await fetch("https://swapi.dev/api/people"); // megvarja a fetc erteket es be rakja a responsba
        if (!response.ok) {
          // ha nincs valasz
          throw new Error("Network response was not ok"); //akkor dobja a hibat ami  a catch blok kap el
        }
        const data = await response.json(); // respons-et konvertlja at,

        setKarakterek(data.results); // itt hoyyuk ki a useeffect-bol a fontenden fel tudjuk hasznalni az adatot
        setLoading(false); // amig a loadin erteke true addig az return-el ,miert itt allitjuk false-ra? azert van ott mert mar atkuldtuk az adatokat,az elozo sorban.
      } catch (error) {
        // a catch megfogja ezt a errort
        console.error("Fetch error:", error);
        setError(error); //itt kuldjuk ki a useeffect-bol a frontend reszre
        setLoading(false); // Ez itt azert van ,hogy ki tudjuk iratni a hibat,hogy ne a loading jelenjen meg.
      }
    };
    fetchData(); //a useffecten belul meghivjuk es el is inditjuk,hogy megjelenitse .
  }, []); //ujra rajzolja a valtoztattot valtozast a weboldalon, annak a fuggvenyeben,hogy mi van a fuggosegi listaban.
  // ha fuggosegi tomben van valami,es ha az valtozik ,akkor is ujra rajzolja,mert azt figyeli.
  //ha lista ures ,akkor egyszer fut le,es ha valtozik akkor se fut le ujra.

  if (loading) {
    //ha igaz a loading, akkor kiiratja a loading szoveget
    return <p style={{ color: "white" }}>Loading...</p>;
  }
  if (error) {
    //ha van error , akkor kiirja az errort
    return <p style={{ color: "white" }}>{error}</p>;
  }
  if (karakterek.length === 0) {
    return <p>ures a lista, nincs megjelenito karakter.</p>;
  }
  return (
    // csak akkor mukodikez,ha a loading false es ha nincs hiba
    <div className="car">
      {karakterek.map((karakteradat) => (
        <ApiCard character={karakteradat}></ApiCard>
      ))}
    </div>
  );
}

export default APi;
