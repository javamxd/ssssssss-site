# 获取请求参数


## QueryString
```
GET http://localhost:9999/xxx/xxx?name=abc&age=49
```
这样的`URL`参数`magic-api` 会自动将`name`和`age`映射为同名变量。

## 表单参数
```
POST http://localhost:9999/xxx/xxx
name=abc&age=49
```
这样的表单参数`magic-api` 也会自动将`name`和`age`映射为同名变量。

## Request Header参数获取
`magic-api` 会对所有`RequestHeader`统一封装为一个名为`header`的变量
如要获取 `token` 可以通过`header.token` 来获取

## Request Body参数获取

对于`RequestBody` `magic-api`会将整个请求体映射为`body`变量，如：
```json
{
  "name": "magic-api",
  "version": "9.9.9"
}
```
如要获取`name`属性 则可通过 `body.name` 来获取

## Path参数获取

主要是针对`URL`定义为`http://localhost:9999/user/{id}` 的类似接口

如要获取path路径上的id可通过`path.id` 或 `id`来获取。

对于请求时使用了`http://localhost:9999/user/1?id=2`的请求， `id`变量的值将是`QueryString`中的值，此时可以通过`path.id` 来避免冲突

## Cookie参数获取
`magic-api` 会对所有`Cookie`统一封装为一个名为`cookie`的变量
如要获取 `JSESSIONID` 可以通过`cookie.JSESSIONID` 来获取

## Session参数获取
`magic-api` 会将`HttpSession`封装为一个名为`session`的变量
要获取`session`中的值，可以通过`session.xxx`来获取