import { Engine } from "../components/Engine";
import { Transmission } from "../components/Transmission";
import { VehicleType } from "../components/VehicleType";
import { Whell } from "../components/Whell";

export class Vehicle {
    private _vehicleType: VehicleType = VehicleType.SEDAN;
    private _seat: number = 5
    private _engine: Engine = new Engine(1.0)
    private _transmission: Transmission = 0;
    private _whells: Whell[] = []

    addWhell(whell: Whell) {
        this._whells.push(whell)
    }
    get whells(): Whell[] {
        return this._whells
    }
    get whellsTotal(): number {
        return this._whells.length
    }

    get vehicleType(): VehicleType {
        return this._vehicleType
    }

    set vehicleType(value: VehicleType) {
        this._vehicleType = value
    }
    get seat(): number {
        return this._seat
    }

    set seat(value: number) {
        this._seat = value
    }
    get engine(): Engine {
        return this._engine
    }

    set engine(value: Engine) {
        this._engine = value
    }
    get transmission(): Transmission {
        return this._transmission
    }

    set transmission(value: Transmission) {
        this._transmission = value
    }
}