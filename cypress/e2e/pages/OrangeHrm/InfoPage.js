//Person Details
const firstNameInput = 'input[name="firstName"]';
const middleNameInput = 'input[name="middleName"]';
const lastNameInput = 'input[name="lastName"]';
const employeeIdInput = '//div[@class="oxd-form-row"][2]/div[1]/div[1]//input';
const otherIdInput = '//div[@class="oxd-form-row"][2]/div[1]/div[2]//input';
const licenseNumberInput = '//div[@class="oxd-form-row"][2]/div[2]/div[1]//input';
const otherId = '//div[@class="oxd-form-row"][2]/div[2]/div[2]//input';
const licenseExpireDate = '//div[@class="oxd-form-row"][2]/div[2]/div[2]//input';
const nationality = '//div[@class="oxd-form-row"][3]/div[1]/div[1]/div/div[2]';
const vneseOption = '//span[text()="Vietnamese"]';
const martialStatus = '//div[@class="oxd-form-row"][3]/div[1]/div[2]/div/div[2]';
const marriedOption = '//span[text()="Married"]';
const dob = '//div[@class="oxd-form-row"][3]/div[2]/div[1]/div/div[2]//input';
const maleOption = 'input[value="1"]';
const personalDetailSaveBtn = '//div[@class="oxd-form-row"][3]/following-sibling::div/button';

//Custom Fields
const bloodType = '.orangehrm-custom-fields .oxd-form-row .oxd-select-wrapper';
const bType = '//span[text()="B+"]';
const testField = '.orangehrm-custom-fields .oxd-form-row div[class="oxd-grid-item oxd-grid-item--gutters"]:nth-child(2)';
const customFieldsSaveBtn = '.orangehrm-custom-fields button';

const uploadBtn = '.orangehrm-action-header button';
const browseBtn = 'oxd-file-button';
const saveBtn = 'button ~ button';

export class InfoPage {

    get getfirstNameInput() {
        return firstNameInput
    }

    get getmiddleNameInput() {
        return middleNameInput;
    }

    get getlastNameInput() {
        return lastNameInput;
    }

    get getemployeeIdInput() {
        return employeeIdInput;
    }

    get getotherIdInput() {
        return otherIdInput;
    }

    get getlicenseNumberInput() {
        return licenseNumberInput;
    }

    get getotherId() {
        return otherId;
    }

    get getlicenseExpireDate() {
        return licenseExpireDate;
    }

    get getnationality() {
        return nationality;
    }

    get getvneseOption() {
        return vneseOption;
    }

    get getmartialStatus() {
        return martialStatus;
    }

    get getmarriedOption() {
        return marriedOption;
    }

    get getdob() {
        return dob;
    }

    get maleOption() {
        return maleOption;
    }

    get getpersonalDetailSaveBtn() {
        return personalDetailSaveBtn;
    }

    get getbloodType() {
        return bloodType;
    }

    get getbType() {
        return bType;
    }

    get gettestField() {
        return testField;
    }

    get getcustomFieldsSaveBtn() {
        return customFieldsSaveBtn;
    }

    get getuploadBtn() {
        return uploadBtn;
    }

    get getbrowseBtn() {
        return browseBtn;
    }

    get getsaveBtn() {
        return saveBtn;
    }
}















