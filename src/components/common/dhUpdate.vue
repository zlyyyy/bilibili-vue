<template>
    <div class="zone-wrap-module">
        <div class="bangumi-module">
            <div class="bangumi-timing-module l-con">
                <i class="icon icon_t" :class="item.icon"></i>
                <a :href=item.moreUrl class="name">{{ item.title }}</a>
                <div class="bili-tab">
                    <div class="bili-tab-item" v-for="(item,index) in item.tab" :class="{'on' : index === nowtab }" @click="nowtabclick(index)">{{ item.name }}</div>
                </div>
                <a :href=item.moreUrl target="_blank" class="link-more">
                    更多
                    <i class="icon"></i>
                </a>
            </div>
        </div>
    </div>
</template>

<script>
import Dropdown from '../base/dropdown'
export default {
    created() {
        
    },
    components: {
        Dropdown
    },
    props: {
        
    },
    data () {
        return {
            dropdownData:[],

        }
    },
    methods: {
        
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>
