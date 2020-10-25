import { ProductBatch } from './productBatch';

/*import { provider } from './provider';*/

export class ProviderInvoice {
    id: number;
    providerId:string;
    /*providerId: provider*/
    invoiceDate:Date;
    vatPercentage: number;
    vat: number;
    subtotal: number;
    total: number;
    productBatch:ProductBatch[];
}