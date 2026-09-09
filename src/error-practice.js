function layTenNguoiDung(user) {
  if (!user) return "KHONG XAC DINH";
  return user.name.toUpperCase();
}

function xuLy(danhSach) {
  return danhSach.map((u) => layTenNguoiDung(u));
}

xuLy([{ name: "Son" }, null]);
