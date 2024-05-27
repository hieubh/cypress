

const url = 'https://testpages.herokuapp.com/styled/basic-html-form-test.html';
const userName = '[name="username"]';
const password = '[name="password"]';
const commentArea = '//textarea[@name="comments"]';
const uploadFileBtn = '[name="filename"]';
const fileLocation = '/Users/hieu/Downloads/Photo-34.jpg';
const checkBox1 = '[value="cb1"]';
const checkBox2 = '[value="cb2"]';
const checkBox3 = '[value="cb3"]';
const radioItem1 = '[value="rd1"]';
const multipleSelect = '[name="multipleselect[]"]';
const option1 = 'ms1';
const option2 = 'ms2';
const option3 = 'ms3';
const dropdown = '[name="dropdown"]';
const item4 = 'dd4';
const submitBtn = '[value="submit"]';

export class HerokuSubmitPage {
    get getUrl () {
        return url;
    }

    get getUserName () {
        return userName;
    }

    get getPassword() {
        return password;
    }

    get getCommentArea () {
        return commentArea;
    }

    get getuploadFileBtn () {
        return uploadFileBtn;
    }

    get getFileLocation () {
        return fileLocation;
    }

    get getCheckBox1 () {
        return checkBox1;
    }

    get getCheckBox2 () {
        return checkBox2;
    }

    get getCheckBox3 () {
        return checkBox3;
    }

    get getRadioItem1 () {
        return radioItem1;
    }

    get getMultipleSelect () {
        return multipleSelect;
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

    get getDropdown () {
        return dropdown;
    }

    get getItem4 () {
        return item4;
    }

    get getSubmitBtn () {
        return submitBtn;
    }
}