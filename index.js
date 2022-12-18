import express from "express";
import path from "path";
import { home } from "./controller/home.js";
import { graftakberarah } from "./controller/graftakberarah.js";
import { grafikBar } from "./controller/grafikBar.js";
import { grafikBar2 } from "./controller/grafikBar2.js";
import { grafikBar3 } from "./controller/grafikBar3.js";
import { grafikBar4 } from "./controller/grafikBar4.js";
import { grafikBar5 } from "./controller/grafikBar5.js";
import { pencarian } from "./controller/pencarian.js";
import { pencarian2 } from "./controller/pencarian2.js";
import { pencarian3 } from "./controller/pencarian3.js";
import { pencarian4 } from "./controller/pencarian4.js";
import { pencarian5 } from "./controller/pencarian5.js";


const app = express();
const port = 8080;

app.use(express.static(path.resolve("public")));
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/", home);

app.use("/graftakberarah", graftakberarah);

app.use("/grafikBar/book1", grafikBar);
app.use("/grafikBar/book2", grafikBar2);
app.use("/grafikBar/book3", grafikBar3);
app.use("/grafikBar/book4", grafikBar4);
app.use("/grafikBar/book5", grafikBar5);

app.use("/pencarian/book1", pencarian);
app.use("/pencarian/book2", pencarian2);
app.use("/pencarian/book3", pencarian3);
app.use("/pencarian/book4", pencarian4);
app.use("/pencarian/book5", pencarian5);


app.listen(port, () => {
    console.log('Listening to port ' + port);
});