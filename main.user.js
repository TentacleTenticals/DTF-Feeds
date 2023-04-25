// ==UserScript==
// @name        DTF feeds v2.0
// @namespace   https://github.com/TentacleTenticals/DTF-feeds
// @match       https://dtf.ru/*
// @grant       none
// @version     1.0.3
// @author      Tentacle Tenticals
// @description Скрипт для управления DTF фидами
// @homepage    https://github.com/TentacleTenticals/DTF-feeds
// @updateURL   https://github.com/TentacleTenticals/DTF-Feeds/raw/main/main.user.js
// @downloadURL https://github.com/TentacleTenticals/DTF-Feeds/raw/main/main.user.js
//
// @require     https://github.com/TentacleTenticals/dtf-libs-2.0/raw/main/libs/settings/db/indexedDB.js
// @require https://github.com/TentacleTenticals/dtf-libs-2.0/raw/main/libs/settings/opener.js
// @require https://github.com/TentacleTenticals/dtf-libs-2.0/raw/main/libs/settings/settingsMenu.js
// @require https://github.com/TentacleTenticals/dtf-libs-2.0/raw/main/libs/settings/dataMenu.js
// @require https://github.com/TentacleTenticals/dtf-libs-2.0/raw/main/libs/settings/infoMenu.js
//
// @require https://github.com/TentacleTenticals/DTF-Feeds/raw/main/src/settings/defaultSettings.js
// @require https://github.com/TentacleTenticals/DTF-Feeds/raw/main/src/init/settings.js
// @require https://github.com/TentacleTenticals/DTF-Feeds/raw/main/src/init/data.js
// @require https://github.com/TentacleTenticals/DTF-Feeds/raw/main/src/init/info.js
//
// @require https://github.com/TentacleTenticals/dtf-libs-2.0/raw/main/libs/settings/css/dtfCore.js
// @require https://github.com/TentacleTenticals/dtf-libs-2.0/raw/main/libs/settings/css/menuLoader.js
//
// @require     https://github.com/TentacleTenticals/DTF-Feeds/raw/main/src/css/main.js
//
// @require     https://github.com/TentacleTenticals/dtf-libs-2.0/raw/main/libs/classes.js
// @license MIT
// ==/UserScript==
/* jshint esversion:8 */

