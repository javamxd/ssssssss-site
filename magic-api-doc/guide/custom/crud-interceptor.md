# 自定义单表API操作拦截器 <Badge text="1.5.3+" type="error"/>

编写java代码如下：

```java
/**
 * 拦截请求
 */
@Component
public class MyNamedTableInterceptor implements NamedTableInterceptor {

	/*
	 * 执行单表操作之前
	 */
	@Override
	public void preHandle(SqlMode sqlMode, NamedTable namedTable) {
		if (sqlMode == SqlMode.INSERT) {
			// 插入时注入create_by列
            namedTable.column("create_by", UserUtils.getId());
		}
	}
}
```