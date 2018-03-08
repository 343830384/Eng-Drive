var parser=require('./parsestr.js').parser;
var qe=require('./qe.js').o;
var cfg=require('./config.js');
var fs=require('./filePro.js').fs;
var dataGlue=require('./format.js').dataGlue;
var minify = require('html-minifier').minify;
var G=0;
var getWidgestList=function(path,dest){
	       qe.as=function(files){
	      	   	 	allFiles(path, files , dest );
	      };
	      fs.readDir(path,'as');
};
var allFiles=function(path,files,dest){
	   var i=0,a=0,l=files.length,arr=[],s='a';
	       while(i<l){
	       	 qe[s+i]=function(files,path){
	       	 	   
	       	 	  fileShunt(path,files,dest);
	       	 };
	       	 fs.readDir(path+'/'+files[i],s+i);
	       	 i++;
	       };	        	 
};

var fileShunt=function(path,files,dest){
	    var i=0 ,l=files.length,name,pth,reg=/(.html|.htm)$/i,f,s='b',q='e';
	    var ff=path.split('/').pop(),dest=dest+'/'+ff;
	        G++;
	      qe[q+G]=function(dpth,ff){
	      	   while(i<l){
						      	     name=files[i];
						      	     pth=path+'/'+name;
						      	     f=reg.test(name);
						      	    if(f){ 
							      	     qe[s+i]=function(f,p1,dpth,ff){
							      	     	  if(f)compileGet(p1,dpth,ff);
							      	     };
							      	     fs.isFile(pth,s+i,dpth,ff);
						      	    }else{
						      	    	 fs.copyTo(pth,dest+'/'+name); 
						      	    };
						      	i++;
						      };
	      };
	      fs.mkDir(dest,q+G,dest,ff);
	      
};
var compileGet=function(pth,dest,ff){
	     var s='c';
	     G++;
	      qe[s+G]=function(data){
	      	   compileWrite(dest,data.toString(),ff);
	      };
	      fs.readF(pth,s+G);
};
var compileWrite=function(dest,data,ff){
	     var s='d';
	     G++;
	     qe[s+G]=function(j){
	     	  console.log('\x1B[32m%s\x1B[0m','===> '+ff);
	     	   fs.writeF(dest+'/'+ff+'.eng-compile',j);
	     };
     parser(minify(data,{removeComments: true,collapseWhitespace: true}),s+G);
};

var autoCompile=function(){
	    var a='getCfg',cfg,path;
	        qe.clear();
	        qe[a]=function(data){
	        	   cfg=JSON.parse(data.toString());
	        	   path=cfg.widgets_output.base+cfg.widgets_output.path;
	        	   getWidgestList('./widgets', path);
	        };
	        fs.readF('./config.json',a);
};
/**/
var init=function(){
	   qe.clear();
    cfg.init();	
};
var manual=function(html,cB){
	   var s='manual';
	    G++;
	    qe[s+G]=function(j){
	    	 cB(j);
	    };
	   parser(html,s+G);
};
var dataglue=function(data,html,cB){ 
	   cB(dataGlue(data,html,1));
};
var dataGluelTo=function(data,html,path,name,cB){
	   var path=path+'/'+name;
	   fs.mkDirs(path,function(){
	   	    qe[name]=function(){
	   	    	  if(cB)cB();
	   	    	  qe.clear(name)
	   	    };
	   	     fs.writeF(path+'/'+name+'.eng_render_cache',dataGlue(data,html,1),name);
	   });
};
exports.init=init;
exports.auto=autoCompile;
exports.manual=manual;
exports.dataGlueTo=dataGluelTo;
exports.dataGlue=dataglue;