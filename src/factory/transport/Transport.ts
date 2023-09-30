import { IVihicle } from "./vehicle/inteface/IVehicle";

export abstract class Transport {
    startTransport(): void {
        const vehicle = this.createTransport()

        vehicle.startRoute()
    }

    protected abstract createTransport(): IVihicle
}