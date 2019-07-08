<template>
  <div class="bili-dropdown rank-dropdown">
    <span class="selected">{{ dropdownData[selected].name }}</span>
    <i class="icon icon-arrow-down"></i>
    <ul class="dropdown-list">
      <li
        v-for="(item, index) in dropdownData"
        :key="`dropdown_list_${index}`"
        @click="selectClick(index)"
        class="dropdown-item"
        v-show="index == selected ? false : true"
      >
        {{ item.name }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    dropdownData: {
      type: Array,
      default: () => []
    },
    selected: {
      type: [Number, String],
      default: 0
    }
  },
  computed: {},
  data() {
    return {};
  },
  methods: {
    selectClick(index) {
      //通知父组件来操作
      this.$emit("selectClick", index);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
@import "../../style/mixin";

.bili-dropdown {
  position: relative;
  display: inline-block;
  vertical-align: middle;
  background-color: $white;
  cursor: default;
  padding: 0 7px;
  height: 22px;
  line-height: 22px;
  border: 1px solid $border_color;
  @include borderRadius(4px);
  &:hover {
    border-radius: 4px 4px 0 0;
    -webkit-box-shadow: rgba(0, 0, 0, 0.16) 0 2px 4px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.16);
    .dropdown-list {
      display: block;
    }
  }
  .selected {
    display: inline-block;
    vertical-align: top;
  }
  .icon-arrow-down {
    background-position: -475px -157px;
    display: inline-block;
    vertical-align: middle;
    @include wh(12px, 6px);
    margin-left: 5px;
    margin-top: -1px;
  }
  .dropdown-list {
    position: absolute;
    width: 100%;
    background: $white;
    border: 1px solid $border_color;
    border-top: 0;
    left: -1px;
    top: 22px;
    z-index: 10;
    display: none;
    border-radius: 0 0 4px 4px;
    .dropdown-item {
      cursor: pointer;
      margin: 0;
      padding: 3px 7px;
    }
  }
}
.sec-rank {
  .rank-head {
    .rank-dropdown {
      float: right;
    }
  }
}
</style>
