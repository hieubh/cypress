const url = 'https://crm.bizdev.vn/frame/bizfly-client/base-table/input-full?table=data_product&sdk_version=1.0&_s=1718520149&project_token=54a306fe-fc84-4264-b6bc-026536502d6e&client_token=52c1a85f1dad3f8204f700650ef968a8d8037f113227c125a4b558f53272165052e8eec7ec6af2a9fc18b6c3054a1fcfbafe8f71ef301e4a1fd79280bdb3f40b&api_embed_key=JUDAeSwsSFRFfd54ukCntZHEFV8KpPvFTVTUJz3&form_view_mode&from'
const productCode = 'input[placeholder="Nhập mã sản phẩm"]';
const productName = 'input[placeholder="Nhập tên sản phẩm"]';
const productPrice = 'input[type="text"][placeholder="Nhập giá"]';
const saveBtn = 'button~button[id="js_saveButton"]';

export class ProductDetailPage {
    get getUrl() {
        return url;
    }

    get getProductCode() {
        return productCode;
    }

    get getProductName() {
        return productName;
    }

    get getProductPrice() {
        return productPrice;
    }

    get getSaveBtn() {
        return saveBtn;
    }
}

