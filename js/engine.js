if (window.File && window.FileReader && window.FileList && window.Blob) {
  // Great success! All the File APIs are supported.
} else {
  alert('The File APIs are not fully supported in this browser.');
}

function m( obj ){
	if (typeof console != "undefined") console.log(obj);
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
		for( var x in Casi ){
 			for (y=0; y<Casi[x]["casi"]; y++){
 				CasiExt[y] = Casi[x];
 				//CasiExt[y]["casi"] = 1;//Casi[x]["casi"];
        document.write(CasiExt[y]["id"]+","+CasiExt[y]["casi"]+","+CasiExt[y]["dove"]+"<br>");
 			}
		}
    }
});