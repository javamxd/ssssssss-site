# 单表CURD接口

操作入口：`db.table('table_name')`

## logic <Badge text="1.3.4+" type="error"/>

- 作用:设置本查询是带有逻辑删除的,在执行`delete`方法时，会转换为`update`语句，在执行`select`相关方法时，会拼接`logic_field <> logic_value`

## withBlank <Badge text="1.3.9+" type="error"/>

- 作用：设置后续插入或修改时，不过滤空值。

## column

- 入参：`column`: `String` 列名
- 作用：设置要查询列的,`select`语句中有效
## column

- 入参：`column`: `String` 列名
- 入参： `value` : `Object` 值
- 作用：设置要操作的列的值,非`select`语句中有效

## primary

- 入参：`primary`: `String` 主键
- 入参：`defaultValue`: `Object` 插入时使用的默认值，可省略
- 作用：设置主键列，在`update`中语句有效，或`save`方法判断标准

## insert

- 入参: `data` : `Map` `insert`的列和值，可省略(通过`column`设置)

```js
// insert into sys_user(user_name,role) values('李富贵','admin')
return db.table('sys_user').insert({ user_name : '李富贵', role : 'admin'})
```

## update

- 入参: `data` : `Map` `insert`的列和值，可省略(通过`column`设置)

```javascript
// update sys_user set user_name = '王二狗' where id = 1
return db.table('sys_user').primary('id').update({ id: 1, user_name : '王二狗'})
```

## save

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

## select

查询list（与db.select 作用相同）

```js
// select * from sys_user
return db.table('sys_user').select()
```

## page

分页查询（与db.page 作用相同）

```js
// select * from sys_user
return db.table('sys_user').page()
```

## where

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

## 其它

​	其它的自己摸索吧，API抄的mybatis-plus，文档写不动了