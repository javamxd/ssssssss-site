<template><h1 id="注册组件" tabindex="-1"><a class="header-anchor" href="#注册组件" aria-hidden="true">#</a> 注册组件</h1>
<h2 id="示例" tabindex="-1"><a class="header-anchor" href="#示例" aria-hidden="true">#</a> 示例</h2>
<p>注册组件库源码</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token comment">// 添加全局使用的组件库</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">addLibrary</span> <span class="token operator">=</span> <span class="token punctuation">(</span>obj<span class="token operator">:</span> ComponentGroupInfo <span class="token operator">|</span> <span class="token builtin">Array</span><span class="token operator">&lt;</span>ComponentGroupInfo<span class="token operator">></span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  obj <span class="token operator">=</span> <span class="token function">isArray</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span> <span class="token operator">?</span> <span class="token operator">&lt;</span><span class="token builtin">Array</span><span class="token operator">&lt;</span>ComponentGroupInfo<span class="token operator">>></span>obj <span class="token operator">:</span> <span class="token punctuation">[</span><span class="token operator">&lt;</span>ComponentGroupInfo<span class="token operator">></span>obj<span class="token punctuation">]</span>
  obj<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span>element<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    element<span class="token punctuation">.</span>list<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span>item<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
      item<span class="token punctuation">.</span>mpdConfig <span class="token operator">=</span> item<span class="token punctuation">.</span>mpdConfig <span class="token operator">||</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
    mpdComponentLibrary<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>element<span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><h2 id="调用方法" tabindex="-1"><a class="header-anchor" href="#调用方法" aria-hidden="true">#</a> 调用方法</h2>
<p>将项目中自定义组件的配置<RouterLink to="/guide/library-group.html">ComponentGroupInfo</RouterLink>组装好，并调用<code>addLibrary</code>方法注册到设计器中</p>
<CodeGroup>
<CodeGroupItem title="传入对象">
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token comment">// 两种写法</span>
<span class="token comment">// import { addLibrary } from 'magic-page-designer'</span>
<span class="token keyword">import</span> MagicPageDesigner <span class="token keyword">from</span> <span class="token string">'magic-page-designer'</span>

<span class="token keyword">const</span> data<span class="token operator">:</span> ComponentGroupInfo <span class="token operator">=</span> <span class="token punctuation">{</span>
  id<span class="token operator">:</span> <span class="token string">'text'</span><span class="token punctuation">,</span>
  title<span class="token operator">:</span> <span class="token string">'文本'</span><span class="token punctuation">,</span>
  list<span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      id<span class="token operator">:</span> <span class="token string">'span'</span><span class="token punctuation">,</span>
      title<span class="token operator">:</span> <span class="token string">'span'</span><span class="token punctuation">,</span>
      mpdConfig<span class="token operator">:</span> <span class="token punctuation">{</span>
        text<span class="token operator">:</span> <span class="token string">'在此处修改span标签内容'</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      ext<span class="token operator">:</span> <span class="token punctuation">{</span>
        icon<span class="token operator">:</span> <span class="token string">'mpd-icon-text-border'</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>

<span class="token comment">// addLibrary(ComponentGroupInfo)</span>
MagicPageDesigner<span class="token punctuation">.</span><span class="token function">addLibrary</span><span class="token punctuation">(</span>ComponentGroupInfo<span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br></div></div></CodeGroupItem>
<CodeGroupItem title="传入数组">
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token comment">// 两种写法</span>
<span class="token comment">// import { addLibrary } from 'magic-page-designer'</span>
<span class="token keyword">import</span> MagicPageDesigner <span class="token keyword">from</span> <span class="token string">'magic-page-designer'</span>

<span class="token keyword">const</span> data<span class="token operator">:</span> <span class="token builtin">Array</span><span class="token operator">&lt;</span>ComponentGroupInfo<span class="token operator">></span> <span class="token operator">=</span> <span class="token punctuation">[</span>
  <span class="token punctuation">{</span>
    id<span class="token operator">:</span> <span class="token string">'text'</span><span class="token punctuation">,</span>
    title<span class="token operator">:</span> <span class="token string">'文本'</span><span class="token punctuation">,</span>
    list<span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        id<span class="token operator">:</span> <span class="token string">'span'</span><span class="token punctuation">,</span>
        title<span class="token operator">:</span> <span class="token string">'span'</span><span class="token punctuation">,</span>
        mpdConfig<span class="token operator">:</span> <span class="token punctuation">{</span>
          text<span class="token operator">:</span> <span class="token string">'在此处修改span标签内容'</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        ext<span class="token operator">:</span> <span class="token punctuation">{</span>
          icon<span class="token operator">:</span> <span class="token string">'mpd-icon-text-border'</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">]</span>

<span class="token comment">// addLibrary(ComponentGroupInfo)</span>
MagicPageDesigner<span class="token punctuation">.</span><span class="token function">addLibrary</span><span class="token punctuation">(</span>ComponentGroupInfo<span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br></div></div></CodeGroupItem>
</CodeGroup>
</template>
