function panggilRegexp(value) {


 // let data = "Belajar Satu Tahun Bersama Niomic";
 // console.log(/Satu/.test(data))

  let data = value;
  if (/javascript/.test(data)==true){
    console.log(data.replace(/javascript/,' '));
  }else if (/php/.test(data)==true){
    console.log(value.replace(/php/,' '));
  }else {
    console.log(value);
  }
}

panggilRegexp("Belajar html");
panggilRegexp("Belajar javascript");
panggilRegexp("Belajar css");
panggilRegexp("Belajar php");
