import { IsNumber, IsPositive} from "class-validator";

export class ParamIdDto {
    @IsNumber()
    @IsPositive()
    id: number;
}