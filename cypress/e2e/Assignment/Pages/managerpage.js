
const linkUrl = 'https://www.globalsqa.com/angularJs-protractor/BankingProject/#/manager';
const buttonBar = '.center > *';
const addCustomerBtn = 'button[ng-class="btnClass1"]';
//add custtomer button area upon click
const firstNameArea = '.form-group:first-child > *';
const firstNameTxtField = '[ng-model="fName"]';
const lastNameArea = '.form-group:nth-child(2) > *';
const lastNameTxtField = '[ng-model="lName"]';
const postCodeArea = '.form-group:last-of-type > *';
const postCodeTxtField = '.form-group:last-of-type input';
const submitBtn = 'button[type="submit"]';

const openAccountBtn = 'button[ng-class="btnClass2"]';
// open account btn area upon click
const customerArea = '.form-group:first-child > *';
const customerDropdown = '.form-group:first-child > select';
const currencyArea = '.form-group:nth-child(2) > *';
const currencyDropdown = '.form-group:nth-child(2) > select';
const processBtn = 'button[type="submit"]';

const customersBtn = 'button[ng-class="btnClass3"]';
//customers btn area upon click
const searchBar = '.input-group>input';
const searchTable = 'table';
const tableBody = 'table tbody > *';

export class ManagerPage {

    get getLinkUrl() {
        return linkUrl;
    }

    get getButtonBar() {
        return buttonBar;
    }

    get getAddCustomerBtn() {
        return addCustomerBtn;
    }

    get getFirstNameArea() {
        return firstNameArea;
    }

    get getFirstNameTxtField() {
        return firstNameTxtField;
    }

    get getLastNameArea() {
        return lastNameArea;
    }

    get getLastNameTxtField() {
        return lastNameTxtField;
    }

    get getPostCodeArea() {
        return postCodeArea;
    }

    get getPostCodeTxtField() {
        return postCodeTxtField;
    }

    get getSubmitBtn(){
        return submitBtn;
    }

    get getOpenAccountBtn() {
        return openAccountBtn;
    }

    get getCustomerArea() {
        return customerArea;
    }

    get getCustomerDropdown(){
        return customerDropdown;
    }

    get getCurrencyArea() {
        return currencyArea;
    }

    get getCurrencyDropdown() {
        return currencyDropdown;
    }

    get getProcessBtn() {
        return processBtn;
    }

    get getCustomerBtn() {
        return customersBtn;
    }

    get getSearchBar() {
        return searchBar;
    }

    get getSearchTable() {
        return searchTable;
    }

    get getTableBody() {
        return tableBody;
    }

}