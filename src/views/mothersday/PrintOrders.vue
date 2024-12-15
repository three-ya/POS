<template>
  <div class="book">
    <div class="list-group">
      <li class="list-group-item list-group-item-action">
        <router-link :to="{ path: '/print/mothersday/0507/customer', query: { custom: customNumber[507] }}" target="_blank">5/7(六)顧客單</router-link>
        <label class="form-check-label" for="print-0507-customer-custom">輸入姓名</label>
        <input type="text" id="print-0507-customer-custom" v-model="customNumber[507]">
      </li>
      <li class="list-group-item list-group-item-action">
        <router-link :to="{ path: '/print/mothersday/0507/threeya', query: { custom: customNumber[507] }}" target="_blank">5/7(六)留存單</router-link>
        <label class="form-check-label" for="print-0507-threeya-custom">輸入姓名</label>
        <input type="text" id="print-0507-threeya-custom" v-model="customNumber[507]">
      </li>

      <li class="list-group-item list-group-item-action">
        <router-link :to="{ path: '/print/mothersday/0508/customer', query: { custom: customNumber[508] }}" target="_blank">5/8(日)顧客單</router-link>
        <label class="form-check-label" for="print-0508-customer-custom">輸入姓名</label>
        <input type="text" id="print-0508-customer-custom" v-model="customNumber[508]">
      </li>
      <li class="list-group-item list-group-item-action">
        <router-link :to="{ path: '/print/mothersday/0508/threeya', query: { custom: customNumber[508] }}" target="_blank">5/8(日)留存單</router-link>
        <label class="form-check-label" for="print-0508-threeya-custom">輸入姓名</label>
        <input type="text" id="print-0508-threeya-custom" v-model="customNumber[508]">
      </li>
      
      <li class="list-group-item list-group-item-action">
        <router-link :to="{ path: '/print/mothersday/empty', query: { 3000: customNumber.empty[3000], 4000: (customNumber.empty[4000]), 5000: (6 - customNumber.empty[3000] - customNumber.empty[4000]) } }" target="_blank">內用空白單</router-link>
        <label class="form-check-label mx-1">3000 ×</label>
        <input type="number" class="me-1" v-model="customNumber.empty[3000]" size="1">
        <label class="form-check-label">4000 ×</label>
        <input type="number" class="me-1" v-model="customNumber.empty[4000]" size="1">
        <label class="form-check-label">5000 ×</label>
        <span>{{ 6 - customNumber.empty[3000] - customNumber.empty[4000] }}</span>
      </li>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PrintOrders',
  data() {
    return {
      customNumber: {
        507: "",
        508: "",
        empty: {
          3000: 0,
          4000: 0,
          5000: 0
        }
      }
    }
  }
}
</script>