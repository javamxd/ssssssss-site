<template><h1 id="组件库配置" tabindex="-1"><a class="header-anchor" href="#组件库配置" aria-hidden="true">#</a> 组件库配置</h1>
<h2 id="完整示例" tabindex="-1"><a class="header-anchor" href="#完整示例" aria-hidden="true">#</a> 完整示例</h2>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">const</span> data<span class="token operator">:</span> ComponentGroupInfo <span class="token operator">=</span> <span class="token punctuation">{</span>
  id<span class="token operator">:</span> <span class="token string">'layout'</span><span class="token punctuation">,</span>
  title<span class="token operator">:</span> <span class="token string">'布局'</span><span class="token punctuation">,</span>
  list<span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      id<span class="token operator">:</span> <span class="token string">'a-row'</span><span class="token punctuation">,</span>
      title<span class="token operator">:</span> <span class="token string">'Row'</span><span class="token punctuation">,</span>
      ext<span class="token operator">:</span> <span class="token punctuation">{</span>
        icon<span class="token operator">:</span> <span class="token string">'mpd-icon-row'</span><span class="token punctuation">,</span>
        help<span class="token operator">:</span> <span class="token string">'通过`row`在水平方向建立一组`column`（简写 col）'</span><span class="token punctuation">,</span>
        childrenComponent<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'a-col'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
        componentConfig<span class="token operator">:</span> <span class="token punctuation">[</span>
          <span class="token punctuation">{</span>
            type<span class="token operator">:</span> <span class="token string">'attr'</span><span class="token punctuation">,</span>
            title<span class="token operator">:</span> <span class="token string">'栅格间隔'</span><span class="token punctuation">,</span>
            name<span class="token operator">:</span> <span class="token string">'gutter'</span><span class="token punctuation">,</span>
            help<span class="token operator">:</span> <span class="token string">'栅格间隔，可以写成像素值或支持响应式的对象写法来设置水平间隔 { xs: 8, sm: 16, md: 24}。或者使用数组形式同时设置 [水平间距, 垂直间距]'</span><span class="token punctuation">,</span>
            inputType<span class="token operator">:</span> ConfigDetailType<span class="token punctuation">.</span>Input
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span>
            type<span class="token operator">:</span> <span class="token string">'attr'</span><span class="token punctuation">,</span>
            title<span class="token operator">:</span> <span class="token string">'布局模式'</span><span class="token punctuation">,</span>
            name<span class="token operator">:</span> <span class="token string">'type'</span><span class="token punctuation">,</span>
            help<span class="token operator">:</span> <span class="token string">'布局模式，可选 flex，现代浏览器 下有效'</span><span class="token punctuation">,</span>
            inputType<span class="token operator">:</span> ConfigDetailType<span class="token punctuation">.</span>Select<span class="token punctuation">,</span>
            inputConfig<span class="token operator">:</span> <span class="token punctuation">{</span>
              attr<span class="token operator">:</span> <span class="token punctuation">{</span>
                allowClear<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
                options<span class="token operator">:</span> <span class="token punctuation">[</span>
                  <span class="token punctuation">{</span>
                    value<span class="token operator">:</span> <span class="token string">'flex'</span><span class="token punctuation">,</span>
                    label<span class="token operator">:</span> <span class="token string">'flex'</span>
                  <span class="token punctuation">}</span>
                <span class="token punctuation">]</span>
              <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span>
            type<span class="token operator">:</span> <span class="token string">'attr'</span><span class="token punctuation">,</span>
            title<span class="token operator">:</span> <span class="token string">'垂直对齐方式'</span><span class="token punctuation">,</span>
            name<span class="token operator">:</span> <span class="token string">'align'</span><span class="token punctuation">,</span>
            help<span class="token operator">:</span> <span class="token string">'flex 布局下的垂直对齐方式'</span><span class="token punctuation">,</span>
            inputType<span class="token operator">:</span> ConfigDetailType<span class="token punctuation">.</span>Select<span class="token punctuation">,</span>
            inputConfig<span class="token operator">:</span> <span class="token punctuation">{</span>
              attr<span class="token operator">:</span> <span class="token punctuation">{</span>
                allowClear<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
                options<span class="token operator">:</span> <span class="token punctuation">[</span>
                  <span class="token punctuation">{</span>
                    value<span class="token operator">:</span> <span class="token string">'top'</span><span class="token punctuation">,</span>
                    label<span class="token operator">:</span> <span class="token string">'顶部'</span>
                  <span class="token punctuation">}</span><span class="token punctuation">,</span>
                  <span class="token punctuation">{</span>
                    value<span class="token operator">:</span> <span class="token string">'middle'</span><span class="token punctuation">,</span>
                    label<span class="token operator">:</span> <span class="token string">'中间'</span>
                  <span class="token punctuation">}</span><span class="token punctuation">,</span>
                  <span class="token punctuation">{</span>
                    value<span class="token operator">:</span> <span class="token string">'bottom'</span><span class="token punctuation">,</span>
                    label<span class="token operator">:</span> <span class="token string">'底部'</span>
                  <span class="token punctuation">}</span>
                <span class="token punctuation">]</span>
              <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span>
            type<span class="token operator">:</span> <span class="token string">'attr'</span><span class="token punctuation">,</span>
            title<span class="token operator">:</span> <span class="token string">'水平排列方式'</span><span class="token punctuation">,</span>
            name<span class="token operator">:</span> <span class="token string">'justify'</span><span class="token punctuation">,</span>
            help<span class="token operator">:</span> <span class="token string">'	flex 布局下的水平排列方式'</span><span class="token punctuation">,</span>
            inputType<span class="token operator">:</span> ConfigDetailType<span class="token punctuation">.</span>Select<span class="token punctuation">,</span>
            inputConfig<span class="token operator">:</span> <span class="token punctuation">{</span>
              attr<span class="token operator">:</span> <span class="token punctuation">{</span>
                allowClear<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
                options<span class="token operator">:</span> <span class="token punctuation">[</span>
                  <span class="token punctuation">{</span>
                    value<span class="token operator">:</span> <span class="token string">'start'</span><span class="token punctuation">,</span>
                    label<span class="token operator">:</span> <span class="token string">'start'</span>
                  <span class="token punctuation">}</span><span class="token punctuation">,</span>
                  <span class="token punctuation">{</span>
                    value<span class="token operator">:</span> <span class="token string">'end'</span><span class="token punctuation">,</span>
                    label<span class="token operator">:</span> <span class="token string">'end'</span>
                  <span class="token punctuation">}</span><span class="token punctuation">,</span>
                  <span class="token punctuation">{</span>
                    value<span class="token operator">:</span> <span class="token string">'center'</span><span class="token punctuation">,</span>
                    label<span class="token operator">:</span> <span class="token string">'center'</span>
                  <span class="token punctuation">}</span><span class="token punctuation">,</span>
                  <span class="token punctuation">{</span>
                    value<span class="token operator">:</span> <span class="token string">'space-around'</span><span class="token punctuation">,</span>
                    label<span class="token operator">:</span> <span class="token string">'space-around'</span>
                  <span class="token punctuation">}</span><span class="token punctuation">,</span>
                  <span class="token punctuation">{</span>
                    value<span class="token operator">:</span> <span class="token string">'space-between'</span><span class="token punctuation">,</span>
                    label<span class="token operator">:</span> <span class="token string">'space-between'</span>
                  <span class="token punctuation">}</span>
                <span class="token punctuation">]</span>
              <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">]</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br><span class="line-number">81</span><br><span class="line-number">82</span><br><span class="line-number">83</span><br><span class="line-number">84</span><br><span class="line-number">85</span><br><span class="line-number">86</span><br><span class="line-number">87</span><br><span class="line-number">88</span><br><span class="line-number">89</span><br><span class="line-number">90</span><br><span class="line-number">91</span><br><span class="line-number">92</span><br><span class="line-number">93</span><br><span class="line-number">94</span><br><span class="line-number">95</span><br><span class="line-number">96</span><br><span class="line-number">97</span><br><span class="line-number">98</span><br><span class="line-number">99</span><br><span class="line-number">100</span><br><span class="line-number">101</span><br><span class="line-number">102</span><br></div></div><h2 id="组件分组对象" tabindex="-1"><a class="header-anchor" href="#组件分组对象" aria-hidden="true">#</a> 组件分组对象</h2>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token comment">// 组件分组对象</span>
<span class="token keyword">export</span> <span class="token keyword">interface</span> <span class="token class-name">ComponentGroupInfo</span> <span class="token punctuation">{</span>
  <span class="token comment">// 组件id,应该唯一</span>
  id<span class="token operator">:</span> <span class="token builtin">string</span>
  <span class="token comment">// 组件库标题</span>
  title<span class="token operator">:</span> <span class="token builtin">string</span>
  <span class="token comment">// 可用组件列表</span>
  list<span class="token operator">:</span> <span class="token builtin">Array</span><span class="token operator">&lt;</span>PageDom<span class="token operator">></span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><h2 id="pagedom-配置项" tabindex="-1"><a class="header-anchor" href="#pagedom-配置项" aria-hidden="true">#</a> PageDom 配置项</h2>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token comment">// PageDom配置项</span>
<span class="token keyword">export</span> <span class="token keyword">interface</span> <span class="token class-name">PageDom</span> <span class="token punctuation">{</span>
  <span class="token comment">// id唯一标识(可用组件名),拖拽到页面后由uuid重新生成</span>
  id<span class="token operator">:</span> <span class="token builtin">string</span>
  <span class="token comment">// 节点名称</span>
  title<span class="token operator">:</span> <span class="token builtin">string</span>
  <span class="token comment">// 页面dom配置</span>
  mpdConfig<span class="token operator">?</span><span class="token operator">:</span> MpdConfig
  <span class="token comment">// 扩展属性,仅页面展示使用,拖拽后删除属性</span>
  ext<span class="token operator">?</span><span class="token operator">:</span> ComponentItemExt
  <span class="token comment">// 子节点</span>
  children<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">Array</span><span class="token operator">&lt;</span>PageDom<span class="token operator">></span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><h2 id="mpdconfig" tabindex="-1"><a class="header-anchor" href="#mpdconfig" aria-hidden="true">#</a> MpdConfig</h2>
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
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h2 id="componentitemext" tabindex="-1"><a class="header-anchor" href="#componentitemext" aria-hidden="true">#</a> ComponentItemExt</h2>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token comment">// 组件库扩展属性,不会放置于dom对象中</span>
<span class="token keyword">export</span> <span class="token keyword">interface</span> <span class="token class-name">ComponentItemExt</span> <span class="token punctuation">{</span>
  <span class="token comment">// 展示所需要的图标</span>
  icon<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span>
  <span class="token comment">// 帮助信息</span>
  help<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span>
  <span class="token comment">// 子节点支持拖拽的白名单，为undefined则不支持添加子节点，如果字段存在，并且长度为0，则支持所有的组件</span>
  childrenComponent<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">Array</span><span class="token operator">&lt;</span><span class="token builtin">string</span><span class="token operator">></span> <span class="token operator">|</span> <span class="token keyword">undefined</span> <span class="token operator">|</span> <span class="token keyword">null</span>
  <span class="token comment">// 支持拖入父节点的白名单，为undefined、长度为0、null则不受控制，如果配置的有对应组件</span>
  parentComponent<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">Array</span><span class="token operator">&lt;</span><span class="token builtin">string</span><span class="token operator">></span> <span class="token operator">|</span> <span class="token keyword">undefined</span> <span class="token operator">|</span> <span class="token keyword">null</span>
  <span class="token comment">// 组件自己的配置</span>
  componentConfig<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">Array</span><span class="token operator">&lt;</span>ComponentConfig<span class="token operator">></span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><h2 id="componentconfig" tabindex="-1"><a class="header-anchor" href="#componentconfig" aria-hidden="true">#</a> ComponentConfig</h2>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token comment">// 配置信息，主要记录v-bind，v-on等相应的组件配置</span>
<span class="token keyword">export</span> <span class="token keyword">interface</span> <span class="token class-name">ComponentConfig</span> <span class="token punctuation">{</span>
  type<span class="token operator">:</span> <span class="token string">'attr'</span> <span class="token operator">|</span> <span class="token string">'event'</span> <span class="token operator">|</span> <span class="token string">'model'</span>
  <span class="token comment">// 配置的字段标题</span>
  title<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span>
  <span class="token comment">// 配置的字段名</span>
  name<span class="token operator">:</span> <span class="token builtin">string</span>
  <span class="token comment">// 默认值</span>
  defaultValue<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">any</span>
  <span class="token comment">// 分组，相同分组的放到同一个tab下</span>
  group<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span>
  <span class="token comment">// 帮助信息</span>
  help<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span>
  <span class="token comment">// 可配置列表</span>
  inputList<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">Array</span><span class="token operator">&lt;</span>InputListConfig<span class="token operator">></span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div><h2 id="inputlistconfig" tabindex="-1"><a class="header-anchor" href="#inputlistconfig" aria-hidden="true">#</a> InputListConfig</h2>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">export</span> <span class="token keyword">interface</span> <span class="token class-name">InputListConfig</span> <span class="token punctuation">{</span>
  <span class="token comment">// 组件标题</span>
  title<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span>
  <span class="token comment">// 配置类型，默认会添加一个a-input</span>
  component<span class="token operator">:</span> ConfigDetailType
  <span class="token comment">// attr中的value，如果是"$:"开头会放入到eval中执行</span>
  attr<span class="token operator">?</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token punctuation">[</span>key<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">]</span><span class="token operator">:</span> <span class="token builtin">any</span> <span class="token punctuation">}</span>
  event<span class="token operator">?</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token punctuation">[</span>key<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">]</span><span class="token operator">:</span> <span class="token builtin">Function</span> <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><h2 id="configdetailtype" tabindex="-1"><a class="header-anchor" href="#configdetailtype" aria-hidden="true">#</a> ConfigDetailType</h2>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token comment">// 配置详情类型</span>
<span class="token keyword">export</span> <span class="token keyword">enum</span> ConfigDetailType <span class="token punctuation">{</span>
  Input <span class="token operator">=</span> <span class="token string">'a-input'</span><span class="token punctuation">,</span>
  Select <span class="token operator">=</span> <span class="token string">'a-select'</span><span class="token punctuation">,</span>
  Textarea <span class="token operator">=</span> <span class="token string">'a-textarea'</span><span class="token punctuation">,</span>
  InputNumber <span class="token operator">=</span> <span class="token string">'a-input-number'</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div></template>
