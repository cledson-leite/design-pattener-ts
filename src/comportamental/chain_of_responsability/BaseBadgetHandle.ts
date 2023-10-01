import { CustomerBadget } from "./CustomerBadget";

export abstract class BaseBadgetHandle {
    protected next?: BaseBadgetHandle
    setNext(handle: BaseBadgetHandle): BaseBadgetHandle {
        this.next = handle
        return this.next
    }
    handle(badget: CustomerBadget): CustomerBadget {
        if(this.next) return this.next.handle(badget)
        return badget
    }
}