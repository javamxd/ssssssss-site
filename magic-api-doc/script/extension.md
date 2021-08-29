---
subSidebar: false
---
# 类型扩展

[[toc]]

## 扩展说明

### 目的
目的只有一个：为已有类型添加方法，如给`Object`类型添加`asInt`方法
### 使用
所有类型扩展使用都很简单，无需`import`直接使用
如`Object`类的扩展。
```js
var obj = '123';
return obj.asInt(); //调用Object的扩展方法asInt
```

## 自定义类型扩展

编写java代码如下：
```java
import org.ssssssss.script.annotation.Comment;
/**
 * String类型转换
 */
@Component  //注入到Spring容器中，之后会被自动注册
public class StringFunctionExtension implements ExtensionMethod{
    @Override
	public Class<?> support() {
		return String.class;    //为String类型扩展方法
	}
    /**
	*	方法必须是public static 修饰,参数至少有一个,且第一个参数必须为support方法返回的类型
	*	以将字符串转为int为例,该方法编写如下,最终调用时使用strVar.toInt()调用
	*	该方法第一个参数会自动被传入,所以调用时无需传入
	*/
    @Comment("将字符串转为Integer(方法名的提示)")
	public static Integer toInt(String str){    // 第一个参数无需使用@Comment注解
		return NumberUtils.toInt(str);
	}


}
```
脚本中使用：
```js
var str = '123';
//以下两种方式都支持
return '1234'.toInt();
//return str.toInt();
```

### Object
`java.lang.Object`的扩展方法

### asInt
- 入参：`defaultValue`:`int`   选填，当转换失败时返回默认值，默认为`0`
- 返回值：`int`
- 函数说明：转对象为int类型
```js
var obj = '123';
return obj.asInt();
//return obj.asInt(1); //转换失败时，返回1 
```

### asDouble
- 入参：`defaultValue`:`double`   选填，当转换失败时返回默认值，默认为`0.0`
- 返回值：`double`
- 函数说明：转对象为`double`类型
```js
var obj = '123';
return obj.asDOuble();
//return obj.asDouble(1.0d); //转换失败时，返回1.0d 
```

### asDecimal
- 入参：`defaultValue`:`BigDecimal`   选填，当转换失败时返回默认值，默认为`null`
- 返回值：`BigDecimal`
- 函数说明：转对象为`BigDecimal`类型
```js
var obj = '123.456';
return obj.asDecimal();
//return obj.asDecimal(1.5m); //转换失败时，返回1.5m 
```

### asFloat
- 入参：`defaultValue`:`float`   选填，当转换失败时返回默认值，默认为`0.0f`
- 返回值：`float`
- 函数说明：转对象为`float`类型
```js
var obj = '123';
return obj.asFloat();
//return obj.asFloat(1.0f); //转换失败时，返回1.0f
```

### asLong
- 入参：`defaultValue`:`long`   选填，当转换失败时返回默认值，默认为`0L`
- 返回值：`long`
- 函数说明：转对象为`long`类型
```js
var obj = '123';
return obj.asLong();
//return obj.asLong(1L); //转换失败时，返回1L 
```

### asByte
- 入参：`defaultValue`:`byte`   选填，当转换失败时返回默认值，默认为`0b`
- 返回值：`byte`
- 函数说明：转对象为`byte`类型
```js
var obj = '123';
return obj.asByte();
//return obj.asByte(1b); //转换失败时，返回1b 
```

### asShort
- 入参：`defaultValue`:`short`   选填，当转换失败时返回默认值，默认为`0s`
- 返回值：`short`
- 函数说明：转对象为`short`类型
```js
var obj = '123';
return obj.asShort();
//return obj.asShort(1s); //转换失败时，返回1s
```

### asDate
- 入参：`formats`:`String`  可变参数，日期格式
- 返回值：`Date`
- 函数说明：转对象为`Date`类型
```js
var obj = '2020-01-01 08:00:00';
//如果obj是Number类型，且是10位数字则返回new Date(value * 1000);,如果是13位数字，则返回new Date(value);
return obj.asDate('yyyy-MM-dd HH:mm:ss','yyyy-MM-dd HH:mm');
```

