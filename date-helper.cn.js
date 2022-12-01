class DateHelper {
    months = [
        '一月'，
        '二月'，
        '行進'，
        '四月'，
        '可能'，
        '六月'，
        '七月'，
        '八月'，
        '九月'，
        '十月'，
        '十一月'，
        '十二月'，
    ];

    dayOfWeek = [
        '週一'，
        '週二'，
        '週三'，
        '週四'，
        '星期五'，
        '週六'，
        '星期日'，
    ];

    characters = {
        // Seconds 00 - 59
        s: () => {
            let seconds = this.date.getSeconds();
            return seconds > 9 ? seconds : '0' + seconds;
        },

        // Seconds 0 - 59
        S: () => {
            return this.date.getSeconds();
        },

        // Hours 00 - 23
        h: () => {
            let hours = this.date.getHours();
            return hours > 9 ? hours : '0' + hours;
        },

        // Hours 00 - 23
        H: () => {
            return this.date.getHours();
        },

        // Hours 00 - 12
        g: () => {
            let hours = this.date.getHours();
            hours = hours < 13 ? hours : hours - 12;
            return hours > 9 ? hours : '0' + hours;
        },

        // Hours 0 - 12
        G: () => {
            let hours = this.date.getHours();
            return hours < 13 ? hours : hours - 12;
        },

        // am - pm
        a: () => {
            let hours = this.date.getHours();
            return hours < 13 ? 'am' : 'pm';
        },

        // AM - PM
        A: () => {
            let hours = this.date.getHours();
            return hours < 13 ? 'AM' : 'PM';
        },

        // Minutes 00 - 59
        i: () => {
            let minutes = this.date.getMinutes();
            return minutes > 9 ? minutes : '0' + minutes;
        },

        // Minutes 0 - 59
        I: () => {
            return this.date.getMinutes();
        },

        // Day 00 - 31
        d: () => {
            let day = this.date.getDate();
            return day > 9 ? day : '0' + day;
        },

        // Day 0 - 31
        D:() => {
            return this.date.getDate();
        },

        // Day of week 1 - 7
        n: () => {
            return this.date.getDay() + 1;
        },

        // Day Monday - Sunday
        N: () => {
            return this.dayOfWeek[this.date.getDay()];
        },

        // Month 01 - 12
        m: () => {
            let month = this.date.getMonth() + 1;
            return month > 9 ? month : '0' + month;
        },

        // Month 1 - 12
        M: () => {
            return this.date.getMonth() + 1;
        },

        // Mouth January - December
        F: () => {
            return this.months[this.date.getMonth()];
        },

        // Year 99 - 20
        y: () => {
            let year = this.date.getYear().toString();
            return year.substr(year.length - 2, 2);
        },

        // Year 1999 - 2020
        Y: () => {
            return this.date.getFullYear();
        },

        // Timezone MSK
        T: () => {
            return this.date.getTimezoneOffset() / 60;
        },
    };

    constructor(date) {
        this.date = new Date(date);
    }

    format(template) {
        let i = 0;
        let result = '';
        while (template.length > i) {
            result += this.getSymbol(template[i]);
            i++;
        }

        return result;
    }

    getSymbol(symbol) {
        if (this.characters[symbol] !== undefined) {
            return this.characters[symbol]();
        }

        return symbol;
    }
}

module.exports = DateHelper;
