import React, { useState } from "react";

export default function Post() {
  const [Nevtext, setNevtext] = useState("");
  const [pass, setpass] = useState("");

  const Adatkuldes = () => {
    fetch("http://localhost:3001/save", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name: Nevtext, pass: pass, date: new Date() }),
    })
      .then((response) => response.text())
      .then((data) => console.log(data));
  };

  const handleInputChange = (e) => {
    setNevtext(e.target.value);
  };
  const handle = (e) => {
    setpass(e.target.value);
  };
  return (
    <div>
      <input
        type="text"
        placeholder="text"
        autoFocus
        value={Nevtext}
        onChange={handleInputChange}
      />
      <br></br>

      <input
        type="password"
        autoFocus
        placeholder="password"
        value={pass}
        onChange={handle}
      ></input>
      <br></br>
      <button
        onClick={() => {
          Adatkuldes();
          setNevtext("");
          setpass("");
        }}
      >
        Send
      </button>
      <p>{Nevtext}</p>
    </div>
  );
}