### asString
- 入参：`defaultValue`:`String`   选填，当转换失败时返回默认值，默认为`null`
- 返回值：`String`
- 函数说明：转对象为`String`类型
```js
var obj = 123;
return obj.asString();
//return obj.asString("empty"); //转换失败时，返回"empty"
```

### is
- 入参：`type`:`String/Class`   判断是否该类型
- 返回值：`boolean`
- 函数说明：判断是否是指定类型
```js
import 'java.util.Date' as Date;
var str = 'hello,MagicAPI';
return str.is('string'); // true
return str.is('java.lang.String'); // true
return str.is('java.lang.Integer'); // false
return str.is(Date); // false
```

### isString
- 返回值：`boolean`
- 函数说明：判断是否是`String`类型
```js
var str = 'hello,MagicAPI';
return str.isString(); // true
```

### isInt
- 返回值：`boolean`
- 函数说明：判断是否是`int`类型
```js
var value = 123;
return value.isInt(); // true
```

### isLong
- 返回值：`boolean`
- 函数说明：判断是否是`long`类型
```js
var value = 123L;
return value.isLong(); // true
```

### isDouble
- 返回值：`boolean`
- 函数说明：判断是否是`double`类型
```js
var value = 123d;
return value.Double(); // true
```

### isFloat
- 返回值：`boolean`
- 函数说明：判断是否是`float`类型
```js
var value = 123f;
return value.isFloat(); // true
```

### isByte
- 返回值：`boolean`
- 函数说明：判断是否是`byte`类型
```js
var value = 123b;
return value.isByte(); // true
```

### isBoolean
- 返回值：`boolean`
- 函数说明：判断是否是`boolean`类型
```js
var value = false;
return value.isBoolean(); // true
```
### isShort
- 返回值：`boolean`
- 函数说明：判断是否是`short`类型
```js
var value = 123s;
return value.isShort(); // true
```

### isDecimal
- 返回值：`boolean`
- 函数说明：判断是否是`decimal`类型
```js
var value = 123m;
return value.isDecimal(); // true
```

### isDate
- 返回值：`boolean`
- 函数说明：判断是否是`Date`类型
```js
import 'java.util.Date' as Date;
var value = new Date();
return value.isDate(); // true
```

### isArray
- 返回值：`boolean`
- 函数说明：判断是否是数组
```js
var value = '123'.split('');
return value.isArray(); // true
```

### isList
- 返回值：`boolean`
- 函数说明：判断是否是List
```js
var value = [1,2,3];
return value.isList(); // true
```

### isMap
- 返回值：`boolean`
- 函数说明：判断是否是Map
```js
var value = {
    key : 'value'
};
return value.isMap(); // true
```

### isCollection
- 返回值：`boolean`
- 函数说明：判断是否是集合
```js
var value = [1,2,3];
return value.isCollection(); // true
```

## Nnumber扩展
`java.lang.Number`的扩展方法，用于数值类型的扩展

### round
- 入参：`number`:`int`  要保留的小数
- 返回值：`Number`
- 函数说明：四舍五入保留N位小数
```js
var value = 123.456d;
return value.round(2);  //123.46
```

### toFixed
- 入参：`number`:`int`  要保留的小数
- 返回值：`String`
- 函数说明：四舍五入保留N位小数(和JS一样，强制限制位数)
```js
var value = 123.456d;
return value.toFixed(10);  // "123.4560000000"
```

### floor
- 返回值：`Number`
- 函数说明：向下取整
```js
var value = 123.456d;
return value.floor();  // 123;
```

### ceil
- 返回值：`Number`
- 函数说明：向上取整
```js
var value = 123.456d;
return value.ceil();  // 124;
```

