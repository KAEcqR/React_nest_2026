import { ApiProperty } from "@nestjs/swagger";

export type Product = {
    id: number;
    name: string;
    price: number;
    date: Date;
}