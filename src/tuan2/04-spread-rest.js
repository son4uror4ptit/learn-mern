//SPREAD
const goc = { a: 1, b: 2 };
const moi = { ...goc, c: 3 };
console.log(moi);
//ghi de
const suaDoi = { ...goc, b: 99 };
console.log(suaDoi);

//mang
const m1 = [1, 2];
const m2 = [...m1, 3, 4];
console.log(m2);

//REST
function tinhTong(...cacSo) {
  return cacSo.reduce((tong, n) => tong + n, 0);
}
console.log(tinhTong(1, 2, 3, 4));

//rest trong restructuring
const { a, ...phanCOnLai } = { a: 1, b: 2, c: 3 };
console.log(a, phanCOnLai);

const banGoc = { ten: "Son", tuoi: 21 };
const banSao = { ...banGoc };
banSao.tuoi = 99;
console.log(banGoc.tuoi);
console.log(banSao.tuoi);
console.log(banSao == banGoc);
