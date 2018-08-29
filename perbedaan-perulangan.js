function panggilPerulangan() {


 var datakota = ["Bandung","Bogor","Bali"];
 var databaru = datakota.map((item, index, array) => {
   return "Kota : " + item;
 });
 console.log(databaru);
}

panggilPerulangan();
