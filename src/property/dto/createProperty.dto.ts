import { IsInt, IsNumber, IsPositive, IsString, Length } from "class-validator";
import { group } from "console";

export class CreatePropertyDto {
    @IsString()// luôn luôn là string
    @Length(5, 7,
        {
            groups:['create']
            //,message:'Name must be between 5 and 20 characters to  create'
        })// custom message
    @Length(1, 10,
        {
            groups:['update']
            // ,message:'Name must be between 1 and 255 characters to update'
        })
    name: string;
    @IsString()
    description: string;
    @IsInt()
    @IsPositive()// chỉ cho phép số dương .nên đọc thêm tài liệu về class-validator
    area: number;  
}