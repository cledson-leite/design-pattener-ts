import { IBuider } from "../builders/IBuilder";
import { Engine } from "../components/Engine";
import { Transmission } from "../components/Transmission";
import { VehicleType } from "../components/VehicleType";
import { Whell } from "../components/Whell";

export class Director {
    constructor(private readonly builder: IBuider){};

    constructSedan(){
        this.builder.setVehicleType(VehicleType.SEDAN)
        this.builder.setEngine(new Engine(1.6))
        this.builder.setTransmission(Transmission.MANUAL)
        this.builder.setSeats(5)
        this.builder.addWhell(new Whell(15))
        this.builder.addWhell(new Whell(15))
        this.builder.addWhell(new Whell(15))
        this.builder.addWhell(new Whell(15))
    }
}