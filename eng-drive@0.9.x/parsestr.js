var cheerio= require('cheerio');
var format=require('./format.js').format;
var order=['e-base','e-for','e-html','e-attr'];
var say=console.log;
var $;
var hqc=function(dom){
	var a=0,arr=dom.children(),L=arr.length,v,h,d;
	     while(a<L){
	     	  h=$(arr[a]);
	     	  console.log($(h).html());
	     	  v=h.attr(order[2]);
	     	  if(v){
	     	  	 h.html('');
	     	  };
	     	  d=h.children();
	     	  hqc(d);
	     	a++;
	     }
	
};
var parseXunHuan=function(dom,data,f,spec){
	   var L, a=0,b,c,d,e,arr,h,v,v2,j,f2,f3=1,f4,f5,f6;
	       f?(arr=[dom],L=1):(arr=dom,L=arr.length);
           if(!L&&spec&&spec.length){
                 spec[0][spec[1]]=$.html(spec[2]);
           };
	       while(a<L){
	       	   h=arr[a];
	       	   if(!f)h=$(h);
	       	   b=0;
	       	   f2=1;
	       	   f4=1;
	       	   f5=1;
	       	   j=data;
				       	   while(b<4){
				       	   	   v=h.attr(order[b]);
				       	   	    if(v){
				       	   	    	   if(b==0){ 
				       	   	    	   	 if(spec&&spec.length){
				       	   	    	   	 	 spec[0][spec[1]]=$.html(spec[2]);
				       	   	    	   	 };
				       	   	    	   	  d=h.children();
				       	   	    	   	  data[v]={};
				       	   	    	   	  j=data[v];
				       	   	    	   	  if(j.$_base){
				       	   	    	   	  	j.$_base.push(v);
				       	   	    	   	  }else{
				       	   	    	   	  	j['$_base']=[];
				       	   	    	   	  	j.$_base.push(v)
				       	   	    	   	  };
				       	   	    	   	  spec=[j,'$_txt',h,v];
                           j['$_txy']=$.html(h);
				       	   	    	   	  f2=0;
				       	   	    	   	  f5=0;
				       	   	    	   	  if(f)f3=0;
				       	   	    	   };
				       	   	    	   if(f2&&b==1){ //e-for
				       	   	    	   	if(spec&&spec.length){
				       	   	    	   	 	 spec[0][spec[1]]=$.html(spec[2]);
				       	   	    	   	 };
				       	   	    	   	  d=h.children();
				       	   	    	   	  data[v]={};
				       	   	    	   	  j=data[v];
				       	   	    	   	  if(j.$_for){
				       	   	    	   	  	  j.$_for.push(v);
				       	   	    	   	  }else{
						       	   	    	   	  	j['$_for']=[];
						       	   	    	   	  	j.$_for.push(v)
				       	   	    	   	  };
				       	   	    	   	  j['$_type']='for';
				       	   	    	   	  spec=[j,'$_txt',h,v];
                           j['$_txy']=$.html(h);
				       	   	    	   	  f5=0;
				       	   	    	   	  if(f)f3=0;
				       	   	    	   };
				       	   	    	   if(b==2){  
                           if(j.$_html){
                           	  j.$_html.push(v);
                           }else{
                           	  j['$_html']=[];
                           	  j.$_html.push(v);
                           };
					       	   	    	   	 f4=0;
				       	   	    	   };
				       	   	    	   if(b==3){ 
                            if(!j.$_cs){
                               j.$_cs=[[],[]]; 
                            };
                               v2=h.attr('class');
                               j.$_cs[0].push(v2?v2:'');
                               v2=h.attr('style'); 	  
                            	  j.$_cs[1].push(v2?v2:'');
                            	  if(v.indexOf('class=')>-1)h.removeAttr('class');
                               if(v.indexOf('style=')>-1)h.removeAttr('class');
                            if(j.$_attr){
                           	   j.$_attr.push(v);
                            }else{
                           	   j['$_attr']=[];
                           	   j.$_attr.push(v);
                            };
				       	   	    	   };
				       	   	    };
				       	   	b++;
				       	   };
				       	   if(f&&f3){ 
                   j['$_txt']=$.html(h);
				       	   };
				       	   if(f4){
						       	   	  if(f5)d=h.children();
						       	   	  parseXunHuan(d,j,0,spec);
				       	   }else{
				       	   	   if(spec&&spec.length){
				       	   	    	  spec[0][spec[1]]=$.html(spec[2]);
				       	   	   };
				       	   };
	       	a++;
	       };
	       
};

var  parser=function(dom,sign){
	     i=0;
	    $=cheerio.load(dom,{decodeEntities: false});
     $('[e-html]').html('');
     dom=$('body').html();
	  var Json={};
	    parseXunHuan($(dom),Json,1);
	    format(Json,sign);
}
exports.parser=parser;