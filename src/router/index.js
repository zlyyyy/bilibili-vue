import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

export default new VueRouter({
  mode: "hash",
  routes: [
    {
      name: "home",
      path: "/",
      component: () => import("@/pages/home/index"),
      meta: {
        title: "VUE哔哩哔哩 (゜-゜)つロ 干杯~-bilibili"
      }
    },
    {
      name: "Ranking",
      path: "/ranking",
      component: () => import("@/pages/ranking/ranking"),
      redirect: "/ranking/all/0/0/0",
      children: [
        {
          name: "all",
          path: ":type/:rid/:rankselect/:rankselect2",
          component: () => import("@/components/ranking/allList"),
          meta: {
            title: "VUE热门视频排行榜 - 哔哩哔哩 (゜-゜)つロ 干杯~-bilibili"
          }
        },
        {
          name: "origin",
          path: ":type/:rid/:rankselect/:rankselect2",
          component: () => import("@/components/ranking/allList"),
          meta: {
            title: "VUE热门视频排行榜 - 哔哩哔哩 (゜-゜)つロ 干杯~-bilibili"
          }
        },
        {
          name: "bangumi",
          path: ":type/:rid/:rankselect/:rankselect2",
          component: () => import("@/components/ranking/allList"),
          meta: {
            title: "VUE热门视频排行榜 - 哔哩哔哩 (゜-゜)つロ 干杯~-bilibili"
          }
        },
        {
          name: "cinema",
          path: ":type/:rid/:rankselect/:rankselect2",
          component: () => import("@/components/ranking/allList"),
          meta: {
            title: "VUE热门视频排行榜 - 哔哩哔哩 (゜-゜)つロ 干杯~-bilibili"
          }
        },
        {
          name: "rookie",
          path: ":type/:rid/:rankselect/:rankselect2",
          component: () => import("@/components/ranking/allList"),
          meta: {
            title: "VUE热门视频排行榜 - 哔哩哔哩 (゜-゜)つロ 干杯~-bilibili"
          }
        }
      ]
    },
    {
      path: "/search",
      component: () => import("@/pages/search/search"),
      redirect: "/search/all",
      children: [
        {
          name: "searchAll",
          path: "all",
          component: () => import("@/components/search/searchList"),
          meta: {
            title: "VUE搜索结果 - 哔哩哔哩 (゜-゜)つロ 干杯~-bilibili"
          }
        },
        {
          name: "searchVideo",
          path: "video",
          component: () => import("@/components/search/searchList"),
          meta: {
            title: "VUE搜索结果 - 哔哩哔哩 (゜-゜)つロ 干杯~-bilibili"
          }
        },
        {
          name: "searchBangumi",
          path: "bangumi",
          component: () => import("@/components/search/searchList"),
          meta: {
            title: "VUE搜索结果 - 哔哩哔哩 (゜-゜)つロ 干杯~-bilibili"
          }
        },
        {
          name: "searchPgc",
          path: "pgc",
          component: () => import("@/components/search/searchList"),
          meta: {
            title: "VUE搜索结果 - 哔哩哔哩 (゜-゜)つロ 干杯~-bilibili"
          }
        },
        {
          name: "searchLive",
          path: "live",
          component: () => import("@/components/search/searchList"),
          meta: {
            title: "VUE搜索结果 - 哔哩哔哩 (゜-゜)つロ 干杯~-bilibili"
          }
        },
        {
          name: "searchArticle",
          path: "article",
          component: () => import("@/components/search/searchList"),
          meta: {
            title: "VUE搜索结果 - 哔哩哔哩 (゜-゜)つロ 干杯~-bilibili"
          }
        },
        {
          name: "searchTopic",
          path: "topic",
          component: () => import("@/components/search/searchList"),
          meta: {
            title: "VUE搜索结果 - 哔哩哔哩 (゜-゜)つロ 干杯~-bilibili"
          }
        },
        {
          name: "upuser",
          path: "upuser",
          component: () => import("@/components/search/searchList"),
          meta: {
            title: "VUE搜索结果 - 哔哩哔哩 (゜-゜)つロ 干杯~-bilibili"
          }
        },
        {
          name: "photo",
          path: "photo",
          component: () => import("@/components/search/searchList"),
          meta: {
            title: "VUE搜索结果 - 哔哩哔哩 (゜-゜)つロ 干杯~-bilibili"
          }
        }
      ]
    },
    {
      name: "video",
      path: "/video/:aid",
      component: () => import("@/pages/notFound/404"),
      meta: {
        title: ":aid - 哔哩哔哩 (゜-゜)つロ 干杯~-bilibili"
      }
    },
    {
      path: "*",
      component: () => import("@/pages/video/video"),
      meta: {
        title: "VUE出错啦! - bilibili.com"
      }
    }
  ]
});
