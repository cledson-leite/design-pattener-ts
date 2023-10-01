import { BaseBadgetHandle } from "./BaseBadgetHandle";
import { CustomerBadget } from "./CustomerBadget";

export class CeoBadgetHandle extends BaseBadgetHandle {
    handle(badget: CustomerBadget): CustomerBadget {
        console.log('CEO tratou esse orçamento')
        badget.approve = true
        return badget
    }
}