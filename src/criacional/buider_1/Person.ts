export class Person {
    private _firstName?: string
    private _lastName?: string
    private _gender?: string
    private _age?: number
    constructor(){};

    get firstName(): string {
        return this._firstName!
    }

    set firstName(value: string) {
        this._firstName = value
    }

    get lastName(): string {
        return this._lastName!
    }

    set lastName(value: string) {
        this._lastName = value
    }

    get gender(): string {
        return this._gender!
    }

    set gender(value: string) {
        this._gender = value
    }

    get age(): number {
        return this._age!
    }

    set age(value: number) {
        this._age = value
    }
}