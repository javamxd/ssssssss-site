---
subSidebar: false
---
# 内置模块

[[toc]]

## 自定义模块
### 编写java代码
```java
import org.ssssssss.script.annotation.Comment;
@Component  //注入到Spring容器中
public class TestFunctions implements MagicModule {

    /**
    * 返回模块名，使用时通过import指令导入之后使用
    */
	@Override
	public String getModuleName() {
		return "test";    // 模块名称
	}
    
    /**
    *   调用打印方法
    */
    @Comment("方法名的注释(用于提示)")
	public void println(@Comment("参数名的提示(用于提示)")String value) {
		System.out.println(value);
	}
}
```
### 脚本中使用
```js
import test;    //导入模块
test.println('Custom Module!'); 
```

### 全局导入模块  (application.yaml)
```yaml
# org.ssssssss.magicapi.spring.boot.starter.MagicAPIProperties#autoImportModule 
# 覆盖默认配置时候别忘了加上db (如果不需要可忽略)
magic-api:
  auto-import-module: db,test
```

### 使用全局模块
```js
test.println('Custom Module!'); 
```

## db模块
### 引用模块
db是默认引入的模块，所以无需引入
### select
- 入参：`sql`:`String`
- 返回值：`List<Map<String,Object>>`
- 函数说明：查询`List`结果
```js
return db.select('select * from sys_user');
```
### selectInt
- 入参：`sql`:`String`
- 返回值：`Integer`
- 函数说明：查询`int`结果
```js
//需要保证结果返回一行一列
return db.selectInt('select count(*) from sys_user');   
```
### selectOne
- 入参：`sql`:`String`
- 返回值：`Map<String,Object>`
- 函数说明：查询单个对象
```js
return db.selectOne('select * from sys_user limit 1'); 
```
### selectValue
- 入参：`sql`:`String`
- 返回值：`Object`
- 函数说明：查询单个值
```js
//需要保证结果返回一行一列 
return db.selectValue('select user_name from sys_user limit 1');  
```
### page
- 入参：`sql`:`String`
- 入参：`limit` : `long`   可省略
- 入参：`offset` : `long`   可省略
- 返回值：`Object`  默认返回为Object，如果自定义了分页结果，则返回自定义结果
- 函数说明：分页查询
```js
//需要保证结果返回一行一列 
return db.page('select * from sys_user');  
```
### update
- 入参：`sql`:`String`
- 返回值：`Integer`
- 函数说明：执行增删改操作
```js
return db.update('delete from sys_user'); 
```
### insert
- 入参：`sql`：`String`
- 入参： `id`： `String`，主键列，可空，如无特殊情况不需要传入
- 返回值: `Object`
```js
return db.insert("insert into sys_user(username,password) values('admin','admin)");
```
### cache
- 入参：`cacheName`:`String`
- 入参：`ttl`:`long` 缓存有效期，单位毫秒，可省略，默认为配置的值
- 返回值：`db`  //返回当前实例，即可以链式调用
- 函数说明：使用缓存
```js
//使用缓存名为user的查询
return db.cache('user').select('select * from sys_user');
``` 
### transaction
- 入参：`callback`:`Function`，回调函数，可省略
- 返回值：`Object`
- 函数说明：开启事务

- 自动事务
```javascript
var val = db.transaction(()=>{
    var v1 = db.update('...');
    var v2 = db.update('....');
    return v2;
});
return val;
```
- 手动开启事务
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

### 列名转换
- normal    列名保持原样
- camel     列名使用驼峰命名
- pascal    列名使用帕斯卡命名
- upper     列名保持全大写
- lower     列名保持全小写
```js
return db.camel().select('select * from sys_user');
```

### 单表操作API <Badge text="1.0.0+" type="error"/>

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
```js
// update sys_user set user_name = '王二狗' where id = 1
return db.table('sys_user').primary('id').update({ id: 1, user_name : '王二狗'})
```
#### save
- 入参: `data` : `Map` `insert`或`update`的列和值，可省略(通过`column`设置)
- 入参： `beforeQuery` ： `boolean` 是否根据id查询有没有数据，可省略(默认`false`)
```js
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

## redis模块

### maven引入
```xml
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-data-redis</artifactId>
</dependency>
<dependency>
    <groupId>redis.clients</groupId>
    <artifactId>jedis</artifactId>
