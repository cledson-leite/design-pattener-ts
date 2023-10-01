import { ValidationComponet } from "./ValidationComponent";

export class EmailValidator implements ValidationComponet {
    validate(value: any): boolean {
        if(typeof value !== 'string') return false
        return /@/.test(value)
    }
}