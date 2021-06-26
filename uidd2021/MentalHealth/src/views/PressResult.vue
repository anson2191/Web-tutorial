<template>
  <div>
    <Nav showBackArrow="ture" showText="true" navText="壓力評估量表-檢測結果" />
    <div id="layout">
      <div id="region">
        <div id="range_bar"></div>
        <div id="face"></div>
        <div id="content_result"></div>
      </div>

      <div>
        <div id="title">適合你目前的資源</div>
      </div>

      <div id="button_list2">
        <div class="button2" @click="clickFunction1()">
          <div id="first" class="button_top"></div>
          <div id="firstWord" class="button_down"></div>
        </div>
        <div class="button2" @click="clickFunction2()">
          <div id="second" class="button_top"></div>
          <div id="secondWord" class="button_down"></div>
        </div>
        <div class="button2" @click="clickFunction3()">
          <div id="third" class="button_top"></div>
          <div id="thirdWord" class="button_down"></div>
        </div>
      </div>

      <div id="toHome" @click="toHome()">回首頁</div>
    </div>
  </div>
</template>

<style>
#layout {
  height: 93.7vh;
  background: linear-gradient(
    180deg,
    #ffffff 42.2%,
    #9ffbdf 203.98%,
    #40e9d2 270.1%
  );
  text-align: center;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
}
#region {
  width: 40.32vh;
  height: 43vh;
  background: #ffffff;
  border: 0.123vh solid #20e2d7;
  box-sizing: border-box;
  border-radius: 1.23vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  top: 3.21vh;
}
#range_bar {
  width: 33.66vh;
  height: 5.67vh;
  background: linear-gradient(
    180deg,
    #f9fea5 -214.29%,
    #96fbc4 -47.3%,
    #20e2d7 126.79%
  );
  border-radius: 1.23vh;
  color: #ffffff;
  font-size: 2.22vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  top: 2.96vh;
}
#face {
  /*background-image: url("../assets/anson/p0.png");*/
  background-repeat: no-repeat;
  background-size: cover;
  width: 8.94vh;
  height: 8.94vh;
  position: relative;
  top: 5.67vh;
}
#content_result {
  width: 33.91vh;
  height: 16.28vh;
  font-family: Taipei Sans TC Beta;
  font-style: normal;
  font-weight: normal;
  font-size: 2.22vh;
  line-height: 2.72vh;
  display: flex;
  text-align: left;
  color: #4f4f4f;
  position: relative;
  top: 8.84vh;
}
#title {
  width: 40.32vh;
  position: relative;
  top: 6vh;
  font-family: Taipei Sans TC Beta;
  font-style: normal;
  font-weight: normal;
  font-size: 1.97vh;
  line-height: 2.6vh;
  display: flex;
  text-align: left;
  color: #5c5c5c;
}
#button_list2 {
  width: 40.32vh;
  position: relative;
  top: 7.5vh;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.button2 {
  width: 11.59vh;
  height: 11.59vh;
  background: #20e2d7;
  box-shadow: 0vh 0.58vh 2.46vh -0.14vh rgba(107, 182, 177, 0.51);
  border-radius: 1.23vh;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
}
.button_top {
  width: 35px;
  height: 40px;
  background-repeat: no-repeat;
  background-size: 100%;
}
.button_down {
  font-family: Taipei Sans TC Beta;
  font-style: normal;
  font-weight: normal;
  font-size: 1.88vh;
  line-height: 2.84px;
  letter-spacing: 0.1em;
  color: #ffffff;
}
#toHome {
  width: 40.44vh;
  height: 7.03vh;
  position: absolute;
  bottom: 4.26vh;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: Taipei Sans TC Beta;
  font-style: normal;
  font-weight: normal;
  font-size: 2.22vh;
  line-height: 2.72vh;
  color: #ffffff;
  background: #20e2d7;
  box-shadow: 0vh 0.49vh 2.1vh -0.123vh rgba(107, 182, 177, 0.51);
  border-radius: 4.07vh;
}
</style>

