const url = 'https://crm.bizdev.vn/base-table/list?table=data_product&project_id=5e8ed08f1a7d061b625c6161&set_sale_crm=1';
const addNewProductBtn = '//button[contains(text(),"Thêm sản phẩm mới")]';
const addNewProductOption = '//button[contains(text(),"Thêm sản phẩm mới")]/following-sibling::ul/li[1]';

export class ProductListPage {
    get getUrl() {
        return url;
    }

    get getAddNewProductBtn() {
        return addNewProductBtn;
    }

    get getAddNewProductOption() {
        return addNewProductOption;
    }
}
