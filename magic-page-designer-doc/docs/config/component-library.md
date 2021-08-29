# 组件库配置

## 完整示例

```ts
const data: ComponentGroupInfo = {
  id: 'layout',
  title: '布局',
  list: [
    {
      id: 'a-row',
      title: 'Row',
      ext: {
        icon: 'mpd-icon-row',
        help: '通过`row`在水平方向建立一组`column`（简写 col）',
        childrenComponent: ['a-col'],
        componentConfig: [
          {
            type: 'attr',
            title: '栅格间隔',
            name: 'gutter',
            help: '栅格间隔，可以写成像素值或支持响应式的对象写法来设置水平间隔 { xs: 8, sm: 16, md: 24}。或者使用数组形式同时设置 [水平间距, 垂直间距]',
            inputType: ConfigDetailType.Input
          },
          {
            type: 'attr',
            title: '布局模式',
            name: 'type',
            help: '布局模式，可选 flex，现代浏览器 下有效',
            inputType: ConfigDetailType.Select,
            inputConfig: {
              attr: {
                allowClear: true,
                options: [
                  {
                    value: 'flex',
                    label: 'flex'
                  }
                ]
              }
            }
          },
          {
            type: 'attr',
            title: '垂直对齐方式',
            name: 'align',
            help: 'flex 布局下的垂直对齐方式',
            inputType: ConfigDetailType.Select,
            inputConfig: {
              attr: {
                allowClear: true,
                options: [
                  {
                    value: 'top',
                    label: '顶部'
                  },
                  {
                    value: 'middle',
                    label: '中间'
                  },
                  {
                    value: 'bottom',
                    label: '底部'
                  }
                ]
              }
            }
          },
          {
            type: 'attr',
            title: '水平排列方式',
            name: 'justify',
            help: '	flex 布局下的水平排列方式',
            inputType: ConfigDetailType.Select,
            inputConfig: {
              attr: {
                allowClear: true,
                options: [
                  {
                    value: 'start',
                    label: 'start'
                  },
                  {
                    value: 'end',
                    label: 'end'
                  },
                  {
                    value: 'center',
                    label: 'center'
                  },
                  {
                    value: 'space-around',
                    label: 'space-around'
                  },
                  {
                    value: 'space-between',
                    label: 'space-between'
                  }
                ]
              }
            }
          }
        ]
      }
    }
  ]
}
```

## 组件分组对象

```ts
// 组件分组对象
export interface ComponentGroupInfo {
  // 组件id,应该唯一
  id: string
  // 组件库标题
  title: string
  // 可用组件列表
  list: Array<PageDom>
}
```

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
  // 扩展属性,仅页面展示使用,拖拽后删除属性
  ext?: ComponentItemExt
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

## ComponentItemExt

```ts
// 组件库扩展属性,不会放置于dom对象中
export interface ComponentItemExt {
  // 展示所需要的图标
  icon?: string
  // 帮助信息
  help?: string
  // 子节点支持拖拽的白名单，为undefined则不支持添加子节点，如果字段存在，并且长度为0，则支持所有的组件
  childrenComponent?: Array<string> | undefined | null
  // 支持拖入父节点的白名单，为undefined、长度为0、null则不受控制，如果配置的有对应组件
  parentComponent?: Array<string> | undefined | null
  // 组件自己的配置
  componentConfig?: Array<ComponentConfig>
}
```

## ComponentConfig

```ts
// 配置信息，主要记录v-bind，v-on等相应的组件配置
export interface ComponentConfig {
  type: 'attr' | 'event' | 'model'
  // 配置的字段标题
  title?: string
  // 配置的字段名
  name: string
  // 默认值
  defaultValue?: any
  // 分组，相同分组的放到同一个tab下，只有在type='attr'时生效
  group?: string
  // 帮助信息
  help?: string
  // 可配置列表
  inputList?: Array<InputListConfig>
}
```

## InputListConfig

```ts
export interface InputListConfig {
  // 组件标题
  title?: string
  // 配置类型，默认会添加一个a-input
  component: ConfigDetailType
  // attr中的value，如果是"$:"开头会放入到eval中执行
  attr?: { [key: string]: any }
  event?: { [key: string]: Function }
}
```

## ConfigDetailType

```ts
// 配置详情类型
export enum ConfigDetailType {
  Input = 'a-input',
  Select = 'a-select',
  Textarea = 'a-textarea',
  InputNumber = 'a-input-number'
}
```
