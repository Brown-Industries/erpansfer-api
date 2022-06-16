import { ApiProperty } from "@nestjs/swagger";
import { Prisma, InvoiceHeader } from "@prisma/client";

export class InvoiceEntity implements InvoiceHeader {
    @ApiProperty()
    id: string;
  
    @ApiProperty()
    createdAt: Date;
  
    @ApiProperty()
    updatedAt: Date;
  
    @ApiProperty()
    name: string;
  
    @ApiProperty({ required: false, nullable: true })
    description: string | null;
  
    @ApiProperty({ type: String })
    price: Prisma.Decimal;
  
    @ApiProperty()
    sku: string;
  
    @ApiProperty({ default: false })
    published: boolean;
  }