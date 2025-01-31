import { PrismaClient } from "@prisma/client";
import { Order } from "../module/Order";
import { OrderDetails } from "../module/OrderDetails";

const prisma = new PrismaClient();

export async function addOrder(order: Order) {
    try {
        const saveOrder = await prisma.order.create({
            data: {
                customerID: order.customerID,
                orderDetails: {
                    create: order.orderDetails.map((detail) => ({
                        itemID: detail.itemID,
                        quantity: detail.quantity,
                        price: detail.price,
                    })),
                },
            },
            include: {
                orderDetails: true,
            },
        });

        console.log("Order saved:", saveOrder);
        return saveOrder;
    } catch (error) {
        console.error("Error saving order:", error);
        throw error;
    } finally {
        await prisma.$disconnect();
    }
}
