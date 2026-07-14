
export class RandomUtil {

    static randomNumber(max:number=1000):number{

        return Math.floor(Math.random()*max);

    }

    static randomEmail():string{

        return `user${Date.now()}@gmail.com`;

    }

    static randomName():string{

        return `User${this.randomNumber()}`;

    }

}