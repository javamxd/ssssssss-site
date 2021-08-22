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