<template>
  <div class="home">
    <main class="flex-shrink-0">
      <div class="container">
        <h1 class="mt-5 mb-4 text-center" style="color: #960b0b">
          三葉餐廳 <br />
          2022年 過年訂單查詢系統
        </h1>
        <form action class="mb-4">
          <div class="input-group mb-3">
            <input
              type="tel"
              pattern="\d*"
              inputmode="numeric"
              class="form-control"
              placeholder="請輸入電話"
              aria-label="Search"
              style="padding: 16px; font-size: 1.2rem"
              v-model="searchKey"
              @keydown.enter.prevent="doSearch"
              required
            />
            <button v-if="isLoading==0" @click="doSearch" class="btn btn-dark btn-lg" type="button">送出</button>
            <button v-else class="btn btn-dark btn-lg" type="button" disabled>
              <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
              尋找中...
            </button>
          </div>
        </form>
        <!--搜尋結果-->
        <template v-if="isLoading==1">
          <div class="text-center">
            <div class="spinner-grow text-danger" style="width: 5rem; height: 5rem;" role="status">
              <span class="visually-hidden">Loading...</span>
            </div>
          </div>
        </template>
        <template v-else>
          <template v-if="isSearching==2">
            <div class="d-grid">
              <div class="mt-4 mb-4 fs-2 badge bg-success text-wrap">＝＝ 以下為查詢結果 ＝＝</div>

              <div class="row row-cols-1 row-cols-md-2 g-4">
                <div v-for="(item, index) in found.all" :key="'data-' + index" class="col">
                  <div class="card mb-3 fs-4">
                    <div class="card-header">#{{ index+1 }}</div>
                    <div class="card-body">
                      <template v-if="item.dataType == 'togo'">
                        <h5 class="card-title">⟪ {{ item["日期"] + item.dataName }} ⟫</h5>
                        <div>取餐姓名：{{ item["姓名"] }}</div>
                        <div>聯絡手機：<a :href="'tel:' + item['聯絡手機']">{{ item["聯絡手機"] }}</a></div>
                        <div>取餐日期：{{ item["日期"] }}</div>
                        <div>取餐時間：{{ item["時間"] }}</div>
                        <template v-if="item['日期']=='1/31 除夕'">
                          <div>
                            <div data-bs-toggle="modal" data-bs-target="#questionModal">
                              <span>除夕取餐編號：</span>
                              <span class="text-danger">尚未公佈&nbsp;<i class="bi-question-circle-fill"></i></span>
                            </div>
                          </div>
                        </template>
                        <hr>
                        <div class="fs-5">預定內容：</div>
                        <div class="fs-5">
                          <template v-if="item['5380'] || item['6380']">
                            【合菜】
                            <ul>
                              <li v-if="item['5380']">5380 X {{ item['5380'] }} 組</li>
                              <li v-if="item['6380']">6380 X {{ item['6380'] }} 組</li>
                            </ul>
                          </template>
                          <template
                          v-if="
                            item['五福'] || item['海鮮羹'] || item['海大蝦'] || item['小龍蝦'] ||
                            item['石斑'] || item['干貝'] || item['鮑魚'] || item['雞米糕'] || item['鰻米糕'] ||
                            item['紅燒蹄'] || item['佛跳牆'] || item['燉雞'] || item['蛋糕']">
                            【單點】
                            <ul>
                              <li v-if="item['五福']">五福臨門冷拼盤 X {{ item['五福'] }} 份</li>
                              <li v-if="item['海鮮羹']">鴻運發財海鮮羹 X {{ item['海鮮羹'] }} 份</li>
                              <li v-if="item['海大蝦']">蒜味白灼海大蝦 X {{ item['海大蝦'] }} 份</li>
                              <li v-if="item['小龍蝦']">沙律小龍蝦沙拉 X {{ item['小龍蝦'] }} 份</li>
                              <li v-if="item['石斑']">清蒸魚露海石斑 X {{ item['石斑'] }} 份</li>
                              <li v-if="item['干貝']">田園彩椒燴干貝 X {{ item['干貝'] }} 份</li>
                              <li v-if="item['鮑魚']">菇菇蜜鮑魚 X {{ item['鮑魚'] }} 份</li>
                              <li v-if="item['雞米糕']">麻油雞米糕雙拼 X {{ item['雞米糕'] }} 份</li>
                              <li v-if="item['鰻米糕']">蒲燒鰻魚米糕雙拼 X {{ item['鰻米糕'] }} 份</li>
                              <li v-if="item['紅燒蹄']">富貴滿堂紅燒蹄 X {{ item['紅燒蹄'] }} 份</li>
                              <li v-if="item['佛跳牆']">福滿乾坤佛跳牆 X {{ item['佛跳牆'] }} 份</li>
                              <li v-if="item['燉雞']">排翅鮑貝燉全雞 X {{ item['燉雞'] }} 份</li>
                              <li v-if="item['蛋糕']">綜合檸檬蛋糕 X {{ item['蛋糕'] }} 份</li>
                            </ul>
                          </template>
                        </div>
                        <hr />
                        <div class="fs-5">
                          備註：{{ item['備註'] ? item['備註'] : "無" }}
                        </div>
                      </template>
                      <template v-if="item.dataType == 'here'">
                        <h5 class="card-title">⟪ {{ item["用餐日期"] + item.dataName }} ⟫</h5>
                        <div>訂桌姓名：{{ item["訂桌姓名"] }}</div>
                        <div>聯絡手機：<a :href="'tel:' + item['聯絡手機']">{{ item["聯絡手機"] }}</a></div>
                        <div>用餐日期：{{ item["用餐日期"] }}</div>
                        <div>用餐時段：{{ item["用餐時段"] }}</div>
                        <hr>
                        <template v-if="item['5380'] || item['6380']">
                          <div class="fs-5">
                            預訂內容：
                            <p v-if="item['5380']">5380 X {{ item['5380'] }} 桌</p>
                            <p v-if="item['6380']">6380 X {{ item['6380'] }} 桌</p>
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
                      <div class="fs-5">付款狀態：{{ item['已收款'] ? '已收款$ ' + item['已收款'] : "尚未付款" }}</div>
                    </div>
                  </div>
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

      <div class="container py-5">
        <p class="text-center">
          如需要更改或取消訂單，請聯繫我們！<br />
          <a href="tel:+88689325261">089-325261</a>
        </p>
        <div class="d-grid gap-2 col-6 mx-auto">
          <a href="tel:+88689325261" class="btn btn-primary" type="button">立即通話</a>
        </div>
      </div>

      <!-- Modal -->
      <div class="modal fade" id="questionModal" tabindex="-1" aria-labelledby="questionModalLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              除夕前幾天會公布取餐編號
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">關閉</button>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import { getOrderDoc } from '@/assets/js/getOrderDoc';

export default {
  name: 'Home',
  data() {
    return {
      isLoading: 0,
      //0:init, 1:wait, 2:done, 3:null
      isSearching: 0,
      searchKey: "",
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
  methods: {
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
          
          if (this.searchKey == formRow["聯絡手機"]) {
            formRow.dataType = "here";
            formRow.dataName = "內用訂單";

            this.found.all.push(formRow);
            this.found.here.push(formRow);
          }
        }

        this.isLoading = 0;
        this.isSearching = 2;

        if (this.found.all.length == 0) {
        this.isSearching = 3;
          alert("查不到此電話的訂單\n請換支電話查詢\n或撥打089-325261");
        }
      }
    },
  }
}
</script>
<style>
body {
  background: #EFE3C5;
  font-size: 18px;
}
</style>