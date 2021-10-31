---
subSidebar: false
---
# 函数

[[toc]]

## 自定义函数

```java
import org.ssssssss.script.annotation.Comment;
/**
 * 自定义函数
 */
@Component  //注入到Spring容器中
public class MyCustomFunction implements MagicFunction {
    
    // 脚本中直接使用 now();
    @Function
    @Comment("取当前时间")
    public static Date now() {
        return new Date();
    }
    // 脚本中使用 date_format(now())
    @Function
    @Comment("日期格式化")
    public static String date_format(@Comment("目标日期") Date target) {
        return target == null ? null : DateExtension.format(target, "yyyy-MM-dd HH:mm:ss");
    }

    // 脚本中使用 date_format(now(),'yyyy-MM-dd')
    @Function
    @Comment("日期格式化")
    public static String date_format(@Comment("目标日期") Date target, @Comment("格式") String pattern) {
        return target == null ? null : DateExtension.format(target, pattern);
    }

    // 脚本中直接使用ifnull() 调用
	@Function
    @Comment("判断值是否为空")
    public static Object ifnull(@Comment("目标值") Object target, @Comment("为空的值") Object trueValue, @Comment("不为空的值") Object falseValue) {
        return target == null ? trueValue : falseValue;
    }

}
```

## 聚合函数

### count
- 入参：`target`:`Object`
- 返回值：`int`
- 函数说明：计算集合大小
```js
var list = [1,2,3,4,5]
return count(list);  // 5
```

### sum
- 入参：`target`:`Object`
- 返回值：`Number`
- 函数说明：对集合进行求和
```js
var list = [1,2,3,4,5]
return sum(list);  // 15
```

### max
- 入参：`target`:`Object`
- 返回值：`Object`
- 函数说明：求集合最大值
```js
var list = [1,2,3,4,5]
return max(list);  // 5
```

### min
- 入参：`target`:`Object`
- 返回值：`Object`
- 函数说明：求集合最小值
```js
var list = [1,2,3,4,5]
return min(list);  // 5
```

### avg
- 入参：`target`:`Object`
- 返回值：`Object`
- 函数说明：求集合平均值
```js
var list = [1,2,3,4,5]
return min(list);  // 3
```

### group_concat
- 入参：`target`:`Object`
- 入参：`separator`:`String` 分隔符，可省略
- 返回值：`Object`
- 函数说明：将集合拼接起来
```js
var list = [1,2,3,4,5]
return group_concat(list);  // "1,2,3,4,5"
// return group_concat(list,'|');  // "1|2|3|4|5"
```

## 日期函数

### date_format
- 入参：`target`:`Date`    日期
- 入参：`pattern`:`String` 格式
- 返回值：`Number`
- 函数说明：日期格式化
```js
return date_format(new Date());  // 2020-01-01 20:30:30
// return date_format(new Date(),'yyyy-MM-dd');  // 2020-01-01
```

### now
- 返回值：`Date`
- 函数说明：返回当前日期
```js
return now(); // 等同于 new Date();
```

### current_timestamp_millis
- 返回值：`long`
- 函数说明： 取当前时间戳(毫秒)
```js
return current_timestamp_millis(); // 等同于 System.currentTimeMillis();
```

### current_timestamp
- 返回值：`long`
- 函数说明： 取当前时间戳(秒)
```js
return current_timestamp(); // 等同于 current_timestamp_millis() / 1000;
```
## 字符串函数

### uuid
- 返回值: `String` `32`位无`-`的`UUID`
```js
return uuid(); // 等同于 UUID.randomUUID().toString().replace("-", "");
```
### is_blank
- 入参：`target`:`String`  判断的目标
- 返回值： `boolean`
- 函数说明：判断字符串是否为空
```js
return is_blank(''); // true 等同于 StringUtils.isBlank 一致
```

### not_blank
- 入参：`target`:`String`  判断的目标
- 返回值： `boolean`
- 函数说明：判断字符串是否不为空
```js
return not_blank(''); // false 等同于 !is_blank('')
```
## 数组函数

### new_int_array
- 入参：`size`：`int` 数组长度
- 函数说明，创建`int`类型的数组
```js
return new_int_array(1); // [0]
```

### new_long_array
- 入参：`size`：`int` 数组长度
- 函数说明，创建`long`类型的数组
```js
return new_long_array(1); // [0]
```

### new_double_array
- 入参：`size`：`int` 数组长度
- 函数说明，创建`double`类型的数组
```js
return new_double_array(1); // [0.0]
```

### new_float_array
- 入参：`size`：`int` 数组长度
- 函数说明，创建`float`类型的数组
```js
return new_float_array(1); // [0.0]
```

### new_short_array
- 入参：`size`：`int` 数组长度
- 函数说明，创建`short`类型的数组
```js
return new_short_array(1); // [0]
```

### new_byte_array
- 入参：`size`：`int` 数组长度
- 函数说明，创建`byte`类型的数组
```js
return new_byte_array(1); // [0]
```

### new_boolean_array
- 入参：`size`：`int` 数组长度
- 函数说明，创建`boolean`类型的数组
```js
return new_boolean_array(1); // [0]
```

### new_char_array
- 入参：`size`：`int` 数组长度
- 函数说明，创建`char`类型的数组
```js
return new_char_array(1); // [0]
```

### new_array
- 入参：`Class`：类型
- 入参：`size`：`int` 数组长度
- 函数说明，创建`Object`类型的数组
```js
return new_array(1); // [null]  // Object 类型的数组
return new_array(String.class, 1); // [null] String类型的数组
```

## 数学函数

### round
- 入参：`number`:`Number`  目标值
- 入参：`len`:`int`  要保留的小数位数 可省略，默认0
- 返回值：`Number`
- 函数说明：四舍五入保留N位小数
```js
return round(123.456d,2);  //123.46
```

### floor
- 入参：`number`:`Number`  目标值
- 返回值：`Number`
- 函数说明：向下取整
```js
return floor(123.456d);  // 123;
```

### ceil
- 入参：`number`:`Number`  目标值
- 返回值：`Number`
- 函数说明：向上取整
```js
return ceil(123.456d);  // 124;
```

### percent
- 入参：`number`:`Number`  目标值
- 入参：`len`:`int`  要保留的小数   可省略，默认0
- 返回值：`String`
- 函数说明：将数值转为百分比
```js
return percent(0.1289999999,2);  // "12.90%"
```


## 其它函数

### print
- 入参：`target`：`Object` 要打印的对象
- 函数说明：打印
```js
print('abc'); // 等同于 System.out.print("abc");
```

### println
- 入参：`target`：`Object` 要打印的对象
- 函数说明：打印并换行
```js
println('abc'); // 等同于 System.out.println("abc");
```

### printf
- 入参：`format`：`String` 要打印的对象
- 入参：`target`： `Object` 参数值，可以写多个
- 函数说明：按照格式打印并换行
```js
printf('%s:%s', 'a','b'); // 等同于 System.out.printf("%s:%S", "a", "b");
```

### not_null
- 入参：`target` : `Object` 判断的模板
- 返回值： `boolean`
- 函数说明：判断值不是`null`
```js
return not_null(target); // 等同于 target != null
```

### is_null
- 入参：`target` : `Object` 判断的模板
- 返回值： `boolean`
- 函数说明：判断值是`null`
```js
return is_null(target); // 等同于 target == null
```

### ifnull
- 入参：`target`:`Object`  判断的目标
- 入参：`trueValue`:`Object`   为空时的值
- 返回值：`Object`
- 函数说明：对空值进行判断，返回特定值
```js
return ifnull(null,1) // 1
// return ifnull(0,1) // 0
```