<script>
import Nav from "@/components/Nav.vue";
export default {
  name: "PressResult",
  components: {
    Nav,
  },
  data() {
    return {
      Pressure: 0,
      result: [
        {
          range: "一般正常範圍",
          comment:
            "你目前的情緒狀態很穩定，是個懂得適時調適自我情緒的人，請繼續保持！",
        },
        {
          range: "輕度情緒困擾",
          comment:
            "你目前的情緒狀態偶爾不是很穩定，如果最近常覺得壓力負荷量快到臨界點了，記得千萬別再逞強，請趕快找親友談談，抒發情緒，把身上的重擔放下。",
        },
        {
          range: "中度情緒困擾",
          comment:
            "你目前的情緒狀態蠻不穩定，現在的你可能事事都不順心，如果不知如何與朋友傾訴或朋友也無法幫上忙的話，建議找專業的心理諮商或精神醫療機構協助，以幫助你更好地找到心中煩悶的原因。",
        },
        {
          range: "重度情緒困擾",
          comment:
            "你目前的情緒狀態非常不穩定，現在的你很容易就陷入沮喪或難過的情緒之中，非常建議你尋求可信賴的精神醫療機構的諮詢，透過專業的診療與治療，才能幫助你走出低落的情緒狀態。",
        },
      ],
    };
  },
  methods: {
    clickFunction1: function () {
      if (this.Pressure < 6) {
        this.$router.push("/Others/Relax");
      } else if (this.Pressure < 10) {
        this.$router.push("/Others/Relax");
      } else if (this.Pressure < 15) {
        this.$router.push("/reserve");
      } else {
        this.$router.push("/Others/Medical");
      }
    },
    clickFunction2: function () {
      if (this.Pressure < 6) {
        this.$router.push("/Others/Article");
      } else if (this.Pressure < 10) {
        this.$router.push("/diary/write");
      } else if (this.Pressure < 15) {
        this.$router.push("/Others/Medical");
      } else {
        this.$router.push("/reserve");
      }
    },
    clickFunction3: function () {
      if (this.Pressure < 6) {
        this.$router.push("/diary/write");
      } else if (this.Pressure < 10) {
        this.$router.push("/reserve");
      } else if (this.Pressure < 15) {
        this.$router.push("/diary/write");
      } else {
        this.$router.push("/Others/Support");
      }
    },
    toHome(){
      this.$router.push("/home");
    }
  },
  mounted() {
    this.Pressure = this.$store.state.PressScore;
    if (this.Pressure < 6) {
      document.getElementById("range_bar").innerHTML = this.result[0].range;
      document.getElementById("content_result").innerHTML = this.result[0].comment;
      document.getElementById("face").style.backgroundImage =
        "url(" + require("@/assets/anson/p0.svg") + ")";
      document.getElementById("first").style.backgroundImage =
        "url(" + require("@/assets/anson/relax.svg") + ")";
      document.getElementById("firstWord").innerHTML = "放鬆練習";
      document.getElementById("second").style.backgroundImage =
        "url(" + require("@/assets/anson/word.svg") + ")";
      document.getElementById("secondWord").innerHTML = "讀讀文章";
      document.getElementById("third").style.backgroundImage =
        "url(" + require("@/assets/anson/pen.svg") + ")";
      document.getElementById("thirdWord").innerHTML = "心情日記";
    } else if (this.Pressure < 10) {
      document.getElementById("range_bar").innerHTML = this.result[1].range;
      document.getElementById("content_result").innerHTML = this.result[1].comment;
      document.getElementById("face").style.backgroundImage =
        "url(" + require("@/assets/anson/p1.svg") + ")";
      document.getElementById("first").style.backgroundImage =
        "url(" + require("@/assets/anson/relax.svg") + ")";
      document.getElementById("firstWord").innerHTML = "放鬆練習";
      document.getElementById("second").style.backgroundImage =
        "url(" + require("@/assets/anson/pen.svg") + ")";
      document.getElementById("secondWord").innerHTML = "心情日記";
      document.getElementById("third").style.backgroundImage =
        "url(" + require("@/assets/anson/record.svg") + ")";
      document.getElementById("thirdWord").innerHTML = "預約諮商";
    } else if (this.Pressure < 15) {
      document.getElementById("range_bar").innerHTML = this.result[2].range;
      document.getElementById("content_result").innerHTML = this.result[2].comment;
      document.getElementById("face").style.backgroundImage =
        "url(" + require("@/assets/anson/p2.svg") + ")";
      document.getElementById("first").style.backgroundImage =
        "url(" + require("@/assets/anson/record.svg") + ")";
      document.getElementById("firstWord").innerHTML = "預約諮商";
      document.getElementById("second").style.backgroundImage =
        "url(" + require("@/assets/anson/hospital.svg") + ")";
      document.getElementById("secondWord").innerHTML = "醫療院所";
      document.getElementById("third").style.backgroundImage =
        "url(" + require("@/assets/anson/pen.svg") + ")";
      document.getElementById("thirdWord").innerHTML = "心情日記";
    } else {
      document.getElementById("range_bar").innerHTML = this.result[3].range;
      document.getElementById("content_result").innerHTML = this.result[3].comment;
      document.getElementById("face").style.backgroundImage =
        "url(" + require("@/assets/anson/p3.svg") + ")";
      document.getElementById("first").style.backgroundImage =
        "url(" + require("@/assets/anson/hospital.svg") + ")";
      document.getElementById("firstWord").innerHTML = "醫療院所";
      document.getElementById("second").style.backgroundImage =
        "url(" + require("@/assets/anson/record.svg") + ")";
      document.getElementById("secondWord").innerHTML = "預約諮商";
      document.getElementById("third").style.backgroundImage =
        "url(" + require("@/assets/anson/organ.svg") + ")";
      document.getElementById("thirdWord").innerHTML = "心輔組織";
    }
  },
};
</script>