### asPercent
- 入参：`number`:`int`  要保留的小数
- 返回值：`String`
- 函数说明：将数值转为百分比
```js
var value = 0.1289999999;
return value.asPercent(2);  // "12.90%"
```
## 集合&数组扩展
为`Collection`,`Iterator`,`Enumeration`,`Object[]` 添加的扩展方法

### map
- 入参：`function`:`Function`  接收一个`Lambda`表达式
- 返回值：`Object`
- 函数说明：将集合进行循环转换
```js
var list = [1,2,3,4,5];
return list.map(e=>e+1);    //返回[2,3,4,5,6]
```
### filter
- 入参：`function`:`Function`  接收一个`Lambda`表达式
- 返回值：`Object`
- 函数说明：将集合进行过滤
```js
var list = [1,2,3,4,5];
return list.filter(e=>e>3);    //返回[4,5]
return list.filter((item,index)=>index>1);    //返回[3,4,5]
```
### each
- 入参：`function`:`Function`  接收一个`Lambda`表达式
- 返回值：`Object`
- 函数说明：循环处理
```js
var list = [{
    name : '小明'
},{
  name : '小花'
}];
return list.each(item=>item.put('age',18));    //循环添加age属性
```

### sort

- 入参：`function`:`Function`  接收一个`Lambda`表达式
- 返回值：`Object`
- 函数说明：对集合进行排序
```js
var list = [1,5,2,3,6];
return list.sort((a,b)=>a-b);
```

### reserve

- 返回值：`Object`
- 函数说明：对集合进行反转操作
```js
var list = [1,5,2,3,6];
return list.reserve();
```

### join(拼接)
- 入参：`separator` : `String` 分隔符
- 返回值：`String`
- 函数说明：对集合进行拼接操作
```js
var list = [1,5,2,3,6];
return list.join('-'); // 1-5-2-3-6
```

### shuffle
- 返回值：`Object`
- 函数说明：对集合进行打乱处理
```js
var list = [1,5,2,3,6];
return list.shuffle();
```

### max
- 返回值：`Object`
- 函数说明： 取出集合最大值，如果找不到返回null
```js
var list = [1,6,8,9,18,12];
return list.max();  // 18
```

### min
- 返回值：`Object`
- 函数说明： 取出集合最小值，如果找不到返回null
```js
var list = [6,1,8,9,18,12];
return list.min();  // 1
```
### sum
- 返回值：`Object`
- 函数说明： 累加求和，计算不出返回0.0
```js
var list = [1,2,3,4];
return list.sum();  // 10
```

### avg
- 返回值：`Object`
- 函数说明： 计算平均值，计算不出返回null
```js
var list = [1,2,3,4];
return list.avg();  // 2.5
```

### group
- 入参：`condition` : `Function` 分组条件 如:`item=>item.xxx` 根据xxx字段分组
- 入参：`mapping` : `Function` 结果映射(省略时不做映射返回List) 如:`list=>list.sum()` 分组求和
- 返回值：`Map<Object, List<Object>>`或`Map<Object, Object>`
- 函数说明： 分组
```js
// List<Map<String,Object>>
var result = [
    { xxx : 1, yyy : 2, value : 11},
    { xxx : 1, yyy : 2, value : 22},
    { xxx : 2, yyy : 2, value : 33}
];


return result.group(item=>item.xxx + '_' + item.yyy)
/*
Map<Object,List<Object>>
{
    "1_2": [
            {"yyy": 2, "xxx": 1, "value": 11},
            {"yyy": 2, "xxx": 1, "value": 22}
    ],
    "2_2": [{"yyy": 2, "xxx": 2, "value": 33 }]
}
*/

return result.group(item=>item.xxx + '_' + item.yyy,list=>{
    count : list.size(),
    sum : list.map(v=>v.value).sum(),
    avg : list.map(v=>v.value).avg()
})
/*
Map<Object,Object>
{
    "1_2": { "avg": 16.5, "count": 2, "sum": 33 },
    "2_2": { "avg": 33,   "count": 1, "sum": 33 }
}
*/


```