(() => {
  function backupSettingsToFile(data, filename, type) {
    let file = new Blob([data], {type: type});
    if(window.navigator.msSaveOrOpenBlob) window.navigator.msSaveOrOpenBlob(file, filename);
    else{
      var a = document.createElement("a"),
      url = URL.createObjectURL(file);
      a.href = url;
      a.download = filename;
      a.click();
      window.URL.revokeObjectURL(url);
    }
  }
  function readSettingsBackup(submit, e){
    let fr = new FileReader();
    let path = e.target;
    fr.onloadend = (e) => {
      // console.log(JSON.parse(e.target.result));
      mainCfg = JSON.parse(e.target.result);
      console.log(`Настройки успешно восстановлены.`, mainCfg);
      new Alert({
        type: 'Settings import',
        text: 'Настройки успешно импортированы, но не сохранены. Переоткройте окно настроек и удостовертесь в том, что результат вас устраивает, после чего нажмите кнопку сохранения настроек.',
        timer: 10000
      })
      path.parentNode.children[1].textContent = 'Настройки успешно загружены.';
      submit.disabled = true;
    };
    fr.onerror = (e) => {
      console.log(e);
    };
    fr.readAsText(e.target.files[0]);
  }
  class menuButton{
    constructor({path, text, title, buttons}){
      this.main=document.createElement('div');
      this.main.className='dtf-menuButton';
      this.main.textContent=text;
      title ? this.main.title=title : '';
      path.appendChild(this.main);

      this.list=document.createElement('div');
      this.list.className='menuList';
      this.main.appendChild(this.list);

      buttons(this.list);
    }
  };
  class Alert{
    constructor({text, type, alert, timer}){
      if(!document.getElementById('dtf-buttonsField')){
        new Div({
          path: document.body,
          name: 'dtf-buttonsField',
          id: 'dtf-buttonsField'
        })
      }
      this.main=document.createElement('div');
      this.main.className=alert ? 'dtf-alert err' : 'dtf-alert info';
      this.main.id='dtf-alert';
      document.getElementById('dtf-buttonsField').appendChild(this.main);

      this.header = new Div({
        path: this.main,
        name: 'header',
        rtn: true
      });
      new Div({
        path: this.header,
        name: 'type',
        text: type
      });
      new Div({
        path: this.header,
        name: 'scriptName',
        text: initCfg.name
      });
      new Div({
        path: this.main,
        name: 'text',
        text: text
      })

      if(timer){
        setTimeout(() => {
          this.main.classList.add('hide');
          setTimeout(() => {
            // this.main.parentNode.classList.add('hide');
            this.main.remove();
          }, 3000);
        }, timer+3000);
      }
    }
  };

class FeedGroups{
  Group(path, id, title){
    // if(document.getElementById(`dtf-fg-${id}`)) return;
    let main=new Div({
      path: path,
      cName: 'dtf-feed-group',
      id: `dtf-fg-${id}`,
      rtn: []
    });

    let panel=new Div({
      path: main,
      cName: 'groupHeader',
      rtn: [],
      onclick: () => {
        if(panel.classList.value.match(/hidden/)){
          if(!newMark.classList.value.match(/off/)) newMark.classList.toggle('off');
        }
        groupList.classList.toggle('hidden');
      }
    });

    new Div({
      path: panel,
      cName: 'title',
      text: title
    });

    let num=new Div({
      path: panel,
      cName: 'num',
      text: 0
    });

    let newMark=new Div({
      path: panel,
      cName: 'newMark off',
      text: 'НОВОЕ',
      rtn: []
    });

    let groupList=new Div({
      path: main,
      cName: 'groupList hidden',
      rtn: []
    });
  }
  TwinGroup(){
    if(document.getElementById('dtf-feedGroups')) return;
    let main=new Div({
      path: document.querySelector(`div[id=page_wrapper] div[class=feed] div[class=feed__container]`),
      cName: mainCfg['working mode']['type'] === 'obs' ? 'dtf-feedGroups obs' : 'dtf-feedGroups',
      id: 'dtf-feedGroups',
      addBefore: document.querySelector(`div[id=page_wrapper] div[class=feed] div[class=feed__container]`).children[0]
    });
  }
  SubGroup(path, icoSrc, title, target){
    if(!document.getElementById(`dtf-fg-sg-${title.trim()}`)){
      // console.log(target.querySelector(`.content-header-number`).textContent.trim())
      let main=new Div({
        path: path,
        cName: 'subGroup',
        id: `dtf-fg-sg-${title.trim()}`,
        rtn: []
      });

      let panel=new Div({
        path: main,
        cName: 'panel',
        rtn: [],
        onclick: () => {
          if(subList.classList.value.match(/hidden/)){
            if(!newMark.classList.value.match(/off/)) newMark.classList.toggle('off');
          }
          subList.classList.toggle('hidden');
        }
      });

      let info=new Div({
        path: panel,
        cName: 'info',
        rtn: []
      });

      let mask=new Div({
        path: info,
        cName: 'mask',
        rtn: []
      });
      let ico=new Image({
        path: mask,
        cName: 'ico',
        url: icoSrc,
        rtn: []
      });

      new Div({
        path: info,
        cName: 'title',
        text: title.trim(),
        rtn: []
      });

      let num=new Div({
        path: info,
        cName: 'num',
        text: 0,
        rtn: []
      });

      let newMark=new Div({
        path: info,
        cName: 'newMark',
        text: `📰 (${target.querySelector(`.content-header-number`).textContent.trim()})`,
        rtn: []
      });

      let sgActions=new Div({
        path: panel,
        cName: 'sgActions',
        rtn: []
      });

      new Button({
        path: sgActions,
        text: 'Удалить группу',
        title: 'Внимание! Это удалит все фиды внутри группы!',
        onclick: () => {
          main.remove();
        }
      });

      let subList=new Div({
        path: main,
        cName: 'subList hidden',
        rtn: []
      });
      subList.appendChild(target);
      num.textContent=(subList.children.length);

      // this.main.parentNode.children[0].children[2].classList.toggle('off');
    }else{
      let main=document.getElementById(`dtf-fg-sg-${title.trim()}`);
      let subList=main.children[1];
      subList.appendChild(target);
      let num=main.children[0].children[0].children[2];
      num.textContent=(subList.children.length);
    }
  }
  FeedActions(path, m){
    if(m.querySelector(`div[class=feed-actions]`)) return;
    function getInfo(target){
      let filter = /https:\/\/dtf\.ru\/(u\/|s\/|[^/]{2,})(\d*)-{0,1}([^]*)/gm;
      let o;
      target.replace(filter, (d, type, id, username) => {
        if(type.match(/u\//) && id && username){
          console.log('User');
          o = {author:username, authorType:'User', authorID:id};
        }else
        if(type.match(/s\//) && !id && username){
          console.log('Official subsite');
          o = {author:username, authorType:'Official subsite', authorID:username};
        }
        if(type.match(/s\//) && id && username){
          console.log('User subsite');
          o = {author:username, authorType:'User subsite', authorID:id};
        }else
        if(!type.match(/u\/|s\//) && !id && !username){
          console.log('DTF subsite');
          o = {author:type, authorType:'DTF subsite', authorID:type};
        }
      })
      return o;
    }
    function getTime(){
      let t = new Date();

      return `${t.getFullYear()}/${t.getMonth()+1 < 10 ? `0${t.getMonth()+1}` : t.getMonth()+1}/${t.getDate() < 10 ? `0${t.getDate()}` : t.getDate()} ${t.getHours() < 10 ? `0${t.getHours()}` : t.getHours()}:${t.getMinutes() < 10 ? `0${t.getMinutes()}` : t.getMinutes()}:${t.getSeconds() < 10 ? `0${t.getSeconds()}` : t.getSeconds()}`
    };
    let main=new Div({
      path: path.parentNode,
      addBefore: path.parentNode.children[2],
      cName: 'feed-actions',
      rtn: []
    });

    new Button({
      path: main,
      text: '↭\uFE0E',
      title: 'Свернуть фид',
      name: 'collapseFeed btn',
      onclick: (e) => {
        // if(e.target.parentNode.parentNode.parentNode.parentNode.classList.value.match(/watched|ignored/)) return;
        e.target.parentNode.parentNode.parentNode.parentNode.classList.toggle('collapsed');
      }
    });

    new Button({
      path: main,
      text: '✔️',
      title: 'Пометить как просмотрено. Фид будет свёрнут всегда',
      name: 'watchFeed btn',
      onclick: (e) => {
        const control = e.target.parentNode.parentNode.querySelector(`.content-header__item--controls`).children[0];
        let info = e.target.parentNode.parentNode.children[0];
        let userIDFilter = /https:\/\/dtf\.ru\/(u|s)\/(\d+)-[^]+/;
        let textFixer = /( {2,}|\n{2,})/gm;
        if(mainCfg['script data']['ignored']['feeds'].some(i => i?.feedID === control.getAttribute('data-content-id'))){
          new Alert({
            type: 'Добавление итема',
            text: 'Вы не можете добавить фид в просмотренные, т.к фид игнорируется вами',
            timer: 5000
          })
          return;
        }
        // if(e.target.parentNode.parentNode.parentNode.parentNode.classList.value.match(/collapsed/)) e.target.parentNode.parentNode.parentNode.parentNode.classList.remove('collapsed');
        mainCfg['script data']['watched']['feeds'].some(i => i?.feedID === control.getAttribute('data-content-id')) ? (mainCfg['script data']['watched']['feeds'] = mainCfg['script data']['watched']['feeds'].filter(i => i?.feedID !== control.getAttribute('data-content-id'))) : mainCfg['script data']['watched']['feeds'].push({
          feedID:control.getAttribute('data-content-id'),
          feedTitle:((e.target.parentNode.parentNode.parentNode.querySelector(`.content-title`)||{}).textContent||'').trim().replace(textFixer, ''),
            ...info.children.length <= 2 ? {
              author:control.getAttribute('data-author-name'),
              authorID:control.getAttribute('data-user-id'),
              authorType:getInfo(info.children[0].children[0].href).authorType,
              date:getTime()
            } : {
              subsite:control.getAttribute('data-subsite-name'),
              subsiteID:control.getAttribute('data-subsite-id'),
              author:control.getAttribute('data-author-name'),
              authorID:control.getAttribute('data-user-id'),
              authorType:getInfo(info.children[1].children[0].href).authorType,
              date:getTime()
            }
        });
        e.target.parentNode.parentNode.parentNode.parentNode.classList.toggle('watchedFeed');
        e.target.parentNode.parentNode.parentNode.parentNode.classList.add('collapsed');
        // e.target.parentNode.parentNode.parentNode.parentNode.classList.toggle('collapsed');
        console.log(mainCfg['script data']['watched']['feeds']);
        new Db().settingsUpdater(dbGen(defaultSettings['scriptInfo']), mainCfg, false);
      }
    })

    new Button({
      path: main,
      text: '🚫',
      title: 'Пометить как игнорировано. Фид будет свёрнут всегда',
      name: 'ignoreFeed btn',
      onclick: (e) => {
        const control = e.target.parentNode.parentNode.querySelector(`.content-header__item--controls`).children[0];
        let info = e.target.parentNode.parentNode.children[0];
        let userIDFilter = /https:\/\/dtf\.ru\/(u|s)\/(\d+)-[^]+/;
        let textFixer = /( {2,}|\n{2,})/gm;
        if(mainCfg['script data']['watched']['feeds'].some(i => i?.feedID === control.getAttribute('data-content-id'))){
          new Alert({
            type: 'Добавление итема',
            text: 'Вы не можете добавить фид в игнорируемые, т.к фид просмотрен вами',
            timer: 5000
          })
          return;
        }
        // if(e.target.parentNode.parentNode.parentNode.parentNode.classList.value.match(/collapsed/)) e.target.parentNode.parentNode.parentNode.parentNode.classList.remove('collapsed');
        mainCfg['script data']['ignored']['feeds'].some(i => i?.feedID === control.getAttribute('data-content-id')) ? (mainCfg['script data']['ignored']['feeds'] = mainCfg['script data']['ignored']['feeds'].filter(i => i?.feedID !== control.getAttribute('data-content-id'))) : mainCfg['script data']['ignored']['feeds'].push({
          feedID:control.getAttribute('data-content-id'),
          feedTitle:((e.target.parentNode.parentNode.parentNode.querySelector(`.content-title`)||{}).textContent||'').trim().replace(textFixer, ''),
            ...info.children.length <= 2 ? {
              author:control.getAttribute('data-author-name'),
              authorID:control.getAttribute('data-user-id'),
              authorType:getInfo(info.children[0].children[0].href).authorType,
              date:getTime()
            } : {
              subsite:control.getAttribute('data-subsite-name'),
              subsiteID:control.getAttribute('data-subsite-id'),
              author:control.getAttribute('data-author-name'),
              authorID:control.getAttribute('data-user-id'),
              authorType:getInfo(info.children[1].children[0].href).authorType,
              date:getTime()
            }
        });
        e.target.parentNode.parentNode.parentNode.parentNode.classList.toggle('ignoredFeed');
        e.target.parentNode.parentNode.parentNode.parentNode.classList.add('collapsed');
        // console.log(mainCfg['script data']['ignored']['feeds']);
        new Db().settingsUpdater(dbGen(defaultSettings['scriptInfo']), mainCfg, false);
      }
    })

    new menuButton({
      path: main,
      text: '📓',
      title: 'Действия с авторами',
      buttons: (path) => {
        new Button({
          path: path,
          text: '💘',
          title: 'Добавить автора в избранное',
          name: 'favoriteAuthor btn',
          onclick: (e) => {
            const control = e.target.parentNode.parentNode.parentNode.parentNode.querySelector(`.content-header__item--controls`).children[0];
            let info = e.target.parentNode.parentNode.parentNode.parentNode.children[0];
            if(mainCfg['script data']['ignored']['authors'].some(i => i?.authorID === control.getAttribute('data-user-id'))){
              new Alert({
                type: 'Добавление итема',
                text: 'Вы не можете добавить автора в избранные, т.к автор игнорируется вами',
                timer: 5000
              })
              return;
            }
            // if(e.target.parentNode.parentNode.parentNode.parentNode.classList.value.match(/favorite/)) return;
            info.parentNode.parentNode.parentNode.classList.toggle('favoriteAuthor');
            // console.log(userID);
            mainCfg['script data']['favorite']['authors'].some(i => i?.authorID === control.getAttribute('data-user-id')) ? (mainCfg['script data']['favorite']['authors'] = mainCfg['script data']['favorite']['authors'].filter(i => i?.authorID !== control.getAttribute('data-user-id'))) : mainCfg['script data']['favorite']['authors'].push(
              info.children.length <= 2 ? {
                author:control.getAttribute('data-author-name'),
                authorID:control.getAttribute('data-user-id'),
                authorType:getInfo(info.children[0].children[0].href).authorType
              } : {
                author:control.getAttribute('data-author-name'),
                authorID:control.getAttribute('data-user-id'),
                authorType:getInfo(info.children[1].children[0].href).authorType
              }
            );
            new Db().settingsUpdater(dbGen(defaultSettings['scriptInfo']), mainCfg, false);
            // if(mainCfg['working mode']['type'].match(/panel$/) && mainCfg['what to group']['blogs'] && info.children.length <= 2) info.parentNode.parentNode.parentNode.parentNode.parentNode.classList.add('favoriteAuthor');
          }
        })

        new Button({
          path: path,
          text: '💢',
          title: 'Добавить автора в игнорируемые',
          name: 'ignoreAuthor btn',
          onclick: (e) => {
            const control = e.target.parentNode.parentNode.parentNode.parentNode.querySelector(`.content-header__item--controls`).children[0];
            let info = e.target.parentNode.parentNode.parentNode.parentNode.children[0];
            if(mainCfg['script data']['favorite']['authors'].some(i => i?.authorID === control.getAttribute('data-user-id'))){
              new Alert({
                type: 'Добавление итема',
                text: 'Вы не можете добавить автора в игнорируемые, т.к автор избранный вами',
                timer: 5000
              })
              return;
            }
            // if(e.target.parentNode.parentNode.parentNode.parentNode.classList.value.match(/favorite/)) return;
            info.parentNode.parentNode.parentNode.classList.toggle('ignoredAuthor');
            info.parentNode.parentNode.parentNode.classList.add('collapsed');
            // console.log(userID);
            mainCfg['script data']['ignored']['authors'].some(i => i?.authorID === control.getAttribute('data-user-id')) ? (mainCfg['script data']['ignored']['authors'] = mainCfg['script data']['ignored']['authors'].filter(i => i?.authorID !== control.getAttribute('data-user-id'))) : mainCfg['script data']['ignored']['authors'].push(
              info.children.length <= 2 ? {
                author:control.getAttribute('data-author-name'),
                authorID:control.getAttribute('data-user-id'),
                authorType:getInfo(info.children[0].children[0].href).authorType
              } : {
                author:control.getAttribute('data-author-name'),
                authorID:control.getAttribute('data-user-id'),
                authorType:getInfo(info.children[1].children[0].href).authorType
              }
            );
            new Db().settingsUpdater(dbGen(defaultSettings['scriptInfo']), mainCfg, false);
            // if(mainCfg['working mode']['type'].match(/panel$/) && mainCfg['what to group']['blogs']) info.parentNode.parentNode.parentNode.parentNode.parentNode.classList.add('ignoredAuthor');
          }
        })
      }
    })


    new menuButton({
      path: main,
      text: '📚',
      title: 'Действия с подсайтами',
      buttons: (path) => {
        new Button({
          path: path,
          text: '💘',
          title: 'Добавить подсайт в избранные',
          name: 'favoriteSubsite btn',
          onclick: (e) => {
            const control = e.target.parentNode.parentNode.parentNode.parentNode.querySelector(`.content-header__item--controls`).children[0];
            let info = e.target.parentNode.parentNode.parentNode.parentNode.children[0];
            if(info.children.length <= 2) return;
            if(mainCfg['script data']['ignored']['subsites'].some(i => i?.authorID === control.getAttribute('data-subsite-id'))){
              new Alert({
                type: 'Добавление итема',
                text: 'Вы не можете добавить подсайт в избранные, т.к подсайт игнорируемый вами',
                timer: 5000
              })
              return;
            }
            info.parentNode.parentNode.parentNode.classList.toggle('favoriteSubsite');
            mainCfg['script data']['favorite']['subsites'].some(i => i?.authorID === control.getAttribute('data-subsite-id')) ? (mainCfg['script data']['favorite']['subsites'] = mainCfg['script data']['favorite']['subsites'].filter(i => i?.authorID !== control.getAttribute('data-subsite-id'))) : mainCfg['script data']['favorite']['subsites'].push(
              {
                author:control.getAttribute('data-subsite-name'),
                authorID:control.getAttribute('data-subsite-id'),
                authorType:getInfo(info.children[0].children[0].href).authorType
              }
            );
            new Db().settingsUpdater(dbGen(defaultSettings['scriptInfo']), mainCfg, false);
            if(mainCfg['working mode']['type'] === 'panel' && mainCfg['feeds']['what to group']['subsites'] && info.children.length <= 2) info.parentNode.parentNode.parentNode.parentNode.parentNode.classList.add('favoriteSubsite');
          }
        })

        new Button({
          path: path,
          text: '💢',
          title: 'Добавить подсайт в игнорируемые',
          name: 'ignoreSubsite btn',
          onclick: (e) => {
            const control = e.target.parentNode.parentNode.parentNode.parentNode.querySelector(`.content-header__item--controls`).children[0];
            let info = e.target.parentNode.parentNode.parentNode.parentNode.children[0];
            if(info.children.length <= 2) return;
            if(mainCfg['script data']['favorite']['subsites'].some(i => i?.authorID === control.getAttribute('data-subsite-id'))){
              new Alert({
                type: 'Добавление итема',
                text: 'Вы не можете добавить подсайт в игнорируемые, т.к подсайт избранный для вас',
                timer: 5000
              })
              return;
            }
            // if(e.target.parentNode.parentNode.parentNode.parentNode.classList.value.match(/favorite/)) return;
            info.parentNode.parentNode.parentNode.classList.toggle('ignoredSubsite');
            info.parentNode.parentNode.parentNode.classList.add('collapsed');
            // console.log(userID);
            mainCfg['script data']['ignored']['subsites'].some(i => i?.authorID === control.getAttribute('data-subsite-id')) ? (mainCfg['script data']['ignored']['subsites'] = mainCfg['script data']['ignored']['subsites'].filter(i => i?.authorID !== control.getAttribute('data-subsite-id'))) : mainCfg['script data']['ignored']['subsites'].push(
              {
                author:control.getAttribute('data-subsite-name'),
                authorID:control.getAttribute('data-subsite-id'),
                authorType:getInfo(info.children[0].children[0].href).authorType
              }
            );
            new Db().settingsUpdater(dbGen(defaultSettings['scriptInfo']), mainCfg, false);
            // if(mainCfg['working mode']['type'].match(/panel$/) && mainCfg['what to group']['subsites']) info.parentNode.parentNode.parentNode.parentNode.parentNode.classList.add('ignoredSubsite');
          }
        })
      }
    })



    new Button({
      path: main,
      text: '✖️',
      name: 'deleteFeed btn',
      title: 'Удалить фид. Это удалит лишь сам элемент фида',
      onclick: (e) => {
        if(mainCfg['feeds']['what to group']['blogs']||mainCfg['feeds']['what to group']['subsites']){
          const subGroup = e.target.closest('.subGroup');
          if(subGroup){
            subGroup.children[0].children[0].children[2].textContent = +subGroup.children[1].children.length - 1;
          }
        }
        e.target.parentNode.parentNode.parentNode.parentNode.remove();
      }
    })
}
  Main(){
    if(document.getElementById('dtf-feedGroups')) return;
    this.main=new Div({
      path: document.querySelector(`div[id=page_wrapper] div[class=feed] div[class=feed__container]`),
      addBefore: document.querySelector(`div[id=page_wrapper] div[class=feed] div[class=feed__container]`).children[0],
      cName: 'dtf-feedGroups',
      id: 'dtf-feedGroups',
      rtn: []
    });

    this.groupEm=new Button({
      path: this.main,
      cName: 'groupBtn',
      text: 'Группировать фиды',
      style: `
    background-color: black;
    color: white;
    width: 100%;
    padding: 0px 0px 0px 25px;
    border-radius: 3px;
    cursor: pointer;`,
      onclick: () => {
        feedsSearch();
      }
    })

    this.Group(this.main, 'subsite', 'В подсайтах');
    this.Group(this.main, 'blogs', 'В блогах');
  }
}

  function feedsSearch(){
    const panel = document.getElementById('dtf-feedGroups');
    if(getPageType(document.location.href) !== 'topics' && mainCfg['working mode']['type'] === 'panel' && panel){
      panel.children[0].disabled = true;
      console.log('Disabled');
    }
    function getInfo(target){
      let filter = /https:\/\/dtf\.ru\/(u\/|s\/|[^/]{2,})(\d*)-{0,1}([^]*)/gm;
      let o;
      target.replace(filter, (d, type, id, username) => {
        if(type.match(/u\//) && id && username){
          console.log('User');
          o = {author:username, authorType:'User', authorID:id};
        }else
        if(type.match(/s\//) && !id && username){
          console.log('Official subsite');
          o = {author:username, authorType:'Official subsite', authorID:username};
        }
        if(type.match(/s\//) && id && username){
          console.log('User subsite');
          o = {author:username, authorType:'User subsite', authorID:id};
        }else
        if(!type.match(/u\/|s\//) && !id && !username){
          console.log('DTF subsite');
          o = {author:type, authorType:'DTF subsite', authorID:type};
        }
      })
      return o;
    }
    let num = 0;
    let blogsTitleFilter;
    let blogsTextFilter;
    let subsitesTitleFilter;
    let subsitesTextFilter;
    let location = getPageType(document.location.href);
    if(mainCfg['feeds']['filters']['subsites']['title']['words'].length > 0){
      // new Promise(() => {
      //   ''
      // })
      try{
        const arr = mainCfg['feeds']['filters']['blogs']['title']['words'].filter(e => e).join('|');
        if(arr) blogsTitleFilter = new RegExp(arr, 'mi');
      }catch (err){
        new Alert({
          alert: true,
          type: 'RegExp',
          text: 'Ошибка создания blogs title RegExp фильтра. Вы выбрали неверные слова/фразы.',
          timer: 10000
        })
      }
      console.log('BlogsTitleFilter ', blogsTitleFilter);
    }
    if(mainCfg['feeds']['filters']['blogs']['text']['words'].length > 0){
      try{
        const arr = mainCfg['feeds']['filters']['blogs']['text']['words'].filter(e => e).join('|');
        if(arr) blogsTextFilter = new RegExp(arr, 'mi');
      }catch (err){
        new Alert({
          alert: true,
          type: 'RegExp',
          text: 'Ошибка создания blogs text RegExp фильтра. Вы выбрали неверные слова/фразы.',
          timer: 10000
        })
      }
      console.log('BlogsTextFilter ', blogsTextFilter);
    }
    if(mainCfg['feeds']['filters']['subsites']['title']['words'].length > 0){
      try{
        const arr = mainCfg['feeds']['filters']['subsites']['title']['words'].filter(e => e).join('|');
        if(arr) subsitesTitleFilter = new RegExp(arr, 'mi');
      }catch (err){
        new Alert({
          alert: true,
          type: 'RegExp',
          text: 'Ошибка создания subsites title RegExp фильтра. Вы выбрали неверные слова/фразы.',
          timer: 10000
        })
      }
      console.log('subsitesTitleFilter ', subsitesTitleFilter);
    }
    if(mainCfg['feeds']['filters']['subsites']['text']['words'].length > 0){
      try{
        const arr = mainCfg['feeds']['filters']['subsites']['text']['words'].filter(e => e).join('|');
        if(arr) subsitesTextFilter = new RegExp(arr, 'mi');
      }catch (err){
        new Alert({
          alert: true,
          type: 'RegExp',
          text: 'Ошибка создания subsites text RegExp фильтра. Вы выбрали неверные слова/фразы.',
          timer: 10000
        })
      }
      console.log('subsitesTextFilter ', subsitesTextFilter);
    }
    function videoReplace(video){
      if(video.getAttribute('data-andropov-type') === 'video' && video.getAttribute('data-video-service') === 'default'){
        console.log('VIDEO', video.closest('figure'));
        let main=new Div({
          path: video.closest('figure'),
          cName: 'cont',
          rtn: []
        });
        let c=new Div({
          path: main,
          cName: 'video-cont',
          rtn: [],
          onclick: (e) => {
            e.preventDefault();
            e.stopPropagation();
            e.stopImmediatePropagation();
            if(c.lastChild.paused) c.lastChild.play();
            else c.lastChild.pause();
          }
        });
        let starter=new Div({
          path: c,
          cName: 'mediaStarter',
          rtn: []
        });
        let prev=new Div({
          path: starter,
          cName: 'btn',
          rtn: []
        });
        new Image({
          path: prev,
          url: 'https://github.com/TentacleTenticals/dtf-markdown/raw/main/libs/Play.svg'
        });
        new Video({
          path: c,
          url: video.getAttribute('data-video-mp4'),
          poster: video.getAttribute('data-video-thumbnail'),
          loop: true,
          muted: true,
          onplay: (e) => {
            e.target.parentNode.classList.toggle('playing');
          },
          onpause: (e) => {
            e.target.parentNode.classList.toggle('playing');
          },
          onended: (e) => {
            e.target.parentNode.classList.toggle('playing');
          }
        });
        video.closest('figure').remove();
      }
    }
    for(let i = 0, arr = document.querySelectorAll(`div[id=page_wrapper] .feed .feed__container:nth-child(1):not(.dtf-feedGroups) .feed__item.l-island-round`); i < arr.length; i++){
      const container = arr[i].querySelector(`.content-container`);
      const header = arr[i].querySelector(`.content-header__info`);
      const control = arr[i].querySelector(`.content-header__item--controls`).children[0];
      let video;
      if(mainCfg['feeds']['attachments']['replacing']) video = arr[i].querySelector(`.andropov_video`);
      if(header.children.length <= 2){
        if(mainCfg['working mode']['where to react'][location] && !mainCfg['working mode']['where to react']['types to show'][location].match(/blogs$|subsites and blogs/)){
          arr[i].remove();
          console.log('Блог удалён, низя здесь!');
          continue;
        };

        {
          if(mainCfg['script data']['watched']['feeds'].some(a => a?.feedID === control.getAttribute('data-content-id'))){
            // console.log('Blog watched!');
            if(mainCfg['feeds']['filters']['watched']['feeds']['action'] === 'collapse'){
              arr[i].classList.add('watchedFeed', 'collapsed');
            }else
            if(mainCfg['feeds']['filters']['watched']['feeds']['action'] === 'delete'){
              arr[i].remove();
              // console.log('Watched feed is removed');
              continue;
            }
          }
          if(mainCfg['script data']['ignored']['feeds'].some(a => a?.feedID === control.getAttribute('data-content-id'))){
            // console.log('Blog ignored!');
            if(mainCfg['feeds']['filters']['ignored']['feeds']['action'] === 'collapse'){
              arr[i].classList.add('ignoredFeed', 'collapsed');
            }else
            if(mainCfg['feeds']['filters']['ignored']['feeds']['action'] === 'delete'){
              arr[i].remove();
              // console.log('Ignored feed is removed');
              continue;
            }
          }
          if(mainCfg['script data']['favorite']['authors'].some(a => a?.authorID === control.getAttribute('data-user-id'))){
            // console.log('I see favorite!');
            arr[i].classList.add('favoriteAuthor');
          }
          if(mainCfg['script data']['ignored']['authors'].some(a => a?.authorID === control.getAttribute('data-user-id'))){
            // console.log('I see ignored author!');
            if(mainCfg['feeds']['filters']['ignored']['authors']['action'] === 'collapse'){
              arr[i].classList.add('ignoredAuthor', 'collapsed');
            }else
            if(mainCfg['feeds']['filters']['ignored']['authors']['action'] === 'delete'){
              arr[i].remove();
              // console.log('Ignored author is removed');
              continue;
            }
          }
          if(container){
            {
              if(mainCfg['feeds']['filters']['blogs']['title']['active']){
                if(mainCfg['feeds']['filters']['blogs']['title']['react no text']){
                  if(!container.children[0].classList.value.match(/content-title/)){
                    // console.log('BLOG NO TITLE!', arr[i]);
                    if(mainCfg['feeds']['filters']['blogs']['title']['action'] === 'collapse'){
                      arr[i].classList.add('blogBlockedNoTitle', 'collapsed');
                    }else
                    if(mainCfg['feeds']['filters']['blogs']['title']['action'] === 'delete'){
                      arr[i].remove();
                      // console.log('Blog feed removed1', arr[i]);
                      continue;
                    }
                  }
                }
                if(mainCfg['feeds']['filters']['blogs']['title']['react text'] && blogsTitleFilter){
                  if(container.children[0].classList.value.match(/content-title/)){
                    // console.log('Title: ', container.children[0].textContent.trim());
                    if(container.children[0].textContent.trim().match(blogsTitleFilter)){
                      // console.log('Blogs title filter found item!', container.children[0].textContent.trim());
                      if(mainCfg['feeds']['filters']['blogs']['title']['action'] === 'collapse'){
                        arr[i].classList.add('blogBlockedTitle', 'collapsed');
                      }else
                      if(mainCfg['feeds']['filters']['blogs']['title']['action'] === 'delete'){
                        arr[i].remove();
                        // console.log('Blog feed removed2', arr[i]);
                        continue;
                      }
                    }
                  }
                }
              }
              if(mainCfg['feeds']['filters']['blogs']['text']['active']){
                if(mainCfg['feeds']['filters']['blogs']['text']['react no text']){
                  if(!arr[i].querySelector(`.content-container p`)){
                    // console.log('BLOG NO TEXT!', arr[i]);
                    if(mainCfg['feeds']['filters']['blogs']['text']['action'] === 'collapse'){
                      arr[i].classList.add('blogBlockedNoText', 'collapsed');
                    }else
                    if(mainCfg['feeds']['filters']['blogs']['text']['action'] === 'delete'){
                      arr[i].remove();
                      // console.log('Blog feed removed1', arr[i]);
                      continue;
                    }
                  }
                }
                if(mainCfg['feeds']['filters']['blogs']['text']['react text'] && blogsTextFilter){
                  if(arr[i].querySelector(`.content-container p`)){
                    // console.log('Text: ', arr[i].querySelector(`div[class=content-container] p`).textContent.trim());
                    if(container.textContent.trim().match(blogsTextFilter)){
                      // console.log('Blogs text filter found item!');
                      if(mainCfg['feeds']['filters']['blogs']['text']['action'] === 'collapse'){
                        arr[i].classList.add('blogBlockedText', 'collapsed');
                      }else
                      if(mainCfg['feeds']['filters']['blogs']['text']['action'] === 'delete'){
                        arr[i].remove();
                        // console.log('Blog feed removed1', arr[i]);
                        continue;
                      }
                    }
                  }
                }
              }
            }
          }
          if(mainCfg['working mode']['type'] === 'panel'){
            new FeedGroups().FeedActions(header, arr[i]);
            document.getElementById('dtf-feedGroups').children[2].children[1].appendChild(arr[i]);
            if(mainCfg['feeds']['what to group']['blogs']){
              // console.log('ID subsite', authorID);
              new FeedGroups().SubGroup(
                document.getElementById('dtf-feedGroups').children[2].children[1],
                header.children[0].children[0].children[0].children[0].getAttribute('data-image-src'),
                header.children[0].children[0].children[1].textContent, arr[i]
              );
              arr[i].className.split(' ').forEach(e => {
                if(e === 'favoriteAuthor') arr[i].parentNode.parentNode.classList.add('favoriteAuthor');
                if(e === 'ignoredAuthor') arr[i].parentNode.parentNode.classList.add('ignoredAuthor');
              });
            }else{
              document.getElementById('dtf-feedGroups').children[2].children[1].appendChild(arr[i]);
            }
            if(video) videoReplace(video);
          }else
          if(mainCfg['working mode']['type'] === 'obs'){
            new FeedGroups().FeedActions(header, arr[i]);
            document.getElementById('dtf-feedGroups').appendChild(arr[i]);
            // if(mainCfg['script data']['favorite']['authors'].some(a => a?.authorID === control.getAttribute('data-user-id'))){
            //   // console.log('I see favorite!');
            //   arr[i].classList.add('favoriteAuthor');
            // }
            // if(mainCfg['script data']['ignored']['authors'].some(a => a?.authorID === control.getAttribute('data-user-id'))){
            //   // console.log('I see blocked!');
            //   if(mainCfg['feeds']['filters']['ignored']['authors']['action'] === 'collapse'){
            //     arr[i].classList.add('ignoredAuthor', 'collapsed');
            //   }else{
            //     arr[i].remove();
            //     // console.log('Ignored author is removed');
            //     continue;
            //   }
            // }
            if(video) videoReplace(video);
          }
        }
      }else
      if(header.children.length > 2){
        if(mainCfg['working mode']['where to react'][location] && !mainCfg['working mode']['where to react']['types to show'][location].match(/subsites$|subsites and blogs/)){
          arr[i].remove();
          console.log('Подсайт удалён, низя здесь!');
          continue;
        }

          if(header.children[1].classList.value.match(/content-header-author/)){
            {
              if(mainCfg['script data']['watched']['feeds'].some(a => a?.feedID === control.getAttribute('data-content-id'))){
                // console.log('Watched!');
                if(mainCfg['feeds']['filters']['watched']['feeds']['action'] === 'collapse'){
                  arr[i].classList.add('watchedFeed', 'collapsed');
                }else
                if(mainCfg['feeds']['filters']['watched']['feeds']['action'] === 'delete'){
                  arr[i].remove();
                  // console.log('Watched feed is removed');
                  continue;
                }
              };
              if(mainCfg['script data']['ignored']['feeds'].some(a => a?.feedID === control.getAttribute('data-content-id'))){
                // console.log('Blocked!');
                if(mainCfg['feeds']['filters']['ignored']['feeds']['action'] === 'collapse'){
                  arr[i].classList.add('ignoredFeed', 'collapsed');
                }else
                if(mainCfg['feeds']['filters']['ignored']['feeds']['action'] === 'delete'){
                  arr[i].remove();
                  // console.log('Ignored feed is removed');
                  continue;
                }
              }
              if(mainCfg['script data']['favorite']['authors'].some(a => a?.authorID === control.getAttribute('data-user-id'))){
                // console.log('I see favorite!');
                arr[i].classList.add('favoriteAuthor');
              }
              if(mainCfg['script data']['ignored']['authors'].some(a => a?.authorID === control.getAttribute('data-user-id'))){
                // console.log('I see blocked!');
                if(mainCfg['feeds']['filters']['ignored']['authors']['action'] === 'collapse'){
                  arr[i].classList.add('ignoredAuthor', 'collapsed');
                }else
                if(mainCfg['feeds']['filters']['ignored']['authors']['action'] === 'delete'){
                  arr[i].remove();
                  // console.log('Ignored author is removed');
                  continue;
                }
              }
              if(mainCfg['script data']['favorite']['subsites'].some(a => a?.authorID === control.getAttribute('data-subsite-id'))){
                // console.log('I see favorite subsite!');
                arr[i].classList.add('favoriteSubsite');
              }
              if(mainCfg['script data']['ignored']['subsites'].some(a => a?.authorID === control.getAttribute('data-subsite-id'))){
                // console.log('I see ignored subsite!');
                if(mainCfg['feeds']['filters']['ignored']['subsites']['action'] === 'collapse'){
                  arr[i].classList.add('ignoredSubsite', 'collapsed');
                }else
                if(mainCfg['feeds']['filters']['ignored']['subsites']['action'] === 'delete'){
                  arr[i].remove();
                  // console.log('Ignored subsite is removed');
                  continue;
                }
              }
              if(container){
                {
                  if(mainCfg['feeds']['filters']['subsites']['title']['active']){
                    if(mainCfg['feeds']['filters']['subsites']['title']['react no text']){
                      if(!container.children[0].classList.value.match(/content-title/)){
                        // console.log('NO TITLE!', arr[i]);
                        if(mainCfg['feeds']['filters']['subsites']['title']['action'] === 'collapse'){
                          arr[i].classList.add('subsiteBlockedNoTitle', 'collapsed');
                        }else
                        if(mainCfg['feeds']['filters']['subsites']['title']['action'] === 'delete'){
                          arr[i].remove();
                          // console.log('Subsite feed removed1', arr[i]);
                          continue;
                        }
                      }
                    }
                    if(mainCfg['feeds']['filters']['subsites']['title']['react text'] && subsitesTitleFilter){
                      // let subsitesTitleFilter = new RegExp(mainCfg['feeds']['filters']['subsites']['title']['words'].join('|'), 'mi');
                      if(container.children[0].classList.value.match(/content-title/)){
                        // console.log('Title: ', container.children[0].textContent.trim());
                        if(container.children[0].textContent.trim().match(subsitesTitleFilter)){
                          // console.log('Subsutes title filter found item!', container.children[0].textContent.trim());
                          if(mainCfg['feeds']['filters']['subsites']['title']['action'] === 'collapse'){
                            arr[i].classList.add('subsiteBlockedTitle', 'collapsed');
                          }else
                          if(mainCfg['feeds']['filters']['subsites']['title']['action'] === 'delete'){
                            arr[i].remove();
                            // console.log('Subsite feed removed2', arr[i]);
                            continue;
                          }
                        }
                      }
                    }
                  }
                  if(mainCfg['feeds']['filters']['subsites']['text']['active']){
                    if(mainCfg['feeds']['filters']['subsites']['text']['react no text']){
                      if(!arr[i].querySelector(`.content-container p`)){
                        // console.log('NO TEXT!', arr[i]);
                        if(mainCfg['feeds']['filters']['subsites']['text']['action'] === 'collapse'){
                          arr[i].classList.add('subsiteBlockedNoText', 'collapsed');
                        }else
                        if(mainCfg['feeds']['filters']['subsites']['text']['action'] === 'delete'){
                          arr[i].remove();
                          // console.log('Subsite feed removed1', arr[i]);
                          continue;
                        }
                      }
                    }
                    if(mainCfg['feeds']['filters']['subsites']['text']['react text'] && subsitesTextFilter){
                      // let subsitesTitleFilter = new RegExp(mainCfg['feeds']['filters']['subsites']['title']['words'].join('|'), 'mi');
                      if(arr[i].querySelector(`.content-container p`)){
                        if(arr[i].querySelector(`.content-container p`).textContent.trim().match(subsitesTextFilter)){
                          // console.log('Subsites text filter found item!', arr[i].querySelector(`div[class=content-container] p`).textContent.trim());
                          if(mainCfg['feeds']['filters']['subsites']['text']['action'] === 'collapse'){
                            arr[i].classList.add('subsiteBlockedText', 'collapsed');
                          }else
                          if(mainCfg['feeds']['filters']['subsites']['text']['action'] === 'delete'){
                            arr[i].remove();
                            // console.log('Subsite feed removed2', arr[i]);
                            continue;
                          }
                        }
                      }
                    }
                  }
                }
              }
              if(mainCfg['working mode']['type'] === 'panel'){
                new FeedGroups().FeedActions(header, arr[i]);
                // document.getElementById('dtf-feedGroups').children[1].children[1].appendChild(arr[i]);
                if(mainCfg['feeds']['what to group']['subsites']){
                  new FeedGroups().SubGroup(
                    document.getElementById('dtf-feedGroups').children[1].children[1],
                    header.children[0].children[0].children[0].children[0].getAttribute('data-image-src'),
                    header.children[0].children[0].children[1].textContent, arr[i]
                  );

                  arr[i].className.split(' ').forEach(e => {
                    if(e === 'favoriteSubsite') arr[i].parentNode.parentNode.classList.add('favoriteSubsite');
                    if(e === 'ignoredSubsite') arr[i].parentNode.parentNode.classList.add('ignoredSubsite');
                  });
                }else{
                  document.getElementById('dtf-feedGroups').children[1].children[1].appendChild(arr[i]);
                }
                if(video) videoReplace(video);
              }
              if(mainCfg['working mode']['type'] === 'obs'){
                new FeedGroups().FeedActions(header, arr[i]);
                document.getElementById('dtf-feedGroups').appendChild(arr[i]);
              }
                if(video) videoReplace(video);
            }
        }

        // if(co[d].classList.value.match(/content-header-author/)) console.log(co[d])
      }
      if(mainCfg['working mode']['type'] === 'panel'){
        document.getElementById('dtf-feedGroups').children[1].children[0].children[1].textContent = document.getElementById('dtf-feedGroups').children[1].children[1].children.length;
        document.getElementById('dtf-feedGroups').children[2].children[0].children[1].textContent = document.getElementById('dtf-feedGroups').children[2].children[1].children.length;
      }
    }
  }


  function run(){
    console.log('RUN feeds 3.0');
    initCfg = {
      func: () => {
        console.log('Встраивание инициализации в DTF-Feeds...');
        // mainVars = {
        //   btnPressed: {}
        // };
        /* Как переписать стандартные настройки (минуя меню настроек): пропишите mainCfg['путь']['путь'] = значение */
        /* К примеру, mainCfg['album builder']['tokens']['ImgBB']['clientToken'] = 'mySuperSecretToken'; */
        // mainCfg['album builder']['tokens']['ImgBB']['clientToken'] = 'mySuperSecretToken';

        new Css('DTF-core', dtfCoreCSS, true);

        new Css('DTF-Feeds', mainCSS(mainCfg));
        new Css('settingsLoader', menuLoaderCSS, true);

        if(mainCfg['working mode']['where to react'][getPageType(document.location.href)]){
        // if(document.location.href.match(filterBuilder())){
          if(mainCfg['working mode']['type'] === 'panel'){
            console.log(`[Mode] режим панели`);
            new FeedGroups().Main();
            feedsSearch();
            if(getPageType(document.location.href) === 'topics') return;
            if(obs.panelBtn){
              obsPanelBtn('restart');
            }else{
              obsPanelBtn('start');
            }
          }else
          if(mainCfg['working mode']['type'] === 'obs'){
            console.log(`[Mode] режим обсервера`);
            new FeedGroups().TwinGroup();
            feedsSearch();
            // if(getPageType(document.location.href) === 'topics'){
            //   console.log('TOPICS');
            //   new TwinGroup();
            //   feedsSearch();
            // }else{
            if(obs.feeds){
              obsFeeds('restart');
            }else{
              obsFeeds('start');
            }
          }
        }
      }
    }
    if(!mainCfg){
      console.log('DS', defaultSettings);
      new Db().settingsLoader(dbGen(defaultSettings['scriptInfo']), initCfg);
      // console.log(db);
    }else
    if(mainCfg){
      console.log('Main is here!');
      if(mainCfg['working mode']['where to react'][getPageType(document.location.href)]){
      // if(document.location.href.match(filterBuilder())){
        if(mainCfg['working mode']['type'] === 'panel'){
          console.log(`[Mode] режим панели`);
          new FeedGroups().Main();
          feedsSearch();
          if(getPageType(document.location.href) === 'topics') return;
          if(obs.panelBtn){
            obsPanelBtn('restart');
          }else{
            obsPanelBtn('start');
          }
        }else
        if(mainCfg['working mode']['type'] === 'obs'){
          console.log(`[Mode] режим обсервера`);
          new FeedGroups().TwinGroup();
          feedsSearch();
          // if(getPageType(document.location.href) === 'topics'){
          //   console.log('TOPICS');
          //   new TwinGroup();
          //   feedsSearch();
          // }else{
          if(obs.feeds){
            obsFeeds('restart');
          }else{
            obsFeeds('start');
          }
        }
      }
    }
  }

  function obsFeeds(mode){
    new Obs({
      target: document.querySelector(`.feed .feed__container`),
      check: true,
      search: /feed__container/,
      name: 'feeds',
      mode: mode,
      cfg: {attributes: false, childList: true, subtree: false, characterData: false},
      func: (item) => {
        // console.log('OBS ', item);
        if(!item.classList.value > 0) return;
        if(item.classList.value.match(/feed__chunk/)){
          feedsSearch();
        }
      }
    });
  }
  function obsPanelBtn(mode){
    new Obs({
      target: document.querySelector(`.feed .feed__container`),
      check: true,
      search: /feed__container/,
      name: 'panel btn',
      mode: mode,
      cfg: {attributes: false, childList: true, subtree: false, characterData: false},
      func: (item) => {
        // console.log('OBS ', item);
        if(!item.classList.value > 0) return;
        if(item.classList.value.match(/feed__chunk/)){
          const panel = document.getElementById('dtf-feedGroups');
          if(mainCfg['working mode']['type'] === 'panel' && panel){
            panel.children[0].disabled = false;
            console.log('Enabled');
          }
        }
      }
    });
  }

  function filterBuilder(){
    return new RegExp(`${document.location.href.origin}/${[
      mainCfg['working mode']['where to react']['popular'] ? 'popular$' : '',
      mainCfg['working mode']['where to react']['new'] ? 'new$' : '',
      mainCfg['working mode']['where to react']['my feeds'] ? 'my/new$' : '',
      mainCfg['working mode']['where to react']['bookmarks'] ? 'bookmarks$' : '',
      mainCfg['working mode']['where to react']['subsites'] ? '' : '',
      mainCfg['working mode']['where to react']['topics'] ? `[^/]+/[0-9]+-[^]+$` : ''
      ].filter(i => i).join('|')}`);
  }
  function getPageType(url){
    if(!url){
      console.log('[GetPageType] error - no url');
      return;
    }
    return url.replace(/https:\/\/dtf\.ru\/([^]+)/, (d, text) => {
      let arr = text.split('/');

      if(arr[0] && arr[0].match(/^popular$/)){
        if(!arr[1]) {
          // console.log('Popular');
          return 'popular';
        }
      }

      if(arr[0] && arr[0].match(/^new$/)){
        if(!arr[1]) {
          // console.log('Popular');
          return 'new';
        }
      }

      if(arr[0] && arr[0].match(/^my$/)){
        if(arr[1] && arr[1].match(/^new$/)) {
          // console.log('Popular');
          return 'my new';
        }
      }

      if(arr[0] && arr[0].match(/^bookmarks$/)){
        if(!arr[1]) {
          // console.log('Bookmarks');
          return 'bookmarks';
        }
      }

      if(arr[0] && arr[0].match(/^u$/)){
        if(arr[1] && !arr[2]) {
          // console.log('User');
          return 'user pages';
        }else
        if(arr[1] && arr[2]) {
          // console.log('User blog');
          return 'topics';
        }
      }
      if(arr[0] && arr[0].match(/^s$/)){
        if(arr[1] && !arr[2]) {
          // console.log('Subsite');
          return 'subsites';
        }else
        if(arr[1] && arr[2]) {
          // console.log('Subsite topic');
          return 'topics';
        }
      }
      if(arr[0] && !arr[0].match(/^(u|s)$/)){
        if(arr[0] && !arr[1]) {
          // console.log('DTF subsite');
          return 'subsites';
        }else
        if(arr[0] && arr[1]) {
          // console.log('DTF subsite Topic');
          return 'topics';
        }
      }
    })
  }

  // Запуск функций при загрузке страниц DTF
  onPageLoad(() => {
    run();
  });

})();
