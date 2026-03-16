/* 
    Local storage: dịch vụ lưu dữ liệu trên trình duyệt
    Dung lượng: 
        local storage, ss storage: 5-10 MB : 1MB =? 1024kb
        1 ảnh tầm 100kb
        
        localStorage: lưu giữ liệu mãi mãi, tức là khi các em đóng trình duyệt,
        tắt máy... thì dữ liệu hông bị mất
        session storage: phiên làm việc, nếu đóng trình duyệt, tắt máy thì dữ liệu sẽ bị mất.

        CÁC DỮ LIỆU 
        THAO TÁC LÀM VIỆC: (lấy về, cập nhật, xóa);
        1. thao tác lưu giữ liệu
        localStorage.setItem("tên giá trị cần lưu", Giá trị cần lưu)
        khi lưu dữ liệu dạng OBJECT và ARRAY THÌ CÁC EM PHẢI CHUYỂN SANG ĐỊNH DẠNG
        JSON.
        Cách chuyển sang định dạng JSON.stringify(giá trị);

        2. Lấy dữ liệu
        localStorage.getItem("Tên key");
        KHI LẤY GIỮ LIỆU DẠNG ARRAY, OBJECT THÌ PHẢI CHUYỂN SANG ĐỊNH DẠNG BAN ĐẦU
        JSON.parse(GIÁ TRỊ LẤY VỀ);
        3. Xóa Dữ liệu (XÓA THEO TÊN KEY);
        Xóa 1:
        localStorage.removeItem();
        Xóa hêt: 
        localStorage.clear();

        

*/
let fullname = "lê min thu";
// localStorage.getItem("fullname", fullname);
console.log(localStorage.getItem("fullname"));
