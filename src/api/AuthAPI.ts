import { APIRequestContext, expect } from '@playwright/test';

export class AuthAPI {

    constructor(private request: APIRequestContext) {}

    async login(username: string, password: string) {

        const response = await this.request.post(
            'https://reqres.in/api/login',
            {
                data: {
                    email: username,
                    password: password
                }
            }
        );

        expect(response.status()).toBe(200);

        return await response.json();
    }
}