;(function (global, $) {

    var supportedLanguage = ['en', 'de', 'fr', 'es', 'it', 'pt', 'ru', 'ja', 'ko', 'zh'];

    var greetings = {
        en: 'Hello',
        de: 'Hallo',
        fr: 'Bonjour',
        es: 'Hola',
        it: 'Ciao',
        pt: 'Olá',
        ru: 'Привет',
        ja: 'こんにちは',
        ko: '안녕하세요',
        zh: '你好'
    };

    var formalGreetings = {
        en: 'Greetings',
        de: 'Grüße',
        fr: 'Salutations',
        es: 'Saludos',
        it: 'Saluti',
        pt: 'Saudações',
        ru: 'Приветствую',
        ja: 'こんにちは',
        ko: '안녕하세요',
        zh: '你好'
    };

    var logmesages = {
        en: 'Logged in',
        de: 'Eingeloggt',
        fr: 'Connecté',
        es: 'Conectado',
        it: 'Connesso',
        pt: 'Conectado',
        ru: 'Вход выполнен',
        ja: 'ログインしました',
        ko: '로그인 완료',
        zh: '登录成功'
    };

    // class GreetrInit {
    //     constructor(firstName, lastName, language) {
    //         this.firstName = firstName || '';
    //         this.lastName = lastName || '';
    //         this.language = language || 'en';
    //     }

    // fullName() {
    //     return this.firstName + ' ' + this.lastName;
    // }
    // validate() {
    //     if (supportedLanguage.indexOf(this.language) === -1) {
    //         throw 'Invalid language';
    //     }
    // }
    // formalGreeting() {
    //     return formalGreetings[this.language] + ' ' + this.fullName();
    // }
    // greeting() {
    //     return greetings[this.language] + ' ' + this.fullName();
    // }
    // logMessage() {
    //     console.log(logmesages[this.language] + ': ' + this.fullName());
    // }
    // log() {
    //     console.log(this.greeting());
    //     return this;
    // }
    // setLanguage(language) {
    //     this.language = language;
    //     this.validate();
    //     return this;    // allows chaining
    // }
    // }
    var Greetr = function (firstName, lastName, language) {
        return new Greetr.init(firstName, lastName, language);
    }



    Greetr.init = function (firstName, lastName, language) {
        self = this;
        self.firstName = firstName || '';
        self.lastName = lastName || '';
        self.language = language || 'en';
        self.validate();

    }



    Greetr.prototype = {
        fullName: function () {
            return this.firstName + ' ' + this.lastName;
        },
        validate: function () {
            if (supportedLanguage.indexOf(this.language) === -1) {
                throw 'Invalid language';
            }
        },
        formalGreeting: function () {
            return formalGreetings[this.language] + ' ' + this.fullName();
        },
        greeting: function () {
            return greetings[this.language] + ' ' + this.fullName();
        },
        logMessage: function () {
            console.log(logmesages[this.language] + ': ' + this.fullName());
        },
        log: function () {
            console.log(this.greeting());
            return this;
        },
        setLanguage: function (language) {
            this.language = language;
            this.validate();
            return this;    // allows chaining
        },
        HtmlGreeting: function (selector, formal) {
            if (!$) {
                throw 'jQuery not loaded';
            }
            if (!selector) {
                throw 'Missing jQuery selector';
            }
            var msg;
            if (formal) {
                msg = this.formalGreeting();
            } else {
                msg = this.greeting();
            }
            $(selector).html(msg);
            return this;
        }
    }



    Greetr.init.prototype = Greetr.prototype

    global.Greetr = global.G$ = Greetr;


}(window, jQuery));