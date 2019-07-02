function tugas26() {

  var a = [2, 39, 76, 50, 9, 7, 41, 2, 24, 1, 16];

  for (i = 0; i < a.length; i++) {
    var j = isFinite(a[i]);
    if (j == true) {
      console.log("Angka", a[i], "is NOT Infinity");
    }else{
      console.log("Angka", a[i], "is Infinity");
    }
  }
}

tugas26();
