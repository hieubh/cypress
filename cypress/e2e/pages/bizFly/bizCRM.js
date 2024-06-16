const url = 'https://crm.bizdev.vn/?project_token=54a306fe-fc84-4264-b6bc-026536502d6e&ver=ver_menu_new&home_redirect=1';
const crmSaleTab = '.nav-item-top[href="https://crm.bizdev.vn/crm_sale?project_id=5e8ed08f1a7d061b625c6161&set_sale_crm=1"]';
const crmSaleTabUrl = 'https://crm.bizdev.vn/crm_sale?project_id=5e8ed08f1a7d061b625c6161&set_sale_crm=1';
const followAfterSaleOption = '//span[text()="Follow Sau bán"]';
const productOption = 'a[title="Sản phẩm"]';


export class BizCRM {
    get getUrl () {
        return url;
    }

    get getCrmSaleTab () {
        return crmSaleTab;
    }

    get getCrmSaleTabUrl () {
        return crmSaleTabUrl;
    }

    get getfollowAfterSaleOption() {
        return followAfterSaleOption;
    }

    get getProductOption() {
        return productOption;
    }


}