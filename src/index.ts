// import { Singleton } from "./criacional/singleton/Singleton";

import { PersonBuilder } from "./criacional/buider_1/PersonBuilder";

// const instance1 = Singleton.instance
// const instance2 = Singleton.instance

// console.log(instance1 === instance2)

const builder = new PersonBuilder()
const personName = builder.firstName('cledson').builder()
console.log(personName)
const personLast = builder.lastName('leite').builder()
console.log(personLast)
const personGender = builder.gender('masc').builder()
console.log(personGender)
const personAge = builder.age(43).builder()
console.log(personAge)

// import { Validate } from "./chainOfReponsabity/validator/Validate";
// try {
//     console.log(Validate.validate('csbetsonline@gmail.com').string().email().valided())
//     console.log(Validate.validate('5').email().valided())
//     console.log(Validate.validate(12345678).password().valided())
// } catch (error: any) {
//     console.log(error.message)


// }
// import { EmailValidator } from "./composite/EmailValidator";
// import { PasswordValidator } from "./composite/PasswordValidator";
// import { StringValidator } from "./composite/StringValidator";
// import { Validator } from "./composite/Validator";

// const stringValidator = new StringValidator()
// const emailValidator = new EmailValidator()
// const passwordValidator = new PasswordValidator()

// const validator = new Validator()

// validator.add(stringValidator)
// validator.add(emailValidator)
// validator.add(passwordValidator)

// console.log(validator.validate('1@145678'))

