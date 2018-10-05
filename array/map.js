function panggilMap() {


  var kota = ["Jakarta","Bandung","Bogor"]
  kota.map(function(item, index, array){
    console.log(item);
    console.log(index);
    console.log(array);
  });
}

panggilMap();
