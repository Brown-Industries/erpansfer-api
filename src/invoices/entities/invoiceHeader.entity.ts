import { ApiProperty } from "@nestjs/swagger";
import { InvoiceHeader } from "@prisma/client";

export class InvoiceHeaderEntity implements InvoiceHeader {
    @ApiProperty()
    id: number;
  
    @ApiProperty()
    invoiceId: string;
  
    @ApiProperty()
    orderId: string;
  
    @ApiProperty()
    name: string;
  
    @ApiProperty()
    createDate: Date;
  }