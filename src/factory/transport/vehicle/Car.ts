import { IVihicle } from "./inteface/IVehicle";

export class Car implements IVihicle {
    startRoute(): void {
        this.getCargo()
        console.log('Iniciando Viagem...')
    };
    getCargo():void{
        console.log('Pagando Passageiro ...')
    }
}