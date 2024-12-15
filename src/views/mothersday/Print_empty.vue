<template>
  <div class="page">
    <div class="subpage row g-0 h-100">
      <template v-if="rows['3000'] > 0">
        <div v-for="n in rows['3000']" :key="'a-' + n" class="col-4 card-group fw-bold">
          <div class="order card">
            <div class="card-header p-4"></div>
            <div class="card-body">
              <div class="fs-3">
                <div class="text-center fs-4 mb-2">溫馨家庭套餐 $3000</div>
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
            </div>
            <div class="card-footer">
              <div class="note pb-4">備註：</div>
            </div>
          </div>
        </div>
      </template>
      <template v-if="rows['4000'] > 0">
        <div v-for="n in rows['4000']" :key="'b-' + n" :id="'b-' + n" class="col-4 card-group fw-bold">
          <div class="order card">
            <div class="card-header p-4"></div>
            <div class="card-body">
              <div class="fs-3">
                <div class="text-center fs-4 mb-2">呵護媽咪套餐 $4000</div>
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
            </div>
            <div class="card-footer">
              <div class="note pb-4">備註：</div>
            </div>
          </div>
        </div>
      </template>
      <template v-if="rows['5000'] > 0">
        <div v-for="n in rows['5000']" :key="'c-' + n" :id="'c-' + n" class="col-4 card-group fw-bold">
          <div class="order card">
            <div class="card-header p-4"></div>
            <div class="card-body">
              <div class="fs-3">
                <div class="text-center fs-4 mb-2">寵愛媽咪套餐 $5000</div>
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
            <div class="card-footer">
              <div class="note pb-4">備註：</div>
            </div>
          </div>
        </div>
      </template>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Print_Empty',
  data() {
    return {
      rows: {}
    }
  },
  created() {
    if (this.$route.query["3000"] || this.$route.query["4000"] || this.$route.query["5000"]) { 
      this.rows["3000"] = parseInt(this.$route.query["3000"]);
      this.rows["4000"] = parseInt(this.$route.query["4000"]);
      this.rows["5000"] = parseInt(this.$route.query["5000"]);
    }
  },
  mounted() {
    this.paperPrint();
  },
  methods: {
    async paperPrint() {
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
.page .order{
  margin: -1px;
  border-radius: 0px;
  height: 558px;
}
.page .order .card-footer, .card-header{
  background-color: #fff;
  border-top: 1px solid #000;
  border-bottom: 1px solid #000;
    border-radius: 0px;
}
.page .order .card-footer, .card-header, .card-body{
  padding: 8px;
}
.page .order .card-body .note{
  margin-top: 10px;
  padding-top: 5px;
  border-top: 2px solid;
}
.order-list{
  padding: 0;
  margin: 0;
}
.order-list li::after{
    background-image: radial-gradient(circle, currentcolor 0.5px, transparent 1.5px);
    background-size: .6ex 10px;
}
.subpage {
    /* height: calc(297mm - 1px);
    border-collapse: collapse; */
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