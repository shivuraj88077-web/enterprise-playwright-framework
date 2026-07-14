import { APIRequestContext, expect } from '@playwright/test';

export class ProductAPI {

    constructor(private request: APIRequestContext) {}

    async getProducts() {

        const response = await this.request.get(
            'https://fakestoreapi.com/products'
        );

        expect(response.status()).toBe(200);

        return await response.json();
    }
}