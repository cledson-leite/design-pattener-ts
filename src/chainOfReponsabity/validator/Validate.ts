export class Validate {
    private constructor(
        private readonly value: any,
        private check: boolean
    ){};

    static validate(value: any): Validate {
        return new Validate(value, false)
    }
    string(): Validate {
        if(typeof this.value === 'string'){
            this.check = true
            return this
        }
        this.check = false
        throw new Error('Não é String')
    }
    email(): Validate {
        this.string()
        if(this.value.includes('@')){
            this.check = true
            return this
        }
        this.check = false
        throw new Error('Email invalido')
        
    }
    password(): Validate {
        this.string()
        if(this.value.length >= 8) {
            this.check = true
            return this
        }
        this.check = false
        throw new Error('Password invalido')
    }
}