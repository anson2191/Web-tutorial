<template>
	<div>
  		<Nav showBackArrow=true showText=true navText="匹配問題填答"></Nav>
		<div id="layout_down">
			<div class="content_box">
				<p id="p1">1. 這次主要想和心理師談什麼呢？</p>
			</div>
			
			<div class="button_list" style="width:41.77vh; height: 39.77vh">
			
				<div class="medium_button">
					<div id="b1" @click="press1('b1')" class="button_content">
						<p id="p2">生涯規劃</p>
					</div>
				</div>
					
				<div class="medium_button">
					<div id="b2" @click="press2('b2')" class="button_content">
						<p id="p2">家庭狀況</p>
					</div>
				</div>
				
				<div class="medium_button">
					<div id="b3" @click="press3('b3')" class="button_content">
						<p id="p2">自我探索</p>
					</div>
				</div>
				
				<div class="medium_button">
					<div id="b4" @click="press4('b4')" class="button_content">
						<p id="p2">感情議題</p>
					</div>
				</div>
				
				<div class="medium_button">
					<div id="b5" @click="press5('b5')" class="button_content">
						<p id="p2">生活變故</p>
					</div>
				</div>
				
				<div class="medium_button">
					<div id="b6" @click="press6('b6')" class="button_content">
						<p id="p2">情緒低落</p>
					</div>
				</div>
					
				<div class="medium_button">
					<div id="b7" @click="press7('b7')" class="button_content">
						<p id="p2">性別議題</p>
					</div>
				</div>
				
				<div class="medium_button">
					<div id="b8" @click="press8('b8')" class="button_content">
						<p id="p2">人際相處</p>
					</div>
				</div>
				
				<div class="medium_button">
					<div id="b9" @click="press9('b9')" class="button_content">
						<p id="p2">睡眠問題</p>
					</div>
				</div>
				
				<div class="medium_button">
					<div id="b10" @click="press10('b10')" class="button_content">
						<p id="p2">其他</p>
					</div>
				</div>
			</div>
			
			<div class="content_box">
				<p id="p1">2. 有特別想選男/女性心理師嗎？</p>
			</div>
			
			<div class="button_list" style="width:41.77vh; height: 7vh">
			
					<div class="short_button">
						<div id="b11" @click="press11('b11')" class="button_content">
							<p id="p2">不拘</p>
						</div>
					</div>
					
					<div class="short_button">
						<div id="b12" @click="press12('b12')" class="button_content">
							<p id="p2">男</p>
						</div>
					</div>
					
					<div class="short_button">
						<div id="b13" @click="press13('b13')" class="button_content">
							<p id="p2">女</p>
						</div>
					</div>
			</div>
			
			<div class="content_box">
				<p id="p1">3. 比較喜歡以下哪種諮商風格呢？</p>
			</div>
				
			<div class="button_list" style="width: 41.77vh; height:24vh">
			
					<div class="long_button">
						<div id="b14" @click="press14('b14')" class="button_content">
							<p id="p2">想被溫柔安慰</p>
						</div>
					</div>
					
					<div class="long_button">
						<div id="b15" @click="press15('b15')" class="button_content">
							<p id="p2">想聽客觀的視角分析</p>
						</div>
					</div>
					
					<div class="long_button">
						<div id="b16" @click="press16('b16')" class="button_content">
							<p id="p2">想被溫和的罵醒</p>
						</div>
					</div>
			</div>
			
			<div id="accept_div">
				<div id="accept_button" @click="pagechange">				
					<font class="button_font">下一步</font>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import Nav from "@/components/Nav.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "analysis",
  components: {
    Nav,
    Footer,
  },
  data() {
    return {
      p1: 0,
      p2: 0,
      p3: 0,
      p4: 0,
      p5: 0,
      p6: 0,
      p7: 0,
      p8: 0,
      p9: 0,
      p10: 0,
      p11: 0,
      p12: 0,
      p13: 0,
      p14: 0,
      p15: 0,
      p16: 0,
      result: [],
    };
  },
  methods: {
    press1: function (id) {
      if (this.p1 == true) {
        document.getElementById(id).style =
          "color: #5C5C5C; background: #FFFFFF;";
        this.p1 = 0;
      } else {
        document.getElementById(id).style =
          "color: #FFFFFF; background: #20E2D7;";
        this.p1 = 1;
      }
    },
    press2: function (id) {
      if (this.p2 == true) {
        document.getElementById(id).style =
          "color: #5C5C5C; background: #FFFFFF;";
        this.p2 = 0;
      } else {
        document.getElementById(id).style =
          "color: #FFFFFF; background: #20E2D7;";
        this.p2 = 1;
      }
    },
    press3: function (id) {
      if (this.p3 == true) {
        document.getElementById(id).style =
          "color: #5C5C5C; background: #FFFFFF;";
        this.p3 = 0;
      } else {
        document.getElementById(id).style =
          "color: #FFFFFF; background: #20E2D7;";
        this.p3 = 1;
      }
    },
    press4: function (id) {
      if (this.p4 == true) {
        document.getElementById(id).style =
          "color: #5C5C5C; background: #FFFFFF;";
        this.p4 = 0;
      } else {
        document.getElementById(id).style =
          "color: #FFFFFF; background: #20E2D7;";
        this.p4 = 1;
      }
    },
    press5: function (id) {
      if (this.p5 == true) {
        document.getElementById(id).style =
          "color: #5C5C5C; background: #FFFFFF;";
        this.p5 = 0;
      } else {
        document.getElementById(id).style =
          "color: #FFFFFF; background: #20E2D7;";
        this.p5 = 1;
      }
    },
    press6: function (id) {
      if (this.p6 == true) {
        document.getElementById(id).style =
          "color: #5C5C5C; background: #FFFFFF;";
        this.p6 = 0;
      } else {
        document.getElementById(id).style =
          "color: #FFFFFF; background: #20E2D7;";
        this.p6 = 1;
      }
    },
    press7: function (id) {
      if (this.p7 == true) {
        document.getElementById(id).style =
          "color: #5C5C5C; background: #FFFFFF;";
        this.p7 = 0;
      } else {
        document.getElementById(id).style =
          "color: #FFFFFF; background: #20E2D7;";
        this.p7 = 1;
      }
    },
    press8: function (id) {
      if (this.p8 == true) {
        document.getElementById(id).style =
          "color: #5C5C5C; background: #FFFFFF;";
        this.p8 = 0;
      } else {
        document.getElementById(id).style =
          "color: #FFFFFF; background: #20E2D7;";
        this.p8 = 1;
      }
    },
    press9: function (id) {
      if (this.p9 == true) {
        document.getElementById(id).style =
          "color: #5C5C5C; background: #FFFFFF;";
        this.p9 = 0;
      } else {
        document.getElementById(id).style =
          "color: #FFFFFF; background: #20E2D7;";
        this.p9 = 1;
      }
    },
    press10: function (id) {
      if (this.p10 == true) {
        document.getElementById(id).style =
          "color: #5C5C5C; background: #FFFFFF;";
        this.p10 = 0;
      } else {
        document.getElementById(id).style =
          "color: #FFFFFF; background: #20E2D7;";
        this.p10 = 1;
      }
    },
    press11: function (id) {
      if (this.p11 == true) {
        document.getElementById(id).style =
          "color: #5C5C5C; background: #FFFFFF;";
        this.p11 = 0;
      } else {
        document.getElementById(id).style =
          "color: #FFFFFF; background: #20E2D7;";
        this.p11 = 1;
      }
    },
    press12: function (id) {
      if (this.p12 == true) {
        document.getElementById(id).style =
          "color: #5C5C5C; background: #FFFFFF;";
        this.p12 = 0;
      } else {
        document.getElementById(id).style =
          "color: #FFFFFF; background: #20E2D7;";
        this.p12 = 1;
      }
    },
    press13: function (id) {
      if (this.p13 == true) {
        document.getElementById(id).style =
          "color: #5C5C5C; background: #FFFFFF;";
        this.p13 = 0;
      } else {
        document.getElementById(id).style =
          "color: #FFFFFF; background: #20E2D7;";
        this.p13 = 1;
      }
    },
    press14: function (id) {
      if (this.p14 == true) {
        document.getElementById(id).style =
          "color: #5C5C5C; background: #FFFFFF;";
        this.p14 = 0;
      } else {
        document.getElementById(id).style =
          "color: #FFFFFF; background: #20E2D7;";
        this.p14 = 1;
      }
    },
    press15: function (id) {
      if (this.p15 == true) {
        document.getElementById(id).style =
          "color: #5C5C5C; background: #FFFFFF;";
        this.p15 = 0;
      } else {
        document.getElementById(id).style =
          "color: #FFFFFF; background: #20E2D7;";
        this.p15 = 1;
      }
    },
    press16: function (id) {
      if (this.p16 == true) {
        document.getElementById(id).style =
          "color: #5C5C5C; background: #FFFFFF;";
        this.p16 = 0;
      } else {
        document.getElementById(id).style =
          "color: #FFFFFF; background: #20E2D7;";
        this.p16 = 1;
      }
    },
    pagechange: function () {
      if (this.p1 == 1) {
        this.result.push("生涯規劃");
      }
      if (this.p2 == 1) {
        this.result.push("家庭狀況");
      }
      if (this.p3 == 1) {
        this.result.push("自我探索");
      }
      if (this.p4 == 1) {
        this.result.push("感情議題");
      }
      if (this.p5 == 1) {
        this.result.push("生活變故");
      }
      if (this.p6 == 1) {
        this.result.push("情緒低落");
      }
      if (this.p7 == 1) {
        this.result.push("性別議題");
      }
      if (this.p8 == 1) {
        this.result.push("人際相處");
      }
      if (this.p9 == 1) {
        this.result.push("睡眠問題");
      }
      if (this.p10 == 1) {
        this.result.push("其他");
      }
      if (this.p11 == 1) {
        this.result.push("不拘");
      }
      if (this.p12 == 1) {
        this.result.push("男");
      }
      if (this.p13 == 1) {
        this.result.push("女");
      }
      if (this.p14 == 1) {
        this.result.push("想被溫柔安慰");
      }
      if (this.p15 == 1) {
        this.result.push("想聽客觀的視角分析");
      }
      if (this.p16 == 1) {
        this.result.push("想被溫和的罵醒");
      }
      this.$store.commit("setAnalysisResult", this.result);
      if (this.$store.state.analysisResult != "") {
        this.$router.push({
          name: "Matchresult",
        });
      }
    },
  },
  mounted() {
    console.log(this.$store.state.userName, "anay");
  },
};
</script>

