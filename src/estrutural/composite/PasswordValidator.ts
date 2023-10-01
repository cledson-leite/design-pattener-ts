import { ValidationComponet } from "./ValidationComponent";

export class PasswordValidator implements ValidationComponet {
    validate(value: any): boolean {
        if(typeof value !== 'string') return false
        return value.length >= 8
    }
}