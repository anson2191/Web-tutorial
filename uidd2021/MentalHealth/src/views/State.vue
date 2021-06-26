
<template>
  <div>
    <Nav showBackArrow="true" showText="true" navText="身心狀態"></Nav>
    <div id="layout">
      <div class="title">最近兩週的身心狀態</div>
      <div class="button_box" style="height:129.7vw">
        <div class="button_outside">
          <div class="button_inside">
            <input
              type="checkbox"
              v-model="Question1"
              id="Q11"
              value="常感悲傷、沮喪、或焦慮"
              @click="check()"
            />
            <label for="Q11" class="content">常感悲傷、沮喪、或焦慮</label>
          </div>
        </div>
        <div class="button_outside">
          <div class="button_inside">
            <input
              type="checkbox"
              v-model="Question1"
              id="Q12"
              value="精神不濟沒活力"
              @click="check()"
            />
            <label for="Q12" class="content">精神不濟沒活力</label>
          </div>
        </div>
        <div class="button_outside">
          <div class="button_inside">
            <input
              type="checkbox"
              v-model="Question1"
              id="Q13"
              value="覺得沒價值、內疚、或罪惡感"
              @click="check()"
            />
            <label for="Q13" class="content">覺得沒價值、內疚、或罪惡感</label>
          </div>
        </div>
        <div class="button_outside">
          <div class="button_inside">
            <input
              type="checkbox"
              v-model="Question1"
              id="Q14"
              value="無法專心注意力渙散"
              @click="check()"
            />
            <label for="Q14" class="content">無法專心注意力渙散</label>
          </div>
        </div>
        <div class="button_outside">
          <div class="button_inside">
            <input
              type="checkbox"
              v-model="Question1"
              id="Q15"
              value="失眠或嗜睡"
              @click="check()"
            />
            <label for="Q15" class="content">失眠或嗜睡</label>
          </div>
        </div>
        <div class="button_outside">
          <div class="button_inside">
            <input
              type="checkbox"
              v-model="Question1"
              id="Q16"
              value="對事物失去興趣"
              @click="check()"
            />
            <label for="Q16" class="content">對事物失去興趣</label>
          </div>
        </div>
        <div class="button_outside">
          <div class="button_inside">
            <input
              type="checkbox"
              v-model="Question1"
              id="Q17"
              value="食慾不佳或暴食"
              @click="check()"
            />
            <label for="Q17" class="content">食慾不佳或暴食</label>
          </div>
        </div>
        <div class="button_outside">
          <div class="button_inside">
            <input
              type="checkbox"
              v-model="Question1"
              id="Q18"
              value="行為動作變遲鈍"
              @click="check()"
            />
            <label for="Q18" class="content">行為動作變遲鈍</label>
          </div>
        </div>
        <div class="button_outside">
          <div class="button_inside">
            <input
              type="checkbox"
              id="Q19"
              value="以上皆非"
              @click="Question1 = []"
            />
            <label for="Q19" class="content">以上皆非</label>
          </div>
        </div>
      </div>

      <div class="title">最近兩週的身心狀態</div>
      <div class="button_box" style="height: 55vw">
        <div class="button_outside">
          <div class="button_inside">
            <input
              type="checkbox"
              v-model="Question2"
              id="Q21"
              value="完全沒有"
              @click="Question2 = ['完全沒有']"
            />
            <label for="Q21" class="content">完全沒有</label>
          </div>
        </div>
        <div class="button_outside">
          <div class="button_inside">
            <input
              type="checkbox"
              v-model="Question2"
              id="Q22"
              value="有，但不會真的去做"
              @click="Question2 = ['有，但不會真的去做']"
            />
            <label for="Q22" class="content">有，但不會真的去做</label>
          </div>
        </div>
        <div class="button_outside">
          <div class="button_inside">
            <input
              type="checkbox"
              v-model="Question2"
              id="Q23"
              value="如果有機會，我會真的自傷"
              @click="Question2 = ['如果有機會，我會真的自傷']"
            />
            <label for="Q23" class="content">如果有機會，我會真的自傷</label>
          </div>
        </div>
        <div class="button_outside">
          <div class="button_inside">
            <input
              type="checkbox"
              v-model="Question2"
              id="Q24"
              value="我想去自傷"
              @click="Question2 = ['我想去自傷']"
            />
            <label for="Q24" class="content">我想去自傷</label>
          </div>
        </div>
      </div>

      <div class="accept_div">
        <div class="accept_button" @click="send()">
          <font class="button_font">送出</font>
        </div>
        <div
          class="accept_button"
          style="background: #c7c7c7"
          @click="cancel()"
        >
          <font class="button_font">取消</font>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped rel="stylesheet" type="text/css">
#layout {
  padding: 0 3.45vh 0 3.21vh;
}
.title {
  padding: 5vh 0 1.48vh 0;
  font-family: Taipei Sans TC Beta;
  font-style: normal;
  font-weight: bold;
  font-size: 2.47vh;
  line-height: 2.47vh;
  color: #5c5c5c;
}
.button_box {
  width: 86.17vw;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.button_outside {
  width: 86.12vw;
  height: 11.2vw;

  background-image: -webkit-linear-gradient(
    top,
    #96fbc4 33.15%,
    #20e2d7 127.81%
  );
  background-image: -moz-linear-gradient(top, #96fbc4 33.15%, #20e2d7 127.81%);
  background-image: linear-gradient(top, #96fbc4 33.15%, #20e2d7 127.81%);

  padding: 0.35vw;
  border-radius: 3vw;
  box-sizing: border-box;
}
.button_inside {
  width: 100%;
  height: 100%;
  border-radius: 2.67vw;

  display: flex;
  align-items: center;
  font-size: 1.97vh;

  background: #ffffff;
  color: #5c5c5c;

  cursor: pointer;
  padding: 0 0 0 1.73vh;
}
.content {
  width: 100%;
  height: 25%;
  padding: 0 0 0 1.13vh;
  line-height: 5.5vw;
  color: #5C5C5C;
  font-size: 4.27vw;
  font-family: PingFang TC;
  font-style: normal;
  font-weight: normal;
}
.accept_div {
  height: 21.6vh;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  padding: 4vh 0;
}
.accept_button {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  color: #ffffff;

  background: #20e2d7;
  box-shadow: 0 0.55vh 2.36vh -0.14vh rgba(107, 182, 177, 0.51);
  border-radius: 4.5vh;

  width: 100%;
  height: 6vh;

  cursor: pointer;
}
</style>

<script>
import Nav from "@/components/Nav.vue";
export default {
  name: "Support",
  components: {
    Nav,
  },
  data() {
    return {
      select1: false,
      Question1: [],
      Question2: [],
    };
  },
  methods: {
    check: function () {
      $("#Q19").prop("checked", false);
    },
    send: function () {
      this.$http
        .post("/api/book", {
          userID: this.$store.state.userName,
          months: this.$store.state.month,
          day: this.$store.state.day,
          time: this.$store.state.time,
          name: this.$store.state.mental,
        })
        .then((res) => {
          this.$router.push({
            name: "Reservationsuccess",
          });
        });
    },
    cancel: function () {
      this.$router.push({
        name: "home",
      });
    },
  },
};
</script>