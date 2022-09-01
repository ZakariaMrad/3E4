import express from "express";
import dayjs from "dayjs"

const app = express();
//const dayjs = dayjs();

//TODO: Ajouter du code ici!!
app.get("/premier", (req, res) => {
    res.status(200);
    res.set('Content-Type', 'text/plain');
    res.send("Première route avec express!");
});

app.get("/date", (req, res) => {
    res.status(200);
    res.set('Content-Type', 'text/plain');
    const today = dayjs().format();
    res.send(today)
});

app.get("/math/:operator", (req, res) => {
    const a = parseInt(req.query.a, 10);
    const b = parseInt(req.query.b, 10);
    const operator = req.params.operator;
    let c;
    switch (operator) {
        case "sum":
            c = a + "+" + b + "=" + (a + b);
            break;
        case "sus":
            c = a + "-" + b + "=" + (a - b);
            break;
        case "mul":
            c = a + "*" + b + "=" + (a * b);
            break;
        case "div":
            c = a + "÷" + b + "=" + (a / b);
            break;
        case "mod":
            c = a + "%" + b + "=" + (a % b);
            break;
        case "pow":
        c = a + "^" + b + "=" + (Math.pow(a,b));
            break;

        default:
            c = "Erreur, " + operator + " n'existe pas...";
            break;
    }
    res.status(200);
    res.set('Content-Type', 'text/plain');
    res.send(c + "\n Les choix sont: sum, sus, mul, div, mod et pow")
});


export default app;
