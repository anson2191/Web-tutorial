<template>
	<div>
  		<Nav showUser=true />
		<div id="layout">
			<div id="layout_up">	
				<div class="font1">還需要其他幫助嗎？</div>
				<div class="font2">來了解更多自我舒壓與校外求助資源吧！</div>
				<div id="main_pic">
					<img src="@/assets/anson/0610/Others_main.svg" style="width:100%"></img>
				</div>
			</div>

			<div class="font3">自我了解與舒壓</div>
			<div class="button_list_Others">
				<div class="button_dark" @click="toRelax()">
					<div class="button_mark">
						<img src="@/assets/anson/0610/sports.svg"></img>
					</div>
					<div class="button_font">
						放鬆練習
					</div>
				</div>
				<div class="button_light" @click="toArticle()">
					<div class="button_mark">
						<img src="@/assets/anson/0610/article.svg"></img>
					</div>
					<div class="button_font">
						讀讀文章
					</div>
				</div>
			</div>
			<div class="font3">校外求助資源</div>
			<div class="button_list_Others">
				<div class="button_light" @click="toMedical()">
					<div class="button_mark">
						<img src="@/assets/anson/0610/medical.svg"></img>
					</div>
					<div class="button_font">
						醫療院所
					</div>
				</div>
				<div class="button_dark" @click="toSupport()">
					<div class="button_mark">
						<img src="@/assets/anson/0610/support.svg"></img>
					</div>
					<div class="button_font">
						線上支持
					</div>
				</div>
			</div>
		</div>
		<Footer showResouce=true />
	</div>
</template>

<style scoped rel="stylesheet" type="text/css">
#layout{
	height: 87.8vh;
	background: linear-gradient(180deg, #FFFFFF 42.2%, #9FFBC1 203.98%, #40E9D2 270.1%);
	display: flex;
    flex-direction: column;
    align-items: center;
}
#layout_up{
	display: flex;
	flex-direction: column;
    align-items: center;

	height: 31.2vh;
}
.font1{
	font-family: Taipei Sans TC Beta;
	font-style: normal;
	font-weight: bold;
	font-size: 2.96vh;
	color: #1E1E1E;

	position: relative;
	top: 5.42vh;
}
.font2{
	font-family: Taipei Sans TC Beta;
	font-style: normal;
	font-weight: normal;
	font-size: 1.97vh;
	color: #1E1E1E;

	position: relative;
	top: 5.42vh;
}
.font3{
	width: 88vw;
    text-align: left;

	font-family: Taipei Sans TC Beta;
	font-style: normal;
	font-weight: normal;
	font-size: 1.97vh;
	color: #5C5C5C;

	padding: 5vh 0 1vh 3.08vh;
}
#main_pic{
	width: 40.27vh;
	height: 15.52vh;

	position: relative;
	top: 8.3vh;
}
.button_list_Others{
	width: 100vw;
    display: flex;
    justify-content: space-evenly;
}
.button_dark{
	background: linear-gradient(180deg, #F9FEA5 -214.29%, #96FBC4 -47.3%, #20E2D7 126.79%);
	box-shadow: 0.28vh 0.28vh 1.23vh rgba(204, 204, 204, 0.75);
	border-radius: 1.23vh;
	width: 18.74vh;
	height: 9.74vh;

	display: flex;
    align-items: center;
    justify-content: space-evenly;
}
.button_light{
	background: linear-gradient(180deg, #F9FEA5 -65.05%, #96FBC4 85.21%, #20E2D7 143.69%);
	box-shadow: 0.28vh 0.28vh 1.23vh rgba(204, 204, 204, 0.75);
	border-radius: 1.23vh;
	width: 18.74vh;
	height: 9.74vh;

    display: flex;
    align-items: center;
    justify-content: space-evenly;
}
.button_mark{
	height: 4.69vh;
}
.button_font{
	font-family: Taipei Sans TC Beta;
	font-style: normal;
	font-weight: bold;
	font-size: 2.47vh;
	line-height: 4.19vh;

	color: #FFFFFF;

	position: relative;
	top: 0.3vh;
    right: 0.8vh;
}
</style>

<script>
import Nav from '@/components/Nav.vue'
import Footer from '@/components/Footer.vue'

export default {
    name: 'Feeling',
    components:{
        Nav,
        Footer
    },
	data() {
		return {
			
		};
	},
	methods: {
		toRelax: function() {
			this.$router.push("/Others/Relax");
		},
		toArticle: function() {
			this.$router.push("/Others/Article");
		},
		toMedical: function() {
			this.$router.push("/Others/Medical");
		},
		toSupport: function() {
			this.$router.push("/Others/Support");
		},
	}
}
</script>