<template>
  <div class="b-page-body">
    <div class="main-inner">
      <div class="rank-container">
        <div class="rank-head">
          <template v-if="rankAll">
            <ul class="rank-menu">
              <router-link
                v-for="(item, index) in rankMenu"
                @click.native="one(index)"
                :to="{
                  name: item.name,
                  params: {
                    type: item.name,
                    rid: item.children[0].rid,
                    rankselect: $route.params.rankselect,
                    rankselect2: $route.params.rankselect2
                  }
                }"
                tag="li"
                active-class="active"
                :key="item.id"
                :class="{ active: index == firstMenuActive }"
              >
                <span class="rank-icon" :class="item.icon"></span>
                <span class="text">{{ item.title }}</span>
              </router-link>
            </ul>
          </template>
        </div>
        <div class="rank-body">
          <div class="rank-tab-wrap">
            <ul class="rank-tab">
              <li
                v-for="(item, index) in rankMenu[firstMenuActive].children"
                :key="`rank_tab_${index}`"
                @click="two(index)"
                :class="{ active: index == secondMenuActive }"
              >
                {{ item.name }}
              </li>
            </ul>
            <div class="rank-type-dropdown">
              <dropdown
                v-if="menuData.select"
                :dropdownData="menuData.select"
                :selected="menuData.selectActive"
                @selectClick="getSelectActive"
              ></dropdown>
              <dropdown
                v-if="menuData.select2"
                :dropdownData="menuData.select2"
                :selected="menuData.select2Active"
                @selectClick="getSelect2Active"
              ></dropdown>
            </div>
          </div>
          <div class="rank-list-head">
            <div class="rank_tips">
              <i class="b-icon-tip"></i>
              <span class="tip-txt">{{ rankAll.note }}</span>
            </div>
          </div>
          <keep-alive>
            <router-view
              :rankAll="rankAll"
              :key="key"
              :type="firstMenuActive"
              :loading="loading"
            ></router-view>
          </keep-alive>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Dropdown from "../../components/dropdown/dropdown";
import { createNamespacedHelpers } from "vuex";
const { mapState, mapMutations, mapActions } = createNamespacedHelpers(
  "ranking"
);

