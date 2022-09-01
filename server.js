import chalk from "chalk";

import app from "./src/app.js"
const PORT = 4200;
app.listen(PORT, err => {

    if (err) {
        //Nous avons une erreur! On pourrait faire du code plus beau
        process.exit(1);
    }

    console.log(chalk.blue("Server listening on port ${PORT}"))
});
console.log("Le serveur est partie 1");