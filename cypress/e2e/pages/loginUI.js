const URL = 'https://www.saucedemo.com/';
const USER_NAME = '#user-name';
const PASSWORD = '#password';
const loginBtn = '#login-button';

export class LoginUI {
    get getUrl() {
        return URL;
    }

    get getUsername() {
        return USER_NAME;
    }

    get getPassword() {
        return PASSWORD;
    }

    get getElmLoginBtn() {
        return loginBtn;
    }


}
