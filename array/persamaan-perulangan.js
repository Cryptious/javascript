function panggilPerulangan() {


  var kota = ["Jakarta","Bandung","Bogor","kotali"]

  kota.map((item, index, array)=>{
    console.log(item);
    console.log(index);
    console.log(array);
  })

}
panggilPerulangan();

// hasil dari for, foreach dan map sama menampilkan sesuai dengan panjang dan isi array yang ada
