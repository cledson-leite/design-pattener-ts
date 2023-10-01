export class Terceiro {
    IsEmail(value: string): boolean {
        if(!value.includes('@')) return false
        if(!value.includes('.com')) return false
        return true
    }
}