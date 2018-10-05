function panggilNestedArray(value){
 // tulis jawabanmu disini

 var hasil = []
 for (var i = 0; i <= value.length; i++) {
   hasil.push([value[0][i],value[1][i],value[2][i]])
 }
 console.log(hasil);
}

var nestedArray = [
   [1,2,3,4],
   ['Mark Zuckerberg', 'Elon Musk', 'Bill Gates', 'Steve Jobs'],
   ['Facebook', 'Tesla', 'Microsoft', 'Apple']
]
panggilNestedArray(nestedArray)
