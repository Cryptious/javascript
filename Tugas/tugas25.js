
function tugas25() {
  var angka = [2, 39, 76, 50, 9, 7, 41, 2, 24, 1, 16]
  console.log("sebelumnya : ",angka);
  console.log("Ascending : ",angka.sort());
  console.log("Descending : ",angka.reverse());

  var cari = angka.filter((item)=>{
    return item > 10;

  });
console.log("Filter > 10 : ",cari);

}
tugas25();
