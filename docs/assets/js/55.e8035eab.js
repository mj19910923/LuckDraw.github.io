(window.webpackJsonp=window.webpackJsonp||[]).push([[55],{605:function(e,t,n){"use strict";n.r(t);var o=n(3),s=Object(o.a)({},(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("blockquote",[n("p",[n("code",[e._v("defaultConfig")]),e._v("是对抽奖插件进行整体的配置")])]),e._v(" "),n("ul",[n("li",[n("Describe",{attrs:{name:"default-config?: object",mean:"默认配置"}}),e._v(" "),n("ul",[n("li",[n("Describe",{attrs:{name:"gutter?: number",mean:"格子之间的间距",desc:"默认等于 5"}})],1),e._v(" "),n("li",[n("Describe",{attrs:{name:"speed?: number",mean:"旋转速度峰值",desc:"默认为 20，建议配置范围 10 ~ 30"}})],1),e._v(" "),n("li",[n("Describe",{attrs:{name:"?: number",mean:"开始旋转时间",desc:"单位为毫秒，默认等于 2500 毫秒"}})],1),e._v(" "),n("li",[n("Describe",{attrs:{name:"decelerationTime?: number",mean:"缓慢停止时间",desc:"单位为毫秒，默认等于 2500 毫秒"}})],1)])],1)]),e._v(" "),n("h2",{attrs:{id:"关于旋转速度"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#关于旋转速度"}},[e._v("#")]),e._v(" 关于旋转速度")]),e._v(" "),n("Exhibition",{scopedSlots:e._u([{key:"code",fn:function(){return[n("grid-defaultConfig1")]},proxy:!0},{key:"text",fn:function(){return[n("p",[e._v("旋转总共分为三个阶段：")]),e._v(" "),n("li",[e._v("第一阶段"),n("code",[e._v("accelerationTime")]),e._v("进行加速旋转，速度会从 0 加速到"),n("code",[e._v("speed")]),e._v("设置的值（默认为20），加速曲线恒定的情况下，你设置的时间越短，加速度越大")]),e._v(" "),n("li",[e._v("第二阶段处于"),n("code",[e._v("加速到峰值之后 && 调用stop方法之前")]),e._v("，此时加速度恒定为"),n("code",[e._v("speed")])]),e._v(" "),n("li",[e._v("第三阶段"),n("code",[e._v("decelerationTime")]),e._v("会缓慢停止，在你调用"),n("code",[e._v("stop")]),e._v("方法之后，速度会从"),n("code",[e._v("speed")]),e._v("逐渐降低到 0")]),e._v(" "),n("p",{staticStyle:{"font-weight":"400"}},[e._v("注意：当你接口的请求速度，小于等于"),n("code",[e._v("accelerationTime")]),e._v("时会跳过第二阶段")])]},proxy:!0}])})],1)}),[],!1,null,null,null);t.default=s.exports}}]);