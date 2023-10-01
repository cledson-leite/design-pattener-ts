import { IEmailValidator } from "./IEmailValidator";
import { Terceiro } from "./Terceiro";

export class EmailValidator implements IEmailValidator {
    private terceiro = new Terceiro()
    isEmail(value: string): boolean {
       return this.terceiro.IsEmail(value)
    }
}