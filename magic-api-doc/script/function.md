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

### 聚合函数

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

## 其它函数

### ifnull
- 入参：`target`:`Object`  判断的目标
- 入参：`trueValue`:`Object`   为空时的值
- 入参：`falseValue`:`Object`  不为空时的值
- 返回值：`Object`
- 函数说明：对空值进行判断，返回特定值
```js
return ifnull(null,1) // 1
// return ifnull(0,1) // 0
```

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