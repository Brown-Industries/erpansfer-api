import { ApiParam, ApiProperty } from "@nestjs/swagger";


export class CreateInvoiceDto {
    @ApiProperty({required: true})
    invoiceId: string;

    @ApiProperty({required: true})
    orderId?: string;

    @ApiProperty({required: true})
    purchaseOrderId: string;

    @ApiProperty()
    invoiceDate: Date;

    @ApiProperty()
    sku: string;

    @ApiProperty({required: false})
    published?: boolean = false;
}
