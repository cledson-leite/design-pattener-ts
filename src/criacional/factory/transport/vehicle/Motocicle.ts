import { IVihicle } from "./inteface/IVehicle";

export class Motocicle implements IVihicle{
    startRoute(): void {
        this.getCargo()
        console.log('Iniciando a Entrega ...')
    }
    getCargo(): void{
        console.log('Pegando a encomenda ...')
    }
}