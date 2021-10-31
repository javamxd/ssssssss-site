# 增删改查


## SQL参数

### #{} 注入参数

作用和`mybatis`一致，都是将`#{}`区域替换为占位符`?`

```groovy
var id = 123;
return db.select("""
    select * from sys_user where id = #{id}
""");
```
运行时生成的SQL为：`select * from sys_user where id = ?`

参数`id`值会被注入为`123`

### ${} 拼接参数

作用和`mybatis`一致，都是将`${}`区域替换为对应的字符串

```groovy
var id = 123;
return db.select("""
    select * from sys_user where id = #{id}
""");
```
运行时生成的SQL为：`select * from sys_user where id = 123`

## 动态SQL参数

通过`?{condition,expression}`来实现动态拼接`SQL`，如果条件成立则拼接后部分内容SQL中，与mybatis中的if标签基本一致
```groovy
return db.select("select * from sys_user ?{id,where id = #{id}}");
// 当id有值时,生成SQL：select * from sys_user where id = ?`，相当于mybatis中的<if test="id != nulla nd id != ''">
// 当id无值时,生成SQL：select * from sys_user
return db.select("select * from sys_user ?{id!=null&&id.length() > 3,where id = #{id}}");
// 当id!=null&&id.length() > 3判断为true时,生成SQL：`select * from sys_user where id = ?
// 当判断为false时,生成SQL：select * from sys_user
```
## 切换数据源

```groovy
// 从数据源key定义为slave的库中查询
return db.slave.select("""
    select * from sys_user
""")
```

## SQL缓存

```groovy
// 将查询结果缓存到名为user_cache的缓存中，有效期1小时
return db.cache("user_cache", 3600 * 1000).select("""
    select * from sys_user
""")
// 当执行以下语句时，将清空user_cache缓存
db.cache("user_cache").update(""" ...... """)
db.cache("user_cache").insert(""" ...... """)
```

## 使用事务

### 自动事务
```js
var val = db.transaction(()=>{
    var v1 = db.update('...');
    var v2 = db.update('....');
    return v2;
});
return val;
```
### 手动事务
```js
var tx = db.transaction();  //开启事务
try{
    var value = db.update('...');
    tx.commit();    // 提交事务
    return value;
}catch(e){
    tx.rollback();  // 回滚事务
}
```

## 单表API

操作入口：`db.table('table_name')`

### logic <Badge text="1.3.4+" type="error"/>
- 作用:设置本查询是带有逻辑删除的,在执行`delete`方法时，会转换为`update`语句，在执行`select`相关方法时，会拼接`logic_field <> logic_value`
### withBlank <Badge text="1.3.9+" type="error"/>
- 作用：设置后续插入或修改时，不过滤空值。
### column
- 入参：`column`: `String` 列名
- 作用：设置要查询列的,`select`语句中有效

### column
- 入参：`column`: `String` 列名
- 入参： `value` : `Object` 值
- 作用：设置要操作的列的值,非`select`语句中有效

### primary
- 入参：`primary`: `String` 主键
- 入参：`defaultValue`: `Object` 插入时使用的默认值，可省略
- 作用：设置主键列，在`update`中语句有效，或`save`方法判断标准

### insert
- 入参: `data` : `Map` `insert`的列和值，可省略(通过`column`设置)
```js
// insert into sys_user(user_name,role) values('李富贵','admin')
return db.table('sys_user').insert({ user_name : '李富贵', role : 'admin'})
```
### update
- 入参: `data` : `Map` `insert`的列和值，可省略(通过`column`设置)
```javascript
// update sys_user set user_name = '王二狗' where id = 1
return db.table('sys_user').primary('id').update({ id: 1, user_name : '王二狗'})
```
### save
- 入参: `data` : `Map` `insert`或`update`的列和值，可省略(通过`column`设置)
- 入参： `beforeQuery` ： `boolean` 是否根据id查询有没有数据，可省略(默认`false`)
```javascript
// insert into sys_user(id,user_name) values('xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx','王二狗');
return db.table('sys_user').primary('id', uuid()).save({user_name: '王二狗'});
// insert into sys_user(user_name) values('王二狗');
return db.table('sys_user').primary('id').save({user_name: '王二狗'});
// update sys_user set user_name = '王二狗' where id = 1
return db.table('sys_user').primary('id').save({id: 1,user_name: '王二狗'});
```

### select
查询list（与db.select 作用相同）
```js
// select * from sys_user
return db.table('sys_user').select()
```

### page
分页查询（与db.page 作用相同）
```js
// select * from sys_user
return db.table('sys_user').page()
```

### where

设置查询条件

- eq --> `==`
- ne --> `<>`
- lt --> `<`
- gt --> `>`
- lte --> `<=`
- gte --> `>=`
- in --> `in`
- notIn --> `not in`
- like --> `like`
- notLike --> `not like`

```js
// select * from sys_user where user_name like '%李富贵%' and role = 'admin'
return db.table('sys_user')
    .where()
    .like('user_name','%李富贵%')
    .eq('role','admin')
    .select()
