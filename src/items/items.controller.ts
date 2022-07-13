import { Controller, Get , Post, Put, Delete, Body, Param} from '@nestjs/common';
import { CreateItemsDto } from './dto/create-items.dto';
import { ItemsService } from './items.service';
import {Item} from './interfaces/item.interface';


@Controller('items')
export class ItemsController {
    constructor(private readonly itemsService: ItemsService){}
    
    @Get()
    findAll(): Item[]{
        return this.itemsService.findAll();
    }
    @Get(':id')
    findOne(@Param('id') id): Item {
        return this.itemsService.findOne(id);
  } 

    @Post()
    create(@Body() CreateItemsDto: CreateItemsDto): string{
        // return `Name: ${CreateItemsDto.name} Desc: ${CreateItemsDto.description}
        return CreateItemsDto.description
    }

    @Delete()
    delete(@Param('id') id): string{
        return "Delete"
    }

    @Put(':id')
    update(@Body() updateItemDto:CreateItemsDto, @Param('id') id): string{
        return 'Update id'
    }
}