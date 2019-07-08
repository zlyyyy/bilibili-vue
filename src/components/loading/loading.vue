<template>
  <div class="bili-loading">
    <img src="../../../public/loading.gif" />
    <span>加载中...</span>
  </div>
</template>

<script>
export default {
  props: {},
  computed: {},
  data() {
    return {};
  },
  methods: {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
@import "../../style/mixin";

.bili-loading {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  img {
    display: inline-block;
    vertical-align: middle;
  }
  span {
    display: inline-block;
    vertical-align: middle;
    height: 20px;
    line-height: 24px;
    margin-left: 2px;
    color: $grau;
  }
}
</style>
