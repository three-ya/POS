(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-28a7f896"],{"3bec":function(t,s,e){},"554d":function(t,s,e){"use strict";e("3bec")},"7e8c":function(t,s,e){const{sheet_ini:a}=e("5d26");async function i(){const t=await a("1ZNfIxQwHuS5WzbIxU3rH7PY0FOVEKIBWqe6Z7_YpdNY");return t}t.exports={getOrderDoc:i}},bb51:function(t,s,e){"use strict";e.r(s);var a=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"home"},[e("main",{staticClass:"flex-shrink-0"},[e("div",{staticClass:"container"},[t._m(0),e("form",{staticClass:"mb-4",attrs:{action:""}},[e("div",{staticClass:"search-input input-group mb-3"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.searchKey,expression:"searchKey"}],ref:"cellphone",staticClass:"form-control",staticStyle:{"font-size":"1.6rem"},attrs:{type:"tel",readonly:t.searchKeyDisable,pattern:"\\d*",inputmode:"numeric",placeholder:"請輸入電話","aria-label":"Search",required:"",autofocus:""},domProps:{value:t.searchKey},on:{keydown:function(s){return!s.type.indexOf("key")&&t._k(s.keyCode,"enter",13,s.key,"Enter")?null:(s.preventDefault(),t.doSearch.apply(null,arguments))},input:function(s){s.target.composing||(t.searchKey=s.target.value)}}}),0==t.isLoading?e("button",{staticClass:"btn btn-danger btn-lg",attrs:{type:"button"},on:{click:t.doSearch}},[t._v("搜尋")]):e("button",{staticClass:"btn btn-danger btn-lg",attrs:{type:"button",disabled:""}},[e("span",{staticClass:"spinner-border spinner-border-sm",attrs:{role:"status","aria-hidden":"true"}}),t._v(" 尋找中... ")])])]),1==t.isLoading?[t._m(1)]:[2==t.isSearching?[e("div",{staticClass:"d-grid"},[e("div",{staticClass:"mb-4 fs-2 text-result text-wrap"},[t._v("—— 以下為查詢結果 ——")]),e("div",{ref:"orderList",staticClass:"row row-cols-1 row-cols-md-2 g-4"},t._l(t.found.all,(function(s,a){return e("div",{key:"data-"+a,staticClass:"col"},[e("div",{staticClass:"card mb-3 fs-4"},[e("div",{staticClass:"card-header"},[t._v("# 第"+t._s(a+1)+"筆"+t._s(t.found.all.length>1?" / 共"+t.found.all.length+"筆":""))]),e("div",{staticClass:"card-body"},["togo"==s.dataType?[e("h5",{staticClass:"card-title"},[t._v("⟪ "+t._s(s["外帶預定日期"]+s.dataName)+" ⟫")]),e("div",[t._v("取餐姓名："+t._s(s["外帶取餐姓名"])+" "),s["回電"]?e("i",{staticClass:"bi bi-check2-circle text-success fs-2"}):t._e()]),e("div",[t._v("聯絡手機："),e("a",{attrs:{href:"tel:"+s["聯絡手機"]}},[t._v(t._s(s["聯絡手機"]))])]),e("div",[t._v("取餐日期："+t._s(s["外帶預定日期"]))]),e("div",[t._v("取餐時間："+t._s(s["外帶取菜時間 (請看以下說明再選擇)"]))]),e("hr"),e("div",{staticClass:"fs-5"},[t._v("預定內容：")]),e("div",{staticClass:"fs-5"},[s["6380"]||s["7680"]?[t._v(" 【合菜】 "),e("ul",[s["6380"]?e("li",[t._v("6380 X "+t._s(s["6380"])+" 組")]):t._e(),s["7680"]?e("li",[t._v("7680 X "+t._s(s["7680"])+" 組")]):t._e()])]:t._e(),s["五福"]||s["海鮮羹"]||s["海大蝦"]||s["小龍蝦"]||s["石斑"]||s["干貝"]||s["鮑魚"]||s["雞米糕"]||s["鰻米糕"]||s["紅燒蹄"]||s["肋排"]||s["佛跳牆"]||s["燉雞"]||s["甜點"]?[t._v(" 【單點】 "),e("ul",{staticClass:"order-list"},[s["五福"]?e("li",[e("span",{staticClass:"title"},[t._v("五福臨門冷拼盤 X "+t._s(s["五福"])+" 份")]),e("span",{staticClass:"price"},[t._v("$"+t._s(720*s["五福"]))])]):t._e(),s["海鮮羹"]?e("li",[e("span",{staticClass:"title"},[t._v("鴻運發財海鮮羹 X "+t._s(s["海鮮羹"])+" 份")]),e("span",{staticClass:"price"},[t._v("$"+t._s(480*s["海鮮羹"]))])]):t._e(),s["海大蝦"]?e("li",[e("span",{staticClass:"title"},[t._v("蒜味白灼海老蝦 X "+t._s(s["海大蝦"])+" 份")]),e("span",{staticClass:"price"},[t._v("$"+t._s(1200*s["海大蝦"]))])]):t._e(),s["小龍蝦"]?e("li",[e("span",{staticClass:"title"},[t._v("現撈小龍蝦沙拉 X "+t._s(s["小龍蝦"])+" 份")]),e("span",{staticClass:"price"},[t._v("$"+t._s(2200*s["小龍蝦"]))])]):t._e(),s["石斑"]?e("li",[e("span",{staticClass:"title"},[t._v("清蒸魚露海石斑 X "+t._s(s["石斑"])+" 份")]),e("span",{staticClass:"price"},[t._v("$"+t._s(760*s["石斑"]))])]):t._e(),s["干貝"]?e("li",[e("span",{staticClass:"title"},[t._v("焗烤日本干貝塔 X "+t._s(s["干貝"])+" 份")]),e("span",{staticClass:"price"},[t._v("$"+t._s(760*s["干貝"]))])]):t._e(),s["鮑魚"]?e("li",[e("span",{staticClass:"title"},[t._v("菇菇蜜汁活鮑魚 X "+t._s(s["鮑魚"])+" 份")]),e("span",{staticClass:"price"},[t._v("$"+t._s(860*s["鮑魚"]))])]):t._e(),s["雞米糕"]?e("li",[e("span",{staticClass:"title"},[t._v("麻油雞米糕雙拼 X "+t._s(s["雞米糕"])+" 份")]),e("span",{staticClass:"price"},[t._v("$"+t._s(560*s["雞米糕"]))])]):t._e(),s["鰻米糕"]?e("li",[e("span",{staticClass:"title"},[t._v("蒲燒鰻米糕雙拼 X "+t._s(s["鰻米糕"])+" 份")]),e("span",{staticClass:"price"},[t._v("$"+t._s(660*s["鰻米糕"]))])]):t._e(),s["紅燒蹄"]?e("li",[e("span",{staticClass:"title"},[t._v("富貴滿堂紅燒蹄 X "+t._s(s["紅燒蹄"])+" 份")]),e("span",{staticClass:"price"},[t._v("$"+t._s(500*s["紅燒蹄"]))])]):t._e(),s["肋排"]?e("li",[e("span",{staticClass:"title"},[t._v("照燒豬肋排 X "+t._s(s["肋排"])+" 份")]),e("span",{staticClass:"price"},[t._v("$"+t._s(680*s["肋排"]))])]):t._e(),s["佛跳牆"]?e("li",[e("span",{staticClass:"title"},[t._v("干貝栗子佛跳牆 X "+t._s(s["佛跳牆"])+" 份")]),e("span",{staticClass:"price"},[t._v("$"+t._s(680*s["佛跳牆"]))])]):t._e(),s["燉雞"]?e("li",[e("span",{staticClass:"title"},[t._v("排翅鮑貝燉全雞 X "+t._s(s["燉雞"])+" 份")]),e("span",{staticClass:"price"},[t._v("$"+t._s(1600*s["燉雞"]))])]):t._e(),s["甜點"]?e("li",[e("span",{staticClass:"title"},[t._v("菠蘿泡芙藏冰心 X "+t._s(s["甜點"])+" 份")]),e("span",{staticClass:"price"},[t._v("$"+t._s(360*s["甜點"]))])]):t._e()])]:t._e()],2),e("hr"),e("div",{staticClass:"fs-5"},[t._v(" 備註："+t._s(s["備註"]?s["備註"]:"無")+" ")])]:t._e(),"here"==s.dataType?[e("h5",{staticClass:"card-title"},[t._v("⟪ "+t._s(s["內用用餐日期"]+s.dataName)+" ⟫")]),e("div",[t._v("訂桌姓名："+t._s(s["內用訂桌姓名"]))]),e("div",[t._v("聯絡手機："),e("a",{attrs:{href:"tel:"+s["聯絡手機"]}},[t._v(t._s(s["聯絡手機"]))])]),e("div",[t._v("用餐日期："+t._s(s["內用用餐日期"]))]),e("div",[t._v("用餐時段："+t._s(s["內用用餐時段"]))]),e("hr"),s["6380"]||s["7680"]?[e("div",{staticClass:"fs-5"},[t._v(" 預訂內容： "),s["6380"]?e("p",[t._v("6380 X "+t._s(s["6380"])+" 桌")]):t._e(),s["7680"]?e("p",[t._v("7680 X "+t._s(s["7680"])+" 桌")]):t._e()])]:t._e(),e("hr"),e("div",{staticClass:"fs-5"},[t._v(" 備註："+t._s(s["備註"]?s["備註"]:"無")+" ")])]:t._e()],2),e("div",{staticClass:"card-footer text-white",staticStyle:{"background-color":"#474747"}},[e("div",{staticClass:"fs-5"},[t._v("總金額：$"+t._s(s["總金額"]))]),e("div",{staticClass:"fs-5"},[t._v("付款狀態： "),1==t.getPayStatus(s)?e("span",[t._v(" 已付清"),e("i",{staticClass:"bi bi-check2-circle text-success fs-2"})]):0==t.getPayStatus(s)?e("span",[t._v("尚未付款")]):e("span",{domProps:{innerHTML:t._s(t.getPayStatus(s))}})])])]),0==t.getPayStatus(s)?[t._m(2,!0)]:t._e(),t._m(3,!0)],2)})),0)])]:3==t.isSearching?[t._m(4)]:t._e()]],2),t._m(5),t._m(6)])])},i=[function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"title mt-3 mb-4 text-center"},[e("h2",[t._v("過年訂單查詢系統")])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"text-center"},[e("img",{attrs:{src:"img/searching.gif"}})])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"alert alert-danger alert-dismissible fade show",attrs:{role:"alert"}},[e("span",{staticClass:"alert-heading fs-1"},[t._v("提醒您目前尚未付款")]),e("p",[t._v(" 為避免當日結帳排隊久候，建議您於除夕前先將款項結清！"),e("br"),t._v(" 1. 於除夕前到餐廳付現結清"),e("br"),t._v(" 2. 匯款付款 ")]),e("hr"),e("p",{staticClass:"fs-4"},[t._v(" 【匯款資訊】"),e("br"),t._v(" 華南銀行(008)"),e("br"),t._v(" 戶名:三葉小吃部"),e("br"),t._v(" 帳號:830100165698 ")]),e("hr"),t._v(" ⚠️ 請在匯款完成後"),e("br"),t._v("line回傳以下資訊以便查帳唷！"),e("br"),t._v(" 1. 訂購姓名或電話"),e("br"),t._v(" 2. 帳號末五碼 "),e("p")])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("a",{staticClass:"btn btn-success",attrs:{type:"button",href:"https://lin.ee/o1Ei1J6"}},[t._v("加入三葉Line好友"),e("i",{staticClass:"bi bi-line"})])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"text-center fs-1"},[t._v(" 查不到此電話的訂單"),e("br"),t._v("請換支電話查詢"),e("br"),t._v("或撥打"),e("a",{attrs:{href:"tel:+88689325261"}},[t._v("089-325261")])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"container py-3"},[e("div",{staticClass:"mb-3 text-center fw-bold fs-5",staticStyle:{color:"#fff"}},[t._v("如需要更改或取消訂單，請聯繫我們！")]),e("div",{staticClass:"text-center"},[e("a",{staticClass:"btn btn-dark btnTel",attrs:{href:"tel:+88689325261",type:"button"}},[t._v("☎ 立即通話")])])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"container py-3"},[e("div",{staticClass:"text-center fs-3 fw-bold",staticStyle:{color:"#ffd700"}},[t._v(" 三葉餐廳｜ 電話：089-325261 ")]),e("div",{staticClass:"text-center fs-3 fw-bold",staticStyle:{color:"#ffd700"}},[t._v(" 地址："),e("a",{attrs:{href:"https://maps.app.goo.gl/VyAU3dxPoK4bbLzM6",target:"_blank",rel:"noopener noreferrer"}},[t._v("台東市中山路152號")])])])}],r=e("7e8c"),l={name:"Home",data(){return{isLoading:0,isSearching:0,searchKey:"",searchKeyDisable:!1,rows:{here:[],togo:[]},found:{all:[],here:[],togo:[]}}},computed:{},mounted(){setTimeout(()=>{this.$refs.cellphone.click()},500),this.$route.params.cellphone&&(this.searchKey=this.$route.params.cellphone,this.doSearch())},methods:{getPayStatus(t){const s=t["總金額"]-t["已收款"];return 0==s?1:t["已收款"]>0&&s>0?"已收款$"+t["已收款"]+" 尚餘 $"+s:0},async get_HereSheet(){const t=await Object(r["getOrderDoc"])(),s=t.sheetsByTitle["內用(原始回覆)"];this.rows.here=await s.getRows()},async get_togoSheet(){const t=await Object(r["getOrderDoc"])(),s=t.sheetsByTitle["外帶(原始回覆)"];this.rows.togo=await s.getRows()},async doSearch(){if(this.searchKey.length<6)alert("電話要完整喔！");else if(1!==this.isSearching){this.$router.push({name:"Home",params:{cellphone:this.searchKey}}).catch(t=>t),this.searchKeyDisable=!0,this.isLoading=1,this.isSearching=1,this.found={all:[],here:[],togo:[]},await this.get_HereSheet(),await this.get_togoSheet();for(let t=0;t<this.rows.togo.length;t++){const s=this.rows.togo[t];this.searchKey==s["聯絡手機"]&&(s.dataType="togo",s.dataName="外帶訂單",this.found.all.push(s),this.found.togo.push(s))}for(let t=0;t<this.rows.here.length;t++){const s=this.rows.here[t];"2/9 除夕"!=s["用餐日期"]&&(this.searchKey==s["聯絡手機"]&&(s.dataType="here",s.dataName="內用訂單",this.found.all.push(s),this.found.here.push(s)))}this.searchKeyDisable=!1,this.isLoading=0,this.isSearching=2,this.$nextTick((function(){this.$smoothScroll({scrollTo:this.$refs.orderList,hash:"#sampleHash"})})),0==this.found.all.length&&(this.isSearching=3,alert("查不到此電話的訂單\n請換支電話查詢\n或撥打089-325261"))}}}},c=l,n=(e("554d"),e("2877")),_=Object(n["a"])(c,a,i,!1,null,null,null);s["default"]=_.exports}}]);
//# sourceMappingURL=chunk-28a7f896.f488a70a.js.map