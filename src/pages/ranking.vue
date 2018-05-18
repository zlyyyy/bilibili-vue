<template>
    <div class="b-page-body">
        <div class="main-inner">
            <div class="rank-container">
                <div class="rank-head">
                    <ul class="rank-menu">
                        <router-link v-for="item in rankmenu" :to="{ path: item.path }" tag="li" active-class="active" :key="item.id">
                            <span class="rank-icon" :class="item.icon"></span>
                            <span class="text">{{ item.name }}</span>
                        </router-link>
                    </ul>
                </div>
                <keep-alive>
                        <router-view></router-view>
                </keep-alive>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    created() { 
    },
    components:{
    },
    data () {
        return {
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
        }
    },
    methods: {
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.main-inner {
    width: 1160px;
    margin: 0 auto;
    position: relative;
}
.main-inner .rank-container {
    border: 0;
    margin: 20px 0;
    border-radius: 4px;
}
.rank-menu, .rank-menu li {
    text-align: center;
}
.rank-menu li {
    width: 115px;
    height: 40px;
    font-size: 18px;
    line-height: 25px;
    padding: 0 12px;
    margin-left: 52px;
    display: inline-block;
    cursor: pointer;
}
.rank-menu li:first-child {
    margin-left: 0;
}
.rank-menu li.active {
    color: #00a1d6;
    height: 38px;
    border-bottom: 2px solid #00a1d6;
}
.rank-menu li .text {
    margin-left: 5px;
    font-size: 16px;
}
.rank-menu li .rank-icon {
    display: inline-block;
    width: 30px;
    height: 30px;
    vertical-align: middle;
    background: url(../assets/icons.png) no-repeat;
}
.rank-menu li .rank-icon.all {
    background-position: -83px -979px;
}
.rank-menu li .rank-icon.origin {
    background-position: -83px -1041px;
}
.rank-menu li .rank-icon.bangumi {
    background-position: -83px -1107px;
}
.rank-menu li .rank-icon.cinema {
    background-position: -146px -1555px;
}
.rank-menu li .rank-icon.rookie {
    background-position: -83px -1170px;
}
</style>
