<template><h1 id="页面-dom-配置" tabindex="-1"><a class="header-anchor" href="#页面-dom-配置" aria-hidden="true">#</a> 页面 dom 配置</h1>
<h2 id="pagedom-配置项" tabindex="-1"><a class="header-anchor" href="#pagedom-配置项" aria-hidden="true">#</a> PageDom 配置项</h2>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token comment">// PageDom配置项</span>
<span class="token keyword">export</span> <span class="token keyword">interface</span> <span class="token class-name">PageDom</span> <span class="token punctuation">{</span>
  <span class="token comment">// id唯一标识(可用组件名),拖拽到页面后由uuid重新生成</span>
  id<span class="token operator">:</span> <span class="token builtin">string</span>
  <span class="token comment">// 节点名称</span>
  title<span class="token operator">:</span> <span class="token builtin">string</span>
  <span class="token comment">// 页面dom配置</span>
  mpdConfig<span class="token operator">?</span><span class="token operator">:</span> MpdConfig
  <span class="token comment">// 子节点</span>
  children<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">Array</span><span class="token operator">&lt;</span>PageDom<span class="token operator">></span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><h2 id="mpdconfig" tabindex="-1"><a class="header-anchor" href="#mpdconfig" aria-hidden="true">#</a> MpdConfig</h2>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token comment">// 页面dom配置</span>
<span class="token keyword">export</span> <span class="token keyword">interface</span> <span class="token class-name">MpdConfig</span> <span class="token punctuation">{</span>
  <span class="token comment">// 使用的组件名,作为组件库元素使用时,可以不填,拖拽到页面后如果为空,则取PageDom的id</span>
  component<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span>
  <span class="token comment">// 双向绑定属性</span>
  model<span class="token operator">?</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token punctuation">[</span>key<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">]</span><span class="token operator">:</span> <span class="token builtin">any</span> <span class="token punctuation">}</span>
  <span class="token comment">// 传递的属性</span>
  attr<span class="token operator">?</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token punctuation">[</span>key<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">]</span><span class="token operator">:</span> <span class="token builtin">any</span> <span class="token punctuation">}</span>
  <span class="token comment">// class</span>
  <span class="token class-name"><span class="token keyword">class</span></span><span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span>
  <span class="token comment">// style</span>
  style<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">Array</span><span class="token operator">&lt;</span>KeyValue<span class="token operator">></span>
  <span class="token comment">// v-on绑定的事件</span>
  event<span class="token operator">?</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token punctuation">[</span>key<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">]</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token operator">...</span>arg<span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token keyword">void</span> <span class="token punctuation">}</span>
  <span class="token comment">// text内容</span>
  text<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span>
  <span class="token comment">// 记录一些属性用的配置，用于设计器配置</span>
  configTmp<span class="token operator">?</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token punctuation">[</span>key<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">]</span><span class="token operator">:</span> <span class="token builtin">any</span> <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br></div></div><h2 id="keyvalue" tabindex="-1"><a class="header-anchor" href="#keyvalue" aria-hidden="true">#</a> KeyValue</h2>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token comment">// style使用的配置项</span>
<span class="token keyword">export</span> <span class="token keyword">interface</span> <span class="token class-name">KeyValue</span> <span class="token punctuation">{</span>
  key<span class="token operator">:</span> <span class="token builtin">string</span>
  value<span class="token operator">:</span> <span class="token builtin">string</span> <span class="token operator">|</span> <span class="token builtin">number</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div></template>
