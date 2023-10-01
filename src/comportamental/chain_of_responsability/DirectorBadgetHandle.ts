import { BaseBadgetHandle } from "./BaseBadgetHandle";
import { CustomerBadget } from "./CustomerBadget";

export class DirectorBadgetHandle extends BaseBadgetHandle {
    handle(badget: CustomerBadget): CustomerBadget {
        if(badget.total <= 50000) {
            console.log('Diretor tratou esse orçamento')
            badget.approve = true
            return badget
        }
        return super.handle(badget)
    }
}