<template>
  <div class="container">
    <Nav showUser="true" />
    <div id="layout_reserve">
      <div id="layout_up">
        <div id="famous_box">
          <img
            id="famous_box_border"
            class="full_img"
            src="@/assets/pic/border.png"
          />
          <div id="famous_box_left">
            <div id="famous_box_pic">
              <img class="full_img" src="@/assets/pic/grass.png" />
            </div>
          </div>

          <div id="famous_box_right">
            <p id="p1">
              「任何人只要願意深入探索自己的心靈，便能發現那等待我們已久的共同寶藏。」
            </p>
            <p id="p1">--馬克．列維特</p>
          </div>
        </div>

        <div id="remind">
          <p id="p2" style="color: #c7c7c7">
            首先感謝你鼓起勇氣，願意嘗試和心理師談談你的煩惱，請你先閱讀以下注意事項，也幫助你對個人諮商有一些基本的了解。
          </p>
        </div>
      </div>

      <div id="layout_down">
        <div id="content_reserve">
          <p id="t1">個人諮商初談注意事項</p>

          <p id="t2">初談和續談是什麼？</p>
          <blockquote>
            <div class="content_list">
              <li></li>
              <p id="p3">個人諮商一次50分鐘···</p>
            </div>
          </blockquote>

          <blockquote>
            <div class="content_list">
              <li></li>
              <p id="p3">
                如有需要，心理師會和您討論後為您預約續談 若是不需要續談
              </p>
            </div>
          </blockquote>

          <blockquote>
            <div class="content_list">
              <li></li>
              <p id="p3">
                若是不需要續談，則會已結案處理，之後再有需要可以再次預約初談
              </p>
            </div>
          </blockquote>

          <p id="t2">保密原則的例外狀況</p>
          <p id="p3">
            基於法律要求、學校政策以及心理專業人員的專業倫理規範，在尊重生命與安全的前提下，需進行危機處理或通報，以便引進更多的資源協助解決你的困境。這樣的用意是為了保護你與他人的生命財產安全，最終讓自己有機會慢慢地回到軌道上。
          </p>

          <p id="t3">以下兩種類別的狀況發生時，心理師有通報的責任：</p>
          <blockquote>
            <div class="content_list">
              <li></li>
               <p id="p3">
                罹患嚴重精神疾病（精神衛生法）、家庭暴力（家庭暴力防治法）、一般性侵害（性侵害犯罪防治法）、校園性侵害/性騷擾/性霸凌（性別平等教育法）、兒少性剝削（兒童及少年性剝削防制條例），以及兒童及少年福利與權益保障法所規定之通報事項（含施用毒品）。</p
              >
            </div>
          </blockquote>
          <blockquote>
            <div class="content_list">
              <li></li>
               <p id="p3">來談者有危害自己或他人生命安全之緊急情況。</p>
            </div>
          </blockquote>
        </div>
      </div>

      <div id="accept_button_box">
        <div id="accept_button_reserve" @click="toStart()">
          <font class="button_font">接受上述內容，預約初談</font>
        </div>
      </div>
    </div>
    <Footer showSchedule="true" />
  </div>
</template>

<script>
import Nav from "@/components/Nav.vue";
import Footer from "@/components/Footer.vue";
export default {
  name: "Feeling",
  components: {
    Nav,
    Footer,
  },
  methods: {
    toStart: function () {
      this.$router.push("/start");
    },
  },
};
</script>

<style scoped rel="stylesheet" type="text/css">
.container{
  margin: 0px;
  padding: 0px;
}
#layout_reserve {
  display: flex;
  flex-direction: column;
}
button {
  border: none;
  outline: none;
  background: none;
  padding: 0;
  border-radius: 1vw;
  cursor: pointer;
}
blockquote {
  margin-block: 0;
}
.button_font {
  /*font-family: Taipei Sans TC Beta;*/
  font-size: 2.22vh;
  font-weight: normal;
  color: #ffffff;
}
.full_img {
  height: 100%;
}
.full_width_img {
  width: 100%;
}
#layout_up {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 40vh;
}
#navbar {
  width: 100vw;
  height: 6.94vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  z-index: 10;

  background: #ffffff;
  box-shadow: 0 0.28vh 1.39vh rgba(118, 156, 145, 0.25);
}
#navbar_main {
  width: 11.39vh;
  height: 2.54vh;
}
#navbar_side {
  display: flex;
  justify-content: space-around;
  width: 15vw;
}
.navbar_button {
  width: 3.89vh;
  height: 3.89vh;
}
#navbar_record {
  right: 15vw;
  top: 1.5vh;
  position: absolute;
}
#navbar_user {
  right: 5vw;
  top: 1.5vh;
  position: absolute;
}
#famous_box {
  width: 45.14vh;
  max-width: 80%;
  height: 20.83vh;
  position: relative;
  top: 5vh;

  display: flex;
  flex-direction: row;
  z-index: -1;
}
#famous_box_border {
  width: 100%;
  position: absolute;
  z-index: -1;
}
#famous_box_left {
  width: 40%;
  height: 100%;
}
#famous_box_right {
  width: 60%;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;

  font-weight: 400;
  color: #5c5c5c;
}
#famous_box_pic {
  height: 100%;
  padding: 31% 0 30% 27%;
}

#p1 {
  font-size: 1.4vh;
  padding: 0 20% 0 0;
  line-height: 2.5vh;
  margin: 0;
}
#remind {
  padding: 0 6vh;
  position: relative;
  top: 5vh;
}
#p2 {
  font-size: 1.4vh;
  line-height: 2.5vh;
}
#layout_down {
  padding: 0 4vh;
  width: 100vw;
  height: 70.97vh;
}
#content_reserve {
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  color: #5c5c5c;
  width: 100%;
  height: 100%;
}
#t1 {
  font-size: 3.56vh;
  font-style: normal;
  font-weight: 400;
  line-height: 4.72vh;
  color: #20e2d7;
}
#t2 {
  font-size: 2.2vh;
  font-weight: 400;
  line-height: 5vh;
  color: #5C5C5C;
  margin: 0;
}
#t3 {
  font-size: 1.4vh;
  font-weight: 400;
  line-height: 5vh;
}
.content_list {
  display: flex;
  align-items: baseline;
}
li {
  font-size: 1.4vh;
  line-height: 2.5vh;
}
#p3 {
  font-size: 1.9vh;
  font-weight: 300;
  line-height: 2.67vh;
  display: flex;
  margin: 0;
}
#accept_button_reserve {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  background: #20e2d7;
  box-shadow: 0 0.55vh 2.36vh -0.14vh rgba(107, 182, 177, 0.51);
  border-radius: 4.5vh;

  height: 6.37vh;

  cursor: pointer;
}
#base {
  position: relative;
  top: 15vh;
  height: 3vh;
}
#accept_button_box {
  padding: 4vh;
}
</style>
