<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <button @click="myName">myname</button>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      book: {
        name:"书1",
        pages:123
      },
      msg2: "TEST"
    }
  },
  methods:{
    myName () {
      this.$emit("my-event",[this.msg,this.msg2,this.book])//子向父级监听器传值
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: bolder;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
