// import { Singleton } from "./criacional/singleton/Singleton";

import { CeoBadgetHandle } from "./comportamental/chain_of_responsability/CeoBadgetHandle";
import { CustomerBadget } from "./comportamental/chain_of_responsability/CustomerBadget";
import { DirectorBadgetHandle } from "./comportamental/chain_of_responsability/DirectorBadgetHandle";
import { HandleBadget } from "./comportamental/chain_of_responsability/HandleBadget";
import { ManagerBadgetHandle } from "./comportamental/chain_of_responsability/ManagerBadgetHandle";
import { SellerBadgetHandle } from "./comportamental/chain_of_responsability/SallerBadgetHandle";
import { DiscountMin } from "./comportamental/strategy/DiscountMin";
import { Product } from "./comportamental/strategy/ecommerce/Product";
import { ShoppingCart } from "./comportamental/strategy/ecommerce/ShoppingCart";
import { EmailValidator } from "./estrutural/adapter/EmailValidator";
import { IEmailValidator } from "./estrutural/adapter/IEmailValidator";

// import { PersonBuilder } from "./criacional/buider_1/PersonBuilder";

// const instance1 = Singleton.instance
// const instance2 = Singleton.instance

// console.log(instance1 === instance2)

// const builder = new PersonBuilder()
// const personName = builder.firstName('cledson').builder()
// console.log(personName)
// const personLast = builder.lastName('leite').builder()
// console.log(personLast)
// const personGender = builder.gender('masc').builder()
// console.log(personGender)
// const personAge = builder.age(43).builder()
// console.log(personAge)

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

// const emailValidator: IEmailValidator = new EmailValidator()

// console.log(emailValidator.isEmail('csbetsonline@gmail.com'))

// const shoppingCart = new ShoppingCart()
// const products: Product[] = [
//     {name: 'Peoduto 1', price: 50},
//     {name: 'Peoduto 2', price: 50},
//     {name: 'Peoduto 3', price: 50},
//     {name: 'Peoduto 4', price: 50},
//     {name: 'Peoduto 5', price: 50},
//     {name: 'Peoduto 6', price: 50},
//     {name: 'Peoduto 7', price: 50},
// ]
// shoppingCart.addProduct(...products)
// shoppingCart.discountStrategy = new DiscountMin()
// console.log(shoppingCart.getSubTotal())
// console.log(shoppingCart.getTotal())

const badget = new CustomerBadget(50001)
HandleBadget.handle(badget)