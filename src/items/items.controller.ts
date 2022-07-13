import { Controller, Get , Post, Put, Delete, Body, Param} from '@nestjs/common';
import { CreateItemsDto } from './dto/create-items.dto';

@Controller('items')
export class ItemsController {
    @Get()
    findAll(): string{
        return 'Get all items'
        }
    @Get(':id')
    findOne(@Param('id') id): string{
        return `Item ${id}`;
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