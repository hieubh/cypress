

const returnUrl = 'https://testpages.herokuapp.com/styled/the_form_processor.php';
const userName = '#_valueusername';
const password = '#_password';
const valueComment = '#_valuecomments';
const fileName = '#_filename';
const valueCheckBox1 = '#_valuecheckboxes0';
const valueCheckBox2 = '#_valuecheckboxes1';
const valueRadioBtn = '#_valueradioval';
const option1 = '_valuemultipleselect0';
const option2 = '_valuemultipleselect1';
const option3 = '_valuemultipleselect2';
const selectedItem = '#_valuedropdown';
const backBtn = '#back_to_form';

export class HerokuResultPage {
    get getReturnUrl () {
        return returnUrl;
    }

    get getUserName () {
        return userName;
    }

    get getPassword () {
        return password;
    }

    get getValueComment () {
        return valueComment;
    }

    get getFileName () {
        return fileName;
    }

    get getValueCheckbox1 () {
        return valueCheckBox1;
    }

    get getValueCheckbox2 () {
        return valueCheckBox2;
    }

    get getValueRadioBtn () {
        return valueRadioBtn;
    }

    get getOption1 () {
        return option1;
    }

    get getOption2 () {
        return option2;
    }

    get getOption3 () {
        return option3;
    }

    get getSelectedItem () {
        return selectedItem;
    }
    get getBackBtn () {
        return backBtn;
    }
}