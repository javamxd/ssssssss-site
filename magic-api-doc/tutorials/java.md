# 调用Java相关类


## 调用Spring中的Bean

```groovy
// 第一种方式
import "xx.xxx.xxx.xxx.UserService";    // 使用类名
return UserService.selectUserList();
// 第二种方式
import "userUservice" as userService;   // 使用Bean名
return userService.selectUserList();
```

## 调用静态方法
```groovy
import "xxx.xxx.xx.xx.xx.StringUtils";
return StringUtils.isBlank("");
```

## 调用普通方法

```groovy
// 对于java.util、java.lang 包下的类，可以直接使用。
return new ArrayList();
// 对于其他类需要import
import "java.text.SimpleDateFormat";
return new SimpleDateFormat("yyyy-MM-dd").format(new Date());
```

## 调用magic-api的接口
```groovy
// 可以在脚本中直接调用，非http方式
import "@get:/api/sys/user/list" as userList;   // 导入定义的GET请求的 /api/sys/user/list 接口。
// 脚本中变量是共享给调用者的。所以无需指定参数传入。只需要在本脚本中定义该变量即可。
return userList();
```