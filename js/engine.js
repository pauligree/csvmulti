if (window.File && window.FileReader && window.FileList && window.Blob) {
  // Great success! All the File APIs are supported.
} else {
  alert('The File APIs are not fully supported in this browser.');
}

var Casi = new Array();
var CasiExt = new Array();

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
    	Casi = results.data;
    	len = Casi.length;
		console.log(len);
		for( var xxx in Casi ){
 			console.log( Casi[xxx]["casi"] +);
		}
    }
});