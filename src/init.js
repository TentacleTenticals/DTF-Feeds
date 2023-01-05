// ==UserScript==
// @name        Init
// @namespace   https://github.com/TentacleTenticals/DTF-feeds
// @match       https://dtf.ru/*
// @grant       none
// @version     1.0
// @author      Tentacle Tenticals
// @description Файлик инициализации скрипта
// @homepage https://github.com/TentacleTenticals/DTF-feeds
// @license MIT
// ==/UserScript==
/* jshint esversion:8 */

let mainSettings;
let defaultSettings = {
  settings: {
    ['what to group']: {
      ['subsites']: true,
      ['blogs']: true
    }
  },
  data: {
    watched: [],
    blocked: []
  }
};
let initCfg = {
  storeName: 'DTF feeds',
  storeDesc: 'Настройки скрипта DTF feeds',
  name: 'DTF feeds',
  id: 'feeds',
  func: () => {
    new FeedGroups();
    feedSearch();
  }
};
