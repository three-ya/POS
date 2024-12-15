<template>
  <div class="book">
    <div class="list-group">
      <li class="list-group-item list-group-item-action">
        <router-link :to="{ path: '/print/new-year/128/customer', query: { custom: customNumber[128] }}" target="_blank">除夕顧客單</router-link>
        <label class="form-check-label" for="print-128-customer-custom">輸入編號</label>
        <input type="text" id="print-128-customer-custom" v-model="customNumber[128]">
      </li>
      <li class="list-group-item list-group-item-action">
        <router-link :to="{ path: '/print/new-year/128/threeya', query: { custom: customNumber[128] }}" target="_blank">除夕留存單</router-link>
        <label class="form-check-label" for="print-128-threeya-custom">輸入編號</label>
        <input type="text" id="print-128-threeya-custom" v-model="customNumber[128]">
      </li>
      <li class="list-group-item list-group-item-action">
        <router-link :to="{ path: '/print/new-year/130/customer', query: { custom: customNumber[130] }}" target="_blank">初二顧客單</router-link>
        <label class="form-check-label" for="print-130-customer-custom">輸入編號</label>
        <input type="text" id="print-130-customer-custom" v-model="customNumber[130]">
      </li>
      <li class="list-group-item list-group-item-action">
        <router-link :to="{ path: '/print/new-year/130/threeya', query: { custom: customNumber[130] }}" target="_blank">初二留存單</router-link>
        <label class="form-check-label" for="print-130-threeya-custom">輸入編號</label>
        <input type="text" id="print-130-threeya-custom" v-model="customNumber[130]">
      </li>

      <li class="list-group-item list-group-item-action">
        <router-link :to="{ path: '/print/new-year/131/customer', query: { custom: customNumber[131] }}" target="_blank">初三顧客單</router-link>
        <label class="form-check-label" for="print-131-customer-custom">輸入編號</label>
        <input type="text" id="print-131-customer-custom" v-model="customNumber[131]">
      </li>
      <li class="list-group-item list-group-item-action">
        <router-link :to="{ path: '/print/new-year/131/threeya', query: { custom: customNumber[131] }}" target="_blank">初三留存單</router-link>
        <label class="form-check-label" for="print-131-threeya-custom">輸入編號</label>
        <input type="text" id="print-131-threeya-custom" v-model="customNumber[131]">
      </li>

      <!-- <li class="list-group-item list-group-item-action">
        <router-link :to="{ path: '/print/0204/customer', query: { custom: customNumber[204] }}" target="_blank">初四顧客單</router-link>
        <label class="form-check-label" for="print-0204-customer-custom">輸入編號</label>
        <input type="text" id="print-0204-customer-custom" v-model="customNumber[204]">
      </li>
      <li class="list-group-item list-group-item-action">
        <router-link :to="{ path: '/print/0204/threeya', query: { custom: customNumber[204] }}" target="_blank">初四留存單</router-link>
        <label class="form-check-label" for="print-0204-threeya-custom">輸入編號</label>
        <input type="text" id="print-0204-threeya-custom" v-model="customNumber[204]">
      </li> -->
      
      <li class="list-group-item list-group-item-action">
        <router-link :to="{ path: '/print/new-year/130/inside-up', query: { custom: customNumber['inside130'] } }" target="_blank">初二內用單 - 出餐</router-link>
        <label class="form-check-label" for="print-130-customer-custom">輸入名字</label>
        <input type="text" id="print-130-customer-custom" v-model="customNumber['inside130']">
      </li>
      <li class="list-group-item list-group-item-action">
        <router-link :to="{ path: '/print/new-year/130/inside-down', query: { custom: customNumber['inside130'] } }" target="_blank">初二內用單 - 櫃台</router-link>
        <label class="form-check-label" for="print-130-customer-custom">輸入名字</label>
        <input type="text" id="print-130-customer-custom" v-model="customNumber['inside130']">
      </li>

      <li class="list-group-item list-group-item-action">
        <router-link :to="{ path: '/print/new-year/131/inside-up', query: { custom: customNumber['inside131'] } }" target="_blank">初三內用單 - 出餐</router-link>
        <label class="form-check-label" for="print-131-customer-custom">輸入名字</label>
        <input type="text" id="print-131-customer-custom" v-model="customNumber['inside131']">
      </li>
      <li class="list-group-item list-group-item-action">
        <router-link :to="{ path: '/print/new-year/131/inside-down', query: { custom: customNumber['inside131'] }  }" target="_blank">初三內用單 - 櫃台</router-link>
        <label class="form-check-label" for="print-131-customer-custom">輸入名字</label>
        <input type="text" id="print-131-customer-custom" v-model="customNumber['inside131']">
      </li>
      
      <li class="list-group-item list-group-item-action">
        <router-link :to="{ path: '/print/new-year/empty', query: { 6380: customNumber.empty[6380], 7680: (6 - customNumber.empty[6380]) } }" target="_blank">內用空白單</router-link>
        <label class="form-check-label mx-1" for="print-130-threeya-custom">6380 ×</label>
        <input type="text" class="me-1" v-model="customNumber.empty[6380]" size="1">
        <label class="form-check-label" for="print-130-threeya-custom">7680 ×</label>
        <span>{{ 6 - customNumber.empty[6380] }}</span>
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
        128: "",
        130: "",
        inside130: "",
        131: "",
        201: "",
        empty: {
          6380: 0
        }
      }
    }
  },
  mounted() {

  },
  methods: {
    open_customer(date) {
      this.$router.push({ path: '/print/new-year/' + date + '/customer', query: { custom: this.customNumber[128] }});
    }
  }
}
</script>