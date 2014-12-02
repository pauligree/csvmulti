if (window.File && window.FileReader && window.FileList && window.Blob) {
  // Great success! All the File APIs are supported.
} else {
  alert('The File APIs are not fully supported in this browser.');
}

var Casi = new Object();
var CasiExt = new Object();

function Caso(id, dove) {
  this.id = id;
  this.casi = 1;
  this.dove = dove;
}

Papa.parse("../test.csv", {
    download: true,
    header: true,
    dynamicTyping: true,
    complete: function(results) {
    	CasiExt = results.data;
    }
});


console.log(CasiExt.casi);