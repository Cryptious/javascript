function panggilSplice() {

  var kota = ['jakarta','bandung','makasar','medan','manado','padang','malang','bogor'];

  console.log(kota);

  kota.splice(2,0,'palembang')
  return kota;

}


console.log(panggilSplice());
