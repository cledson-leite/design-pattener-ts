import { Person } from "./Person";

export class PersonBuilder {
    private person = new Person()

    reset(): void {
        this.person = new Person()
    }

    firstName(value: string): this {
        this.person.firstName = value
        return this
    }
    lastName(value: string): this {
        this.person.lastName = value
        return this
    }
    gender(value: string): this {
        this.person.gender = value
        return this
    }
    age(value: number): this {
        this.person.age = value
        return this
    }

    builder(): Person {
        return this.person
    }
}