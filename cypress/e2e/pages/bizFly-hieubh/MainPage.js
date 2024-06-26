const url = 'https://my.bizdev.vn/'
const choosingProjectDropdown = '.choose_project .dropdown-toggle';
const bizFlyMarketingOption = 'li[data-name="hieubh"]';

export class MainPage {
    get getUrl () {
        return url;
    }

    get getChoosingProjectDropdown () {
        return choosingProjectDropdown;
    }

    get getBizFlyMarketingOption () {
        return bizFlyMarketingOption;
    }
}