### join(关联)
- 入参：`target` : `Object` 分组条件 如:`item=>item.xxx` 根据xxx字段分组
- 入参：`condition` : `Function` 关联条件 如:`(left,right)=>left.xxx == right.xxx`
- 入参：`mapping` : `Function` 结果映射(省略时会将两个对象合并处理)如:`(left,right)=>{xxx : left.xxx, yyy : right.yyy}`
- 返回值：`List<Object>`
- 函数说明： 将两个集合管理起来
```js
var year2019 = [
    { "pt":2019, "item_code":"code_1", "sum_price":2234 },
    { "pt":2019, "item_code":"code_2", "sum_price":234 },
    { "pt":2019, "item_code":"code_3", "sum_price":12340 },
    { "pt":2019, "item_code":"code_4", "sum_price":2344 }
];
var year2018 = [
    { "pt":2018, "item_code":"code_1", "sum_price":1234.0 },
    { "pt":2018, "item_code":"code_4", "sum_price":1234.0 }
];
return year2019.join(year2018, (left,right)=>left.item_code == right.item_code,  (left,right)=>{
   '年份' : left.pt,
   '编号' : left.item_code,
   '今年' : left.sum_price,
   '去年' : right == null ? 'unknow' : right.sum_price,
   '环比去年增长' : right == null ? '-': (((left.sum_price - right.sum_price) / right.sum_price * 100) + "%")
});
/*
[
    {"年份": 2019, "今年": 2234, "去年": 1234, "环比去年增长": "81.03728%", "编号": "code_1"},
    {"年份": 2019, "今年": 234, "去年": "unknow", "环比去年增长": "-", "编号": "code_2"},
    {"年份": 2019, "今年": 12340,"去年": "unknow","环比去年增长": "-","编号": "code_3"},
    {"年份": 2019, "今年": 2344, "去年": 1234, "环比去年增长": "89.95138%", "编号": "code_4"}
]
*/
```

### asBean(转为Java对象)
- 入参：`target` : `Class<?>` 目标类型
- 返回值：`List<?>`
- 函数说明： 将`List<Object>` 转为目标`List`

```js
import 'org.ssssssss.script.functions.User' as User;
var userList = [{
    age : 18,
    weight : 121,
    money : 123456789L,
    name : '法外狂徒',
    roles : [{
        name : 'admin',
        permissions : ['1','2','3']
    },{
      name : 'normal',
      permissions : ['4','5','6']
    }]
}]
return userList.asBean(User.class);
```

### every
- 入参：`condition` : `Function` 判断条件 如:`value => value > 2`
- 返回值：`boolean`
- 函数说明：判断集合是否都符合条件

```js
var vals = [1,2,3,4,5,6,7];
return vals.every(e=>e > 0); // true
```


### some
- 入参：`condition` : `Function` 判断条件 如:`value => value > 2`
- 返回值：`boolean`
- 函数说明：判断集合是否有符合条件的

```js
var vals = [1,2,3,4,5,6,7];
return vals.some(e=>e == 0); // false
```

### reduce
- 入参：`function` : `Function` 计算函数 如:`(sum,val)=>sum + val`
- 返回值：`Object`
- 函数说明：循环集合通过给定的计算函数返回一个新值

```js
var vals = [1,2,3];
return vals.reduce((sum,val)=>sum + val); // 6
```

### skip
- 入参：`value` : `int` 跳过的数量，如:`2`
- 返回值：`Object`
- 函数说明：跳过指定个数截取集合

```js
var vals = [1,2,3,4];
return vals.skip(2); // [3,4]
```

### limit
- 入参：`value` : `int` 限制的数量，如:`2`
- 返回值：`Object`
- 函数说明：取指定个数的集合

```js
var vals = [1,2,3,4];
return vals.limit(3); // [1,2,3]
```
### findNotNull
- 返回值：`Object`
- 函数说明：找到第一个不为`null`的值

