import { Risk } from './risk';

export class Product {
    id: string;
    zone: string;
    productName: string;
    description: string;
    stock: number;
    stockThreshold: number;
    price: number;
    expiryDate: string;
    risks: Risk[];
    category: string;
}


