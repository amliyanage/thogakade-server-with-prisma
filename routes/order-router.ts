import express from "express";
import {addOrder} from "../database/prisma-data-order-store";

const router = express.Router()

router.post("/place-order",async (req,res) => {
    const order = req.body
    try{
        const saveOrder = await addOrder(order)
        res.json(saveOrder)
    } catch (error){
        console.error("error : ",error)
        res.status(400).send("fail order place")
    }
})

export default router