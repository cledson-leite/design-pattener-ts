import { Engine } from "../components/Engine";
import { Transmission } from "../components/Transmission";
import { VehicleType } from "../components/VehicleType";
import { Whell } from "../components/Whell";
import { Vehicle } from "../products/Vehicle";
import { IBuider } from "./IBuilder";

export class VehicleBuilder implements IBuider {
    private vehicle = new Vehicle()
    reset(): void {
        this.vehicle = new Vehicle()
    }
    getResult(): Vehicle {
        const result = this.vehicle
        this.reset()
        return result
    }
    addWhell(whell: Whell): void {
       this.vehicle.addWhell(whell)
    }
    setVehicleType(value: VehicleType): void {
        this.vehicle.vehicleType = value
    }
    setSeats(value: number): void {
        this.vehicle.seat = value
    }
    setEngine(value: Engine): void {
       this.vehicle.engine = value
    }
    setTransmission(value: Transmission): void {
         this.vehicle.transmission = value
    }
}