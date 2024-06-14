const url = 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login';
const bannerLogo = '.orangehrm-login-branding';
const rightLogo = '.orangehrm-login-logo';
const loginTitleHeader = '.orangehrm-login-slot > *:nth-child(2)';
const loginInputArea = '.orangehrm-login-form';
const providedCredentialArea = '.orangehrm-login-error';
const providedCredentialUsernameTxt = '.orangehrm-login-error p:first-child'
const providedCredentialPasswordTxt = '.orangehrm-login-error p:nth-child(2)'

//username area
const usernameIcon = '.orangehrm-login-form .oxd-form-row:first-of-type div:first-child i';
const usernameTitle = '.orangehrm-login-form .oxd-form-row:first-of-type div:first-child label';
const usernameInputField = 'input[name="username"]';
//password area
const passwordIcon = '.orangehrm-login-form .oxd-form-row:nth-of-type(2) div:first-child i';
const passwordTitle = '.orangehrm-login-form .oxd-form-row:nth-of-type(2) div:first-child label';
const passwordInputField = 'input[type="password"]';

const loginBtn = 'button'

const forgotPassword = '.orangehrm-login-forgot'
const expectedPath = 'auth/requestPasswordResetCode'

export class LoginPage {
    
    get getUrl() {
        return url;
    }

    get getBannerLogo() {
        return bannerLogo;
        
    }

    get getRightLogo() {
        return rightLogo;
    }

    get getLoginTitleHeader() {
        return loginTitleHeader
        
    }

    get getLoginInputArea() {
        return loginInputArea
    }

    get getProvidedCredentialArea() {
        return providedCredentialArea;
    }

    get getProvidedCredentialUsernameTxt(){
        return providedCredentialUsernameTxt;
    }

    get getProvidedCredentialPasswordTxt(){
        return providedCredentialPasswordTxt;
    }

    get getUsernameIcon() {
        return usernameIcon;
    }

    get getUsernameTitle() {
        return usernameTitle;
    }

    get getUsernameInputField() {
        return usernameInputField;
    }

    get getPasswordIcon() {
        return passwordIcon;
    }

    get getPasswordTitle() {
        return passwordTitle;
    }

    get getPasswordInputField() {
        return passwordInputField;
    }

    get getLoginBtn() {
        return loginBtn;
    }

    get getForgotPassword() {
        return forgotPassword;
    }

}









