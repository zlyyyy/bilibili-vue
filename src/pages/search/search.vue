<template>
  <div class="contain">
    <div class="head-contain">
      <div class="search-wrap">
        <div class="">
          <div class="logo-input clearfix">
            <a href="javascript:;" class="search-logo"></a>
            <div class="search-block">
              <div class="input-wrap">
                <input
                  v-model="searchValue"
                  type="text"
                  @keyup.enter="getAllResult"
                  v-on:input="setSuggest"
                  @focus="setSuggestShow"
                  @blur="setSuggestHide"
                  id="search-keyword"
                  maxlength="100"
                  autocomplete="off"
                />
                <div class="suggest-wrap" v-if="suggestShow">
                  <div class="hotword-wrap" style="display: none;">
                    <ul class="horizontal">
                      <li>
                        <a href="javascript:;" class="hz-text">
                          世界杯
                        </a>
                      </li>
                      <li>
                        <a href="javascript:;" class="hz-text">
                          工作细胞
                        </a>
                      </li>
                      <li>
                        <a href="javascript:;" class="hz-text">
                          我不是药神
                        </a>
                      </li>
                      <li>
                        <a href="javascript:;" class="hz-text">
                          2018洲际赛
                        </a>
                      </li>
                      <li>
                        <a href="javascript:;" class="hz-text">
                          人生一串
                        </a>
                      </li>
                      <li>
                        <a href="javascript:;" class="hz-text">
                          第五人格
                        </a>
                      </li>
                      <li>
                        <a href="javascript:;" class="hz-text">
                          我的英雄学院
                        </a>
                      </li>
                      <li>
                        <a href="javascript:;" class="hz-text">
                          防弹少年团
                        </a>
                      </li>
                      <li>
                        <a href="javascript:;" class="hz-text">
                          创造101
                        </a>
                      </li>
                      <li>
                        <a href="javascript:;" class="hz-text">
                          逆水寒
                        </a>
                      </li>
                    </ul>
                  </div>
                  <ul class="keyword-wrap" v-if="suggestShow">
                    <li>
                      <a class="vt-text keyword"> </a>
                    </li>
                  </ul>
                  <ul class="history-wrap" style="display: none;">
                    <li class="title"><span>搜索历史</span></li>
                    <li class="history-li">
                      <a class="vt-text history">我的英雄学院</a
                      ><i class="clear"></i>
                    </li>
                    <li class="history-li">
                      <a class="vt-text history">寄生兽</a><i class="clear"></i>
                    </li>
                    <li class="history-li">
                      <a class="vt-text history">K</a><i class="clear"></i>
                    </li>
                    <li class="history-li">
                      <a class="vt-text history">寄生</a><i class="clear"></i>
                    </li>
                    <li class="history-li">
                      <a class="vt-text history">RNG</a><i class="clear"></i>
                    </li>
                    <li class="clearall"><a>清空搜索历史</a></li>
                  </ul>
                </div>
              </div>
              <div class="search-button">
                <i class="icon-search-white"></i>
                <span class="search-text">搜索</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="nav-wrap">
        <ul class="wrap clearfix">
          <router-link
            v-for="(item, index) in searchMenu"
            :to="{
              path: item.path,
              params: {
                keyword: $route.query.keyword
              }
            }"
            active-class="active"
            tag="li"
            class="sub"
            :key="item.id"
            @mouseover.native="hoverBarLeft(index)"
            @mouseout.native="hoverBarLeave()"
            @click.native="setHoverIndex(index)"
          >
            {{ item.title }}
            <span class="num" v-show="index > 0">{{
              topNumChange(item.resultNum)
            }}</span>
          </router-link>
        </ul>
        <div class="hover-bar" :style="{ left: hoverBar + 'px' }"></div>
      </div>
    </div>
    <router-view :allResult="allResult"></router-view>
  </div>
</template>

<script>
import { mapState, mapMutations, mapActions } from "vuex";

