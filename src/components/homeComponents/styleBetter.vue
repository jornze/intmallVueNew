<template>
	<section id="styleBetterBd">
		<ul>
			<li v-for='(item,index) in styleData'>
				<router-link to='item.url' tag='a'>
					<img :src="item.pic" alt="" />
				</router-link>
			</li>
		</ul>
	</section>
</template>

<script>
	export default{
		props:{
			styleData:{
				type:Array
			}
		}
	}
</script>

<style>
</style>