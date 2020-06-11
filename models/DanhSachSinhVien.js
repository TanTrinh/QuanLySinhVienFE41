var DanhSachSinhVien = function() {
    this.dssv = [];
    this.themSinhVien = function(sv) {
        this.dssv.push(sv);
    }
    this.hienThiThongTinSinhVien = function(){
        console.log("Hien thi Thong Tin SV");
    }
}