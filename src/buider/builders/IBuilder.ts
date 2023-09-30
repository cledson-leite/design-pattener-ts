import { Engine } from "../components/Engine";
import { Transmission } from "../components/Transmission";
import { VehicleType } from "../components/VehicleType";
import { Whell } from "../components/Whell";
import { Vehicle } from "../products/Vehicle";

export interface IBuider {
    reset(): void
    getResult(): Vehicle

    addWhell(whell: Whell): void
    setVehicleType(value: VehicleType): void
    setSeats(value: number): void
    setEngine(value: Engine): void
    setTransmission(value: Transmission): void
}