export class MangNguoiDung {
    mangND = [];
    themPhanTu = (nguoiDung) => {
        this.mangND.push(nguoiDung);
    };

    renderNguoiDung = () => {
        let stringHTML = this.mangND.reduce((htmlTR, nguoiDung, index) => {
            htmlTR = `

            <table class="table table-bordered table-sm">
             <thead>
             <tr>
                 <th>Tên</th>
                <th>Họ</th>
                <th>Email</th>
                 <th>SDT</th>
                 <th>Ngày sinh</th>
                <th>Địa chỉ</th>
                 <th>Thông tin di chuyển</th>
                <th>Loại</th> 
            </tr>
            </thead>
            <tbody>
            <tr>
                <td>${nguoiDung.ten}</td>
                <td>${nguoiDung.ho}</td>           
                <td>${nguoiDung.email}</td>
                <td>${nguoiDung.soDienThoai}%</td>
                <td>${
                  nguoiDung.ngay + "/" + nguoiDung.thang + "/" + nguoiDung.nam
                }</td>
                <td>${nguoiDung.diaChi}</td>
                <td>${nguoiDung.thongTinDiChuyen}</td>
                <td>${nguoiDung.loaiNhiem} </td>            
            </tr> 
        </tbody>
    </table>`;
            return htmlTR;
        }, "");
        return stringHTML;
    };
}