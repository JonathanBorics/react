import React, { useEffect, useState } from "react";
import "../../App.css";

export default function ApiCard({ character }) {
  const [showFilms, setShowFilms] = useState(false);
  const [selectedFilm, setSelectedFilm] = useState(null);
  const [home, setHome] = useState();
  const [loading, setloading] = useState(true);
  const [error, setError] = useState();

  const handleFilmClick = (filmUrl) => {
    setSelectedFilm(filmUrl);
  };
  // console.log("karakter", character);
  console.log("karakter", character.homeworld);
  useEffect(() => {
    const fetcHomeWorld = async () => {
      try {
        const response = await fetch(character.homeworld);
        if (!response.ok) {
          throw new Error("hiba");
        }
        const data = await response.json();

        setHome(data);
        console.log(data);
        setloading(false);
      } catch (error) {
        console.error("Fetch error:", error);
        setError(error);
        setloading(false);
      }
    };
    fetcHomeWorld();
  }, []);

  if (loading) {
    return <p> Loading...</p>;
  }
  if (error) {
    return <p> {error}</p>;
  }

  return (
    <div className="back">
      <div className="ress-card">
        <div>
          <h2>{character.name}</h2>
          <p>Height: {character.height}</p>
          <p>Mass: {character.mass}</p>
          <p>Hair color: {character.hair_color}</p>
          <p>Skin color: {character.skin_color}</p>
          <p>Eye color: {character.eye_color}</p>
          <p>Birth year: {character.birth_year}</p>
          <p>Gender: {character.gender}</p>
          <p>home:{home.name} </p>
          <h3 className="button" onClick={() => setShowFilms(!showFilms)}>
            Films
          </h3>
          {showFilms && (
            <ul>
              {character.films.map((film, index) => (
                <p key={index} onClick={() => handleFilmClick(film)}>
                  <a href={film}>{film}</a>
                </p>
              ))}
            </ul>
          )}
        </div>
        {selectedFilm && <p>Selected film: {selectedFilm}</p>}
      </div>
    </div>
  );
}
