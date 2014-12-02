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
    	CasiExt = results.data;
    }
});

len = CasiExt.length;
console.log(len);
/*for (i=0;i<len;i++){
	for (i = CasiExt[0].casi-1; i==0; i--){
        	document.write(CasiExt[0].casi);
    }
}*/
for( var xxx in CasiExt ){
 document.write( CasiExt[xxx]["casi"] );
}

for (var key in CasiExt) {
  if (p.hasOwnProperty(key)) {
    alert(key + " -> " + CasiExt[key]);
  }
}


document.write( CasiExt[0]["casi"] );