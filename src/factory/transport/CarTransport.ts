import { Transport } from "./Transport";
import { Car } from "./vehicle/Car";
import { IVihicle } from "./vehicle/inteface/IVehicle";

export class CarTrnsport extends Transport {
    //função factoty
    protected createTransport(): IVihicle {
        return new Car()
    }
}