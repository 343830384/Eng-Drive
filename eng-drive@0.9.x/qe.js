/*......*/
var forRead=function(){
	    var i=0,str=base,l=arr.length;
	     this.next=function(){
	     	     if(i<l){
	     	     	 str+='/'+arr[i]
	     	     	o(str,this,end);
	     	     }else{
	     	     	 if(end)end();
	     	     };
	     	     
	     	     i++;
	     };
};
var c={a:''};
var clear=function(n){
	    var k;
	      if(n){
	      	 delete c[n];
	      }else{
					      for(k in c){
					      	   if(k!='clear'){
					      	   	 delete c[k];
					      	   };
					      };
	      };
};
c.clear=clear;
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
var forWrite=function(base){
      var i=0,str=base,l=arr.length;
	     this.next=function(){
	     	     if(i<l){
	     	     	 str+='/'+arr[i]
	     	     	 o(str,this,end);
	     	     }else{
	     	     	 if(end)end();
	     	     };
	     	     
	     	     i++;
	     };
};
exports.a=forWrite;
exports.b=forRead
exports.o=c;