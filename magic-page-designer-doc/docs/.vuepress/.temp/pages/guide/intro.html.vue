<template><h1 id="介绍" tabindex="-1"><a class="header-anchor" href="#介绍" aria-hidden="true">#</a> 介绍</h1>
<p>magic-page-designer 是一个基于 vue 的在线页面快速开发平台，主要把所有的 vue 代码都改为在线配置，最终获得一个 json 格式的页面，你可以把它存放到服务器的任何地方：数据库、静态文件、redis 等。最方便的是可以在线修改页面，再也不用担心生产出问题了，还得打开 IDE，修改测试打包，直接在线编码，所见即所得。还可以配合 <a href="https://gitee.com/ssssssss-team/magic-api" target="_blank" rel="noopener noreferrer">magic-api<OutboundLink/></a> 使用，完全抛弃 IDE，随时随地 code with me。</p>
<h2 id="特性" tabindex="-1"><a class="header-anchor" href="#特性" aria-hidden="true">#</a> 特性</h2>
<ul>
<li>提供<code>vue2</code>和<code>vue3</code>版本，并且轻度依赖<code>ant-design-vue</code>(按需加载)</li>
<li>无需重复开发<code>vue</code>文件，只需要将注册到项目的<code>component</code>配置到左侧工具栏，就可以在线拖拽生成页面了</li>
<li>提供在线拖拽编辑页面，可即时修改页面不足之处，再也不用 <code>dev、build</code> 啦~</li>
<li>只需要添加到自己的项目中，再写一个自定义组件的<code>json</code>配置，就可以在页面上配置</li>
<li>没有任何限制，完全基于<code>component</code>自定义组件原理，支持属性、样式、事件配置，只要 vue 文件能写得出，那就能在平台上使用，而且写法完全一样</li>
<li>属性、双向绑定、事件等表达式写法，完全基于<code>js</code>和<code>vue</code>写法实现，无需额外的学习成本</li>
</ul>
<h2 id="界面" tabindex="-1"><a class="header-anchor" href="#界面" aria-hidden="true">#</a> 界面</h2>
<p><img src="@source/.vuepress/public/images/designer-window.png" alt="主界面" title="主界面"></p>
<h3 id="标题栏" tabindex="-1"><a class="header-anchor" href="#标题栏" aria-hidden="true">#</a> 标题栏</h3>
<h4 id="编辑器" tabindex="-1"><a class="header-anchor" href="#编辑器" aria-hidden="true">#</a> 编辑器</h4>
<ol>
<li>
<p>重新渲染页面</p>
<ul>
<li>主要解决页面有时候配置出错了，新修改的值不能生效的问题</li>
</ul>
</li>
<li>
<p>显示\隐藏辅助线</p>
<ul>
<li>用于提示页面<code>dom</code>元素的边界</li>
</ul>
</li>
<li>
<p>切换编辑\预览模式</p>
<ul>
<li>用于编辑模式和预览模式的切换</li>
</ul>
</li>
</ol>
<h3 id="左侧栏" tabindex="-1"><a class="header-anchor" href="#左侧栏" aria-hidden="true">#</a> 左侧栏</h3>
<ol>
<li>
<p>结构</p>
<ul>
<li>用于观察当前<code>mpdPageConfig</code>的结构，便于拖拽和选择，中间画布可会出现无法满足所有拖拽的情况</li>
</ul>
</li>
<li>
<p>组件库</p>
<ul>
<li>存放当前注册到编辑器的组件配置，可以供拖拽使用</li>
</ul>
</li>
<li>
<p>PageJson</p>
<ul>
<li>查看当前<code>mpdPageConfig</code> <code>Json</code>结构</li>
</ul>
</li>
<li>
<p>ValueJson</p>
<ul>
<li>查看当前<code>mpdPageValue</code> <code>Json</code>结构</li>
</ul>
</li>
</ol>
<h3 id="中间画布" tabindex="-1"><a class="header-anchor" href="#中间画布" aria-hidden="true">#</a> 中间画布</h3>
<ul>
<li>直接通过<code>component</code>标签渲染拖拽到画布的配置，并且可以互动，除了拖拽事件</li>
<li>当选中某一个元素的时候，会出现一个选框，右上角会有操作按钮：删除、</li>
</ul>
<h3 id="右侧栏" tabindex="-1"><a class="header-anchor" href="#右侧栏" aria-hidden="true">#</a> 右侧栏</h3>
<h4 id="基础项" tabindex="-1"><a class="header-anchor" href="#基础项" aria-hidden="true">#</a> 基础项</h4>
<ol>
<li>
<p>常规</p>
<ul>
<li>标题：用于标识该元素的名称，无实际作用</li>
<li>Text：用于展示到标签的内部文本内容，需要属性<code>PageDom.mpdConfig.text</code>不为<code>undefined</code>才能展示，因为不是所有的标签都支持展示文本</li>
<li>Class：直接作用到<code>dom</code>的<code>class</code>属性上</li>
<li>Style：直接作用到<code>dom</code>的<code>style</code>属性上</li>
</ul>
</li>
<li>
<p>Model</p>
</li>
</ol>
<p>用于观察绑定到当前元素上的<code>model</code>值</p>
<ol start="3">
<li>Attr</li>
</ol>
<p>用于观察绑定到当前元素上的<code>Attr</code>值</p>
<ol start="4">
<li>Event</li>
</ol>
<p>用于观察绑定到当前元素上的<code>Event</code>值</p>
<h4 id="组件库自定义配置" tabindex="-1"><a class="header-anchor" href="#组件库自定义配置" aria-hidden="true">#</a> 组件库自定义配置</h4>
<p>此区域将展示组件的自定义配置</p>
</template>
