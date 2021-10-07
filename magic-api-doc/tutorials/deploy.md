# 部署


## 导出&上传

在**本地环境**中，写好接口后，可以通过导出，在到**生产环境**中通过上传的方式进行部署

![导出](../.vuepress/public/images/export.png "导出")

![上传](../.vuepress/public/images/upload.png "上传")

- **增量上传** 此模式上传仅仅针对上传的资源中进行更新，不会对接口进行删除操作。
- **全量上传** 此模式以上传内容为基准，全量覆盖更新，如果没有必要不建议进行此操作。

此方法对于除只读模式外的所有方式配置均有效。

## 使用文件

此方法适合配置文件中配置方式是如下形式的：

```yml
magic-api:
  resource:
    type: file # 此项默认值是file，可省略
    location: /xx/xx/xx/magic-api # 配置文件存储路径
```
此时需要把本地资源上传到该目录下，然后在到UI界面上点击整个页面右上角的**刷新**按钮。

另外也可以通过上传、推送的方式进行部署

## 使用Jar

对于将接口信息存到`jar`内的，部署需要将写好的接口信息打包至`jar`内，重新部署即可

```yml
magic-api:
  resource:
    location: classpath: magic-api # 接口信息存放在 src/main/resources/magic-api 下
```

## 使用数据库
需要将写好的接口信息，**自行同步**到数据库中，同步后，点击页面上右上角的**刷新**按钮即可

另外也可以通过上传、推送的方式进行部署

## 使用Redis

需要将写好的接口信息，**自行同步**到`Redis`中，同步后，点击页面上右上角的**刷新**按钮即可

另外也可以通过上传、推送的方式进行部署

## 集群部署

### 前置条件
- 部署了多份后还需要在线编辑接口信息，编辑后需要解决其他实例未同步接口信息的问题。
- 使用同一存储(如接口信息存储在同一个数据库中或`Redis`中)
- 项目集成了`Redis`(如果未集成则需要自定义推送和实现监听逻辑)
### 开启集群配置
```yml
spring:
  data:
    # 集成spring-boot-starter-data-redis
    redis:
      host: 192.168.30.9
      port: 6379
      database: 4
      timeout: 5000
magic-api:
  cluster-config:
    enable: true # 开启集群配置
```

### 自定义推送
::: tip 提示
如无特殊情况，不需要实现自定义推送。
:::
```java

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.redis.connection.Message;
import org.springframework.data.redis.connection.MessageListener;
import org.springframework.data.redis.connection.RedisConnectionFactory;
import org.springframework.data.redis.core.StringRedisTemplate;
import org.springframework.data.redis.listener.ChannelTopic;
import org.springframework.data.redis.listener.RedisMessageListenerContainer;
import org.ssssssss.magicapi.model.MagicNotify;
import org.ssssssss.magicapi.provider.MagicAPIService;
import org.ssssssss.magicapi.provider.MagicNotifyService;
import org.ssssssss.magicapi.utils.JsonUtils;

@Configuration
public class CustomMagicNotifyConfiguration{

    private String channel = "magic-api:notify:channel";

    /**
     * 将通知推送到其他实例上
     */
    @Bean
    public MagicNotifyService customMagicNotifyService(StringRedisTemplate stringRedisTemplate) {
        // 使用Redis通知
        // return magicNotify -> stringRedisTemplate.convertAndSend(channel, JsonUtils.toJsonString(magicNotify));
        return new MagicNotifyService() {
            @Override
            public void sendNotify(MagicNotify magicNotify) {
                // 使用Redis通知
                stringRedisTemplate.convertAndSend(channel, JsonUtils.toJsonString(magicNotify));
            }
        };
    }

    /**
     * 配置Redis监听
     */
    @Bean
    public RedisMessageListenerContainer magicRedisMessageListenerContainer(RedisConnectionFactory redisConnectionFactory, MagicAPIService magicAPIService) {
        RedisMessageListenerContainer redisMessageListenerContainer = new RedisMessageListenerContainer();
        redisMessageListenerContainer.setConnectionFactory(redisConnectionFactory);
        // MessageListener messageListener = (message, pattern) -> magicAPIService.processNotify(JsonUtils.readValue(message.getBody(), MagicNotify.class));
        MessageListener messageListener = new MessageListener() {
            @Override
            public void onMessage(Message message, byte[] pattern) {
                // 处理消息通知
                magicAPIService.processNotify(JsonUtils.readValue(message.getBody(), MagicNotify.class));
            }
        };
        redisMessageListenerContainer.addMessageListener(messageListener, ChannelTopic.of(channel));
        return redisMessageListenerContainer;
    }
}
```

## 接口推送
### 前置条件
- 推送的目标开启了推送配置
- 推送的目标不是只读模式
- 从本地能连通至目标服务

![推送](../.vuepress/public/images/push.png "推送")

## 本地和远程使用同一个存储
### 前置条件
- 本地和远程使用一个数据库或`Redis`或同一个存储位置
- 远程开启了`UI`界面
### 更新方式

由于`magic-api`启动之后，会将接口信息缓存至内存中，所以数据库发生改变后，对于应用是无感知的，需要重新读取，此时点击页面右上角的**刷新**按钮即可

另外对于这种方式是不推荐的，因为本地修改后可能会影响到正式接口
