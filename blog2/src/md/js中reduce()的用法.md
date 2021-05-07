---
title: js中reduce()的用法
date: 2021-03-09 10:00:00
updated: 2021-03-09 20:01:23
tags: js
categories: js
keywords: reduce,js
description: js中reduce()的用法
top_img: './img/1.jpg'
comments:
cover:
toc:
toc_number:
copyright:
copyright_author: lh
copyright_author_href: 'lh521.top'
copyright_url: 'lh521.top'
copyright_info: 6
mathjax:
katex:
aplayer:
highlight_shrink:
aside:
---
# 定义和用法
reduce()方法接受一个函数作为累加器，数组中的每个值（从左到右）开始缩减，最终计算为一个值。
reduce()可以作为一个高阶函数，用于函数的compose。
**注意**：reduce()对于空数组是不会执行回调函数的。
## 语法
`arr.reduce(function(total, currentValue, currentIndex, arr){}, initialValue);`
`
`
## 参数
| **参数** | **描述** |  |
| --- | --- | --- |
| 

_function(total,currentValue, index,arr)_ | 必需。用于执行每个数组元素的函数。
函数参数： |  |
|  | 
|  | **参数** | **描述** |
|  | total | 必需。初始值，或者计算结束后的返回值 |
|  | currentValue | 必需。当前正在处理的数组元素 |
|  | currentIndex | 可选。当前元素索引 |
|  | arr | 可选。当前元素所属的数组对象 |
| initialValue | 可选。传递给函数的初始值 |  |

看上去挺TM复杂的，其实常用的参数只有两个：total和currentValue。
# 实例
先提供一个原始数组：
`var arr = [3,9,4,3,6,0,9];`
实现一下需求的方式有很多，其中就包含使用reduce()的求解方式，也算是实现起来比较简洁的一种吧。
## 求数组想之和
```javascript
var sum = arr.reduce(function(total,currentValue){
  return total+currentValue;
},0)
```
由于传入了初始值0，所以开始时total的值为0，currentValue的值为数组第一项3，相加之后返回值为3作为下一轮回调的total值，然后再继续与下一个数组项相加，以此类推。
## 求数组项最大值
```javascript
var max = arr.reduce(function(total,currentValue){
  return Math.max(total,currentValue)
});
```
由于未传入初始值，所以开始时total的值为数组第一项3，currentValue的值为数组第二项9，取两值最大后继续进入下一轮回调。
## 数组去重
```javascript
var newArr = arr.reduce(function (total,currentValue){
  total,indexOf(currentValue) === -1 && total.push(currentValue);
  return total;
},[]);
```
实现的基本原理如下：
1.初始化一个空数组
2.将需要去重处理的数组中的第一项在初始化数组中查找，如果找不到（空数组中肯定找不到），就将该项添加到初始化数组中
2.将需要去重处理的数组中的第二项在初始化数组中查找，如果找不到，就将该项继续添加到初始化数组中
4.。。。。
5.将需要去重处理的数组中的第n项在初始化数组中查找，如果找不到，就将该项继续添加到初始化数组中
6.将这个初始化数组返回


# 其他相关方法
## reduceRight()
该方法用法与reduce()其实是相同的，只是遍历的顺序相反，它是从数组的最后一项开始，向前遍历到第一项。
## forEach()、map()、every()、some()和filter()
（未完）
**重点总结：**
**reduce()是数组的归并方法，与forEach()、map()、filter()等迭代方法一样都会对数组每一项进行遍历，但是reduce()可同时将前面数组项遍历产生的结果与当前遍历项进行运算，这一点是其他迭代方法无法企及的。**
**

