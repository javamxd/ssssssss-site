---
subSidebar: false
---
# 数学函数

## round
- 入参：`number`:`Number`  目标值
- 入参：`len`:`int`  要保留的小数位数 可省略，默认0
- 返回值：`Number`
- 函数说明：四舍五入保留N位小数
```js
return round(123.456d,2);  //123.46
```

## floor
- 入参：`number`:`Number`  目标值
- 返回值：`Number`
- 函数说明：向下取整
```js
return floor(123.456d);  // 123;
```

## ceil
- 入参：`number`:`Number`  目标值
- 返回值：`Number`
- 函数说明：向上取整
```js
return ceil(123.456d);  // 124;
```

## percent
- 入参：`number`:`Number`  目标值
- 入参：`len`:`int`  要保留的小数   可省略，默认0
- 返回值：`String`
- 函数说明：将数值转为百分比
```js
return percent(0.1289999999,2);  // "12.90%"
```
