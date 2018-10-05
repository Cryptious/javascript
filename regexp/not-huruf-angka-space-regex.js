function panggilRegexp(value) {

   var ambilData = value.match(/\W/g) //Semua karakter kecuali angka dan huruf akan terambil (\W)
   // var ambilData = value.match(/\D/g) //semua kecuali angka (\D)
  // var ambilData = value.match(/\S/g) //semua kecuali spasi (\S)

    console.log(ambilData)
    console.log("Banyaknya data : ",ambilData.length);
}

panggilRegexp("Bulan ke 1 sd ke 4 ");
