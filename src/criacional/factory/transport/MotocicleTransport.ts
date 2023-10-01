import { Transport } from "./Transport";
import { Motocicle } from "./vehicle/Motocicle";
import { IVihicle } from "./vehicle/inteface/IVehicle";

export class MotocicleTrnsport extends Transport {
    //função factoty
    protected createTransport(): IVihicle {
        return new Motocicle()
    }
}