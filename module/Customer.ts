import { Order } from "./Order";

export class Customer {
    id!: string;
    name!: string;
    nic!: string;
    email!: string;
    phone!: number;
    orders!: Order[];

    constructor(id: string, name: string, nic: string, email: string, phone: number, orders: Order[] = []) {
        this.id = id;
        this.name = name;
        this.nic = nic;
        this.email = email;
        this.phone = phone;
        this.orders = orders;
    }
}
