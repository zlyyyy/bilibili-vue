<template>
     <div class="bili-dropdown rank-dropdown">
        <span class="selected">{{ dropdownData[selected].name }}</span>
        <i class="icon icon-arrow-down"></i>
        <ul class="dropdown-list">
            <li v-for="(item,index) in dropdownData" @click="selectclick(index)" class="dropdown-item" v-show="index===selected? false : true">{{ item.name }}</li>
        </ul>
    </div>
</template>

<script>
export default {
    props: {
        dropdownData: {
            type: Array,
            default: []
        },
        selected: {
            default: 0
        }
    },
    computed:{

    },
    data () {
        return {
        
        }
    },
    methods: {
        selectclick(index){
            //通知父组件来操作
            this.$emit('dropselected',index)
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.bili-dropdown {
    position: relative;
    display: inline-block;
    vertical-align: middle;
    background-color: #fff;
    cursor: default;
    padding: 0 7px;
    height: 22px;
    line-height: 22px;
    border: 1px solid #ccd0d7;
    border-radius: 4px;
}
.bili-dropdown:hover {
    border-radius: 4px 4px 0 0;
    -webkit-box-shadow: rgba(0,0,0,.16) 0 2px 4px;
    box-shadow: 0 2px 4px rgba(0,0,0,.16);
}
.bili-dropdown:hover .dropdown-list {
    display: block;
}
.sec-rank .rank-head .rank-dropdown {
    float: right;
}
.bili-dropdown .selected {
    display: inline-block;
    vertical-align: top;
}
.bili-dropdown .icon-arrow-down {
    background-position: -475px -157px;
    display: inline-block;
    vertical-align: middle;
    width: 12px;
    height: 6px;
    margin-left: 5px;
    margin-top: -1px;
}
.bili-dropdown .dropdown-list {
    position: absolute;
    width: 100%;
    background: #fff;
    border: 1px solid #ccd0d7;
    border-top: 0;
    left: -1px;
    top: 22px;
    z-index: 10;
    display: none;
    border-radius: 0 0 4px 4px;
}
.bili-dropdown .dropdown-list .dropdown-item {
    cursor: pointer;
    margin: 0;
    padding: 3px 7px;
}
</style>
