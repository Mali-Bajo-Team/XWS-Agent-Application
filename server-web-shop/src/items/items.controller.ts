import { Controller, Get, Post, Put, Delete, Body, Param ,UseGuards} from '@nestjs/common';
import { CreateItemDto } from './dto/create-item.dto';
import { ItemsService } from './items.service';
import { Item } from './interfaces/item.inteface'
import { JwtAuthGuard } from './../auth/guards/jwt-auth.guard';

@Controller('items')
export class ItemsController {
    constructor(private readonly itemsServices: ItemsService){}
    
    @UseGuards(JwtAuthGuard)
    @Get()
    findAll(): Promise<Item[]>{ 
        return this.itemsServices.findAll();
    }

    @UseGuards(JwtAuthGuard)
    @Get(':id')
    findOne(@Param('id') id): Promise<Item> {
        return this.itemsServices.findOne(id);
    }

    @UseGuards(JwtAuthGuard)
    @Post()
    create(@Body() createItemDto: CreateItemDto): Promise<Item>{
        return this.itemsServices.create(createItemDto);
    }

    @UseGuards(JwtAuthGuard)
    @Delete(':id')
    delete(@Param('id') id): Promise<Item>{
        return this.itemsServices.delete(id);
    }

    @UseGuards(JwtAuthGuard)
    @Put(':id')
    update(@Body() updateItemDto: CreateItemDto, @Param('id') id): Promise<Item> {
        return this.itemsServices.update(id, updateItemDto);
    }
}
