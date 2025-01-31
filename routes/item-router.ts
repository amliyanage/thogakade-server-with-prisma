import express from "express"
import {Item} from "../module/Item";
import {add, deleteItem, getAllItems, update} from "../database/prisma-data-item-store";

const router = express.Router()

router.post("/add" , async(req,res) => {
    const item : Item = req.body
    try {
        const addedItem = await add(item)
        res.json(addedItem)
    } catch (err){
        console.log("error adding Item : ",err)
        res.status(400).send("error adding Item")
    }
})

router.put('/update',async (req , res ) => {
    const item : Item = req.body
    try{
        const updatedItem = await update(item)
        res.json(updatedItem)
    } catch ( err ){
        console.log("error updating Item : ", err)
        res.status(400).send("error updating Item")
    }
})

router.delete('/delete/:email', async(req , res) => {
    const email : string = req.params.email
    try{
        const deletedItem = await deleteItem(email)
        res.json(deletedItem)
    } catch (err){
        console.log("error deleting Item : ",err)
        res.status(400).send("error deleting Item")
    }
})

router.get('/getAll', async(req , res) => {
    try{
        const allItems = await getAllItems()
        res.status(201).json(allItems)
    } catch ( err ){
        console.log("error on get all Item" , err)
        res.status(400).send("error on get all Item")
    }
})

export default router