<style rel="stylesheet" type="text/css">
body{
	border: 0;
	padding: 0;
	margin: 0;
	
	font-family: Taipei Sans TC Beta;
}
button{
	border: none;
    outline: none;
    background: none;
    padding: 0;
    border-radius: 1vw;
    cursor: pointer;
}
blockquote{
	margin-block: 0;
}
.button_font{
	font-size: 2.22vh;
	font-weight: normal;
	color: #FFFFFF;
}
#layout_down{
	display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0 4vh;
}
.short_button{
	width: 11.85vh;
	height: 6.22vh;
	
	background-image: -webkit-linear-gradient(top, #96FBC4 33.15%, #20E2D7 127.81%);
    background-image: -moz-linear-gradient(top, #96FBC4 33.15%, #20E2D7 127.81%);
    background-image: linear-gradient(top, #96FBC4 33.15%, #20E2D7 127.81%);
	
	box-shadow: 0.24vh 0.24vh 1.2vh rgb(204 204 204 / 75%);
	
	padding: 0.1vh;
	border-radius: 1.2vh;
	box-sizing: border-box;
}
.medium_button{
	width: 18.22vh;
	height: 6.22vh;
	
	background-image: -webkit-linear-gradient(top, #96FBC4 33.15%, #20E2D7 127.81%);
    background-image: -moz-linear-gradient(top, #96FBC4 33.15%, #20E2D7 127.81%);
    background-image: linear-gradient(top, #96FBC4 33.15%, #20E2D7 127.81%);
	
	box-shadow: 0.24vh 0.24vh 1.2vh rgb(204 204 204 / 75%);
	
	padding: 0.1vh;
	border-radius: 1.2vh;
	box-sizing: border-box;
}
.button_content{
	width:100%; 
    height:100%; 
    border-radius: 1.2vh; 
	
	display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.8vh;
	
	background: #FFFFFF;
    color: #5C5C5C;
	
	cursor: pointer;
}
.long_button{
	width: 42.22vh;
	height: 6.22vh;
	
	background-image: -webkit-linear-gradient(top, #96FBC4 33.15%, #20E2D7 127.81%);
    background-image: -moz-linear-gradient(top, #96FBC4 33.15%, #20E2D7 127.81%);
    background-image: linear-gradient(top, #96FBC4 33.15%, #20E2D7 127.81%);
	
	box-shadow: 0.24vh 0.24vh 1.2vh rgb(204 204 204 / 75%);
	
	padding: 0.1vh;
	border-radius: 1.2vh;
	box-sizing: border-box;
}
#p1{
	font-style: normal;
	font-weight: bold;
	font-size: 2.5vh;
	color: #4F4F4F;
	margin: 0;
	line-height: 3.05vh;
}
#p2{
  position: relative;
  top: 20%;
	font-style: normal;
	font-weight: normal;
	font-size: 2.22vh;
	line-height: 2.46vh;
}
.button_list{
	display: flex;
    justify-content: space-around;
    flex-direction: row;
    align-content: space-around;
    flex-wrap: wrap;
}
#accept_div{
	display: flex;
    justify-content: center;
	
	padding: 2vh 0;
}
#accept_button{
  display: flex;
	flex-direction: row;
	align-items: center;
  justify-content: center;
	
	background: #20E2D7;
	box-shadow: 0 0.55vh 2.36vh -0.14vh rgba(107, 182, 177, 0.51);
	border-radius: 4.5vh;
	
	width: 44.3vh;
	height: 6vh;
    
	cursor: pointer;
}
.content_box{
	padding: 3vh 0 1vh 0;
	width: 80vw;
    text-align: left;
}
</style>
