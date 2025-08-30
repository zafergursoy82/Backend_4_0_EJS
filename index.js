import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;

const today = new Date("July 26, 2025 01:15:00");
// const today = new Date("");
const WeekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

let dayNamee = WeekDays[today.getDay()];
let dayTypee = "a weekday";
let advicee = "it's time to work hard !! :(";

if(dayNamee === "Saturday" || dayNamee === "Sunday") {
  dayTypee = "the weekend";
  advicee = "Just relax. it's time to have fun :)";
}

app.get("/", (req, res) => {
  res.render("index.ejs", {
     dayName: dayNamee,
     dayType: dayTypee,
     advice: advicee
    }
  );
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});


