# 文档生成


## 自动生成

所有接口都会自动生成`Swagger`文档，引入`SwaggerUI`后会自动显示出来。

## 文档配置

以下配置是可配置项和默认值。

```yml
magic-api:
  swagger-config:
    version: 1.0
    description: MagicAPI 接口信息
    title: MagicAPI Swagger Docs
    name: MagicAPI 接口
    location: /v2/api-docs/magic-api/swagger2.json
```
## 添加中文注释

对于默认情况下，生成的接口参数，结果是没有注释信息的，需要补充中文注释，此时有两种办法

- 导出文档到其他平台上补充注释。
- 在接口定义中给参数和结果补上注释信息。

