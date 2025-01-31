import { OrderDetails } from "./OrderDetails";

export class Item {
    id!: string;
    name!: string;
    qty!: number;
    price!: number;
    orderDetails!: OrderDetails[];

    constructor(id: string, name: string, qty: number, price: number, orderDetails: OrderDetails[] = []) {
        this.id = id;
        this.name = name;
        this.qty = qty;
        this.price = price;
        this.orderDetails = orderDetails;
    }
}
