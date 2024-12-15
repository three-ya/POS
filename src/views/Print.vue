<template>
  <router-view class="book"></router-view>
</template>

<script>
export default {
  name: 'Print'
}
</script>
<style>
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
</style>