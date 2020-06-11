var DanhSachSinhVien = function() {
    this.dssv = [];
    this.themSinhVien = function(sv) {
        this.dssv.push(sv);
    };
    this.capNhatSinhVien = function(maSV, sinhVien) {
        console.log('chức năng cập nhật sinh viên!');
    };
}