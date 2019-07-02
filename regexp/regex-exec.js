function panggilRegExp() {
  let data = "Belajar satu tahun bersama Niomic";
  let str = new RegExp("Niomic");

  console.log(str.exec(data));
}
panggilRegExp();
