# 分页查询


## 自动分页

```groovy
// 自动从请求参数中获取页码、页大小
return db.page("""
    select * from sys_user
""")
```

## 手动分页

```groovy
// 自动从请求参数中获取页码、页大小
return db.page("""
    select * from sys_user
""", 10, 20) //跳过前20条查10条
```

## 分页参数配置
```yml
magic-api:
  page-config:
    size: size # 页大小的请求参数名称
    page: page # 页码的请求参数名称
    default-page: 1 # 未传页码时的默认首页
    default-size: 10 # 未传页大小时的默认页大小
```
## 自定义分页参数获取

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

## 自定义分页JSON结果

参考 [自定义JSON结果](./json.html#自定义结构配置)