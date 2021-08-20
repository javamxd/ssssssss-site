# 页面 dom 配置

## PageDom 配置项

```ts
// PageDom配置项
export interface PageDom {
  // id唯一标识(可用组件名),拖拽到页面后由uuid重新生成
  id: string
  // 节点名称
  title: string
  // 页面dom配置
  mpdConfig?: MpdConfig
  // 子节点
  children?: Array<PageDom>
}
```

## MpdConfig

```ts
// 页面dom配置
export interface MpdConfig {
  // 使用的组件名,作为组件库元素使用时,可以不填,拖拽到页面后如果为空,则取PageDom的id
  component?: string
  // 双向绑定属性
  model?: { [key: string]: any }
  // 传递的属性
  attr?: { [key: string]: any }
  // class
  class?: string
  // style
  style?: Array<KeyValue>
  // v-on绑定的事件
  event?: { [key: string]: (...arg: any) => void }
  // text内容
  text?: string
  // 记录一些属性用的配置，用于设计器配置
  configTmp?: { [key: string]: any }
}
```

## KeyValue

```ts
// style使用的配置项
export interface KeyValue {
  key: string
  value: string | number
}
```
