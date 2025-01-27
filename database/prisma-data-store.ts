import { PrismaClient } from "@prisma/client";
import Customer from "../module/Customer";

const prisma = new PrismaClient()

export async function CustomerAdd(c: Customer) {
    try {
         const newCustomer = await prisma.customer.create({
             data:{
                 id: c.id,
                 email: c.email,
                 nic: c.nic,
                 name: c.name,
                 phone: c.phone
             }
         })
        console.log('customer Added : ',newCustomer)
        return newCustomer
    } catch (err) {
        console.log("error adding customer ", err)
    }
}