function panggilRegexp(value) {

  // var ambilData = value.match(/\w/g) //Semua karakter berupa angka dan huruf akan terambil semua, kecuali spasi (\w)
  // var ambilData = value.match(/\d/g) //semua angka (\d)
  var ambilData = value.match(/\s/g) //semua spasi

    console.log(ambilData)
    console.log("Banyaknya spasi : ",ambilData.length);
}

panggilRegexp("Bulan ke 1 sd ke 4 ");
