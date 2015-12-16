var fs = require('fs');
var path = require('path');

/* I/0 excercise
var contents = fs.readFileSync(process.argv[2]);

var stringContents = contents.toString();

console.log(stringContents.split('\n').length-1);
*/
 // var contents = fs.readFileSync


/*Asynch I/0 //using 2nd arg of utf8 passes data as a string instead of a buffer
fs.readFile(process.argv[2], 'utf8', function(err, contents) {
  if( err ) {
    throw 'err';
  } else {
    console.log(contents.split('\n').length-1);    
  }
});
*/

var pathArg = process.argv[2]; ///var/folders/_k/kyz_1lq103v533q_v8yrwd2c0000gp/T/_learnyounode_3172
var extensionArg = '.'+process.argv[3].toString(); //mdclea



/*LS Filter
fs.readdir(pathArg, function(err, files){
  if( err ) {
    throw err;
  } else {
      for( var i = 0; i < files.length; i++ ) {
       if (path.extname(files[i]) == extensionArg ) {
       
          console.log(files[i]);
       
      }
    }
  }
}) ; 
*/



 
