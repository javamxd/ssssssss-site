# 组件配置

## 示例

本示例根据`ant`官方文档配置修改[a-row](https://1x.antdv.com/components/grid-cn/)，主要介绍`list`中的对象

```ts
const data: ComponentGroupInfo = {
  id: 'layout',
  title: '布局',
  list: [
    {
      id: 'a-row',
      title: 'Row',
      mpdConfig: {
        component: 'a-row',
        model: {
          test: this.mpdPageValue.test
        },
        attr: {
          align: 'top'
        },
        class: 'padding margin',
        style: {
          color: '#000000'
        },
        event: {
          click: (e) => {
            console.log(e)
          }
        },
        text: '这个是文本例子'
      },
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
            inputList: [
              {
                title: '数字输入框',
                component: ConfigDetailType.InputNumber,
                attr: {
                  max: 24,
                  min: 0
                }
              }
            ]
          },
          {
            type: 'attr',
            title: '垂直对齐方式',
            name: 'align',
            help: 'flex 布局下的垂直对齐方式',
            inputList: [
              {
                component: ConfigDetailType.Select,
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
            ]
          }
        ]
      }
    }
  ]
}
```

## PageDom

### id

- 类型：`string`
- 必填：`是`
- 重复：<Badge type="danger" text="此参数，全局不能重复，如果重复，请查看console日志" vertical="middle" />

需要展示的组件名称，此参数会放入到`component`标签中，当拖拽后该值会放入到`mpdConfig.component`中，然后会由`uuid()`生成随机`id`

### title

- 类型：`string`
- 必填：`是`

展示拖拽`tag`的标题

### mpdConfig

- 类型：`MpdConfig`
- 必填：`否`

该属性会直接应用到渲染的`component`上，可以设置一些默认值，详情[MpdConfig](#MpdConfig)

### ext

- 类型：`ComponentItemExt`
- 必填：`否`

记录组件当前组件可用的配置项，主要用于设计器的配置，拖拽后将不会放入到`mpdPageConfig`对象中，详情[ComponentItemExt](#ComponentItemExt)

### children<Badge type="danger" text="可能会重新设计类型" vertical="middle" />

- 类型：`Array<PageDom>`
- 必填：`否`

当前组件的子节点，可以在拖拽的时候填入一些默认组件，详情[PageDom](#PageDom)

## MpdConfig

### component

- 类型：`string`
- 必填：`否`

使用的组件名，作为组件库元素使用时，可以不填，拖拽到页面后如果为空，则取`PageDom`的`id`属性

### model

- 类型：`{ [key: string]: any }`
- 必填：`否`

双向绑定属性，该属性值会直接放入`eval`方法中执行，也就是说执行的是原生`js`代码，比如想当前组件`value`绑定`mpdPageValue`中的属性`text`，可以写：`{value: this.mpdPageValue.text}`

### attr

- 类型：`{ [key: string]: any }`
- 必填：`否`

绑定到组件的属性，`value`支持以`$:`开头的`js`源码写法，比如`text`属性想绑定变量`text`：`{value: this.mpdPageValue.text}`

### class<Badge type="danger" text="暂时不支持表达式，后续扩展" vertical="middle" />

- 类型：`string`
- 必填：`否`

### style

- 类型：`Array<KeyValue>`
- 必填：`否`

直接书写原生`style`样式，比如`[{key:'color',value:'#000000'}]`会转换为`{color:'#000000'}`，详情[KeyValue](#KeyValue)

### event

- 类型：`{ [key: string]: (...arg: any) => void }`
- 必填：`否`

`v-on`绑定的事件，支持原生写法，`this`直接能拿到当前组件对象的原生`vue`的值，可以直接写`js`源码，如果是方法，则需要写成`(arg1,arg2) => {}`的形式

### text

- 类型：`string`
- 必填：`否`

用于展示到组件内部的文本，部分标签支持，比如`p`标签，所以需要用到该配置的时候，请初始化默认值，并且不能为`undefined`

### configTmp

- 类型：`{ [key: string]: any }`
- 必填：`否`

记录一些属性用的配置，用于设计器配置

## KeyValue

此数组对象会自动转换为`Object`

### key

- 类型：`string`
- 必填：`是`

### value

- 类型：`string | number`
- 必填：`是`

## ComponentItemExt

### icon

- 类型：`string`
- 必填：`否`

用于拖拽`tag`和侧边栏展示的图标，可以不配，最好还是配一下，好看。支持[Font Awesome 4](https://fontawesome.dashgame.com/)简写

### help

- 类型：`string`
- 必填：`否`

帮助信息，会展示到拖拽`tag`的帮组小图标

### childrenComponent

- 类型：`Array<string> | undefined | null`
- 必填：`否`

子节点支持拖拽的白名单，为`undefined`则不支持添加子节点，如果字段存在，并且长度为 0，则支持所有的组件。例如`a-row`的子组件只支持`a-col`，则需要配置该属性`childrenComponent:['a-col']`

### parentComponent

- 类型：`Array<string> | undefined | null`
- 必填：`否`

支持拖入父节点的白名单，为`undefined`、长度为 0、`null`则不受控制，如果配置的有对应组件，就会进行父组件验证。例如`a-col`的父组件只能是`a-row`，则需要配置该属性`parentComponent:['a-row']`

### componentConfig

- 类型：`Array<ComponentConfig>`
- 必填：`否`

组件自己的配置，主要用于配置双向绑定、属性、事件，如果配置了该项，那右侧栏会多出该组件的配置栏，详情[ComponentConfig](#ComponentConfig)

## ComponentConfig

配置信息，对`PageDom.mpdConfig`中的`model,attr,event`进行配置，相当于写原生`vue`代码

### type

- 类型：`'attr' | 'event' | 'model'`
- 必填：`是`

表示当前值是用于修改哪个属性

### title

- 类型：`string`
- 必填：`否`

用于展示当前配置的标题

### name

- 类型：`string`
- 必填：`是`

当前配置项需要修改的`key`，比如配置了`type=attr,name=text`，就等于改配置项会影响`PageDom.mpdConfig.attr.text`的改变

### defaultValue

- 类型：`any`
- 必填：`否`

该配置项对应的默认值，支持以`$:`开头的`js`表达式

### group

- 类型：`string`
- 必填：`否`

::: warning
只有在 type='attr'时生效
:::

相同分组的放到同一个`string`下，免得配置项过多，导致配置不好找，也可以进行区分配置项功能

### help

- 类型：`string`
- 必填：`否`

该配置的帮助信息

### inputList

- 类型：`Array<InputListConfig>`
- 必填：`否`

可配置列表，详情[InputListConfig](#InputListConfig)

## InputListConfig

主要实现配置框的一些原始数据，例如`select`需要下拉列表数据，`attr`中的`value`，如果是`$:`开头会放入到`eval`中执行，默认使用`ant`官方的组件

### title

- 类型：`string`
- 必填：`否`

组件标题，可不填，则显示`component`字段

### component

- 类型：`ConfigDetailType`
- 必填：`是`

默认会添加一个`a-input`输入框，可以手动配置一个`a-input`用于覆盖默认配置，详情看[ConfigDetailType](../config/component-library.md#ConfigDetailType)

### attr

- 类型：`{ [key: string]: any }`
- 必填：`否`

### event

- 类型：`{ [key: string]: Function }`
- 必填：`否`
