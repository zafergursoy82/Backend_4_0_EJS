import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;

const d = new Date();
const WeekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const dayOfWeek = WeekDays[d.getDay()];

app.get("/", (req, res) => {
  res.render("index.ejs",
    { dayOfWeek: dayOfWeek }
  );
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});


