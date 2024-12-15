<template>
  <div>
    <template v-for="(page, pageIndex) in pages">
      <div :key="'page-' + (pageIndex+1)" :id="'page_' + (pageIndex+1)" class="page">
        <div class="subpage row g-0 h-100">
          <div v-for="(order, orderIndex) in page" :key="'order-' + orderIndex" class="col-4 card-group fw-bold">
            <div class="order card">
              <div class="card-header d-flex justify-content-between">
                <div class="fs-4">{{ order["用餐日期"].substr(0, order["用餐日期"].length - 3) }}{{ order["時段代碼"].substr(0, 1) }}</div>
                <div class="fs-2">{{ order["訂桌姓名"] }}</div>
              </div>
              <div class="card-body">
                <div class="fs-2">
                  <div v-if="order['6380'] > 0">
                    <div class="text-center fs-3">6380<span>×{{ order['6380'] }}</span></div>
                    <div>五福拼盤</div>
                    <div>鴻運海鮮羹</div>
                    <div>白灼海大蝦</div>
                    <div>清蒸石斑</div>
                    <div>黃金干貝塔</div>
                    <div>菇菇蜜鮑魚</div>
                    <div>麻油雞米雙</div>
                    <div v-if="order['日期']=='1/28 除夕'">紅燒元蹄</div>
                    <div v-else>照燒豬肋排</div>
                    <div>佛跳牆</div>
                    <div>冰淇淋泡芙</div>
                  </div>
                  
                  <div v-if="order['7680'] > 0">
                    <div class="text-center fs-3">7680<span>×{{ order['7680'] }}</span></div>
                    <div>五福拼盤</div>
                    <div>鴻運海鮮羹</div>
                    <div>小龍蝦沙拉</div>
                    <div>清蒸石斑</div>
                    <div>黃金干貝塔</div>
                    <div>菇菇蜜鮑魚</div>
                    <div>鰻魚米糕雙</div>
                    <div v-if="order['日期']=='1/28 除夕'">紅燒元蹄</div>
                    <div v-else>照燒豬肋排</div>
                    <div>排翅燉全雞</div>
                    <div>冰淇淋泡芙</div>
                  </div>
                </div>
                <div class="fs-5">
                  <template
                    v-if="
                      order['五福'] || order['海鮮羹'] || order['海大蝦'] || order['小龍蝦'] ||
                      order['石斑'] || order['干貝'] || order['鮑魚'] || order['雞米糕'] || order['鰻米糕'] ||
                      order['紅燒蹄'] || order['肋排'] || order['佛跳牆'] || order['燉雞'] || order['蛋糕']">
                      <div class="text-center fs-4">===單點===</div>
                      <ul class="order-list">
                        <li v-if="order['五福']" class="d-flex justify-content-between">
                          <span class="title">五福拼盤x{{ order['五福'] }}</span>
                        </li>
                        <li v-if="order['海鮮羹']" class="d-flex justify-content-between">
                          <span class="title">鴻運海鮮羹x{{ order['海鮮羹'] }}</span>
                        </li>
                        <li v-if="order['海大蝦']" class="d-flex justify-content-between">
                          <span class="title">白灼海大蝦x{{ order['海大蝦'] }}</span>
                        </li>
                        <li v-if="order['小龍蝦']" class="d-flex justify-content-between">
                          <span class="title">小龍蝦沙拉x{{ order['小龍蝦'] }}</span>
                        </li>
                        <li v-if="order['石斑']" class="d-flex justify-content-between">
                          <span class="title">清蒸石斑x{{ order['石斑'] }}</span>
                        </li>
                        <li v-if="order['干貝']" class="d-flex justify-content-between">
                          <span class="title">黃金干貝塔x{{ order['干貝'] }}</span>
                        </li>
                        <li v-if="order['鮑魚']" class="d-flex justify-content-between">
                          <span class="title">菇菇蜜鮑魚x{{ order['鮑魚'] }}</span>
                        </li>
                        <li v-if="order['雞米糕']" class="d-flex justify-content-between">
                          <span class="title">雞米糕雙拼x{{ order['雞米糕'] }}</span>
                        </li>
                        <li v-if="order['鰻米糕']" class="d-flex justify-content-between">
                          <span class="title">鰻魚米糕雙拼x{{ order['鰻米糕'] }}</span>
                        </li>
                        <li v-if="order['紅燒蹄']" class="d-flex justify-content-between">
                          <span class="title">紅燒元蹄x{{ order['紅燒蹄'] }}</span>
                        </li>
                        
                        <li v-if="order['肋排']" class="d-flex justify-content-between">
                          <span class="title">照燒豬肋排x{{ order['肋排'] }}</span>
                        </li>
                        <li v-if="order['佛跳牆']" class="d-flex justify-content-between">
                          <span class="title">佛跳牆x{{ order['佛跳牆'] }}</span>
                        </li>
                        <li v-if="order['燉雞']" class="d-flex justify-content-between">
                          <span class="title">排翅燉全雞x{{ order['燉雞'] }}</span>
                        </li>
                        <li v-if="order['蛋糕']" class="d-flex justify-content-between">
                          <span class="title">冰淇淋泡芙x{{ order['蛋糕'] }}</span>
                        </li>
                      </ul>
                    </template>
                </div>
              
                <div class="fs-5">
                  <div class="note">備註：</div>
                  {{ order["廚房備註"] }}
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
import { getOrderDoc } from '@/assets/js/mothersday/getOrderDoc';

export default {
  name: 'Print_Customer',
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
    async getSheet() {
      const orderDoc = await getOrderDoc();
      
      let orderSheet = orderDoc.sheetsByTitle["初二內用"];
      if (this.$route.params.date == "0203") { 
        orderSheet = orderDoc.sheetsByTitle["初三內用"];
      }
      if (this.$route.params.date == "0204") { 
        orderSheet = orderDoc.sheetsByTitle["初四內用"];
      }

      this.rows = await orderSheet.getRows();

      let _page = [];
      let _printOrders = this.rows;
      //清單
      for (let index = 0; index < _printOrders.length; index++) {
        const ele = _printOrders[index];
        
        ele["price"] = ele["總金額"] - ele["已收款"];
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
    font-size: 21.5px;
    line-height: 1.1;
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