# 1.二进制和八进制的表示方法
ES6提供了二进制和八进制数值的新的方法，分别用前缀0b（或者0B）和0o（或者00）表示。
# 2.Number.isFinite(),Number.isNaN()
ES6在Number对象上，新提供了Number.isFinite()和Number.isNaN()两个方法。
Number.isFinite()用来检查一个数值是否为有限的（finite），即不是Infinity。
# 3.Number.parseInt(),Number.parseFloat()
ES6将全局方法parseInt()和parseFloat()，一直到Number对象上面，行为保持不变。
```javascript
// ES5的写法
parseInt('12.34') // 12
parseFloat('123.45#') // 123.45

// ES6的写法
Number.parseInt('12.34') // 12
Number.parseFloat('123.45#') // 123.45
```
这样的做法的目的，是逐步减少全局性方法，使得语言逐步模块化。
# 4.Number.isInteger()
Number.isInteger()用来判断一个数值是否为整数。


。
。
。
# 7.Math对象的扩展
ES6在Math对象上新增了17个与数学相关的方法。所有的这些方法都是静态方法，只能在Math对象上调用。
## 7.1 Math.trunc()
Math.trunc方法用于去除一个数的小树部分，返回整数部分。
```javascript
Math.trunc(4.1) // 4
Math.trunc(4.9) // 4
Math.trunc(-4.1) // -4
Math.trunc(-4.9) // -4
Math.trunc(-0.1234) // -0
```
对于非数值，Math.trunc内部使用Number方法将其先转数值。
对于空值和无法截取整数的值。返回NaN。
## 7.2 Math.sign()
Math.sign方法用来判断一个数到底是正数，负数，还是零。对于非数值，会将其转换为数值。
它会返回五种值。
参数为正数，返回+1；
。。为负数，返回-1；
。。为0，     返回0；
。。为-0，   返回-0；
其他值，      返回NaN；
## 7.3 Math.cbrt()
Math.cbrt()方法用于计算一个数的立方根。
## 7.4 Math.clz32()
方法将参数转化为32位无符号正数的形式，然后返回这个32位值里面有多少个前导0；
## 7.5 Math.imul()
方法返回两个数以32位带符号整数形式相乘的结果，返回的也是一个32位带符号的整数。
```javascript
Math.imul(2, 4)   // 8
Math.imul(-1, 8)  // -8
Math.imul(-2, -2) // 4
```
## 7.6 Math.fround()
方法返回一个数的32位单精度浮点数形式。
## 7.7 Math.hypot()
方法返回所有参数的平方和的平方根。
```javascript
Math.hypot(3, 4);        // 5
Math.hypot(3, 4, 5);     // 7.0710678118654755
Math.hypot();            // 0
Math.hypot(NaN);         // NaN
Math.hypot(3, 4, 'foo'); // NaN
Math.hypot(3, 4, '5');   // 7.0710678118654755
Math.hypot(-3);          // 3
```
## 7.8 对数方法
ES6新增了4个对数相关方法。
### (1)Math.expm1()
Math.expm1(x)返回e的x次方-1，即Math.exp(x)-1。
### (2)Math.log1p()
方法返回1+x的自然对数，即Math.log(x+1)。如果x小于-1，返回NaN。
### (3)Math.log10()
返回以10为底的x的对数。如果x小于0，则返回NaN。
### (4)Math.log2()
返回以2为底的x的对数。如果x小于0，则返回NaN。
## 7.9 双曲函数方法
ES6新增了6个双曲函数方法。
Math.sinh(x) 返回x的双曲正弦
Math.cosh(x) 返回x的双曲余弦
Math.tanh(x) 返回x的双曲正切
Math.asinh(x) 返回x的反双曲正弦
Math.acosh(x) 返回x的反双曲余弦
Math.atanh(x) 返回x的反双曲正切
# 8.指数运算符
ES2016新增一个指数运算符（**）。
注意：这个运算符的一个特点是右结合，而不是常见的左结合。多个指数运算符连用时，是从最右边开始计算的。
```javascript
// 相当于 2 ** (3 ** 2)
2 ** 3 ** 2
// 512
```
# 9. BigInt数据类型
## 9.1 简介
JavaScript所有数字都保存成64位浮点数，这给数值的表示带来了两大限制。一是数值的精度只能到53个二进制位（相当于16个十进制位），大于这个范围的整数，




























