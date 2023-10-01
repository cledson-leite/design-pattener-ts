import { CeoBadgetHandle } from "./CeoBadgetHandle";
import { CustomerBadget } from "./CustomerBadget";
import { DirectorBadgetHandle } from "./DirectorBadgetHandle";
import { ManagerBadgetHandle } from "./ManagerBadgetHandle";
import { SellerBadgetHandle } from "./SallerBadgetHandle";

export class HandleBadget {
    static handle(badget: CustomerBadget): void {
        const seller = new SellerBadgetHandle()
        seller
            .setNext(new ManagerBadgetHandle())
            .setNext(new DirectorBadgetHandle())
            .setNext(new CeoBadgetHandle())

        seller.handle(badget)
    }
}