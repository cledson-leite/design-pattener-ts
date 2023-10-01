import { ValidationComponet } from "./ValidationComponent";

export class StringValidator implements ValidationComponet {
    validate(value: any): boolean {
        return typeof value === 'string'
    }
}