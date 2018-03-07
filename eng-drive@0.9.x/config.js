var fs=require('./filePro.js').fs;
var qe=require('./qe.js').o;
var index=require('./index.js');
var cfgPath="./config.json";
var cfg;
var init=function(){
	var cfgg="{\r  \"widgets_output\":{\r        \"base\":\"./\",\r        \"path\":\"widgets_eng_compile\"\r  }\r}";
	    qe.aaa=function(){  
	    	  qe.clear('aaa');
	       qe.b=function(d){
				    	 cfg=JSON.parse(d.toString());
				    	 qe.clear();
				    	 initFiles();
				    };
				    fs.readF(cfgPath,'b');
	    }
     fs.writeF('./config.json',cfgg,'aaa');
};
var initFiles=function(){
	   var base=cfg.widgets_output.base.replace('/','');
	   var pArr=cfg.widgets_output.path.split('/');
	   var i=0,l=pArr.length;
		     qe.a=function(){
				      if(i<l){	
				     	  base+='/'+pArr[i]; 
				     	  fs.mkDir(base,'a');
				     	}else{
				     	
				     		 qe.b=function(){
				     		 	 console.log('\x1B[32m%s\x1B[0m',"自动构建目录 及 config.json 文件已创建...\nThe automatic directory and \'config.json\' file have been created");
				     		 };
				     		  fs.mkDir('./widgets','b');
				     	};
				     	i++;
		     };
	     qe.a();   
};
exports.init=init;
