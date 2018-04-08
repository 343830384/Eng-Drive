<div align=center><img width="50" height="50" src="https://github.com/343830384/Eng/blob/master/img/80.png"/></div>
<br>

### bug
   * 0.9.1x 修复读取未压缩html文件导致的输出乱码  
   * 0.9.2x 修复对e-html指令的编译不正确
   * 0.9.31 修复 manual 方法读取非min的html文本 输出乱码


   
### 注意事项
 
   * 仅对 [Eng](https://github.com/343830384/Eng) 的 e-base、e-attr、e-html、e-for 四个组件指令做出预编译和渲染, 涉及 Dom 操作目前不支持 . 并且事实上绝大部分常规页面的编写也仅仅会用到这四个指令 ;    
   * [Eng](https://github.com/343830384/Eng) 的其它指令/方法更适合用来开发具有交互逻辑的组件  

<br>

#### 安装 :   npm install -g eng-drive 

<br>

#### 命令 :  eng -init
   * 在当前工作目录生成配置文件 config.json , 以及默认的 widgets 和 widgets_eng_compile 两个文件夹 (当前版本仅有输出目录配置) 
```
{
  "widgets_output":{ //输出目录
        "base":"./",
        "path":"widgets_ENG"
  }
}
// eng -init 命令   等价于 require('eng-drive').init();
   
```

<br>

#### 命令 :  eng -auto
   * 自动查找  ./widgets 目录下所有的 组件 html文件编译输出到 ./widgets_eng_compile 目录下
   * 注意 ./widgets 下的每个组件因该是单独的文件夹 , 命名为组件的命名 , 并且只有一个.html结尾的组件 , 其它文件也会被拷贝输出到 ./widgets_eng_compile 生成相同的目录结构 
   * 等价于 require('eng-drive').auto();
   
<br>

#### 方法 :  eng.manual( htmlText , callback )
   * 手动编译 eng 组件
```
  * htmlText : Eng的html 组件文本
  * callback : function( compileText )
  *            compileText : 编译后的文本
----------------------------------------------------------------  
var html='<div id="demo1"><div e-base="base"><p>{{v}}</p></div></div>';
var eng=require('eng-drive');
    eng.manual(html ,function(compileText){
    
	        console.log(compileText); 
	        
	   }); 
```

<br>

#### 方法 :  eng.dataGlue(data , compileData , callback)
   * 生成完整的html文本
```
  *  data :        组件数据
  *  compileData : 编译数据
  *  callback : function( htmlText )
  *             htmlText : 生成的html文本             
----------------------------------------------------------------  
var data={
	      base:{
	      	  v:'这仅是个基本范例' 
	      }
    };   
var compileData={"base":{"v":{"1":[1]},"$_a":["<div><p>","","</p></div>"]},"$_a":["<div id=\"demo1\"><!--$#base#$--></div>"]};   
    eng.dataGlue(data,compileData,function( htmlText ){
				
     console.log(htmlText);
					   
      //div id="demo1"><div><p>这仅是个基本范例</p></div></div>
    });   
``` 
 
<br>

#### 方法 :  eng.dataGlueTo(data , compileData, src , widgetName , callback)
   * 生成完整的html文本到指定的文件夹
```
  *  data :        组件数据
  *  compileData : 编译数据
  *  src :         输出路径   
  *  widgetName :  组件文件夹命名
  *  callback : function(){
  *              //do some thing 
  *            }           
```  
 
 
 
 
 
 
 
 
## License

[![License](http://img.shields.io/badge/license-APACHE2-blue.svg)](LICENSE.txt)  
   