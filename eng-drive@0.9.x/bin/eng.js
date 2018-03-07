#!/usr/bin/env node
var eng=require('../index.js')
var cmd=process.argv[2];
if(cmd){
	   if(cmd=='-auto'){
	   	eng.auto();
	   };
	   if(cmd=='-init'){
	   	 eng.init();
	   };
};