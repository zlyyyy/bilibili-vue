<template>
  <div class="app-header">
    <nav-menu
      :leftNav="leftNav"
      :headBanner="headBanner"
      :menuShow="menuShow"
    ></nav-menu>
    <template v-if="menuShow">
      <div
        class="head-banner"
        :style="{ 'background-image': 'url(' + headBanner.pic + ')' }"
      >
        <div class="bili-wrapper head-content">
          <div class="search">
            <div class="searchform">
              <input
                v-model="searchValue"
                type="text"
                :placeholder="searchWord.show_name"
                @keyup.enter="searchALL()"
                v-on:input="setSuggest"
                @focus="setSuggestShow"
                @blur="setSuggestHide"
                class="search-keyword"
              />
              <button
                type="submit"
                class="search-submit"
                @click="searchALL()"
              ></button>
            </div>
            <ul class="bilibili-suggest" v-if="suggestShow">
              <li class="kw">
                <div class="b-line">
                  <p><span>关键词</span></p>
                </div>
              </li>
              <li
                class="suggest-item"
                v-for="(item, index) in suggest.tag"
                :key="`suggest_item_${index}`"
              >
                <a
                  :href="'/search/all?keyword=' + item.value"
                  target="_blank"
                  v-html="item.name"
                ></a>
                <!-- <div class="cancel"></div> -->
              </li>
            </ul>
            <router-link class="link-ranking" :to="{ path: 'ranking' }">
              <span>排行榜</span>
            </router-link>
          </div>
          <a
            class="head-logo"
            :style="{ background: 'url(' + headBanner.litpic + ')' }"
          ></a>
        </div>
        <a href="" target="_blank" class="banner-link"></a>
      </div>
      <div class="bili-wrapper">
        <div class="primary-menu">
          <ul class="nav-menu">
            <li
              v-for="(item, index) in menuLeft"
              :key="`menuLeft_item_${index}`"
              :class="item.class"
            >
              <a :href="item.href">
                <div class="num-wrap" v-if="item.num">
                  <!-- eslint-disable-next-line -->
                  <span>{{ item.num < 1000 ? item.num : 999 + "+" }}</span>
                </div>
                <div class="nav-name">
                  {{ item.name }}
                </div>
              </a>
              <ul class="sub-nav" v-if="item.items">
                <li
                  v-for="(navitem, ind) in item.items"
                  :key="`sub_navs_item_${ind}`"
                >
                  <a :href="navitem.href">
                    <span>{{ navitem.name }}</span>
                  </a>
                </li>
              </ul>
            </li>
            <li
              class="side-nav nav-square"
              v-for="(item, index) in menuRight"
              :key="`menuRight_item_${index}`"
            >
              <a :href="item.href" class="side-link" :class="item.class">
                <i :class="item.icon"></i>
                <span>{{ item.name }}</span>
              </a>
              <div
                class="sub-nav"
                v-if="item.fieldClass != ''"
                :class="item.fieldClass"
              >
                <ul>
                  <li
                    v-for="(itemnav, index) in item.fields"
                    :key="`item_fields_${index}`"
                  >
                    <a :href="itemnav.href">
                      <i
                        class="icon-prim"
                        :class="itemnav.icon"
                        v-if="itemnav.icon"
                      ></i>
                      <span>{{ itemnav.name }}</span>
                    </a>
                  </li>
                </ul>
                <div :class="item.fieldImgClass">
                  <a
                    v-for="(itemnavImg, index) in item.fieldImg"
                    :key="`fieldImg_item_${index}`"
                    :href="itemnavImg.href"
                    target="_blank"
                    :title="itemnavImg.title"
                    :class="itemnavImg.imgclass"
                  >
                    <img :alt="itemnavImg.title" :src="itemnavImg.src" />
                  </a>
                </div>
              </div>
            </li>
          </ul>
          <div class="gif-menu nav-gif" v-if="menuIcon.links">
            <a
              :href="menuIcon.links[0]"
              target="_blank"
              :title="menuIcon.title"
              class="random-p"
            >
              <img :src="menuIcon.icon" alt="" />
            </a>
          </div>
        </div>
      </div>
    </template>
  </div>
</template>

<script>
import NavMenu from "../../components/navMenu/navMenu";
import { mapState, mapMutations, mapActions } from "vuex";

export default {
  created() {
    this.setHeadBanner({
      pf: 0,
      id: 142
    });
    this.setSearchDefaultWords();
    this.setMenuIcon();
  },
  components: {
    NavMenu
  },
  data() {
    return {
      suggestShow: false
    };
  },
  computed: {
    // 使用对象展开运算符将此对象混入到外部对象中
    ...mapState("header", [
      //命名空间获取state
      "leftNav",
      "headBanner", //登录状态获取
      "searchWord",
      "suggest",
      "menuLeft",
      "menuRight",
      "menuIcon"
    ]),
    ...mapState("search", ["menuShow"]),
    searchValue: {
      get() {
        return this.$store.state.header.searchValue;
      },
      set(value) {
        this.setSearchValue(value);
      }
    }
  },
  methods: {
    ...mapMutations("header", {
      setSearchValue: "SET_SEARCH_WORD"
    }),
    ...mapActions("header", [
      "setHeadBanner", // 将 `this.setHeadBanner(amount)` 映射为 `this.$store.dispatch('headBanner', amount)`
      "setSearchDefaultWords",
      "setSuggest",
      "setMenuIcon"
    ]),
    setSuggestShow() {
      this.searchValue.length > 0
        ? (this.suggestShow = true)
        : (this.suggestShow = false);
    },
    setSuggestHide() {
      this.suggestShow = false;
    },
    searchALL() {
      if (this.searchValue === "") {
          this.$router.push({ path: "/search/all", query: { keyword: this.searchWord.word } });
      } else {
          this.$router.push({ path: "/search/all", query: { keyword: this.searchValue } });
      }
    },
    routerPath() {
      return this.$route.matched[0].path === "search";
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style></style>
