###webpack学习笔记之 Entry
webpack能够对项目中的文件依赖生成依赖图，这个依赖图的起点就是入口文件，对于webpack来说，这个文件告诉webpack如何启动项目，entry就是这个入口文件。

#####entry 指向的文件一般都是创建根路由节点的实例。

	const config = {
	  entry: {
	    main: './path/to/my/entry/file.js'
	  }
	};
	
##### entry可以是字符串，可以是数组，也可以是对象
- 当entry为字符串时
> 指向的文件将会被插入index.html中
- 当entry为数组时
> 指向的多个文件（生成多个组件）都将会被插入index.html中。一般spa只有一个路由根节点，这种插入多个根节点的情况少见。
- 当entry为对象时，每个key-value对表示生成一个页面，所以可以利用这个特性构建多页面应用（这一块一脸懵逼，提到CommonsChunkPlugin但是还是不懂，需要补充）

##### 

	const config = {
	  entry: {
	    pageOne: './src/pageOne/index.js',
	    pageTwo: './src/pageTwo/index.js',
	    pageThree: './src/pageThree/index.js'
	  }
	};

###webpack学习笔记之 Output

output告诉webpack如何把编译的结果写进磁盘。尽管可以有多个entry入口文件，但是只能有一个output配置文件。

##### 最简单的output配置

	output: {
	  filename: 'bundle.js',
	  path: '/home/proj/public/assets'
	}
	
> path表示打包后的文件应该保存到哪个绝对路径，注意，是绝对路径，所以，一般情况下常见的写法是把path解析成绝对路径。

	var path = require('path')
	path.resolve(__dirname, '../dist')

- path是nodejs的路径解析模块，__dirname表示执行这个函数时文件所在路径


