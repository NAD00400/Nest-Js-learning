import { Body, Controller, Get, Param, Post } from '@nestjs/common';

@Controller('property')
export class PropertyController {
    @Get()
    findAll(){
        return' return property api menthod get'
    }
    @Get(':id/:slug')
    findOne(@Param('id') id :string ,@Param('slug') slug :string){
        return'return property api menthod get by id' + id + 'and slug' + slug;
    }
    @Post()
    create(@Body('name') name :string ,@Body('description') description :string){
        return 'return property api menthod post ' + name +' and description '+ description;
    }
}
