# 入门必读

## 请求参数获取


### RequestParam

```
GET http://localhost:9999/xxx/xxx?name=abc&age=49
```

这样的`URL`参数`magic-api` 会自动将`name`和`age`映射为同名变量。

### 表单参数

```
POST http://localhost:9999/xxx/xxx
name=abc&age=49
```

这样的表单参数`magic-api` 也会自动将`name`和`age`映射为同名变量。

### Request Header参数获取

`magic-api` 会对所有`RequestHeader`统一封装为一个名为`header`的变量
如要获取 `token` 可以通过`header.token` 来获取

### Request Body参数获取

对于`RequestBody` `magic-api`会将整个请求体映射为`body`变量，如：

```json
{
  "name": "magic-api",
  "version": "9.9.9"
}
```

如要获取`name`属性 则可通过 `body.name` 来获取

### Path参数获取

主要是针对`URL`定义为`http://localhost:9999/user/{id}` 的类似接口

如要获取path路径上的id可通过`path.id` 或 `id`来获取。

对于请求时使用了`http://localhost:9999/user/1?id=2`的请求， `id`变量的值将是`RequestParam`中的值，此时可以通过`path.id` 来避免冲突。

### Cookie参数获取

`magic-api` 会对所有`Cookie`统一封装为一个名为`cookie`的对象。
如要获取 `JSESSIONID` 可以通过`cookie.JSESSIONID` 来获取。

### Session参数获取

`magic-api` 会将`HttpSession`封装为一个名为`session`的变量
要获取`session`中的值，可以通过`session.xxx`来获取

### 注意事项

> 如果脚本自定义变量和参数变量冲突，自定义变量优先。

## 增删改查


### SQL参数

#### #{} 注入参数

作用和`mybatis`一致，都是将`#{}`区域替换为占位符`?`

```groovy
var id = 123;
return db.select("""
    select * from sys_user where id = #{id}
""");
```

运行时生成的SQL为：`select * from sys_user where id = ?`。

参数`id`值会被注入为`123`。

此方法可以避免sql注入。

#### ${} 拼接参数

作用和`mybatis`一致，都是将`${}`区域替换为对应的字符串

```groovy
var id = 123;
return db.select("""
    select * from sys_user where id = #{id}
""");
```

运行时生成的SQL为：`select * from sys_user where id = 123`

### 动态SQL参数

通过`?{condition,expression}`来实现动态拼接`SQL`，如果条件成立则拼接后部分内容SQL中，与mybatis中的if标签基本一致

```groovy
return db.select("select * from sys_user ?{id,where id = #{id}}");
// 当id有值时,生成SQL：select * from sys_user where id = ?`，相当于mybatis中的<if test="id != nulla nd id != ''">
// 当id无值时,生成SQL：select * from sys_user
return db.select("select * from sys_user ?{id!=null&&id.length() > 3,where id = #{id}}");
// 当id!=null&&id.length() > 3判断为true时,生成SQL：`select * from sys_user where id = ?
// 当判断为false时,生成SQL：select * from sys_user
```

### 切换数据源

```groovy
// 从数据源key定义为slave的库中查询
return db.slave.select("""
    select * from sys_user
""")
```

### SQL缓存

```groovy
// 将查询结果缓存到名为user_cache的缓存中，有效期1小时
return db.cache("user_cache", 3600 * 1000).select("""
    select * from sys_user
""")
// 当执行以下语句时，将清空user_cache缓存
db.cache("user_cache").update(""" ...... """)
db.cache("user_cache").insert(""" ...... """)
```

### 使用事务

#### 自动事务

```js
var val = db.transaction(()=>{
    var v1 = db.update('...');
    var v2 = db.update('....');
    return v2;
});
return val;
```

#### 手动事务

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

### 单表API

操作入口：`db.table('table_name')`

#### logic <Badge text="1.3.4+" type="error"/>

- 作用:设置本查询是带有逻辑删除的,在执行`delete`方法时，会转换为`update`语句，在执行`select`相关方法时，会拼接`logic_field <> logic_value`

#### withBlank <Badge text="1.3.9+" type="error"/>

- 作用：设置后续插入或修改时，不过滤空值。

#### column

- 入参：`column`: `String` 列名
- 作用：设置要查询列的,`select`语句中有效

#### column

- 入参：`column`: `String` 列名
- 入参： `value` : `Object` 值
- 作用：设置要操作的列的值,非`select`语句中有效

#### primary

- 入参：`primary`: `String` 主键
- 入参：`defaultValue`: `Object` 插入时使用的默认值，可省略
- 作用：设置主键列，在`update`中语句有效，或`save`方法判断标准

#### insert

- 入参: `data` : `Map` `insert`的列和值，可省略(通过`column`设置)

```js
// insert into sys_user(user_name,role) values('李富贵','admin')
return db.table('sys_user').insert({ user_name : '李富贵', role : 'admin'})
```

#### update

- 入参: `data` : `Map` `insert`的列和值，可省略(通过`column`设置)

```javascript
// update sys_user set user_name = '王二狗' where id = 1
return db.table('sys_user').primary('id').update({ id: 1, user_name : '王二狗'})
```

#### save

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

#### select

查询list（与db.select 作用相同）

```js
// select * from sys_user
return db.table('sys_user').select()
```

#### page

分页查询（与db.page 作用相同）

```js
// select * from sys_user
return db.table('sys_user').page()
```

#### where

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

##### 其它的自己摸索吧，API抄的mybatis-plus，文档写不动了

### Mybatis语法支持<Badge text="1.6.0+" type="error"/>

参考: https://mybatis.org/mybatis-3/zh/dynamic-sql.html

#### 关键字

​	目前支持的关键字如下

| 关键字      |
| ----------- |
| `<if>`      |
| `<where>`   |
| `<foreach>` |
| `<trim>`    |
| `<set>`     |



#### if

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

#### where

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

#### set、trim

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

#### foreach

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

## 分页查询


### 自动分页

```groovy
// 自动从请求参数中获取页码、页大小
return db.page("""
    select * from sys_user
""")
```

### 手动分页

```groovy
// 自动从请求参数中获取页码、页大小
return db.page("""
    select * from sys_user
""", 10, 20) //跳过前20条查10条
```

### 分页参数配置

```yml
magic-api:
  page-config:
    size: size # 页大小的请求参数名称
    page: page # 页码的请求参数名称
    default-page: 1 # 未传页码时的默认首页
    default-size: 10 # 未传页大小时的默认页大小
```

### 自定义分页参数获取

对于分页参数不在请求参数中的使用此方法配置，使用此方法配置后，分页参数配置将失效。

```java
/**
 * 分页对象默认提取接口
 */
@Component
public class MyPageProvider implements PageProvider {

    /**
    *   此方法需要根据实际情况替换
    */
    @Override
    public Page getPage(RuntimeContext context) {
        long page = 1;
        long pageSize = 100;
        // 计算limit以及offset
        return new Page(pageSize, (page - 1) * pageSize);

    }
}
```

### 自定义分页JSON结果

参考 [自定义JSON结果](./json.html#自定义结构配置)