<template>
  <div>
    <template v-for="(page, pageIndex) in pages">
      <div :key="'page-' + (pageIndex+1)" :id="'page_' + (pageIndex+1)" class="page fw-bold">
        <div class="subpage row g-0 h-100">
          <div v-for="(order, orderIndex) in page" :key="'order-' + orderIndex" class="col-4 card-group">
            <div class="order card">
              <div class="card-header d-flex justify-content-between">
                <div>No.<span class="fs-2 fw-bold">{{ getTimeString(order) }}{{ order["外帶編號"] }}</span></div>
                <div class="fs-2 fw-bold">{{ order["外帶取餐姓名"] }}</div>
              </div>
              <div class="card-body">
                <div>
                  <div v-if="order['6380'] > 0" class="text-center fs-4">6380<span>×{{ order['6380'] }}</span></div>
                  <div v-if="order['7680'] > 0" class="text-center fs-4">7680<span>×{{ order['7680'] }}</span></div>
                </div>
                <div>
                  <template
                    v-if="
                      order['五福'] || order['海鮮羹'] || order['海大蝦'] || order['小龍蝦'] ||
                      order['石斑'] || order['干貝'] || order['鮑魚'] || order['雞米糕'] || order['鰻米糕'] ||
                      order['紅燒蹄'] || order['肋排'] || order['佛跳牆'] || order['燉雞'] || order['甜點']">
                    <div class="text-center fs-4">===單點===</div>
                    <ul class="order-list">
                      <li v-if="order['五福']" class="d-flex justify-content-between">
                        <span class="title">五福臨門冷拼盤x{{ order['五福'] }}</span>
                        <span class="price">${{ 720*order['五福'] }}</span>
                      </li>
                      <li v-if="order['海鮮羹']" class="d-flex justify-content-between">
                        <span class="title">鴻運發財海鮮羹x{{ order['海鮮羹'] }}</span>
                        <span class="price">${{ 480*order['海鮮羹'] }}</span>
                      </li>
                      <li v-if="order['海大蝦']" class="d-flex justify-content-between">
                        <span class="title">蒜味白灼海老蝦x{{ order['海大蝦'] }}</span>
                        <span class="price">${{ 1200*order['海大蝦'] }}</span>
                      </li>
                      <li v-if="order['小龍蝦']" class="d-flex justify-content-between">
                        <span class="title">現撈小龍蝦沙拉x{{ order['小龍蝦'] }}</span>
                        <span class="price">${{ 2200*order['小龍蝦'] }}</span>
                      </li>
                      <li v-if="order['石斑']" class="d-flex justify-content-between">
                        <span class="title">清蒸魚露海石斑x{{ order['石斑'] }}</span>
                        <span class="price">${{ 760*order['石斑'] }}</span>
                      </li>
                      <li v-if="order['干貝']" class="d-flex justify-content-between">
                        <span class="title">焗烤日本干貝塔{{ order['干貝'] }}</span>
                        <span class="price">${{ 760*order['干貝'] }}</span>
                      </li>
                      <li v-if="order['鮑魚']" class="d-flex justify-content-between">
                        <span class="title">菇菇蜜汁活鮑魚x{{ order['鮑魚'] }}</span>
                        <span class="price">${{ 860*order['鮑魚'] }}</span>
                      </li>
                      <li v-if="order['雞米糕']" class="d-flex justify-content-between">
                        <span class="title">麻油雞米糕雙拼x{{ order['雞米糕'] }}</span>
                        <span class="price">${{ 560*order['雞米糕'] }}</span>
                      </li>
                      <li v-if="order['鰻米糕']" class="d-flex justify-content-between">
                        <span class="title">蒲燒鰻米糕雙拼x{{ order['鰻米糕'] }}</span>
                        <span class="price">${{ 660*order['鰻米糕'] }}</span>
                      </li>
                      <li v-if="order['紅燒蹄']" class="d-flex justify-content-between">
                        <span class="title">富貴滿堂紅燒蹄x{{ order['紅燒蹄'] }}</span>
                        <span class="price">${{ 500*order['紅燒蹄'] }}</span>
                      </li>
                      <li v-if="order['肋排']" class="d-flex justify-content-between">
                        <span class="title">照燒豬肋排x{{ order['肋排'] }}</span>
                        <span class="price">${{ 680*order['肋排'] }}</span>
                      </li>
                      <li v-if="order['佛跳牆']" class="d-flex justify-content-between">
                        <span class="title">干貝栗子佛跳牆x{{ order['佛跳牆'] }}</span>
                        <span class="price">${{ 680*order['佛跳牆'] }}</span>
                      </li>
                      <li v-if="order['燉雞']" class="d-flex justify-content-between">
                        <span class="title">排翅鮑貝燉全雞x{{ order['燉雞'] }}</span>
                        <span class="price">${{ 1600*order['燉雞'] }}</span>
                      </li>
                      <li v-if="order['甜點']" class="d-flex justify-content-between">
                        <span class="title">菠蘿泡芙藏冰心{{ order['甜點'] }}</span>
                        <span class="price">${{ 360*order['甜點'] }}</span>
                      </li>
                    </ul>
                  </template>
                </div>
              
                <div class="fs-4">
                  <div class="note">備註：</div>
                  {{ order["餐廳備註"] }}
                </div>
              </div>
              <div class="card-footer">
                <div class="d-flex justify-content-between">
                  <div>總金額:</div>
                  <div> ${{ order["總金額"] }} </div>
                </div>
                <div class="d-flex justify-content-between">
                  <div>已收款:</div>
                  <div> {{ (order["已收款"] == "") ? "尚未付款" :"$"+ order["已收款"] }}</div>
                </div>
                <div class="d-flex justify-content-between">
                  <div>剩餘金額:</div>
                  <div> {{ (order["剩餘金額"] == 0) ? "付清" :"$"+ order["剩餘金額"] }}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </template>
  </div>
