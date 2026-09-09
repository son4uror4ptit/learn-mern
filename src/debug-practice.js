function tinhTong(mang) {
  let tong = 0;
  for (let i = 0; i < mang.length; i++) {
    tong += mang[i];
  }
  return tong;
}
const ketQua = tinhTong([10, 20, 30, 40]);
console.log("Tong:", ketQua);
