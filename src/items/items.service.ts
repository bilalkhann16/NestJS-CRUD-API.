import { Injectable } from '@nestjs/common';
import { Item } from './interfaces/item.interface'
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class ItemsService {
    constructor(@InjectModel("Item") private readonly itemModel:Model<Item>) {}
    // private readonly items: Item[] = [
    //     {
    //         id: '1000000',
    //         name: 'Item 1',
    //         qty: 100,
    //         description: 'This is item 1'
    //     },
    //     {
    //         id: '20000',
    //         name: 'Item 2',
    //         qty: 50,
    //         description: 'This is item 2'
    //     }
    // ];

    findAll(): Item[] {
        return this.items;
    }
    findOne(id: string): Item {
        return this.items.find(item => item.id === 'id');
    }
}
