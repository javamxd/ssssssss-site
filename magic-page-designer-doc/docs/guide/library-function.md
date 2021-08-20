# 注册组件

## 示例

注册组件库源码

```ts
// 添加全局使用的组件库
export const addLibrary = (obj: ComponentGroupInfo | Array<ComponentGroupInfo>) => {
  obj = isArray(obj) ? <Array<ComponentGroupInfo>>obj : [<ComponentGroupInfo>obj]
  obj.forEach((element) => {
    element.list.forEach((item) => {
      item.mpdConfig = item.mpdConfig || {}
    })
    mpdComponentLibrary.push(element)
  })
}
```

## 调用方法

将项目中自定义组件的配置[ComponentGroupInfo](./library-group.md)组装好，并调用`addLibrary`方法注册到设计器中

:::: code-group
::: code-group-item 传入对象

```ts
// 两种写法
// import { addLibrary } from 'magic-page-designer'
import MagicPageDesigner from 'magic-page-designer'

const data: ComponentGroupInfo = {
  id: 'text',
  title: '文本',
  list: [
    {
      id: 'span',
      title: 'span',
      mpdConfig: {
        text: '在此处修改span标签内容'
      },
      ext: {
        icon: 'mpd-icon-text-border'
      }
    }
  ]
}

// addLibrary(ComponentGroupInfo)
MagicPageDesigner.addLibrary(ComponentGroupInfo)
```

:::
::: code-group-item 传入数组

```ts
// 两种写法
// import { addLibrary } from 'magic-page-designer'
import MagicPageDesigner from 'magic-page-designer'

const data: Array<ComponentGroupInfo> = [
  {
    id: 'text',
    title: '文本',
    list: [
      {
        id: 'span',
        title: 'span',
        mpdConfig: {
          text: '在此处修改span标签内容'
        },
        ext: {
          icon: 'mpd-icon-text-border'
        }
      }
    ]
  }
]

// addLibrary(ComponentGroupInfo)
MagicPageDesigner.addLibrary(ComponentGroupInfo)
```

:::
::::
