<template>
  <div>
    <template v-for="(page, pageIndex) in pages">
      <div :key="'page-' + (pageIndex+1)" :id="'page_' + (pageIndex+1)" class="page">
        <div class="subpage row g-0 h-100">
          <div v-for="(order, orderIndex) in page" :key="'order-' + orderIndex" class="col-4 card-group fw-bold">
            <div class="order card">
              <div class="card-header d-flex justify-content-between">
                <div class="fs-4">
                  {{ order["內用用餐日期"].substr(0, order["內用用餐日期"].length - 3) }}
                  {{ order["時段代碼"].substr(0, 1) }}
                </div>
                <div class="fs-2">{{ order["內用訂桌姓名"] }}</div>
              </div>
              <div class="card-body">
                <div v-if="order['6380'] > 0 || order['7680'] > 0" class="pb-3">
                  <div v-if="order['6380'] > 0" class="fs-3">6380<span>×{{ order['6380'] }}</span></div>
                  <div v-if="order['7680'] > 0" class="fs-3">7680<span>×{{ order['7680'] }}</span></div>
                </div>
                <div v-if="order['素食套餐'] > 0">
                  <div class="fs-3">素食 $400<span>×{{ order['素食套餐'] }}</span></div>
                </div>
                <div v-if="order['6380'] > 0 || order['7680'] > 0" class="pb-5">
                  <div class="fs-3">飲料 $70<span>×</span></div>
                </div>
                
                <div class="pt-5">
                  <div class="note">備註：</div>
                  <p class="fs-3">{{ order["櫃台備註"] }}</p>
                </div>
              </div>
              <div class="card-footer">
                <div>
                  <div class="fs-2">合計: </div>
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
      
      if (this.$route.params.date == "212") { 
        orderSheet = orderDoc.sheetsByTitle["初三內用"];
      }
      if (this.$route.params.date == "213") { 
        orderSheet = orderDoc.sheetsByTitle["初四內用"];
      }

      this.rows = await orderSheet.getRows();

      let _customOrderList = [];
      let _customOrders = [];
      if (this.$route.query.custom) {
        _customOrderList = this.$route.query.custom.split(",");
        
        if (_customOrderList.length > 0) {
          for (let index = 0; index < this.rows.length; index++) {
            const ele = this.rows[index];
            
            let _checkNumber = ele["內用訂桌姓名"];
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