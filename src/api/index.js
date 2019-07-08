import http from "../utils/http";

//登录获取个人信息
export function getUserInfo() {
  return http.get("/public/login.json");
}
//获取大会员推荐信息
export function getVipInfo() {
  return http.get("/public/topInfo.json");
}
//头部背景图
export function getAdSlide(data) {
  return http.get("/ad_slide", {
    params: {
      position_id: data.position_id
    }
  });
}
//头部背景图
export function getLoc(data) {
  return http.get("/loc", {
    params: {
      pf: data.pf,
      id: data.id
    }
  });
}
//轮播图+广告位
export function getLocs(data) {
  return http.get("/locs", {
    params: {
      pf: data.pf,
      ids: data.ids
    }
  });
}
//搜索框默认关键词
export function getSearchDefaultWords() {
  return http.get("/search_value");
}
//搜索框搜索建议
export function getSuggest(term) {
  return http.get("/suggest", {
    params: {
      term
    }
  });
}
//菜单右侧gif
export function getMenuIcon() {
  return http.get("/menu_gif");
}
//首页推荐排行
export function getRankingIndex(day) {
  return http.get("/ranking/index", {
    params: {
      day: day //1,3,7
    }
  });
}
//当前在线数
export function getOnline() {
  return http.get("/online");
}
//正在直播
export function getLiveling() {
  return http.get("/liveling");
}
//模块新动态
export function getDynamicRegion(data) {
  return http.get("/dynamic/region", {
    params: {
      ps: data.ps,
      rid: data.rid
    }
  });
}
//模块最新投稿
export function getNewlist(data) {
  return http.get("/newlist", {
    params: {
      ps: data.ps,
      rid: data.rid
    }
  });
}
//模块 三日/一周 排行 全部/原创
export function getRankingRegion(data) {
  return http.get("/ranking/region", {
    params: {
      rid: data.rid,
      day: data.day,
      original: data.original
    }
  });
}
//番剧更新时间表
export function getTimelineGlobal() {
  return http.get("/timeline_v2_global");
}
//番剧更新三日排行
export function getRankingGlobal3() {
  return http.get("/ranking/global_3");
}
//番剧更新三日排行
export function getRankingGlobal7() {
  return http.get("/ranking/global_7");
}
//国创更新时间表
export function getTimelineCn() {
  return http.get("/timeline_v2_cn");
}
//国创更新三日排行
export function getRankingCn3() {
  return http.get("/ranking/cn_3");
}
//国创更新七日排行
export function getRankingCn7() {
  return http.get("/ranking/cn_7", {
    headers: { "Content-Type": "application/json" }
  });
}

//番剧广告位
export function getGlobalAdSlide() {
  return http.get("/public/fj_ad_slide.json");
}

//国创广告位
export function getCnAdSlide() {
  return http.get("/public/gc_ad_slide.json");
}

//排行榜数据
//全站、原创、新人排行榜
export function getRanking(type, rid, arc_type = 0, day) {
  return http.get("/ranking", {
    params: {
      rid,
      day,
      type,
      arc_type
    }
  });
}
//新番排行榜
export function getSeasonRank(day, season_type) {
  return http.get("/season/rank/list", {
    params: {
      day: day,
      season_type: season_type
    }
  });
}
//影视排行榜
export function getMoviesRank(day, rid) {
  return http.get(`/ranking/movies/all-${day}-${rid}.json`);
}

//搜索结果
export function getSearchResult(highlight, keyword) {
  return http.get("/search/all", {
    params: {
      highlight,
      keyword
    }
  });
}
//根据media_id获取详细信息
export function getSeason(id) {
  return http.get("/search/season", {
    params: {
      media_id: id
    }
  });
}
