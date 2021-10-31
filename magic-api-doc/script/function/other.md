---
subSidebar: false
---
# 其它函数

## print
- 入参：`target`：`Object` 要打印的对象
- 函数说明：打印
```js
print('abc'); // 等同于 System.out.print("abc");
```

## println
- 入参：`target`：`Object` 要打印的对象
- 函数说明：打印并换行
```js
println('abc'); // 等同于 System.out.println("abc");
```

## printf
- 入参：`format`：`String` 要打印的对象
- 入参：`target`： `Object` 参数值，可以写多个
- 函数说明：按照格式打印并换行
```js
printf('%s:%s', 'a','b'); // 等同于 System.out.printf("%s:%S", "a", "b");
```

## not_null
- 入参：`target` : `Object` 判断的模板
- 返回值： `boolean`
- 函数说明：判断值不是`null`
```js
return not_null(target); // 等同于 target != null
```

## is_null
- 入参：`target` : `Object` 判断的模板
- 返回值： `boolean`
- 函数说明：判断值是`null`
```js
return is_null(target); // 等同于 target == null
```

## ifnull
- 入参：`target`:`Object`  判断的目标
- 入参：`trueValue`:`Object`   为空时的值
- 返回值：`Object`
- 函数说明：对空值进行判断，返回特定值
```js
return ifnull(null,1) // 1
// return ifnull(0,1) // 0
```