```js
var vals = [null,null,3,null];
return vals.findNotNull(); // 3
```
## Date扩展
`java.util.Date`的扩展方法
### format
- 入参：`pattern`:`String`  格式
- 返回值：`String`
- 函数说明：将日期格式化
```js
var date = new Date();
return date.format('yyyy-MM-dd');  // 2020-01-01
```

## Map扩展
为`java.util.Map` 添加的扩展方法

### asBean(转为Java对象)

```js
import 'org.ssssssss.script.functions.User' as User;
var user = {
    age : 18,
    weight : 121,
    money : 123456789L,
    name : '法外狂徒',
    roles : [{
        name : 'admin',
        permissions : ['1','2','3']
    },{
      name : 'normal',
      permissions : ['4','5','6']
    }]
}
return user.asBean(User.class);
```

### sort
- 入参：`comparator` ，比较器，可省略，如(k1,k2)=>k1.compareTo(k2);
- 返回值：`Map`
- 函数说明：对`Map`进行排序

```js
var map = {b : 2,a :1};
return map.sort(); // {a : 1,b : 2}
```

### each
- 入参：`function` ，循环函数
- 返回值：`Map`
- 函数说明：对`Map`进行循环

```js
var map = {b : 2,a :1};
return map.each((key,value,source)=>{
    System.out.println(key + "=" + value);
})
```

### asString
- 入参：`separator` ： `String` key与key之间的分隔符 如`&`
- 入参：`join` ： `String` key与value之间的分隔符 如`=`
- 返回值：`Map`
- 函数说明：将`Map`转为`String`

```js
var map = {b : 2,a :1};
return map.asString('&','=')    // b=2&a=1
```

### asString
- 入参：`separator` ： `String` key与key之间的分隔符 如`&`
- 入参：`mapping` ： `Function` 转换方法，如：(key,value)=>key + '=' + value || ''
- 返回值：`Map`
- 函数说明：将`Map`转为`String`

```js
var map = {b : 2,a :1};
return map.asString('&',(key,value)=>key + '=' + value || '')    // b=2&a=1
```

### asList
- 入参：`separator` ： `String` key与key之间的分隔符 如`&`
- 入参：`mapping` ： `Function` 映射函数，如:`(key,value,source)=>{'k' : key,'v' : value}`
- 返回值：`List`
- 函数说明：将`Map`转为`List`

```js
var map = {b : 2,a :1};
return map.asList((key,value,source)=>{'k' : key,'v' : value})  
/* 
  [
    {"k": "b","v": 2},
    {"k": "a","v": 1}
  ]
*/
```

### merge
- 入参：`key` ： `Object` 要合并的`key`值
- 入参：`value` ： `Object`要合并的`value`值
- 返回值：`Map`
- 函数说明：合并`Map`

```js
var map = {b : 2,a :1};
return map.merge('c',3)  //{b : 2,a :1,c : 3};
```

### merge
- 入参：`map` ： `Map`要合并的的另一个map
- 返回值：`Map`
- 函数说明：合并`Map`

```js
var map  = {b : 2,a :1};
var map1 = {c : 3,d :4};
return map.merge(map1)  //{b : 2,a :1,c : 3,d : 4};
```
## Class扩展

`java.lang.Class`的扩展方法

### newInstance
- 入参：`values`:`Object`  可变参数，构造函数的参数
- 返回值：`Date`
- 函数说明：将`Class`实例化
```js
import 'java.text.SimpleDateFormat' as SimpleDateFormat;
return SimpleDateFormat.newInstance('yyyy-MM-dd HH:mm:ss');
//其实可以简写成 new SimpleDateFormat('yyyy-MM-dd HH:mm:ss'); //这是一个语法糖 ^_^
```
## Pattern扩展

`java.util.regex.Pattern`的扩展方法

### test
- 入参：`source`:`String`  目标字符串
- 返回值：`boolean`
- 函数说明：校验文本是否符合正则
```js
var regx = /^\d+$/;
return regx.test('123456')  // true
```