```

#### 其它的自己摸索吧，API抄的mybatis-plus，文档写不动了

## Mybatis语法支持<Badge text="1.6.0+" type="error"/>

参考: https://mybatis.org/mybatis-3/zh/dynamic-sql.html

### 关键字

​	目前支持的关键字如下

| 关键字      |
| ----------- |
| `<if>`      |
| `<where>`   |
| `<foreach>` |
| `<trim>`    |
| `<set>`     |



### if

示例:

```js
var sql = """
select * from test_data
	where 1 = 1
	<if test="id != null">
        and id = #{id}
    </if>
"""
return db.select(sql)
```

​	这条语句提供了可选的查找id功能。如果不传入 “id”，将会返回所有数据，否则返回id匹配的数据。

### where

```js
var sql = """
select * from test_data
<where>
    <if test="id != null">
        and id = #{id}
    </if>
</where>
"""
return db.select(sql)
```

*where* 元素只会在子元素返回任何内容的情况下才插入 “WHERE” 子句。而且，若子句的开头为 “AND” 或 “OR”，*where* 元素也会将它们去除。

如果 *where* 元素与你期望的不太一样，你也可以通过自定义 trim 元素来定制 *where* 元素的功能。比如，和 *where* 元素等价的自定义 trim 元素为：

```js
<trim prefix="WHERE" prefixOverrides="AND |OR ">
  ...
</trim>
```

*prefixOverrides* 属性会忽略通过管道符分隔的文本序列（注意此例中的空格是必要的）。上述例子会移除所有 *prefixOverrides* 属性中指定的内容，并且插入 *prefix* 属性中指定的内容。

### set、trim

用于动态更新语句的类似解决方案叫做 *set*。*set* 元素可以用于动态包含需要更新的列，忽略其它不更新的列。比如：

```js
var sql = """
update test_data
    <set>
    <if test="name != null">
    name = #{name}
    </if>
	<if test="content != null">
    content = #{content}
    </if>
    </set>
    where `id` = #{id}
"""
return db.update(sql)
```

这个例子中，*set* 元素会动态地在行首插入 SET 关键字，并会删掉额外的逗号（这些逗号是在使用条件语句给列赋值时引入的）。

来看看与 *set* 元素等价的自定义 *trim* 元素吧：

```xml
<trim prefix="SET" suffixOverrides=",">
  ...
</trim>
```

注意，我们覆盖了后缀值设置，并且自定义了前缀值。

### foreach

动态 SQL 的另一个常见使用场景是对集合进行遍历（尤其是在构建 IN 条件语句的时候）。比如：

```js
var sql = """
select * from test_data
where id in
<foreach item='item' index='index' collection='body.ids'
      open="(" separator="," close=")">
    #{item}
</foreach>
"""
return db.select(sql)
```

*foreach* 元素的功能非常强大，它允许你指定一个集合，声明可以在元素体内使用的集合项（item）和索引（index）变量。它也允许你指定开头与结尾的字符串以及集合项迭代之间的分隔符。
