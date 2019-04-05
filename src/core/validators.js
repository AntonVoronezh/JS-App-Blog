export class Validators {
    static requred(value = '') {
        return value && value.trim()
    }

    static minLength(length) {
        return value => {
            return value.length >= length;
        }
    }
}