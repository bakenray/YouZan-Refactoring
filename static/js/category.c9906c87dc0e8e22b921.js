webpackJsonp([5],{1:function(t,a,e){"use strict";var n={hotLists:"/index/hotLists",banner:"/index/banner",topList:"/category/topList",subList:"/category/subList",rank:"/category/rank",searchList:"/search/list",details:"/goods/details",deal:"/goods/deal",addCart:"/cart/add",cartLists:"/cart/list",cartReduce:"/cart/reduce",cartRemove:"/cart/remove",cartMremove:"/cart/mremove",addressLists:"/address/list",addressAdd:"/address/add",addressRemove:"/address/remove",addressUpdate:"/address/update",addressSetDefault:"/address/setDefault"};for(var s in n)n.hasOwnProperty(s)&&(n[s]="http://rap2api.taobao.org/app/mock/7058"+n[s]);a.a=n},128:function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var n=e(16),s=(e.n(n),e(97)),r=(e.n(s),e(2)),i=e(7),o=e.n(i),c=e(1),d=e(3),u=e(8),l=e.n(u);r.default.prototype.$axios=o.a,new r.default({el:"#app",data:{topLists:null,topIndex:0,subData:null,rankData:null},created:function(){this.getTopList(),this.getSubList(0)},methods:{getTopList:function(){var t=this;this.$axios.get(c.a.topList).then(function(a){t.topLists=a.data.lists})},getSubList:function(t,a){var e=this;this.topIndex=t,0==t?this.getRank():this.$axios.get(c.a.subList,{id:a}).then(function(t){e.subData=t.data.data})},getRank:function(){var t=this;this.$axios.get(c.a.rank).then(function(a){t.rankData=a.data.data,console.log(t.rankData)})},toSearch:function(t){location.href="search.html?keyword="+t.name+"&id="+t.id}},components:{Foot:l.a},mixins:[d.a]})},16:function(t,a){},17:function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var n=e(15),s=e.n(n),r=s.a.parse(location.search.substr(1)),i=r.index,o=[{name:"有赞",icon:"icon-home",href:"index.html"},{name:"分类",icon:"icon-category",href:"category.html"},{name:"购物车",icon:"icon-cart",href:"cart.html"},{name:"我",icon:"icon-user",href:"member.html"}];a.default={data:function(){return{navConfig:o,curIndex:parseInt(i)||0}},methods:{changeNav:function(t,a){location.href=t.href+"?index="+a}}}},20:function(t,a){},21:function(t,a){t.exports={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"bottom-nav"},[e("ul",t._l(t.navConfig,function(a,n){return e("li",{key:a.name,class:{active:n===t.curIndex},on:{click:function(e){t.changeNav(a,n)}}},[e("a",[e("i",{class:a.icon}),e("div",[t._v(t._s(a.name))])])])}))])},staticRenderFns:[]}},3:function(t,a,e){"use strict";var n={filters:{currency:function(t){var a=""+t;if(a.indexOf(".")>-1){var e=a.split(".");return e[0]+"."+(e[1]+"0").substr(0,2)}return a+".00"}}};a.a=n},8:function(t,a,e){function n(t){e(20)}var s=e(10)(e(17),e(21),n,"data-v-d96aef3a",null);t.exports=s.exports},97:function(t,a){}},[128]);
//# sourceMappingURL=category.c9906c87dc0e8e22b921.js.map