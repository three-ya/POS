<template>
  <div>
    <template v-for="(page, pageIndex) in pages">
      <div :key="'page-' + (pageIndex+1)" :id="'page_' + (pageIndex+1)" class="page">
        <div class="subpage row g-0 h-100">
          <div v-for="(order, orderIndex) in page" :key="'order-' + orderIndex" class="col-4 card-group">
            <div class="order card">
              <div class="card-header d-flex justify-content-between">
                <div>
                  <span class="fs-3 fw-bold">{{ order["取餐日期"] }}</span><br>
                  <span class="fs-5 fw-bold">{{ order["取餐時間"]=="中午(10:30 ~ 11:30)" ? "午" : "晚" }}{{ order["幾點取餐"] }}</span>
                </div>
                <div class="fs-3 fw-bold">{{ order["取餐姓名"] }}</div>
              </div>
              <div class="card-body">
                <div>
                  <div v-if="order['$3000'] > 0">
                    <div class="text-center fs-4">$3000<span>×{{ order['$3000'] }}</span></div>
                    <div>四色拼盤</div>
                    <div>鴻運海鮮羹</div>
                    <div>白灼海大蝦(10)</div>
                    <div>清蒸鱸魚</div>
                    <div>蒜蓉鮑魚</div>
                    <div>鰻魚米糕</div>
                    <div>干貝四寶湯</div>
                    <div>添壽豬腳麵線</div>
                    <div>益生菌果凍</div>
                    <div>附免洗餐具</div>
                  </div>
                  
                  <div v-if="order['$4000'] > 0">
                    <div class="text-center fs-4">$4000<span>×{{ order['$4000'] }}</span></div>
                    <div>五福臨門冷拼盤</div>
                    <div>鴻運海鮮羹</div>
                    <div>白灼海大蝦</div>
                    <div>麻油雞米糕</div>
                    <div>清蒸花鯧</div>
                    <div>蜜汁九孔</div>
                    <div>焗烤海鮮塔雙拼</div>
                    <div>照燒豬肋排</div>
                    <div>人參清燉雞湯</div>
                    <div>添壽豬腳麵線</div>
                    <div>益生菌果凍</div>
                    <div>附免洗餐具</div>
                  </div>
                  
                  <div v-if="order['$5000'] > 0">
                    <div class="text-center fs-4">$5000<span>×{{ order['$5000'] }}</span></div>
                    <div>龍蝦沙拉美大拚</div>
                    <div>鴻運海鮮羹</div>
                    <div>白灼海大蝦</div>
                    <div>蒲燒鰻魚米糕</div>
                    <div>清蒸海石斑</div>
                    <div>蒜蓉鮑魚</div>
                    <div>焗烤海鮮塔雙拼</div>
                    <div>照燒豬肋排</div>
                    <div>人參清燉雞湯</div>
                    <div>添壽豬腳麵線</div>
                    <div>益生菌果凍</div>
                    <div>附免洗餐具</div>
                  </div>
                </div>
                <div>
                  <template
                    v-if="
                    order['五福 $580'] || order['龍蝦大拼 $1200'] || order['羹(小) $320'] || order['羹(大) $400'] || order['海大蝦 $720'] ||
                    order['雞米 $400'] || order['鰻米 $480'] || order['鱸魚 $380'] || order['花鯧 $480'] || order['石斑 $720'] ||
                    order['鮑魚(5) $480'] || order['九孔 $720'] || order['鮑魚(10) $800'] || order['肋排 $580'] || order['海鮮塔 $480'] ||
                    order['四寶湯 $400'] || order['雞湯 $580'] || order['豬腳麵線 $300']">
                    <div class="text-center fs-4">===單點===</div>
                    <ul class="order-list">
                      <li v-if="order['五福 $580']" class="d-flex justify-content-between">
                        <span class="title">五福臨門冷拼盤x{{ order['五福 $580'] }}</span>
                        <span class="price">${{ 580*order['五福 $580'] }}</span>
                      </li>
                      <li v-if="order['龍蝦大拼 $1200']" class="d-flex justify-content-between">
                        <span class="title">龍蝦沙拉美大拚x{{ order['龍蝦大拼 $1200'] }}</span>
                        <span class="price">${{ 1200*order['龍蝦大拼 $1200'] }}</span>
                      </li>
                      <li v-if="order['羹(小) $320']" class="d-flex justify-content-between">
                        <span class="title">鴻運海鮮羹(小)x{{ order['羹(小) $320'] }}</span>
                        <span class="price">${{ 320*order['羹(小) $320'] }}</span>
                      </li>
                      <li v-if="order['羹(大) $400']" class="d-flex justify-content-between">
                        <span class="title">鴻運海鮮羹(大)x{{ order['羹(大) $400'] }}</span>
                        <span class="price">${{ 400*order['羹(大) $400'] }}</span>
                      </li>
                      <li v-if="order['海大蝦 $720']" class="d-flex justify-content-between">
                        <span class="title">白灼海大蝦x{{ order['海大蝦 $720'] }}</span>
                        <span class="price">${{ 720*order['海大蝦 $720'] }}</span>
                      </li>
                      <li v-if="order['雞米 $400']" class="d-flex justify-content-between">
                        <span class="title">麻油雞米糕x{{ order['雞米 $400'] }}</span>
                        <span class="price">${{ 400*order['雞米 $400'] }}</span>
                      </li>
                      <li v-if="order['鰻米 $480']" class="d-flex justify-content-between">
                        <span class="title">鰻魚米糕x{{ order['鰻米 $480'] }}</span>
                        <span class="price">${{ 480*order['鰻米 $480'] }}</span>
                      </li>
                      <li v-if="order['鱸魚 $380']" class="d-flex justify-content-between">
                        <span class="title">清蒸鱸魚x{{ order['鱸魚 $380'] }}</span>
                        <span class="price">${{ 380*order['鱸魚 $380'] }}</span>
                      </li>
                      <li v-if="order['花鯧 $480']" class="d-flex justify-content-between">
                        <span class="title">清蒸花鯧x{{ order['花鯧 $480'] }}</span>
                        <span class="price">${{ 480*order['花鯧 $480'] }}</span>
                      </li>
                      <li v-if="order['石斑 $720']" class="d-flex justify-content-between">
                        <span class="title">清蒸海石斑x{{ order['石斑 $720'] }}</span>
                        <span class="price">${{ 720*order['石斑 $720'] }}</span>
                      </li>
                      <li v-if="order['鮑魚(5) $480']" class="d-flex justify-content-between">
                        <span class="title">蒜蓉鮑魚(5)x{{ order['鮑魚(5) $480'] }}</span>
                        <span class="price">${{ 480*order['鮑魚(5) $480'] }}</span>
                      </li>
                      <li v-if="order['九孔 $720']" class="d-flex justify-content-between">
                        <span class="title">蜜汁九孔x{{ order['九孔 $720'] }}</span>
                        <span class="price">${{ 720*order['九孔 $720'] }}</span>
                      </li>
                      <li v-if="order['鮑魚(10) $800']" class="d-flex justify-content-between">
                        <span class="title">蒜蓉鮑魚(10)x{{ order['鮑魚(10) $800'] }}</span>
                        <span class="price">${{ 800*order['鮑魚(10) $800'] }}</span>
                      </li>
                      <li v-if="order['肋排 $580']" class="d-flex justify-content-between">
                        <span class="title">照燒豬肋排x{{ order['肋排 $580'] }}</span>
                        <span class="price">${{ 580*order['肋排 $580'] }}</span>
                      </li>
                      <li v-if="order['海鮮塔 $480']" class="d-flex justify-content-between">
                        <span class="title">焗烤海鮮塔雙拼x{{ order['海鮮塔 $480'] }}</span>
                        <span class="price">${{ 480*order['海鮮塔 $480'] }}</span>
                      </li>
                      <li v-if="order['四寶湯 $400']" class="d-flex justify-content-between">
                        <span class="title">干貝四寶湯x{{ order['四寶湯 $400'] }}</span>
                        <span class="price">${{ 400*order['四寶湯 $400'] }}</span>
                      </li>
                      <li v-if="order['雞湯 $580']" class="d-flex justify-content-between">
                        <span class="title">人參清燉雞湯x{{ order['雞湯 $580'] }}</span>
                        <span class="price">${{ 580*order['雞湯 $580'] }}</span>
                      </li>
                      <li v-if="order['豬腳麵線 $300']" class="d-flex justify-content-between">
                        <span class="title">添壽豬腳麵線x{{ order['豬腳麵線 $300'] }}</span>
                        <span class="price">${{ 300*order['豬腳麵線 $300'] }}</span>
                      </li>
                    </ul>
                  </template>
                </div>
              
                <div>
                  <div class="note">備註：</div>
                  {{ order["備註"] }}
                </div>
              </div>
              <div class="card-footer">
                <div class="d-flex justify-content-between">
                  <div>總金額:</div>
                  <div> ${{ order["總計"] }} </div>
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
      
      let orderSheet = orderDoc.sheetsByTitle["5/7 (六)"];
      if (this.$route.params.date == "0508") { 
        orderSheet = orderDoc.sheetsByTitle["5/8 (日)"];
      }

      this.rows = await orderSheet.getRows();
      
      let _customOrderList = [];
        let _customOrders = [];
      if (this.$route.query.custom) {
        _customOrderList = this.$route.query.custom.split(",");

        if (_customOrderList.length > 0) {
          for (let index = 0; index < this.rows.length; index++) {
            const ele = this.rows[index];

            let _checkNumber = ele["取餐姓名"];
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
    line-height: 1;
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