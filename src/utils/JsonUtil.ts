import * as fs from 'fs';

export class JsonUtil {

    static readJson(filePath: string): any {

        const file = fs.readFileSync(filePath, 'utf-8');

        return JSON.parse(file);

    }

}