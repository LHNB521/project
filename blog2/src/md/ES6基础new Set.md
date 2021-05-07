---
title: ES6 基础new Set
date: 2021-01-14 16:17:26
tags: js
---
# Es6 基础之 new set
Set对象存储的值总是唯一的
Set对象方法

| 方法 | 描述 |
| --- | --- |
| add | 添加某个值，返回Set对象本身 |
| clear | 删除所有的键/值对，没有返回结果 |
| delete | 删除某个键，返回true、如果删除失败，返回false |
| forEach | 对每个元素执行指定操作 |
| has | 返回一个布尔值，表示某个键是否在当前Set对象之中 |


## Set对象作用
- 数组去重
```javascript
var arr = [1,2,3,4,5];
[...new Set(arr)];    // [1,2,3,4,5]
Array.from(new Set(arr)); //[1,2,3,4,5]
[...new Set('ababbc')].join('');   //"abc"字符串去重
new Set('ice doughnut'); //Set(11) {"i", "c", "e", " ", "d", …}
```
- 并集
```javascript
var a=new Set([1,2,3]);
var b=new Set([4,3,2]);
var union=new Set([...a,...b]); //{1,2,3,4}
```
- 交集
```javascript
var a = new Set([1,2,3]);
var b = new Set([4,3,2]);
var intersect = new Set([...a].filter(x => b.has(x))); //{2,3}
```
- 差集
```javascript
var a = new Set([1,2,3]);
var b = new Set([4,3,2]);
var difference  = new Set([...a].filter(x => !b.has(x)));// {1}
```