export default {
  created() {
    //地址栏读取params参数，设置对应的参数
    //一级菜单
    const _routes = ["all", "origin", "bangumi", "cinema", "rookie"];
    _routes.forEach((el, index) => {
      el == this.$route.params.type ? this.setFirstMenuActive(index) : null;
    });
    //二级菜单
    this.menuData.children.forEach((el, index) => {
      el.rid == this.$route.params.rid ? this.setSecondMenuActive(index) : null;
    });
    //一级筛选
    this.setSelectActive(this.$route.params.rankselect);
    //二级筛选
    this.menuData.select2.forEach((el, index) => {
      el.num == this.$route.params.rankselect2
        ? this.setSelect2Active(index)
        : null;
    });
    //数据获取
    this.refreshData();
  },
  components: {
    Dropdown
  },
  computed: {
    ...mapState([
      "rankMenu",
      "firstMenuActive",
      "secondMenuActive",
      "rankTips",
      "rankAll",
      "loading"
    ]),
    menuData() {
      return this.rankMenu[this.firstMenuActive];
    },
    key() {
      return this.$route.name !== undefined
        ? this.$route.name + new Date()
        : this.$route + new Date();
    }
  },
  data() {
    return {};
  },
  methods: {
    ...mapMutations({
      setSelectActive: "SET_SELECT_ACTIVE",
      setSelect2Active: "SET_SELECT2_ACTIVE",
      setFirstMenuActive: "SET_FIRST_MENU_ACTIVE",
      setSecondMenuActive: "SET_SECOND_MENU_ACTIVE",
      setLoading: "SET_LOADING"
    }),
    ...mapActions(["setRankData"]),
    one(index) {
      this.setFirstMenuActive(index); //同步修改state一级高亮
      this.setSecondMenuActive(0); //默认state二级菜单第一个元素高亮
      this.refreshData(); //同步获取数据
    },
    two(index) {
      this.setSecondMenuActive(index); //同步修改state二级菜单高亮
      this.$route.params.rid = this.menuData.children[index].rid; //修改路由rid参数
      this.RouterPush(); //刷新路由
    },
    refreshData() {
      const _loading = true;
      this.setLoading(_loading);
      this.setRankData({
        type: this.firstMenuActive, //一级类目
        rid: this.menuData.children[this.secondMenuActive].rid, //二级类目
        arc_type: this.menuData.selectActive, //全部近期筛选
        day: this.menuData.select2[this.menuData.select2Active].num //时间筛选
      });
    },
    getSelectActive(index) {
      //一级select选择获取并设置
      this.setSelectActive(index); //同步修改一级多选
      this.$route.params.rankselect = index + ""; //修改路由rankselect参数
      this.RouterPush(); //刷新路由
    },
    getSelect2Active(index) {
      //二级select选择获取并设置
      this.setSelect2Active(index); //同步修改二级多选
      this.$route.params.rankselect2 = this.menuData.select2[index].num + ""; //修改路由rankselect2参数
      this.RouterPush(); //刷新路由
    },
    RouterPush() {
      this.refreshData(); //重新获取数据
      this.$router.push({
        name: this.$route.name,
        params: {
          type: this.$route.params.type,
          rid: this.$route.params.rid,
          rankselect: this.$route.params.rankselect,
          rankselect2: this.$route.params.rankselect2
        }
      });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
@import "../../style/mixin";

.main-inner {
  width: 1160px;
  margin: 0 auto;
  position: relative;
  .rank-container {
    border: 0;
    margin: 20px 0;
    @include borderRadius(4px);
  }
}
.rank-menu,
.rank-menu li {
  text-align: center;
}
.rank-menu {
  li {
    @include wh(115px, 40px);
    font-size: 18px;
    line-height: 25px;
    padding: 0 12px;
    margin-left: 52px;
    display: inline-block;
    cursor: pointer;
    &:first-child {
      margin-left: 0;
    }
    &.active {
      color: $blue;
      height: 38px;
      border-bottom: 2px solid $blue;
    }
    .text {
      margin-left: 5px;
      font-size: 16px;
    }
    .rank-icon {
      display: inline-block;
      @include wh(30px, 30px);
      vertical-align: middle;
      background: url(../../assets/icons.png) no-repeat;
      &.all {
        background-position: -83px -979px;
      }
      &.origin {
        background-position: -83px -1041px;
      }
      &.bangumi {
        background-position: -83px -1107px;
      }
      &.cinema {
        background-position: -146px -1555px;
      }
      &.rookie {
        background-position: -83px -1170px;
      }
    }
  }
}
.rank-tab-wrap {
  background: #edf2f9;
  padding: 0;
  @include borderRadius(4px);
  clear: both;
  height: 40px;
  .rank-tab {
    float: left;
    li {
      float: left;
      padding: 0 10px;
      height: 40px;
      line-height: 40px;
      text-align: center;
      cursor: pointer;
      font-size: 14px;
      margin-right: 10px;
    }
    .active {
      color: $blue;
    }
  }
  .rank-dropdown {
    margin-top: 8px;
    margin-right: 10px;
  }
}
.rank-type-dropdown {
  float: right;
}
.rank-list-head {
  padding: 15px 0;
  .rank_tips {
    padding: 7px 0;
    background-color: #edf2f9;
    @include borderRadius(4px);
    .b-icon-tip {
      @include wh(16px, 16px);
      display: inline-block;
      vertical-align: middle;
      margin: 0 10px;
      background: url(../../assets/icons3.png) -52px -27px no-repeat;
    }
    .tip-txt {
      vertical-align: middle;
    }
  }
}
.ranking-list-wrap {
  position: relative;
  min-height: 600px;
  .rank-list {
    .rank-item {
      @include transition(0.2s);
      overflow: hidden;
      border-bottom: 1px solid #e5e9ef;
      position: relative;
      &:hover {
        -webkit-box-shadow: 0 2px 5px #ccc;
        box-shadow: 0 2px 5px #ccc;
      }
      .num {
        @include wh(70px, 70px);
        position: absolute;
        top: 20px;
        left: 0;
        line-height: 70px;
        text-align: center;
        @include sc(36px, #b8c0cc);
        font-weight: 700;
        font-family: simhei;
      }
      .content {
        padding: 20px 0 0 70px;
        overflow: hidden;
        .img {
          position: relative;
          float: left;
          a {
            cursor: pointer;
            display: inline-block;
          }
          .cover {
            @include wh(114px, 70px);
            img {
              display: block;
              @include wh(100%, 100%);
            }
          }
          &:hover {
            .w-later {
              display: block;
            }
          }
        }
        .info {
          padding-bottom: 20px;
          margin-left: 130px;
          height: 70px;
          position: relative;
          .title {
            cursor: pointer;
            height: 20px;
            line-height: 20px;
            font-weight: 700;
            @include sc(14px, $black);
            &:hover {
              color: $blue;
            }
          }
          .detail {
            margin-top: 20px;
            color: $grau;
            a {
              color: $grau;
              &:hover {
                span {
                  color: $blue;
                }
              }
            }
            .data-box {
              width: 80px;
              margin-right: 20px;
              white-space: nowrap;
              -o-text-overflow: ellipsis;
              text-overflow: ellipsis;
              overflow: hidden;
            }
            .b-icon {
              @include wh(12px, 12px);
              margin-right: 5px;
              display: inline-block;
              vertical-align: text-top;
              background: url(../../assets/icons.png) no-repeat;
              &.play {
                background-position: -282px -90px;
              }
              &.view {
                background-position: -282px -218px;
              }
              &.author {
                background-position: -282px -154px;
              }
            }
          }
          .pts {
            height: 20px;
            color: #b8c0cc;
            line-height: 20px;
            position: absolute;
            bottom: 40px;
            right: 20px;
            text-align: center;
            div {
              font-weight: 700;
              @include sc(16px, $blue);
              margin-bottom: 12px;
            }
          }
        }
      }
    }
    &.bangumi {
      li {
        .num {
          height: 120px;
          line-height: 120px;
        }
        .content {
          .img {
            .cover {
              @include wh(90px, 120px);
              img {
                border-radius: 4px;
              }
            }
          }
          .info {
            height: 120px;
            margin-left: 106px;
            .title {
              height: 42px;
              line-height: 42px;
              font-size: 18px;
            }
            .bangumi-info {
              color: $grau;
            }
            .bangumi-num {
              color: $pink;
            }
            .pts {
              bottom: 90px;
            }
          }
        }
      }
    }
  }
}

.watch-later-trigger {
  display: none;
  @include wh(22px, 22px);
  position: absolute;
  right: 6px;
  bottom: 4px;
  cursor: pointer;
  background-image: url(../../assets/play.png);
}
</style>
