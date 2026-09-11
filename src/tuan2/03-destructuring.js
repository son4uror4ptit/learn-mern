const nguoiDung = { ten: "Son", tuoi: 21, thanhPho: "Ha Noi" };

//Cach cu
const tenCu = nguoiDung.ten;
const tuoiCu = nguoiDung.tuoi;

//Destructuring
const { ten, tuoi } = nguoiDung;
console.log(ten, tuoi);

//Doi ten
const { thanhPho: noi0 } = nguoiDung;
console.log(noi0);

//Gan gia tri khi khong ton tai
const { ngheNghiep = "sinh vien" } = nguoiDung;
console.log(ngheNghiep);

//voi mang theo vi tri, khong theo ten.
const diem = [8, 7, 9];
const [toan, ly] = diem;
console.log(toan, ly);

//Bo qua phan tu
const [, , hoa] = diem;
console.log(hoa);

//destucturing ngay o tham so ham
function moTa({ ten, tuoi }) {
  return `${ten}, ${tuoi} tuoi`;
}
console.log(moTa(nguoiDung));
