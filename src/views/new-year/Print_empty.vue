<template>
  <div class="page">
    <div class="subpage row g-0 h-100">
      <template v-if="rows['6380'] > 0">
        <div v-for="n in rows['6380']" :key="'a-' + n" class="col-4 card-group fw-bold">
          <div class="order card">
            <div class="card-header p-4"></div>
            <div class="card-body">
              <div class="fs-2">
                <div class="text-center fs-3">6380</div>
                <div>五福拼盤</div>
                <div>鴻運海鮮羹</div>
                <div>白灼海大蝦</div>
                <div>清蒸石斑</div>
                <div>黃金干貝塔</div>
                <div>菇菇蜜鮑魚</div>
                <div>麻油雞米雙</div>
                <div>照燒豬肋排</div>
                <div>佛跳牆</div>
                <div>果凍</div>
              </div>
            </div>
            <div class="card-footer">
              <div class="note pb-4">備註：</div>
            </div>
          </div>
        </div>
      </template>
      <template v-if="rows['7680'] > 0">
        <div v-for="n in rows['7680']" :key="'b-' + n" :id="'b-' + n" class="col-4 card-group fw-bold">
          <div class="order card">
            <div class="card-header p-4"></div>
            <div class="card-body">
              <div class="fs-2">
                <div class="text-center fs-3">7680</div>
                <div>五福拼盤</div>
                <div>鴻運海鮮羹</div>
                <div>小龍蝦沙拉</div>
                <div>清蒸石斑</div>
                <div>黃金干貝塔</div>
                <div>菇菇蜜鮑魚</div>
                <div>鰻魚米糕雙</div>
                <div>照燒豬肋排</div>
                <div>排翅燉全雞</div>
                <div>泡芙</div>
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
    if (this.$route.query["6380"] || this.$route.query["7680"]) { 
      this.rows["6380"] = parseInt(this.$route.query["6380"]);
      this.rows["7680"] = parseInt(this.$route.query["7680"]);
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