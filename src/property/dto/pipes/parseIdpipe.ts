import { ArgumentMetadata, Injectable, PipeTransform } from "@nestjs/common";
@Injectable()
export class ParseIdPipe implements PipeTransform<string ,number> {
    transform(value: string, metadata: ArgumentMetadata): number {
        const id = parseInt(value, 10);
        if (isNaN(id)) {
            throw new Error(`Invalid ID: ${value}`);
        }
        if (id <= 0) {
            throw new Error(`ID must be a positive number: ${value}`);
        }
        return id;
    }
}