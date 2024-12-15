<template>
  <div class="home">
    <main class="flex-shrink-0">
      <!-- <div class="homePic">
        <img class="w-100" src="img/home_pic.svg">
      </div> -->
      <div class="container">
        <div class="title mt-3 mb-4 text-center">
          <!-- <h1 style="color: #870303;">三葉餐廳</h1> -->
          <h2>過年訂單查詢系統</h2>
        </div>
        <form action class="mb-4">
          <div class="search-input input-group mb-3">
            <input
              type="tel"
              :readonly="searchKeyDisable"
              pattern="\d*"
              inputmode="numeric"
              class="form-control"
              placeholder="請輸入電話"
              aria-label="Search"
              style="font-size: 1.6rem"
              v-model="searchKey"
              @keydown.enter.prevent="doSearch"
              required
              autofocus
              ref="cellphone"
            />
            <button v-if="isLoading==0" @click="doSearch" class="btn btn-danger btn-lg" type="button">搜尋</button>
            <button v-else class="btn btn-danger btn-lg" type="button" disabled>
              <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
              尋找中...
            </button>
          </div>
        </form>
        <!--搜尋結果-->
        <template v-if="isLoading==1">
          <div class="text-center">
            <img src="img/searching.gif">
          </div>
        </template>
        <template v-else>
          <template v-if="isSearching==2">
            <div class="d-grid">
              <div class="mb-4 fs-2 text-result text-wrap">—— 以下為查詢結果 ——</div>

              <div class="row row-cols-1 row-cols-md-2 g-4" ref="orderList">
                <div v-for="(item, index) in found.all" :key="'data-' + index" class="col">
                  <div class="card mb-3 fs-4">
                    <div class="card-header"># 第{{ index+1 }}筆{{ found.all.length > 1 ? ' / 共' + found.all.length + '筆' : '' }}</div>
                    <div class="card-body">
                      <template v-if="item.dataType == 'togo'">
                        <h5 class="card-title">⟪ {{ item["外帶預定日期"] + item.dataName }} ⟫</h5>
                        <div>取餐姓名：{{ item["外帶取餐姓名"] }}
                          <i v-if="item['回電']" class="bi bi-check2-circle text-success fs-2"></i>
                        </div>
                        <div>聯絡手機：<a :href="'tel:' + item['聯絡手機']">{{ item["聯絡手機"] }}</a></div>
                        <div>取餐日期：{{ item["外帶預定日期"] }}</div>
                        <div>取餐時間：{{ item["外帶取菜時間 (請看以下說明再選擇)"] }}</div>
                        <!-- <div class="text-danger">
                          <span style=" font-size: 25px;font-weight: bold;">取餐編號：</span>
                          <span style="border: 5px solid;font-size: 35px;padding: 0 5px;">{{ item["外帶編號"] }}</span>
                        </div> -->
                        <!-- <div class="text-danger" v-if="item['外帶預定日期']=='1/28 除夕'">
                          <span style=" font-size: 25px;font-weight: bold;">除夕取餐編號：</span>
                          <span style="border: 5px solid;font-size: 35px;padding: 0 5px;">{{ item["外帶編號"] }}</span>
                        </div>
                        <div class="text-danger" v-if="item['外帶預定日期']=='1/30 初二'">
                            <span style=" font-size: 25px;font-weight: bold;">初二取餐編號：</span>
                            <span style="border: 5px solid;font-size: 35px;padding: 0 5px;">
                              {{ (item["外帶取菜時間 (請看以下說明再選擇)"] < "12:00") ? "午" : "晚" }}{{ item["外帶編號"] }}
                            </span>
                        </div> -->
                        <hr>
                        <div class="fs-5">預定內容：</div>
                        <div class="fs-5">
                          <template v-if="item['6380'] || item['7680']">
                            【合菜】
                            <ul>
                              <li v-if="item['6380']">6380 X {{ item['6380'] }} 組</li>
                              <li v-if="item['7680']">7680 X {{ item['7680'] }} 組</li>
                            </ul>
                          </template>
                          <template
                          v-if="
                            item['五福'] || item['海鮮羹'] || item['海大蝦'] || item['小龍蝦'] ||
                            item['石斑'] || item['干貝'] || item['鮑魚'] || item['雞米糕'] || item['鰻米糕'] ||
                            item['紅燒蹄'] || item['肋排'] || item['佛跳牆'] || item['燉雞'] || item['甜點']">
                            【單點】
                            <ul class="order-list">
                              <li v-if="item['五福']">
                                <span class="title">五福臨門冷拼盤 X {{ item['五福'] }} 份</span>
                                <span class="price">${{ 720*item['五福'] }}</span>
                              </li>
                              <li v-if="item['海鮮羹']">
                                <span class="title">鴻運發財海鮮羹 X {{ item['海鮮羹'] }} 份</span>
                                <span class="price">${{ 480*item['海鮮羹'] }}</span>
                              </li>
                              <li v-if="item['海大蝦']">
                                <span class="title">蒜味白灼海老蝦 X {{ item['海大蝦'] }} 份</span>
                                <span class="price">${{ 1200*item['海大蝦'] }}</span>
                              </li>
                              <li v-if="item['小龍蝦']">
                                <span class="title">現撈小龍蝦沙拉 X {{ item['小龍蝦'] }} 份</span>
                                <span class="price">${{ 2200*item['小龍蝦'] }}</span>
                              </li>
                              <li v-if="item['石斑']">
                                <span class="title">清蒸魚露海石斑 X {{ item['石斑'] }} 份</span>
                                <span class="price">${{ 760*item['石斑'] }}</span>
                              </li>
                              <li v-if="item['干貝']">
                                <span class="title">焗烤日本干貝塔 X {{ item['干貝'] }} 份</span>
                                <span class="price">${{ 760*item['干貝'] }}</span>
                              </li>
                              <li v-if="item['鮑魚']">
                                <span class="title">菇菇蜜汁活鮑魚 X {{ item['鮑魚'] }} 份</span>
                                <span class="price">${{ 860*item['鮑魚'] }}</span>
                              </li>
                              <li v-if="item['雞米糕']">
                                <span class="title">麻油雞米糕雙拼 X {{ item['雞米糕'] }} 份</span>
                                <span class="price">${{ 560*item['雞米糕'] }}</span>
                              </li>
                              <li v-if="item['鰻米糕']">
                                <span class="title">蒲燒鰻米糕雙拼 X {{ item['鰻米糕'] }} 份</span>
                                <span class="price">${{ 660*item['鰻米糕'] }}</span>
                              </li>
                              <li v-if="item['紅燒蹄']">
                                <span class="title">富貴滿堂紅燒蹄 X {{ item['紅燒蹄'] }} 份</span>
                                <span class="price">${{ 500*item['紅燒蹄'] }}</span>
                              </li>
                              <li v-if="item['肋排']">
                                <span class="title">照燒豬肋排 X {{ item['肋排'] }} 份</span>
                                <span class="price">${{ 680*item['肋排'] }}</span>
                              </li>
                              <li v-if="item['佛跳牆']">
                                <span class="title">干貝栗子佛跳牆 X {{ item['佛跳牆'] }} 份</span>
                                <span class="price">${{ 680*item['佛跳牆'] }}</span>
                              </li>
                              <li v-if="item['燉雞']">
                                <span class="title">排翅鮑貝燉全雞 X {{ item['燉雞'] }} 份</span>
                                <span class="price">${{ 1600*item['燉雞'] }}</span>
                              </li>
                              <li v-if="item['甜點']">
                                <span class="title">菠蘿泡芙藏冰心 X {{ item['甜點'] }} 份</span>
                                <span class="price">${{ 360*item['甜點'] }}</span>
                              </li>
                            </ul>
                          </template>
                        </div>
                        <hr />
                        <div class="fs-5">
                          備註：{{ item['備註'] ? item['備註'] : "無" }}
                        </div>
                      </template>
                      <template v-if="item.dataType == 'here'">
                        <h5 class="card-title">⟪ {{ item["內用用餐日期"] + item.dataName }} ⟫</h5>
                        <div>訂桌姓名：{{ item["內用訂桌姓名"] }}</div>
                        <div>聯絡手機：<a :href="'tel:' + item['聯絡手機']">{{ item["聯絡手機"] }}</a></div>
                        <div>用餐日期：{{ item["內用用餐日期"] }}</div>
                        <div>用餐時段：{{ item["內用用餐時段"] }}</div>
                        <hr>
                        <template v-if="item['6380'] || item['7680']">
                          <div class="fs-5">
                            預訂內容：
                            <p v-if="item['6380']">6380 X {{ item['6380'] }} 桌</p>
                            <p v-if="item['7680']">7680 X {{ item['7680'] }} 桌</p>
                          </div>
                        </template>
                        <hr />
                        <div class="fs-5">
                          備註：{{ item['備註'] ? item['備註'] : "無" }}
                        </div>
                      </template>
                    </div>
                    <div
                      class="card-footer text-white"
                      style="background-color: #474747"
                    >
                      <div class="fs-5">總金額：${{ item['總金額'] }}</div>
                      <div class="fs-5">付款狀態：
                        <span v-if="getPayStatus(item)==1">
                          已付清<i class="bi bi-check2-circle text-success fs-2"></i>
                        </span>
                        <span v-else-if="getPayStatus(item)==0">尚未付款</span>
                        <span v-else v-html="getPayStatus(item)"></span>
                      </div>
                    </div>
                  </div>
                  <template v-if="getPayStatus(item)==0">
                    <div class="alert alert-danger alert-dismissible fade show" role="alert">
                      <span class="alert-heading fs-1">提醒您目前尚未付款</span>
                      <p>
                        為避免當日結帳排隊久候，建議您於除夕前先將款項結清！<br>
                        1. 於除夕前到餐廳付現結清<br>
                        2. 匯款付款
                        <hr>
                        <p class="fs-4">
                          【匯款資訊】<br>
                          華南銀行(008)<br>
                          戶名:三葉小吃部<br>
                          帳號:830100165698
                        </p>
                        <hr>
                        ⚠️ 請在匯款完成後<br>line回傳以下資訊以便查帳唷！<br>
                        1. 訂購姓名或電話<br>
                        2. 帳號末五碼
                      </p>
                    </div>
                  </template>
                  <a type="button" class="btn btn-success" href="https://lin.ee/o1Ei1J6">加入三葉Line好友<i class="bi bi-line"></i></a>
                </div>
              </div>
            </div>
          </template>
          <template v-else-if="isSearching==3">
            <div class="text-center fs-1">
              查不到此電話的訂單<br>請換支電話查詢<br>或撥打<a href="tel:+88689325261">089-325261</a>
             </div>
          </template>
        </template>
      </div>

      <div class="container py-3">
        <div class="mb-3 text-center fw-bold fs-5" style="color: #fff;">如需要更改或取消訂單，請聯繫我們！</div>
        <div class="text-center">
          <a href="tel:+88689325261" class="btn btn-dark btnTel" type="button">☎ 立即通話</a>
        </div>
      </div>

      <div class="container py-3">
        <div class="text-center fs-3 fw-bold" style="color: #ffd700;">
          三葉餐廳｜ 電話：089-325261
        </div>
        <div class="text-center fs-3 fw-bold" style="color: #ffd700;">
          地址：<a href="https://maps.app.goo.gl/VyAU3dxPoK4bbLzM6" target="_blank" rel="noopener noreferrer">台東市中山路152號</a>
        </div>
        <!-- <div>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3679.1816224661848!2d121.1537342!3d22.758640099999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x346fb940cd63f79d%3A0x4f9fe13a10091460!2zOTUw5Y-w5p2x57ij5Y-w5p2x5biC5Lit5bGx6LevMTUy6Jmf!5e0!3m2!1szh-TW!2stw!4v1734281842266!5m2!1szh-TW!2stw" width="100%" min-height="300" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div> -->
      </div>
    </main>
  </div>
