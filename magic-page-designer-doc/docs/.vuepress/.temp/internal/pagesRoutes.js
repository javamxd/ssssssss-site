import { Vuepress } from '@vuepress/client/lib/components/Vuepress'

const routeItems = [
  ["v-22a39d25","/about.html","",["/about","/about.md"]],
  ["v-8daa1a0e","/","",["/index.html","/README.md"]],
  ["v-63846008","/change-log/intro.html","介绍",["/change-log/intro","/change-log/intro.md"]],
  ["v-60c23566","/change-log/v0.x.html","v0.x-vue2",["/change-log/v0.x","/change-log/v0.x.md"]],
  ["v-30848f24","/change-log/v2.x.html","v2.x-vue3",["/change-log/v2.x","/change-log/v2.x.md"]],
  ["v-613cf4e2","/config/component-library.html","组件库配置",["/config/component-library","/config/component-library.md"]],
  ["v-828165fe","/config/intro.html","配置简介",["/config/intro","/config/intro.md"]],
  ["v-9652a27e","/config/page-dom.html","页面 dom 配置",["/config/page-dom","/config/page-dom.md"]],
  ["v-77a9ffd9","/guide/intro.html","介绍",["/guide/intro","/guide/intro.md"]],
  ["v-3e21553a","/guide/library-component.html","组件配置",["/guide/library-component","/guide/library-component.md"]],
  ["v-77257903","/guide/library-function.html","注册组件",["/guide/library-function","/guide/library-function.md"]],
  ["v-67006bf8","/guide/library-group.html","分组配置",["/guide/library-group","/guide/library-group.md"]],
  ["v-47700a83","/guide/quick-start.html","快速入门",["/guide/quick-start","/guide/quick-start.md"]],
  ["v-d65ecfc6","/question/intro.html","FAQ",["/question/intro","/question/intro.md"]],
  ["v-3706649a","/404.html","",["/404"]],
]

export const pagesRoutes = routeItems.reduce(
  (result, [name, path, title, redirects]) => {
    result.push(
      {
        name,
        path,
        component: Vuepress,
        meta: { title },
      },
      ...redirects.map((item) => ({
        path: item,
        redirect: path,
      }))
    )
    return result
  },
  [
    {
      name: "404",
      path: "/:catchAll(.*)",
      component: Vuepress,
    }
  ]
)
