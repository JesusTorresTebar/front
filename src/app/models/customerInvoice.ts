import { InvoiceDetail } from './invoiceDetail';
export class CustomerInvoice {
    id: number;
    customerId:string;
    invoiceDate:Date;
    vatPercentage: number;
    vat: number;
    subtotal: number;
    total: number;
    invoiceDetail:InvoiceDetail[];
}





