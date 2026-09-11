//1
const nguoiDung = { ten: "Son", tuoi: 21, email: "chua co" };
function gioiThieu({ ten, tuoi, email }) {
  return `Xin chao toi ten la ${ten}, ${tuoi} tuoi, email ${email}`;
}
console.log(gioiThieu(nguoiDung));

//2
const banGoc = { a: 1, b: 2 };
const banSao = { ...banGoc, c: 3 };
const macDinh = { mau: "den", cho: 4, dieuHoa: false };
const tuyChon = { mau: "do", dieuHoa: true };
function gopCauHinh(macDinh, tuyChon) {
  return {
    ...macDinh,
    ...tuyChon,
  };
}
console.log(gopCauHinh(banGoc, banSao));
console.log(gopCauHinh(macDinh, tuyChon));

//3
function timLonNhat(...mang) {
  if (mang.length === 0) return null;
  let maxI = mang[0];
  for (const i of mang) {
    if (i > maxI) maxI = i;
  }
  return maxI;
}
console.log(timLonNhat(1, 2, 3, 4, 5, 6));
