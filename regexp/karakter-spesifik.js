function panggilRegexp(value) {


 // var ambilData = value.match(/\ke/g); //mengambil kata “ke” pada sebuah variable string.
 // var ambilData = value.match(/[keaBs]/g); // mengambil semua “k” dan karakter “e” pada sebuah variable string
 // var ambilData = value.match(/[^ke]/g) // mengambil karakter KECUALI karakter tertentu, dalam contoh kita ingin mengambil semua karakter KECUALI karakter “k” dan “e”
    var ambilData = value.match(/[a-i]/g) //mengambil karakter ANTARA karakter tertentu, dalam contoh kita ingin mengambil semua karakter ANTARA karakter “a” sampai “i”
 console.log(ambilData);
}

panggilRegexp("Bulan ke 1 sd ke 4 3 5 7 2");
