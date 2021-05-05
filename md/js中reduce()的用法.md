# 一.定义和用法
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
# 二.实例
先提供一个原始数组：
`var arr = [3,9,4,3,6,0,9];`
实现一下需求的方式有很多，其中就包含使用reduce()的求解方式，也算是实现起来比较简洁的一种吧。
## 1.求数组想之和
```javascript
var sum = arr.reduce(function(total,currentValue){
  return total+currentValue;
},0)
```
由于传入了初始值0，所以开始时total的值为0，currentValue的值为数组第一项3，相加之后返回值为3作为下一轮回调的total值，然后再继续与下一个数组项相加，以此类推。
## 2.求数组项最大值
```javascript
var max = arr.reduce(function(total,currentValue){
  return Math.max(total,currentValue)
});
```
由于未传入初始值，所以开始时total的值为数组第一项3，currentValue的值为数组第二项9，取两值最大后继续进入下一轮回调。
## 3.数组去重
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


# 三. 其他相关方法
## 1.reduceRight()
该方法用法与reduce()其实是相同的，只是遍历的顺序相反，它是从数组的最后一项开始，向前遍历到第一项。
## 2.forEach()、map()、every()、some()和filter()
（未完）
**重点总结：**
**reduce()是数组的归并方法，与forEach()、map()、filter()等迭代方法一样都会对数组每一项进行遍历，但是reduce()可同时将前面数组项遍历产生的结果与当前遍历项进行运算，这一点是其他迭代方法无法企及的。**
**


# 四. 进阶用法
## 1.数组对象中的用法
<!-- 比如生成“老大、老二和老三” -->
```javascript
const objArr = [{name: '老大'}, {name: '老二'}, {name: '老三'}];
const res = objArr.reduce((pre, cur, index, arr) => {
  if (index === 0) {
    return cur.name;
  }
  else if (index === (arr.length - 1)) {
    return pre + '和' + cur.name;
  }
  else {
    return pre + '、' + cur.name;
  }
}, '');
```


## 2.求字符串中字母出现的次数（***）
```javascript
const str = 'sfhjasfjgfasjuwqrqadqeiqsajsdaiwqdaklldflas-cmxzmnha';
const res = str.split('').reduce((accumulator, cur) => {
  accumulator[cur] ? accumulator[cur]++ : accumulator[cur] = 1; 
  return accumulator;
}, {});
```
## 3.数组转数组
<!-- 按照规定转成数组 -->
```javascript
var arr1 = [2,3,4,5,6];      //每个值的平方
var new = arr1.reduce((accumulator,cur) => {
  return accumulator.push(cur*cur)
},[]);
```
# 五.高级用法
## 1.多维的叠加执行操作
<!-- 各科成绩占比重不一样，求结果 -->
```javascript
var result = [
  { subject: 'math', score: 88 },
  { subject: 'chinese', score: 95 },
  { subject: 'english', score: 80 }
];
var dis = {
    math: 0.5,
    chinese: 0.3,
    english: 0.2
};
var res = result.reduce((accumulator, cur) => dis[cur.subject] * cur.score + accumulator, 0);
```
<!-- 加大难度，商品对应不同国家汇率不同，求总价格-->
```javascript
        var result = [{
                subject: 'math',
                score: 88
            },
            {
                subject: 'chinese',
                score: 95
            },
            {
                subject: 'english',
                score: 80
            }
        ];
        var dis = {
            math: 0.5,
            chinese: 0.3,
            english: 0.2
        };
        var res = result.reduce((accumulator, cur) => dis[cur.subject] * cur.score + accumulator, 0);
        console.log(res)

        //加大难度，各国汇率不同，就总价
        var prices = [{
            price: 23
        }, {
            price: 45
        }, {
            price: 56
        }];
        var rates = {
            us: '6.5',
            eu: '7.5',
        };
        var initialState = {
            usTotal: 0,
            euTotal: 0
        };
        //1
        var res = prices.reduce((accumulator, cur1) => Object.keys(rates).reduce((prev2, cur2) => {
            console.log(accumulator, cur1, prev2, cur2);
            accumulator[`${cur2}Total`] += cur1.price * rates[cur2];
            return accumulator;
        }, {}), initialState);
        //2
        var manageReducers = function () {
            return function (state, item) {
                return Object.keys(rates).reduce((nextState, key) => {
                    state[`${key}Total`] += item.price * rates[key];
                    return state;
                }, {});
            }
        };
        var res1 = prices.reduce(manageReducers(), initialState);
        console.log(res)
```
## 2.扁平一个二（或者多）维数组
```javascript
        var arr = [[1,2,8],[3,[6],9],[5,7,4]];
        const res = function(arr){
            return arr.reduce((x,y) => x.concat(Array.isArray(y)?res(y):y),[])
        }
        console.log(res(arr))
```
## 3.对象数组去重
```javascript
const hash = {};
	chatlists = chatlists.reduce((obj,next:Object) => {
  	const hashId = '${next.topic}_${next.stream_id}';
    if(!hash[hashId]){
    	hash[`${next.topic}_${next.stream_id}`] = true;
      obj.push(next);
    }
    return obj;
  },[]);
```
## 4.compose函数
redux compose源码实现
```javascript
function compose(...funs){
	if(funs.length === 0){
  	return arg => arg;
  }
  if(funs.length === 1){
  	return funs[0];
  }
  return funs.reduce((a,b) => (...arg) => a(b(...arg)))
}
```
### commpose函数特点：

- 参数均为函数，返回值也是函数
- 第一个函数接受参数，其他函数接受的上一个函数的返回值
- 第一个函数的参数是多元的，其它函数是一元的
- 自右向左执行
#### 简单实现：
第一步：记录我们传入所有函数的个数
```javascript
var compose = function(...args){
	var len = args.length           //记录我们传入所有函数的个数
  retunr function f1(){
  	//
  }
}
```
第二步：利用游标记录该运行的函数
```javascript
var compose = function (...fns){
	var len = fns.length     //记录我们传入的所有函数的个数
  var index = len-1       //游标记录函数执行情况，也作为我们运行fns中的中函数的索引
  var reslut             //结果，每次函数执行完成后，向下传递
  return function f1(...arg1){
  	--index
    return f1.call(null,reslut)
  }
}
```
第三步：完成代码
```javascript
var compose = function(...fns){
	var len = fns.length         //记录我们传入所有函数的个数
  var index = len-1           //游标记录函数执行情况，也作为我们运行fns中的中函数的索引
  var reslut                  //结果，每次函数执行完成后，向下传递
  return function f1(...arg1){
  	reslut = fns[index].apply(this,arg1)
    if(index <= 0){
    	index = len-1    
      return reslut
    }else{
    	--index
      return f1.call(null,reslut)
    }
  }
}
```
















