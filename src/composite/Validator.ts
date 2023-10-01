import { ValidationComponet } from "./ValidationComponent";

export class Validator implements ValidationComponet {
    private readonly children: ValidationComponet[] = []
    validate(value: any): boolean {
        for (const child of this.children){
            const validation = child.validate(value)
            if(!validation) return false
        }
        return true
    }

    add(... validations: ValidationComponet[]): void {
        validations.forEach(validation => this.children.push(validation))
    }
}