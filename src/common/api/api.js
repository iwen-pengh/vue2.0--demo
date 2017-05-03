import Vue from 'vue';
let base = '';
let apiBase = '/tag-management';
export const fetchTagList = generateGet({
  url: '/tag/list'
});

export const requestLogin = generatePost({
  url: '/user/login'
});

export const requestLogout = generateGet({
  url: '/logout'
});

export const addTagInfo = generatePost({
  url: '/tag/addTagInfo'
});

export const fetchTagDetail = generateGet({
  url: '/tag/tagDetail'
});

Vue.filter('apiPath', function(value) {
  return apiBase + apiPathDic[value || ''] || '';
});