</dependency>
```
### 配置
```yaml
# 以下配置根据实际情况修改
spring:
  redis:
    host: localhost
    port: 6379
    database: 0
    timeout: 5000
    password: 123456
    jedis:
      pool:
        max-active: 100
        max-idle: 10
        max-wait: 10000
        min-idle: 0
```
### 使用
```js
import redis;   //导入redis模块
var value = 'hello';
//通过redis.命令名(命令参数,命令参数,.....,命令参数) 进行调用，其中命令名不区分大小写
redis.set('key',value); //调用set命令
redis.setex('key',10,value);    //调用setex命令
return redis.get('key');    //调用get命令
```


## mongo模块

### maven引入
```xml
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-data-mongodb</artifactId>
</dependency>
```
### 配置
```yaml
# 以下配置根据实际情况修改
spring:
  data:
    mongodb:
      host: localhost
      port: 27017
      database: magciaapi
      username: magciaapi
      password: 123456
```
### 使用
```js
import mongo;   //导入mongodb模块
//插入多条数据
mongo.databaseName.collectionName.insert([{key : value},{key : value}]);
//插入单条数据
mongo.databaseName.collectionName.insert({key : value});
//查询数据
mongo.databaseName.collectionName.find({key : value}).skip(2).limit(1).list();
//修改数据
mongo.databaseName.collectionName.update({key : oldValue},{key : newValue});
mongo.databaseName.collectionName.updateMany({key : oldValue},{key : newValue});
//查询总数
mongo.databaseName.collectionName.count({key : value});
mongo.databaseName.collectionName.count();
//删除数据
mongo.databaseName.collectionName.remove({key : value});
mongo.databaseName.collectionName.removeOne({key : value});
```


## http模块

### 模块说明

`http`模块是基于`RestTemplate`封装而来，目前只做了少量的封装。
对于一些通用的配置可以使用自定义`RestTemplate`来实现

```java
@Bean
public HttpModule magicHttpModule() {
	RestTemplate template = new RestTemplate();
	// 对RestTemplate进行配置.
    // your code
	return new HttpModule(template);
}
```

### 引用模块
```javascript
import http;
```

### connect
- 入参：`url`:`string`
- 返回值：`HttpModule`
- 函数说明：创建新的http请求对象
```javascript
import http;
http.connect("http://localhost:9999/sql/select") 
```

### 设置URL参数
### 设置表单参数
### 设置Header
```javascript
import http;
http.param('url_param1','url_param_value1') // 设置URL参数
    .param({    // 批量设置URL参数
        url_param_2 : 2,
        url_param_3 : 3,
    })
    .data('form_param1','form_param_value1') // 设置表单参数
    .data({    // 批量设置表单参数
        form_param_2 : 2,
        form_param_3 : 3,
    })
    .header('header_param1','header_param_value1') // 设置header参数
    .header({    // 批量设置header参数
        header_param_2 : 2,
        header_param_3 : 3,
    })