</template>

<script>
import { getOrderDoc } from '@/assets/js/new-year/getOrderDoc';

export default {
  name: 'Print_Threeya',
  data() {
    return {
      rows: [],
      pages: []
    }
  },
  created() {
    
  },
  mounted() {
    this.paperPrint();
  },
  methods: {
    getTimeString(order) {
      return (order["外帶預定日期"]=="2/11 初二") ? ((order["外帶取菜時間 (請看以下說明再選擇)"] <= "12:00") ? "午" : "晚") : "";
    },
    async getSheet() {
      const orderDoc = await getOrderDoc();

      let orderSheet = orderDoc.sheetsByTitle["除夕外帶"];
      
      if (this.$route.params.date == "211") { 
        orderSheet = orderDoc.sheetsByTitle["初二外帶"];
      } else if (this.$route.params.date == "212") { 
        orderSheet = orderDoc.sheetsByTitle["初三外帶"];
      }
      
      this.rows = await orderSheet.getRows();
      
      let _customOrderList = [];
      let _customOrders = [];
      if (this.$route.query.custom) {
        _customOrderList = this.$route.query.custom.split(",");
        
        if (_customOrderList.length > 0) {
          for (let index = 0; index < this.rows.length; index++) {
            const ele = this.rows[index];
            
            ele["剩餘金額"] = ele["總金額"] - ele["已收款"];
            
            let _checkNumber = ele["外帶編號"];
            if (this.$route.params.date == "211") {
              _checkNumber = ((ele["外帶取菜時間 (請看以下說明再選擇)"]<"12:00") ? "午" : "晚") + ele["外帶編號"];
            } else if (this.$route.params.date == "212") {
              _checkNumber = ((ele["外帶取菜時間 (請看以下說明再選擇)"]<"12:00") ? "午" : "晚") + ele["外帶編號"];
            }

            if (_customOrderList.includes(_checkNumber)) {
              _customOrders.push(ele);
            }
          }
        }
      }

      let _page = [];
      let _printOrders = this.rows;
      if (_customOrders.length > 0) {
        _printOrders = _customOrders;
      }
        
      //清單
      for (let index = 0; index < _printOrders.length; index++) {
        const ele = _printOrders[index];
        
        ele["剩餘金額"] = ele["總金額"] - ele["已收款"];
        _page.push(ele);
        
        if (index % 6 == 5) {
          this.pages.push(_page);
          _page = [];
        } else if (index == (_printOrders.length -1)) {
          this.pages.push(_page);
        }
      }
    },
    async paperPrint() {
      await this.getSheet();
      window.print();
    }
  }
}
</script>
<style scoped>
.page {
    font-family: '標楷體';
    font-size: 23px;
    line-height: 1.2;
    width: calc(210mm - 4px);
    height: 1122px;
    background: white;
    margin: 10mm auto;
    padding: 5px;
}

@page {
    size: A4;
    margin: 0 !important;
}
@media print {
    html, body {
        width: 210mm;
        height: 297mm;        
    }
    .page {
        margin: 0;
        border: initial;
        border-radius: initial;
        width: initial;
        min-height: initial;
        box-shadow: initial;
        background: initial;
        page-break-after: always;
    }
}
</style>