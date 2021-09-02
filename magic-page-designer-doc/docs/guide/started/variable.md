# 可用变量

全部通过`this.xxxx`获取以下变量

## 全局变量

### 当前选中的`dom`

- 变量名：`selectPageNodeDom`
- 描述：一般在编写页面过程中不会使用该变量

```json
{
  // 当前选中的item
  "item": {},
  // 当前拖拽的item
  "dragItem": {},
  // 标记是否拖拽的值放入成功
  "dragFlag": false,
  // slot配置选中的item
  "slotItem": {}
}
```

### 页面内记录的值

- 变量名：`selectPageNodeDom`
- 描述：全部的组件都可以访问该值，用于存放当前页面需要的值

```json
{}
```

## 局部变量

### 组件内部使用的值

- 变量名：`mValue`
- 描述：单个组件使用的值，用于存放当前组件需要的值

```json
{}
```

### 插槽值

- 变量名：`slotValue`
- 描述：如果该组件被当做插槽使用，则该值传递了所有的`slot value`

### 当前节点配置

- 变量名：`mConfig`
- 描述：当前节点的配置信息，详见[PageDom](./../library/component.md#PageDom)

### `lodash`工具

- 变量名：`_`
- 描述：一个常用的工具类[lodash](https://www.lodashjs.com/)

::: tip
该工具可以自行引入到
:::
