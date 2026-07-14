export class DateUtil {

    static getCurrentDate(): string {

        const today = new Date();

        return today.toLocaleDateString();
    }

    static getCurrentTime(): string {

        const today = new Date();

        return today.toLocaleTimeString();
    }

    static getTimestamp(): string {

        return Date.now().toString();
    }

}