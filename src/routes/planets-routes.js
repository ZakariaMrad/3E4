import express from "express";
import PLANETS from "../data/planets.js";


const router = express.Router();

class PlanetsRoutes{
    constructor(){
        router.get('/',this.getAll); // /planets
        router.get('/:idPlanet',this.getOne); // /planets/:iPlanet
        router.post('/',this.post); // /plnets
    }

    getAll(req,res,next){
        res.status(200);
        res.json(PLANETS);
    }
    getOne(req,res,next){

    }
    post(req,res,next){

    }
}

new PlanetsRoutes();
export default router;