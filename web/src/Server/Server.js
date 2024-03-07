const express = require("express");
const bodyParser = require("body-parser");
const fs = require("fs");
const path = require("path"); // A path modul importálása az elérési útvonalak kezelésére
const app = express();
const port = 3001;

app.use(bodyParser.json());
const cors = require("cors");
app.use(cors());

app.post("/save", (req, res) => {
  const data = req.body;
  const dataPath = path.join(__dirname, "data.json"); // Az elérési útvonal meghatározása a data.json fájlhoz

  // Előző adatok betöltése és újak hozzáadása
  fs.readFile(dataPath, (err, prevData) => {
    let newData = [];
    if (!err && prevData.length) {
      newData = JSON.parse(prevData);
    }
    newData.push(data);

    // Új adatok mentése
    fs.writeFile(dataPath, JSON.stringify(newData, null, 2), (err) => {
      if (err) {
        return res.status(500).send("Hiba történt az adatok mentése közben.");
      }
      res.send("Adat sikeresen elmentve.");
    });
  });
});

app.listen(port, () => {
  console.log(`Szerver futtatása a következőn: http://localhost:${port}`);
});