```

### body
- 入参：`body`:`Object`
- 函数说明：获取请求Body
```javascript
import http;
http.connect('..').body({
    id: 1,
    name: 'magic-api'
});
```

### entity
- 入参: `entity`: `HttpEntity`
- 函数说明：自定义`HttpEntity`
```javascript
import http;
http.connect('..').entity(entity)
```
### contentType
- 入参: `contentType`: `String`或`MediaType`
- 函数说明：定义请求内容类型
```javascript
import http;
http.connect('..').contentType('application/json')
```

### post
### delete
### get
### put
### execute
- 返回值：`ResponseEntity`
- 函数说明：执行对应的请求，post会自动设置为POST请求，其它同理
```javascript
import http;
return http.connect('http://localhost:9999/sql/select').post().getBody()
```

## log模块

### 引用模块
```javascript
import log;
```
### 使用
```javascript
import log; //org.slf4j.Logger
// 使用方法与SLF4J完全一致
log.info('Hello');
log.info('Hello {}','MagicAPI');
log.debug('test');
```

## request模块

### 引用模块
```javascript
import request;
```
### getFile
- 入参：`name`:`string`
- 返回值：`MultipartFile`
- 函数说明：获取上传的文件
```javascript
import request;
request.getFile('image'); 
```

### getFiles
- 入参：`name`:`String`
- 返回值：`List<MultipartFile>`
- 函数说明：获取上传的文件集合
```javascript
import request;
request.getFiles('image'); 
```

### getValues
- 入参：`name`:`String`
- 返回值：`List<String>`
- 函数说明：获取提交的数组参数
```javascript
import request;
return request.getValues('name');
```

### getHeaders
- 入参：`name`:`String`
- 返回值：`List<String>`
- 函数说明：获取请求的header数组
```javascript
import request;
return request.getHeaders('xxx');
```

### get
- 返回值：`HttpServletRequest`
- 函数说明：获取原生request对象
```javascript
import request;
request.get();
```

## response模块

### 引用模块
```javascript
import response;
```
### page
- 入参：`total`:`long`
- 入参：`values`:`list`
- 返回值：`Object`
- 函数说明：构建分页结果
```javascript
import response;
//返回： 共计10条，第一页的5条数据
return response.page(10,[1,2,3,4,5]);
```

### json
- 入参：`value`:`Object`
- 返回值：`ResponseEntity`
- 函数说明：构建Json结果
```javascript
import response;
//直接返回该json，不会被包装处理
return response.json({
    success : true,
    message : '执行成功'
});
```

### download
- 入参：`value`:`Object`
- 入参：`filename`:`文件名`
- 返回值：`ResponseEntity`
- 函数说明：下载文件
```javascript
import response;
return response.download('文件内容','test.txt');
```

### image
- 入参：`value`:`Object`
- 入参：`mine`:`String`
- 返回值：`ResponseEntity`
- 函数说明：主要用于输出图片
```javascript
import response;
// 输出图片
return response.image(bytes,'image/png');
```

### addHeader
- 入参：`key`:`string`
- 入参：`value`:`String`
- 返回值：无返回值
- 函数说明：添加Response Header
```javascript
import response;
response.addHeader('AccessToken','123');
```

### setHeader
- 入参：`key`:`string`
- 入参：`value`:`String`
- 返回值：无返回值
- 函数说明：设置Response Header
```javascript
import response;
response.setHeader('AccessToken','123');
```

### addCookie
- 入参：`key`:`string`
- 入参：`value`:`String`
- 入参：`options`:`Map` cookie参数，可选
- 返回值：无返回值
- 函数说明：添加Cookie
```javascript
import response;
response.addCookie('cookieKey','cookieValue');
response.addCookie('cookieKey','cookieValue',{
    path : '/',
    httpOnly : true,
    domain : 'ssssssss.org',
    maxAge : 3600
});
```

### addCookies
- 入参：`cookies`:`Map` cookie Map，必填
- 入参：`options`:`Map` cookie参数，可选
- 返回值：无返回值
- 函数说明：批量添加Cookie
```javascript
import response;
response.addCookies({
    cookieKey1 : 'cookieValue1',
    cookieKey2 : 'cookieValue2',
});
response.addCookies({
    cookieKey1 : 'cookieValue1',
    cookieKey2 : 'cookieValue2',
},{
    path : '/',
    httpOnly : true,
    domain : 'ssssssss.org',
    maxAge : 3600
});
```

### getOutputStream <Badge text="1.2.3+" type="error"/>
- 返回值：`OutputStream`
- 函数说明：获取`ServletOutputStream`

  ::: warning 提示
  在调用`getOutputStream`后 返回值应为`response.end()` 告诉框架无需处理返回值。
  :::
### end

- 返回值：无返回值
- 函数说明：取消返回默认的json结构，通过其他方式的输出结果（如：调用outputstream输出）

## env模块
### 引用模块
```javascript
import env;
```
### 使用
```javascript
import env; 
return env.get('server.port')
```

### get
- 入参：`key`:`String` 配置项
- 入参：`defaultValue`:`String`    默认值，可省略
- 返回值：`String`
- 函数说明：获取`Spring`配置项

## magic模块

### 引用模块
```javascript
import magic;
```
### call
- 入参：`method`:`String`
- 入参：`path`:`String`
- 入参：`parameters`:`Map`
- 返回值：`Object`
- 函数说明：执行MagicAPI中的接口,带code和message信息
```js
return magic.call('get','execute/sql',{
    message : 'Hello,Magic API!' //传入参数 
})
```
### execute
- 入参：`method`:`String`
- 入参：`path`:`String`
- 入参：`parameters`:`Map`
- 返回值：`Object`
- 函数说明：执行MagicAPI中的接口,原始内容，不包含code以及message信息
```js
return magic.execute('get','execute/sql',{
    message : 'Hello,Magic API!' //传入参数 
})
```