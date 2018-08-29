

function balikKata(kata) {
  var balikKata = kata.split("").reverse(balikKata).join("")
  return balikKata;
}

// testCase
console.log(balikKata("Niomic!"))
console.log(balikKata("JavaScript"))
console.log(balikKata("alohahola"))
console.log(balikKata("Jawa_Barat"))
