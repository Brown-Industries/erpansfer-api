import { ApiProperty } from "@nestjs/swagger";
import { InvoiceHeaderEntity } from "./invoiceHeader.entity";
import { InvoiceLineEntity } from "./invoiceLine.entity";

export class InvoiceEntity  {
    @ApiProperty()
    header: InvoiceHeaderEntity;
  
    @ApiProperty({ type: [InvoiceLineEntity] })
    lines: InvoiceLineEntity;
    
  }