import { PrismaClient } from '@prisma/client';
import {Item} from '../module/Item';

const prisma = new PrismaClient();

export async function add(i: Item) {
    try {
        const newItem = await prisma.item.create({
            data: {
                id: i.id,
                name: i.name,
                qty: i.qty,
                price: i.price,
            },
        });
        console.log('Item added: ', newItem);
        return newItem;
    } catch (error) {
        console.error('Error adding item: ', error);
        throw error; // Throw error for higher-level handling
    }
}

export async function update(i: Item) {
    try {
        const updatedItem = await prisma.item.update({
            where: { id: i.id },
            data: {
                name: i.name,
                qty: i.qty,
                price: i.price,
            },
        });
        console.log('Item updated: ', updatedItem);
        return updatedItem;
    } catch (error) {
        console.error('Error updating item: ', error);
        throw error;
    }
}

export async function deleteItem(id: string) {
    try {
        const deletedItem = await prisma.item.delete({
            where: { id: id },
        });
        console.log('Item deleted: ', deletedItem);
        return deletedItem;
    } catch (error) {
        console.error('Error deleting item: ', error);
        throw error;
    }
}

export async function getAllItems() {
    try {
        const items = await prisma.item.findMany();
        return items;
    } catch (error) {
        console.error('Error getting items: ', error);
        throw error;
    }
}
