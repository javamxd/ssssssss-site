# 快速入门

## 依赖环境

- [Node.js v12+](https://nodejs.org/en/)

:::tip

- 推荐使用`yarn`，因为`npm`老是出些奇奇怪怪的问题
- `vue2`使用`vue-cli3`测试可用
- `vue3`使用`vite`测试可用

:::

## 安装教程

- `npm`命令(vue2)：`npm i magic-page-designer`
- `npm`命令(vue3)：`npm i magic-page-designer@next`
- `yarn`命令(vue2)：`yarn add magic-page-designer`
- `yarn`命令(vue3)：`yarn add magic-page-designer@next`

## 使用说明

1.  注册组件

:::: code-group
::: code-group-item vue2

```js
import Vue from 'vue'
import App from './App.vue'
import MagicPageDesigner from 'magic-page-designer'
// 最后引入自定义css，为了覆盖其它样式
import 'magic-page-designer/dist/magic-page-designer.css'

Vue.config.productionTip = false

Vue.use(MagicPageDesigner)
new Vue({
  render: (h) => h(App)
}).$mount('#app')
```

:::
::: code-group-item vue3

```js
import { createApp } from 'vue'
import App from './App.vue'
import MagicPageDesigner from 'magic-page-designer'
// 最后引入自定义css，为了覆盖其它样式
import 'magic-page-designer/dist/index.css'

const app = createApp(App)

app.use(MagicPageDesigner)
app.mount('#app')
```

:::
::::

2.  使用组件

:::: code-group
::: code-group-item vue2

```vue
<template>
  <magic-page-designer
    :mpdPageConfig.sync="mpdPageConfig"
    :mpdPageValue.sync="mpdPageValue"
    :selectPageNodeDom.sync="selectPageNodeDom"
    :editorMode="editorMode"
  ></magic-page-designer>
</template>

<script>
export default {
  data() {
    return {
      // 需要渲染的页面json数据，必填
      mpdPageConfig: {},
      // 当前页面所存储的值
      mpdPageValue: {},
      // 编辑模式下选中的dom，非必填
      selectPageNodeDom: {},
      // 是否编辑模式，默认false
      editorMode: true
    }
  }
}
</script>
```

:::
::: code-group-item vue3

```vue
<template>
  <magic-page-designer
    v-model:mpdPageConfig="mpdPageConfig"
    v-model:mpdPageValue="mpdPageValue"
    v-model:selectPageNodeDom="selectPageNodeDom"
    :editorMode="editorMode"
  ></magic-page-designer>
</template>

<script setup>
import { ref, reactive } from 'vue'
// 需要渲染的页面json数据，必填
const mpdPageConfig = reactive({})
// 当前页面所存储的值
const mpdPageValue = reactive({})
// 编辑模式下选中的dom，非必填
const selectPageNodeDom = reactive({})
// 是否编辑模式，默认false
const editorMode = ref(true)
</script>
```

:::
::::

3.  注册组件库，以便拖拽组件使用

```js
import { addLibrary } from 'magic-page-designer'
addLibrary({
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
})
```
