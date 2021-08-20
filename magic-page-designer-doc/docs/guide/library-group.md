# 分组配置

## 示例

```ts
const data: ComponentGroupInfo = {
  id: 'text',
  title: '文本',
  list: []
}
```

## id

- 类型：`string`
- 必填：`是`

相同`id`的组件配置会分到一起展示

## title

- 类型：`string`
- 必填：`否`

展示分组的标题，如果为空，默认值为：`未设置分组名称`

## list

- 类型：`Array<PageDom>`
- 必填：`是`

展示到该分组的组件配置
