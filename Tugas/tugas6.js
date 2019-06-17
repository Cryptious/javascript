function tugas6() {
 // tulis jawabanmu di sini

  var hasil = "";
  for (var i = 1; i <= 20; i++) {
    if (i%2 === 0) {
      hasil += "Genap "
    }else{
      hasil += i + " ";
    }
  }
  return hasil;
}
console.log(tugas6())
