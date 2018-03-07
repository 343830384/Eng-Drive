var eng=require('eng-drive');

//exports.auto=autoCompile;
//exports.manual=manual;
//exports.manualTo=manualTo;
//exports.dataGlue=dataglue;
var html='<div id="demo1"><div e-base="base"><p>{{v}}</p></div></div>';
var compileData={"base":{"v":{"1":[1]},"$_a":["<div><p>","","</p></div>"]},"$_a":["<div id=\"demo1\"><!--$#base#$--></div>"]};

var data={
	      base:{
	      	  v:'这仅是个基本范例' 
	      }
    };
	
eng.manual(html ,function(compileText){
	   console.log('-------------------->>>>>');
	   console.log(compileText); 
	   
	   //{"base":{"v":{"1":[1]},"$_a":["<div><p>","","</p></div>"]},"$_a":["<div id=\"demo1\"><!--$#base#$--></div>"]}
});

eng.dataGlue(data,compileData,function(htmlStr){
	   console.log('-------------------->>>>>');
	   console.log(htmlStr);
	   
	   //div id="demo1"><div><p>这仅是个基本范例</p></div></div>
});
eng.dataGlueTo(data,compileData,'./tempFolder','app1', function(){
	    // do some things
})