</template>

<script>
import { getOrderDoc } from '@/assets/js/new-year/getOrderDoc';

export default {
  name: 'Home',
  data() {
    return {
      isLoading: 0,
      //0:init, 1:wait, 2:done, 3:null
      isSearching: 0,
      searchKey: "",
      searchKeyDisable: false,
      rows: {
        here: [],
        togo: []
      },
      found: {
        all: [],
        here: [],
        togo: []
      },
    }
  },
  computed: {
      
  },
  mounted() {
    setTimeout(() => {
      this.$refs.cellphone.click();
    }, 500);

    if (this.$route.params.cellphone) {
      this.searchKey = this.$route.params.cellphone;
      this.doSearch();
    }
  },
  methods: {
    getPayStatus(item) {
      const _remain = item['總金額'] - item['已收款'];

      if (_remain == 0) {
        return 1;
      } else if (item['已收款'] > 0 && _remain > 0) {
        return '已收款$' + item['已收款'] + ' 尚餘 $' + _remain;
      } else {
        return 0;
      }
    },
    //取得表單
    async get_HereSheet() {
      const orderDoc = await getOrderDoc();
      const orderSheet = orderDoc.sheetsByTitle["內用(原始回覆)"];
      this.rows.here = await orderSheet.getRows();
    },
    async get_togoSheet() {
      const orderDoc = await getOrderDoc();
      const orderSheet = orderDoc.sheetsByTitle["外帶(原始回覆)"];
      this.rows.togo = await orderSheet.getRows();
    },
    //搜尋
    async doSearch() {
      if (this.searchKey.length < 6) {
        alert("電話要完整喔！");
      } else if (this.isSearching !== 1) {
        this.$router.push({ name: 'Home',params: { cellphone: this.searchKey }}).catch(err=>(err));

        this.searchKeyDisable = true;
        this.isLoading = 1;
        this.isSearching = 1;
        //empty
        this.found = {
          all: [],
          here: [],
          togo: []
        }
        //access
        await this.get_HereSheet();
        await this.get_togoSheet();
        
        //搜尋外帶
        for (let index = 0; index < this.rows.togo.length; index++) {
          const formRow = this.rows.togo[index];

          if (this.searchKey == formRow["聯絡手機"]) {
            formRow.dataType = "togo";
            formRow.dataName = "外帶訂單";
            
            this.found.all.push(formRow);
            this.found.togo.push(formRow);
          }
        }
        //搜尋內用
        for (let index = 0; index < this.rows.here.length; index++) {
          const formRow = this.rows.here[index];
          
          if (formRow["用餐日期"] == "2/9 除夕") continue;

          if (this.searchKey == formRow["聯絡手機"]) {
            formRow.dataType = "here";
            formRow.dataName = "內用訂單";

            this.found.all.push(formRow);
            this.found.here.push(formRow);
          }
        }

        this.searchKeyDisable = false;
        this.isLoading = 0;
        this.isSearching = 2;

        this.$nextTick(function () {
          this.$smoothScroll({
            scrollTo: this.$refs.orderList,
            hash: '#sampleHash'  // required if updateHistory is true
          })
        });
        

        if (this.found.all.length == 0) {
        this.isSearching = 3;
          alert("查不到此電話的訂單\n請換支電話查詢\n或撥打089-325261");
        }
      }
    }
  }
}
</script>
<style>
.home{
  margin: 30px 0;
  padding: 40px 0;
  /* background-color: #b22222; */
  /* background-image: url('../..//public/img/background.png'); */
  background-attachment: fixed;
  background-position: center;
  background-size: cover;
}
h1{
  font-family: 'Noto Serif TC', serif;
  font-weight: 900;
  font-size: calc(2.2em + 1.5vw);
  letter-spacing: 8px;
  
}
h2{
  font-family: 'Noto Serif TC', serif;
  font-weight: 900;
  font-size: calc(2em + 1.5vw);
  text-shadow: 2px 2px 0px #000;
  color: #ffd700;
}
.text-result{
  text-align: center;
  background-color: #588D62;
  color: #fff;
  border: solid 1px #fff;
}
.homePic{
  margin: 15px auto 30px;
  padding-left: 20px;
  width: 330px;
}
.search-input{
  box-shadow: 0 0 0 5px white;
  border: 4px dashed #800080;
  background: #fff;
}
.search-input input{
  padding: 10px 32px;
  border-radius: 0px;
}
.search-input .btn{
  padding: 10px 25px;
  border-radius: 0px;
  background-color: #ffd700;
  color: #800080;
  font-weight: bold;
  border-color: #ffd700;
  border-left: 4px dashed #800080;
  
}
.btnTel{
  padding: 15px;
  background-color: #ffd700;
  border: 2px solid #b89cc4;
  color: #000 ;
  font-size: 1.3rem;
}
.order-list {
  padding-left: 0.5rem;
}

.order-list li {
  display: flex;
}

.order-list li .title {
  order: 1;
}

.order-list li .price {
  order: 3;
}

.order-list li::after {
  background-image: radial-gradient(circle, currentcolor 1px, transparent 1.5px);
  background-position: bottom;
  background-size: 1ex 4.5px;
  background-repeat: space no-repeat;
  content: "";
  flex-grow: 1;
  height: 1em;
  order: 2;
}
</style>