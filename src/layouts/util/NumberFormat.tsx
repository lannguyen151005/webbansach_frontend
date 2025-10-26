import { isUndefined } from "util";

function numberFormat(x: number|undefined){
    if(x===undefined){
        return 0;
    }
    if(isNaN(x)){
        return 0;
    }
    //Sử dụng hàm toLocalString để định dang số
    return x.toLocaleString("vi-VN");
}

export default numberFormat;