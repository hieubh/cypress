const popUpComponent = 'div[aria-labelledby="swal2-title"]';
const okBtn = '.swal2-actions button:first-of-type';

export class PopUpWindow {
    get getPopUpComponent() {
        return popUpComponent;
    }

    get getOkBtn() {
        return okBtn;
    }
}