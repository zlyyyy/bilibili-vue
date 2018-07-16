<template>
    <div class="error-container">
        搜索列表
    </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex'
const { mapState, mapMutations, mapActions } = createNamespacedHelpers('notFound')

export default {
    created() {

    },
    computed: {
     	...mapState([//命名空间获取state
			'error',
			'randomNum'
		])
    },
    components:{

    },
    data () {
        return {
                    
        }
    },
    methods: {
		...mapActions([
			'setError',
			'setRandomNum'
		]),
		goBack(){
			window.history.go(-1)
		},
		test(){
			let num = Math.floor(Math.random()*this.error.list.length)
		console.log(num)
		this.setRandomNum(num)
		}
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>
