var fs=require('fs');
var qe=require('./qe.js').o;
var o={};
o.readF=function(path,sign){//1
	   fs.readFile(path,function(err,data){
	   	      if(err)throw err;
	   	      if(sign)qe[sign](data);
	   })
};

o.readDir=function(path,sign){//2
	    fs.readdir(path,function(err,files){
	    	     if(err)throw err;
	    	     if(sign)qe[sign](files,path);
	    });
};

o.writeF=function(path,data,sign){//3
	   fs.writeFile(path,data,function(err){
	   	    if(err)throw err;
	   	    if(sign)qe[sign]();
	   })
}

o.mkDir=function(path,sign,pth,pth2){//4
    	  fs.mkdir(path,function(err){
	    	  	    if(err){
	    	  	    	 if(sign)qe[sign](pth,pth2);
	    	  	    }else{
	    	  	      if(sign)qe[sign](pth,pth2);
	    	  	    }; 
    	  });
};
o.isFile=function(path,sign,dpth,pth2){//5
	      fs.stat(path,function(err,stats){
	      	    if(err)throw err;
	      	     if(sign)qe[sign](stats.isFile(),path,dpth,pth2);
	      });
};
o.copyTo=function(pth0,pth1,sign){
	    fs.copyFile(pth0,pth1,function(err){
	    	     if(err)throw err;
	    	     if(sign)qe[sign]();
	    });
};
o.mkDirs=function(src,cB){
	   var arr=src.split('/'),i=1,l=arr.length,s=arr[0];
	      qe.mk=function(){
	      	  if(i<l){
	      	  	  s+='/'+arr[i];
	      	     o.mkDir(s,'mk');
	      	  }else{
	      	  	 cB();
	      	  	 qe.clear('mk');
	      	  }
	      	  i++;
	      }
	      qe.mk();
}
exports.fs=o;























