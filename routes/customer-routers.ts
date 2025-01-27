import express from "express"
import Customer from "../module/Customer";
import {add, deleteCustomer, getAllCustomer, update} from "../database/prisma-data-customer-store";

const router = express.Router()

router.post("/add" , async(req,res) => {
    const customer : Customer = req.body
    try {
        const addedCustomer = await add(customer)
        res.json(addedCustomer)
    } catch (err){
        console.log("error adding customer : ",err)
        res.status(400).send("error adding customer")
    }
})

router.put('/update',async (req , res ) => {
    const customer = req.body
    try{
        const updatedCustomer = await update(customer)
        res.json(updatedCustomer)
    } catch ( err ){
        console.log("error updating customer : ", err)
        res.status(400).send("error updating customer")
    }
})

router.delete('/delete/:email', async(req , res) => {
    const email : string = req.params.email
    try{
        const deletedCustomer = await deleteCustomer(email)
        res.json(deletedCustomer)
    } catch (err){
        console.log("error deleting customer : ",err)
        res.status(400).send("error deleting customer")
    }
})

router.get('/getAll', async(req , res) => {
    try{
        const allCustomers = await getAllCustomer()
        res.status(201).json(allCustomers)
    } catch ( err ){
        console.log("error on get all customer" , err)
        res.status(400).send("error on get all customer")
    }
})

export default router