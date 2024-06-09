const loginUrl = 'https://www.globalsqa.com/angularJs-protractor/BankingProject/#/login';
const headerPart = 'div[class = "box mainhdr"]';
const mainHeadingText = '.mainHeading';
const homeBtn = 'button[class = "btn home"]';
const bodyPart = 'div[ui-view]:nth-child(2)>div>div:first-child';
const customerLoginBtn = '.center:first-child > button';
const bankManagerLoginBtn = '.center:last-child > button';

export class LoginPage {

    get getLoginUrl() {
        return loginUrl;
    }

    get getHomeBtn() {
        return homeBtn;
    }

    get getMainHeadingText() {
        return mainHeadingText;
    }

    get getHeaderPart() {
        return headerPart;
    }

    get getBodyPart() {
        return bodyPart;
    }

    get getCustomerLoginBtn() {
        return customerLoginBtn;
    }

    get getBankManagerLoginBtn() {
        return bankManagerLoginBtn;
    }
}