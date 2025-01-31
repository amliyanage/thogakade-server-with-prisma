import { Item } from "./Item";
import { Order } from "./Order";

export class OrderDetails {
    orderDetailId!: string;
    orderID!: string;
    itemID!: string;
    quantity!: number;
    price!: number;
    order!: Order;
    item!: Item;

    constructor(orderDetailId: string, orderID: string, itemID: string, quantity: number, price: number, order: Order, item: Item) {
        this.orderDetailId = orderDetailId;
        this.orderID = orderID;
        this.itemID = itemID;
        this.quantity = quantity;
        this.price = price;
        this.order = order;
        this.item = item;
    }
}
