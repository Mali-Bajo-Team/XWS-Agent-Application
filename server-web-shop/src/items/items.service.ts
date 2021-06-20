import { Injectable } from '@nestjs/common';
import { Item } from './interfaces/item.inteface'

@Injectable()
export class ItemsService {
    private readonly items: Item[] = [
        {
            id: '323232324',
            name: "Item One",
            "qty": 100,
            description: "This is item one"
        },
        {
            id: '959595959',
            name: "Item Two",
            "qty": 50,
            description: "This is item two"
        },
        {
            id: '564654165156',
            name: "Item Three",
            "qty": 150,
            description: "This is item three"
        }
    ];

    findAll(): Item[] { 
        return this.items;
    }

    findOne(id: string): Item {
        return this.items.find(item => item.id === id);
    }
}
