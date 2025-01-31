import { Customer } from "./Customer";
import { OrderDetails } from "./OrderDetails";

export class Order {
    orderId!: string;
    customerID!: string;
    customer!: Customer;
    orderDetails!: OrderDetails[];

    constructor(orderId: string, customerID: string, customer: Customer, orderDetails: OrderDetails[] = []) {
        this.orderId = orderId;
        this.customerID = customerID;
        this.customer = customer;
        this.orderDetails = orderDetails;
    }
}
