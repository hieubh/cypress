const url = 'https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index';
const mainContent = 'oxd-layout-context';
//user dropdown
const userDropdown = '.oxd-userdropdown-tab:first-child';
const userDropdownIcon = '.oxd-userdropdown-img';
const userDropdownName = '.oxd-userdropdown-name';
//sidebar
const sideBar = 'oxd-navbar-nav';
const sideBarLogo = '.oxd-brand-banner img';
const sideBarLogoUrl = 'https://opensource-demo.orangehrmlive.com/web/images/orangehrm-logo.png?v=1711595107870'
const myInfoOption = '.oxd-main-menu:last-child li:nth-child(6)'

export class AdminPage {
    
    get getUrl () {
        return url;
    }

    get getMainContent () {
        return mainContent;
    }

    get getUserDropdown () {
        return userDropdown;
    }
    
    get getuserDropdownIcon () {
        return userDropdownIcon;
    }

    get getUserDropdownName () {
        return userDropdownName;
    }

    get getSideBar () {
        return sideBar;
    }

    get getSideBarLogo() {
        return sideBarLogo;
    }

    get getSideBarLogoUrl() {
        return sideBarLogoUrl;
    }

    get getMyInfoOption() {
        return myInfoOption;
    }
}



