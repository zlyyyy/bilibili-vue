<template>
    <div class="b-page-body">
        <div class="main-inner">
            <div class="rank-container">
                <div class="rank-head">
                    <ul class="rank-menu">
                        <li type="all" class="active">
                            <span class="rank-icon all"></span>
                            <span class="text">全站榜</span>
                        </li>
                    </ul>
                </div>
                <div class="rank-body">
                    <div class="rank-tab-wrap">
                        <ul class="rank-tab">
                            <li class="active">全站</li>
                            <li class="">动画</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <p>ranking</p>
    </div>
</template>

<script>
export default {
    created() {
        
    },
    components:{
        rankmenu: [
            {
                name: '全站榜',
                icon: 'all',
                path: '/ranking/all'
            },
            {
                name: '原创榜',
                icon: 'origin',
                path: '/ranking/origin'
            },
            {
                name: '新番榜',
                icon: 'bangumi',
                path: '/ranking/bangumi'
            },
            {
                name: '影视榜',
                icon: 'cinema',
                path: '/ranking/cinema'
            },
            {
                name: '新人榜',
                icon: 'rookie',
                path: '/ranking/rookie'
            }
        ]
    },
    data () {
        return {
                    
        }
    },
    methods: {
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
