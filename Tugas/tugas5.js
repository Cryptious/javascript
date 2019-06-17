function tugas5() {


  var tugas5 = []

  for (var i = 1; i <= 20; i++) {
    if (i%3 === 0) {
      tugas5.push(i)
    }
  }
  return tugas5;
}

console.log(tugas5());
