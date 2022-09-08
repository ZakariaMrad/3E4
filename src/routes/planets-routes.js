import express from "express";
import PLANETS from "../data/planets.js";
import  HttpError  from "http-errors";
import errors from "../middlewares/errors.js";


const router = express.Router();

class PlanetsRoutes{
    constructor(){
        router.get('/',this.getAll); // /planets
        router.get('/:idPlanet',this.getOne); // /planets/:iPlanet
        router.post('/',this.post); // /planets
        router.delete('/:idPlanet',this.deleteOne);
    }

    getAll(req,res,next){
        res.status(200);
        res.json(PLANETS);
    }
    getOne(req,res,next){
        const idPlanet=req.params.idPlanet;
        const planet = PLANETS.filter(p=> p.id.toString()===idPlanet);
        if (planet.length >0) {
            res.status(200);
            res.json(planet.at(0));
        } else {
            return next(HttpError.NotFound("https://httpstatusdogs.com/404-not-found"))
        }
    }
    post(req,res,next){

    }

    deleteOne(req,res,next){
        const idPlanet=req.params.idPlanet;
        const index = Planets.findIndex(p=>p.id.toString()===idPlanet);
        if (index === -1) {
            return next(HttpError.NotFound("https://httpstatusdogs.com/404-not-found"))
        } else{
            PLANETS.splice(index,1);
            res.status(204).end();
        }

    }
}

new PlanetsRoutes();
export default router;