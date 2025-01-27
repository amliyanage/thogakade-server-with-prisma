import express from "express"
import Customer from "../module/Customer";
import {CustomerAdd} from "../database/prisma-data-store";

const router = express.Router()

router.post("/addCustomer" , async(req,res) => {
    const customer : Customer = req.body
    try {
        const addedCustomer = await CustomerAdd(customer)
        res.status( addedCustomer ? 201 : 400 )
    } catch (err){
        console.log("error adding customer : ",err)
        res.status(400).send("error adding customer")
    }
})

export default router