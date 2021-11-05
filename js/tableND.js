import { MangNguoiDung } from "./MangND.js";
import { NguoiDung } from "./Nguoidung.js";

let mangNguoidung = new MangNguoiDung();
document.querySelectorAll(".actions ul li a")[1].onclick = (event) => {
    event.preventDefault();

    let nguoiDung = new NguoiDung();
    let arrInput = document.querySelectorAll(
        "form input , form select, from textarea"
    );

    for (let tagInput of arrInput) {
        let { id, value } = tagInput;
        nguoiDung[id] = value;
    }
    // console.log(nguoiDung);

    mangNguoidung.themPhanTu(nguoiDung);
    document.querySelector("#table_thongtin").innerHTML =
        mangNguoidung.renderNguoiDung();
};