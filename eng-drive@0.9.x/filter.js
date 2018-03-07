
var isJsonOrArray=function(x){
		var t=typeof(x),k;
		 if(t=='string')return 1;
		 if(t=='boolean')return 2;
		 if(t=='number')return 3;
	  if(x instanceof Array)return 4; //这里返回true 是单纯渲染页面数据的应用 
	  if(t=='object')
	   for(k in x){return 5};        
	   return false;	                
};

var rpList={
	   $_txt:'$_a', 
	   $_ach:'$_b',
	   $_cs:'$_c',
	   $_NV:1,
	   $_AT:2
};
var checkJson=function(o){
	   var k,f=0;
	      for(k in o){
	      	  f=1;
	      	  break;
	      };
	      return f;
};
var checkArray=function(o){
	    if(o.length)return 1;
	    return 0;
};
var filter=function(o){
	 var k ,v,n,a,b,c;
	    for(k in o){
	    	   v=o[k];
	    	   n=isJsonOrArray(v);
	    	   if(n==5||!n){
	    	   	  a=checkJson(v);
	    	   	  if(a){
	    	   	  	  b=rpList[k];
	    	   	  	  if(b){
	    	   	  	  	  o[b]=v;
	    	   	  	  	  delete o[k];
	    	   	  	  };
	    	   	  	  filter(v);
	    	   	  }else{
	    	   	  	 delete o[k];
	    	   	  };
	    	   };
	    	   if(k=='$_cs'){
	    	   	   b=rpList[k];
	    	   	  	if(b){
	    	   	  	  	o[b]=v;
	    	   	  	  	delete o[k];
	    	   	  	};
	    	   };
	    	   if(n==4&&k!='$_cs'){
	    	   	  a=checkArray(v);
	    	   	  if(a){
	    	   	  	  b=rpList[k];
	    	   	  	  if(b){
	    	   	  	  	  o[b]=v;
	    	   	  	  	  delete o[k];
	    	   	  	  };
	    	   	  	  filter(v);
	    	   	  }else{
	    	   	  	  delete o[k];
	    	   	  };
	    	   };
	    	
	    };
};

exports.filter=filter;