### ASCII，unicode和utf-8编码

#### ASCII
ASCII 编码规定了0-127中每个数字和字符的对应关系，占用一个字节，最前面的一位始终为0，后面的7位从0000000到1111111  

#### unicode
unicode是世界上所有符号的编码，比较常见的是U+FFFF这种4个16进制数字的字符，实际上有些语言是5个或者6个16紧致字符的。最大需要4个字节长度的二进制位表示。但是，实际上很多字符的编码值很小，如果所有字符都用4个字节的话，很多字符的前面会有很多0，这样会很占用空间。unicode只是规定了哪些字符对应的编码值是什么，并没有规定怎么存储和解析。

#### utf-8
utf-8是unicode编码的一种实现方式。其实还有utf-16和utf-32 编码。utf-8编码中，每个字符的存储不是用固定长度的。

UTF-8 最大的一个特点，就是它是一种变长的编码方式。它可以使用1~4个字节表示一个符号，根据不同的符号而变化字节长度。

具体UTF－8编码规则看[这里](http://www.ruanyifeng.com/blog/2007/10/ascii_unicode_and_utf-8.html)

从规则可见，某个unicode范围内用几个子节编码，都是规定好的，解码的时候也是一样。


### 百分号编码
一个URL中有些字符是保留字符，如果URL参数中出现了保留字符，那么，获取参数的时候会拿不到完整的参数名或者参数值。百分号编码就可以解决这个问题。

!	*	'	(	)	;	:	@	&	=	+	$	,	/	?	#	[	]

具体编码规则请看[这里](https://zh.wikipedia.org/zh-hans/%E7%99%BE%E5%88%86%E5%8F%B7%E7%BC%96%E7%A0%81)


### escape
    1. ASCII以内的字符编码前面加上%，ASCII以外的字符unicode码前面加上%u
    2. 除了字母和数字，其他字符都会编码。不会考虑URI中的保留字符，所以不适合用于URL编码，要用encodeURI
    3. 不属于百分号编码，只是在编码结果加上%或者%u
    4. 该方法已经被w3c废弃，不要使用。

```javascript
a='http://www.baidu.com?name=知'
escape(a)
"http%3A//www.baidu.com%3Fname%3D%u77E5"
```

### encodeURI
    1. 字符的utf-8编码的每个字节前面加上%
    2. 对于在URL中不具有特定意义的保留字符进行编码，对非保留字符，以及有特定意义的保留字符不编码。
    3. 属于百分号编码
    4. 适用于完整URI编码。


```javascript
encodeURI(a)
"http://www.baidu.com?name=%E7%9F%A5"
```
### encodeURIComponent
    1. 字符的utf-8编码的每个字节前面加上%，同encodeURI一样
    2. 按照属于百分号编码的规则对所有对保留字符编码，不会考虑特殊意义。
    3. 适用于URI部分内容编码。

```javascript
encodeURIComponent(a)
"http%3A%2F%2Fwww.baidu.com%3Fname%3D%E7%9F%A5"
```