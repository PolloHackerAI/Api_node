import express from "express"

const app = express(); //  init dell oggetto 
const port = 3000;  // init della porta
// Definisco una rotta su express 
app.get('/' , (req,res) => {
    res.send("ciao da Express!");
})
// Definisco su quale porta deve ascoltare, nella funzione freccia ho inserito un log per debug
app.listen(port,() => {
    console.log("porta:" + port);
})
