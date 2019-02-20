<template>
	<div class="list">
		<ul>
			<li v-for="val in list"><router-link :to="val.to">{{val.title}}</router-link></li>
		</ul>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				list:[
					{title:"首页主页",to:'/home'},
					{title:"文麟科技",to:'/News'},
					{title:"联系我们",to:'/Contact'},
					{title:"在线留言",to:'/LeaveWord'},
					{title:"关于我们",to:'/About'}
					]
			}
		},
		mounted() {
			console.log(this.list)
		}
	}
</script>

<style scoped lang="less">
	.list{
		width: 100%;
		color: #fff;
		ul{
			display: flex;
			flex-direction: column;
		}
	}
</style>
