import { PrismaClient } from "@prisma/client";
import Customer from "../module/Customer";

const prisma = new PrismaClient()

export async function add(c: Customer) {
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

export async function update(c : Customer) {
    try{
        const updateCustomer  = await prisma.customer.update({
            where: { email : c.email},
            data : {
                name : c.name,
                phone : c.phone
            }
        })
        console.log('customer updated : ', updateCustomer)
        return updateCustomer
    } catch ( err ){
        console.log( 'error updating customer : ' ,err )
    }
}

export async function getAllCustomer() {
    try {
        return await prisma.customer.findMany()
    } catch ( err ){
        console.log( "error deleting : " , err )
    }
}

export async function deleteCustomer(email : string){
    try {
        const deleteCustomer = await prisma.customer.delete({
            where : { email : email }
        })
        console.log("delete customer " , deleteCustomer )
        return deleteCustomer
    } catch ( err ) {
        console.log(" error deleting customer : " , err)
    }
}