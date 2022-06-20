import { ApiProperty } from "@nestjs/swagger";
import { InvoiceLine } from "@prisma/client";

export class InvoiceLineEntity implements InvoiceLine {
    @ApiProperty()
    id: string;
  
    @ApiProperty()
    item: string;
  
    @ApiProperty()
    description: string;
  
    @ApiProperty()
    quantity: number;
  
    @ApiProperty()
    unitPrice: number;

    @ApiProperty()
    invoiceId: string;

    @ApiProperty()
    lineNumber: number;
  }