

import { Body, Controller, Get, Param, ParseBoolPipe, ParseIntPipe, Patch, Post, Query, UsePipes, ValidationPipe } from "@nestjs/common";
import { create } from "domain";
import { CreatePropertyDto } from "./dto/createProperty.dto";
import { ParamIdDto } from "./dto/paramId.dto";

@Controller('property')
//@UsePipes(new ValidationPipe({ whitelist:true,forbidNonWhitelisted:true })) //thậm chí còn có thể áp dụng cho toàn bộ controller này luôn, tất cả các request đều sẽ được kiểm tra như vậy
export class PropertyController {
    @Get()
    findAll(){
        return' return property api menthod get'
    }
    @Get(':id/')
    findOne(@Param('id',ParseIntPipe) id ,@Query('sort',ParseBoolPipe )sort ,@Query('age',ParseIntPipe)age){
        console.log(typeof(id))
        console.log(typeof(sort))
        console.log(age);
        return'return property api menthod get by id' + id ;
    }
    @Post()
    // @UsePipes(new ValidationPipe(
    //     { 
    //         whitelist:true,
    //         forbidNonWhitelisted:true,
    //         groups:['create'],
    //         always:true
    //     }
    // )) // phạm vi áp dụng bây giờ là toàn bộ các input của request này nếu có thêm query vv. 
    // create(@Body(new ValidationPipe({ whitelist:true,forbidNonWhitelisted:true })) body :CreatePropertyDto){ nếu sử dụng như vầy thì các tùy chọn sẽ chỉ áp dụng cho body này thôi
    create(@Body() body :CreatePropertyDto){
        return body;
    }
    @Patch('/:id')
    // @UsePipes(
    //     new ValidationPipe(
    //         { 
    //             whitelist:true,
    //             forbidNonWhitelisted:true, 
    //             groups:['update'],
    //             always:true
    //         }
    //     )) // phạm vi áp dụng bây giờ là toàn bộ các input của request này nếu có thêm query vv.
    update(
        @Param('id',ParseIntPipe) id,
        @Body() 
        body: CreatePropertyDto)
        {
            return body;
        }
}
