import { Controller, Get , Post, Put, Delete, Body} from '@nestjs/common';
import { CreateItemsDto } from './dto/create-items.dto';

@Controller('items')
export class ItemsController {
    @Get()
    findAll(): string{
        return 'Get all items'
        }

    @Post()
    create(@Body() CreateItemsDto: CreateItemsDto): string{
        // return `Name: ${CreateItemsDto.name} Desc: ${CreateItemsDto.description}
        return CreateItemsDto.name
    }
}