export default {
  created() {
    //根据地址栏修改当前搜索条件
    const keyword = this.$route.query.keyword;
    this.setSearchValue(keyword);
    keyword == null
      ? null
      : this.setAllResult({
          highlight: 1,
          keyword: keyword
        });
    //路由判断设置头部菜单栏显示隐藏
    const path = this.$route.matched[0].path === "/search" ? false : true;
    this.setMenuShow(path);
  },
  computed: {
    searchValue: {
      get() {
        return this.$store.state.search.searchWord;
      },
      set(value) {
        this.setSearchValue(value);
      }
    },
    ...mapState("search", [
      //命名空间获取state
      "searchWord",
      "searchMenu",
      "hoverBar",
      "hoverIndex",
      "allResult",
      "menuShow"
    ])
  },
  components: {},
  data() {
    return {
      suggestShow: false
    };
  },
  methods: {
    ...mapMutations("search", {
      setSearchValue: "SET_SEARCH_VALUE",
      setHoverBar: "SET_HOVER_BAR",
      setHoverIndex: "SET_HOVER_INDEX",
      setMenuShow: "SET_MENU_SHOW"
    }),
    ...mapActions("search", ["setAllResult", "setSuggest", "setSeason"]),
    setSuggestShow() {
      this.searchValue.length > 0
        ? (this.suggestShow = true)
        : (this.suggestShow = false);
    },
    setSuggestHide() {
      this.suggestShow = false;
    },
    hoverBarLeft(index) {
      this.setHoverBar(index * 114);
    },
    hoverBarLeave() {
      this.setHoverBar(this.hoverIndex * 114);
    },
    topNumChange(num) {
      if (num > 99) {
        return "99+";
      } else {
        return num;
      }
    },
    getAllResult() {
        this.setAllResult({
          highlight: 1,
          keyword: this.searchValue
        })
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
@import "../../style/mixin";

a {
  outline: 0;
  color: $blue;
  text-decoration: none;
  cursor: pointer;
}
.contain {
  width: 980px;
  margin: 0 auto;
}
.head-contain {
  padding-top: 40px;
}
.search-wrap {
  @include wh(587px, 44px);
  margin: 0 auto;
  position: relative;
  .search-logo {
    background-image: url("../../assets/search/sprite.png");
    background-position: -261px -72px;
    @include wh(131px, 35px);
    float: left;
    margin-top: 7px;
  }
  .search-block {
    width: 430px;
    float: left;
    margin-left: 26px;
    .input-wrap {
      position: relative;
      background: $white;
      @include borderRadius(4px);
      float: left;
      width: 330px;
      margin-right: 10px;
      input {
        @include wh(296px, 18px);
        -webkit-box-shadow: none;
        box-shadow: none;
        padding: 11px 15px;
        background: transparent;
        border: 2px solid $border_color;
        @include borderRadius(4px);
        color: $black;
      }
    }
    .search-button {
      cursor: pointer;
      float: left;
      background: $blue;
      @include sc(16px, $white);
      letter-spacing: 2px;
      line-height: 42px;
      text-align: center;
      width: 90px;
      @include borderRadius(4px);
      &:hover {
        background: #00b5e5;
      }
      .icon-search-white {
        background-image: url(../../assets/search/sprite.png);
        background-position: -148px -327px;
        @include wh(18px, 19px);
        vertical-align: middle;
        margin-top: -2px;
        display: inline-block;
      }
    }
    .search-text {
      margin-left: 7px;
    }
  }
}
.suggest-wrap {
  border: 1px solid #e5e9ef;
  position: absolute;
  width: 327px;
  @include borderRadius(4px);
  text-align: center;
  padding: 10px 0;
  color: $black;
  background: $white;
  z-index: 100;
  overflow: hidden;
  margin-top: 5px;
  -webkit-box-shadow: rgba(0, 0, 0, 0.16) 0 2px 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.16);
  .horizontal {
    padding: 0 20px;
    max-height: 84px;
    overflow: hidden;
    .hz-text {
      @include borderRadius(4px);
      margin-right: 15px;
      margin-bottom: 10px;
      border: 1px solid #e5e9ef;
      @include sc(14px, $black);
      height: 18px;
      padding: 7px 8px;
      float: left;
      text-align: center;
      &:hover {
        border-color: $blue;
        color: $blue;
      }
    }
  }
  .history-wrap {
    margin-top: 20px;
    position: relative;
    padding-bottom: 20px;
    .history-li {
      position: relative;
      margin: 0;
      .clear {
        position: absolute;
        right: 20px;
        top: 10px;
        background-image: url(../../assets/search/sprite.png);
        background-position: -485px -41px;
        @include wh(12px, 12px);
        cursor: pointer;
      }
    }
    .clearall {
      position: absolute;
      bottom: 0;
      right: 20px;
      @include sc(12px, $blue);
    }
  }
  .title {
    border-top: 1px solid #e5e9ef;
    height: 10px;
    line-height: 10px;
    margin: 0 20px;
    span {
      display: inline-block;
      @include sc(12px, $grau);
      padding: 0 10px;
      text-align: center;
      background: $white;
      position: relative;
      top: -6px;
    }
  }
  .vt-text {
    height: 32px;
    display: block;
    line-height: 32px;
    @include sc(14px, $black);
    position: relative;
    text-align: left;
    white-space: nowrap;
    -o-text-overflow: ellipsis;
    text-overflow: ellipsis;
    overflow: hidden;
    cursor: pointer;
    padding: 0 20px;
    margin: 0 0 4px;
    &:hover {
      background-color: #e5e9ef;
    }
  }
  .keyword-wrap {
    .keyword {
      padding: 0 20px;
      color: $black;
      .suggest_high_light {
        color: $pink;
      }
    }
  }
}
.nav-wrap {
  border-bottom: 1px solid $border_color;
  height: 54px;
  padding: 0 0 1px;
  margin: 18px auto 0;
  position: relative;
  .wrap {
    & > .sub {
      float: left;
      line-height: 54px;
      text-align: center;
      cursor: pointer;
      width: 39px;
      padding: 0;
      font-size: 16px;
      padding-right: 75px;
      &:last-child {
        padding-right: 0;
      }
      & > span {
        position: absolute;
        margin-left: 6px;
        @include sc(12px, #6d757a);
      }
    }
  }
  .hover-bar {
    position: absolute;
    @include wh(39px, 2px);
    background-color: $blue;
    bottom: -1px;
    -webkit-transition: left 0.2s;
    -o-transition: left 0.2s;
    transition: left 0.2s;
  }
}
.nav-wrap .wrap,
.nav-wrap .wrap > .sub {
  height: 100%;
  position: relative;
}
.nav-wrap .wrap > .sub.active,
.nav-wrap .wrap > .sub:hover {
  color: $blue;
}
</style>
