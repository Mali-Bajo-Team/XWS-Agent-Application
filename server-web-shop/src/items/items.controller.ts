import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { CreateItemDto } from './dto/create-item.dto';
import { ItemsService } from './items.service';
import { Item } from './interfaces/item.inteface'

@Controller('items')
export class ItemsController {
    constructor(private readonly itemsServices: ItemsService){}
    
    @Get()
    findAll(): Promise<Item[]>{ 
        return this.itemsServices.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id): Promise<Item> {
        return this.itemsServices.findOne(id);
    }

    @Post()
    create(@Body() createItemDto: CreateItemDto): Promise<Item>{
        return this.itemsServices.create(createItemDto);
    }

    @Delete(':id')
    delete(@Param('id') id): Promise<Item>{
        return this.itemsServices.delete(id);
    }

    @Put(':id')
    update(@Body() updateItemDto: CreateItemDto, @Param('id') id): Promise<Item> {
        return this.itemsServices.update(id, updateItemDto);
    }
}
