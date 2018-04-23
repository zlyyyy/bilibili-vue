<template>
  <div>
    <comment-a></comment-a>
    <!-- <commentA></commentA> -->
    <ul>
      <li v-for="(item, index) in article" >{{ item.title }} - {{ item.author }}-{{ index }}</li>
      <!-- <ul>
        <li v-for="(value, key) in book" >{{ key }} : {{ value }}</li>
      </ul> -->
    </ul>
    <!-- v-bind绑定属性 -->
    <a :href="url" :style="fontStyle">toBaidu</a>
    <br>
    <!-- v-if,v-else,v-show使用 -->
    <a v-if="test">TestA</a>
    <a v-else>no-data</a>
    <a v-show="!test">TestB</a>
    <br>
    <!-- v-on绑定事件 -->
    <button @click="toggle">toggleTestA</button>
    <button v-on:click="addItem">addItem</button>
    <br>
    <h1>自定义参数监听子组件传回参数</h1>
    <!-- 自定义参数监听子组件传回参数 -->
    <comment-a @my-event="comMyevent"></comment-a> 
    <br>
    <h1>数据绑定-输入框</h1>
    <!-- 数据绑定-输入框 -->
    <input v-model="valueSelect" @keydown.13="selectTest" type="text">
    <p>{{ valueSelect }}</p>
    <br>
    <!-- 数据绑定-多选 -->
    <input v-model="valueSelects" type="checkbox" value="测试1">
    <input v-model="valueSelects" type="checkbox" value="测试2">
    <input v-model="valueSelects" type="checkbox" value="测试3">
    <p>{{ valueSelects }}</p>
    <br>
    <h1>数据绑定-单选</h1>
    <!-- 数据绑定-单选 -->
    <input v-model="valueSelects2" type="radio" value="测试1">
    <input v-model="valueSelects2" type="radio" value="测试2">
    <input v-model="valueSelects2" type="radio" value="测试3">
    <p>{{ valueSelects2 }}</p>
    <br>
    <h1>下拉选择</h1>
    <!-- 下拉选择 -->
    <select v-model="valueOption">
      <option v-for="item in valueOptionItem" :value="item.value">{{ item.name }}</option>
    </select>
    <p>{{ valueOption }}</p>
    <h1>计算属性</h1>
    <!-- 计算属性 -->
    <input v-model="computeValue" type="text">
    <!-- 计算属性同步 -->
    <!-- <p>{{ computeValuerRevise }}</p> -->
    <!-- 调用方法同步 -->
    <p>{{ getcomputeValue() }}</p>
    <br>
    <h1>数据监听</h1>
    <!-- 数据监听 -->
    <input v-model="dataHear" type="text">
  </div>
</template>

<script>
//ES6语法引入
import Vue from "vue";
import commentA from "./components/HelloWorld";
export default {
  //组件注册
  components: {
    commentA
  },
  // 计算属性
  computed: {
    computeValuerRevise(){
      // return this.computeValue+"...."
      return this.computeValue.replace(/\d/g,"")//不同步数字
    }
  },
  watch:{
    //数据监听
    dataHear : function(val,oldval){
      console.log(val,oldval)
    }
  },
  data() {
    return {
      dataHear:"",
      computeValue:"",
      valueSelect:"",
      valueSelects:[],
      valueSelects2:null,
      valueOption:null,
      valueOptionItem:[
        {
          name:"多选1",
          value:1
        },
        {
          name:"多选2",
          value:2
        }
      ],
      url: "http://www.baidu.com",
      fontStyle: {
        "color":"red",
        "font-size":"16px"
      },
      test: true,
      msg: "Hello World",
      article: [
        {
          title: "朝花夕拾",
          author: "作者1"
        },
        {
          title: "狂人日记",
          author: "作者2"
        }
      ],
      book: {
        name: "张小明",
        pages: 123
      }
    };
  },
  methods: {
    //方法同步
    getcomputeValue () {
      return this.computeValue.replace(/\d/g,"")//不同步数字
    },
    addItem () {
      Vue.set(this.article,1,{
        title: "繁星春水",
        author: "冰心"
      })
      // this.article.push({
      //   title: "繁星春水",
      //   author: "冰心"
      // })
    },
    toggle () {
        this.test = !this.test
    },
    comMyevent (fun) {
      //监听子传递参数
      console.log("comMyevent"+fun)
      console.log(fun[2])
    },
    selectTest () {
      //输出value
      console.log(this.valueSelect)
    }
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
h1 {
  font-size: 28px;
  margin: 10px;
  color: #41b883;
  text-decoration: none;
  text-align: left;
  font-weight: bolder;
}
#app a:hover {
  color: #41b883;
}
.router-link-exact-active {
  border-bottom: 3px solid #41b883;
}
</style>
