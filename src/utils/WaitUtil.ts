export class WaitUtil{

    static async wait(milliseconds:number){

        return new Promise(resolve=>setTimeout(resolve,milliseconds));

    }

}