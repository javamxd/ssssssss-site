# 统一异常处理

## 基于magic-api实现

​	通过覆盖`ResultProvider`的`buildException`实现全局异常处理。
```java
@Component
public class MyResultProvider implements ResultProvider {

	@Override
	public Object buildResult(RequestEntity requestEntity, int code, String message, Object data) {
		long timestamp = System.currentTimeMillis();
        return new JsonBean<>(code, message, data, (int) (timestamp - requestEntity.getRequestTime()));
	}

	@Override
	public Object buildException(RequestEntity requestEntity, Throwable throwable) {
		return buildResult(requestEntity, 500, "系统内部出现错误");
	}
}
```

## 基于Spring实现

与原有方式一样，自己实现全局异常统一处理，随后将`magic-api`的异常处理交给`spring`
```yml
magic-api:
  throw-exception: true # 执行出错时，异常将抛出处理
```
