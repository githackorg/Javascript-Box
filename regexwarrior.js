class RegexWarrior {

    constructor() {

    }

    isEmail(string) {
        const email = /^[A-Za-z0-9-_]+[\.A-Za-z0-9-_]+@[A-Za-z0-9-_]{2,}\.[A-Za-z]{2,}\.*[A-Za-z]*/;
        if(email.test(string)) {
            return true;
        } else {
            return false;
        }
    }

    isPhoneNumber(string) {
        const phone = /[\d]{7,15}/;
        if(phone.test(string)) {
            return true;
        } else {
            return false;
        }
    }

    isCoordinate(string) {
        const coordinate = /-*\d{1,2}\.\d{7}/;
        if(coordinate.test(string)) {
            return true;
        } else {
            return false;
        }
    }

    isCnpj(string) {
        const cnpj = /\d{2}\.\d{3}\.\d{3}\/\d{4}-\d{2}/;
        if(cnpj.test(string)) {
            return true;
        } else {
            return false;
        }
    }

    isCpf(string) {
        const cpf = /\d{3}\.\d{3}\.\d{3}-\d{2}/;
        if(cpf.test(string)) {
            return true;
        } else {
            return false;
        }
    }

    isCep(string) {
        const cep = /\d{5}-\d{3}/;
        if(cep.test(string)) {
            return true;
        } else {
            return false;
        }
    }

    isIp(string) {
        const ip = /\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}/;
        if(ip.test(string)) {
            return true;
        } else {
            return false;
        }
    }

    isMacAddress(string) {
        const mac = /^[A-Fa-f\d]{2}\.[A-Fa-f\d]{2}\.[A-Fa-f\d]{2}\.[A-Fa-f\d]{2}\.[A-Fa-f\d]{2}\.[A-Fa-f\d]{2}/;
        if(mac.test(string)) {
            return true;
        } else {
            return false;
        }
    }

    extractNumbers(text) {
        const number = /\d/;
        var result = "";
        var res = [];

        while((result = number.test(text)) != null) {
            res.push(result);
        }

        return res;
    }

    extractStrings(text) {
        const string = /\w/;
        var result = "";
        var res = [];

        while((result = string.test(text)) != null) {
            res.push(result);
        }
    }

    extractHtmlTags(text) {
        const html = /<!*[*\w\s="-\/]+>/;
        var result = "";
        var res = [];

        while((result = html.test(text)) != null) {

            res.push(text);

        }
    }

    
}