// ==UserScript==
// @name        DTF feeds (lib)
// @namespace   https://github.com/TentacleTenticals/DTF-feeds
// @match       https://dtf.ru/*
// @grant       none
// @version     1.0
// @author      Tentacle Tenticals
// @description Классы и функции
// @homepage    https://github.com/TentacleTenticals/DTF-feeds
// @license MIT
// ==/UserScript==
/* jshint esversion:8 */

class FeedGroups{
  constructor(){
    if(document.getElementById('dtf-feedGroups')) return;
    this.main=document.createElement('div');
    this.main.className='dtf-feedGroups';
    this.main.id='dtf-feedGroups';
    document.querySelector(`div[id=page_wrapper] div[class=feed] div[class=feed__container]`).insertBefore(this.main, document.querySelector(`div[id=page_wrapper] div[class=feed] div[class=feed__container]`).children[0]);

    // this.title=document.createElement('div');
    // this.title.textContent='Панель фидов';
    // this.title.style=`
    // padding: 5px;
    // margin-bottom: 3px;`
    // this.main.appendChild(this.title);

    this.groupEm=document.createElement('button');
    this.groupEm.className='groupBtn';
    this.groupEm.textContent='Группировать фиды';
    this.groupEm.style=`
    background-color: black;
    color: white;
    width: 100%;
    border-radius: 3px;
    cursor: pointer;`;
    this.groupEm.onclick=() => {
      feedSearch();
    }
    this.main.appendChild(this.groupEm);

    new Group(this.main, 'subsite', 'В подсайтах');
    new Group(this.main, 'blogs', 'В блогах');
  }
}
  class Group{
    constructor(path, id, title){
      // if(document.getElementById(`dtf-fg-${id}`)) return;
      this.main=document.createElement('div');
      this.main.className='dtf-feed-group';
      this.main.id=`dtf-fg-${id}`;
      path.appendChild(this.main);

      this.panel=document.createElement('div');
      this.panel.className='panel';
      this.panel.onclick=() => {
        if(this.panel.classList.value.match(/hidden/)){
          if(!this.new.classList.value.match(/off/)) this.new.classList.toggle('off');
        }
        this.groupList.classList.toggle('hidden');
      }
      this.main.appendChild(this.panel);

      this.title=document.createElement('div');
      this.title.className='title';
      this.title.textContent=title;
      this.panel.appendChild(this.title);

      this.num=document.createElement('div');
      this.num.className='num';
      this.num.textContent='0';
      this.panel.appendChild(this.num);

      this.new=document.createElement('div');
      this.new.className='newMark off';
      this.new.textContent='НОВОЕ';
      this.panel.appendChild(this.new);

      this.groupList=document.createElement('div');
      this.groupList.className='groupList hidden';
      this.main.appendChild(this.groupList);
    }
  }
  class SubGroup{
    constructor(path, title, target){
      if(!document.getElementById(`dtf-fg-sg-${title.trim()}`)){
        this.main=document.createElement('div');
        this.main.className='subGroup';
        this.main.id=`dtf-fg-sg-${title.trim()}`;
        path.appendChild(this.main);

        this.panel=document.createElement('div');
        this.panel.className='panel';
        this.panel.onclick=() => {
          if(this.subList.classList.value.match(/hidden/)){
            if(!this.new.classList.value.match(/off/)) this.new.classList.toggle('off');
          }
          this.subList.classList.toggle('hidden');
        }
        this.main.appendChild(this.panel);

        this.title=document.createElement('div');
        this.title.className='title';
        this.title.textContent=title.trim();
        this.panel.appendChild(this.title);

        this.num=document.createElement('div');
        this.num.className='num';
        this.num.textContent=0;
        this.panel.appendChild(this.num);

        this.new=document.createElement('div');
        this.new.className='newMark';
        this.new.textContent='НОВОЕ';
        this.panel.appendChild(this.new);

        this.sgActions=document.createElement('div');
        this.sgActions.className='sgActions';
        this.panel.appendChild(this.sgActions);

        this.del=document.createElement('button');
        this.del.className='deleteSubgroup';
        this.del.textContent='Удалить подгруппу';
        this.del.title='Внимание! Это удалит все записи внутри подгруппы';
        this.del.onclick=() => {
          this.main.remove();
        }
        this.sgActions.appendChild(this.del);

        this.subList=document.createElement('div');
        this.subList.className='subList hidden';
        this.main.appendChild(this.subList);

        this.subList.appendChild(target);
        this.num.textContent=(this.subList.children.length);

        // this.main.parentNode.children[0].children[2].classList.toggle('off');
      }else{
        this.main=document.getElementById(`dtf-fg-sg-${title.trim()}`);
        this.subList=this.main.children[1];
        this.subList.appendChild(target);
        this.num=this.main.children[0].children[1];
        this.num.textContent=(this.subList.children.length);
      }
    }
  }

  class FeedActions{
    constructor(path){
      if(path.parentNode.querySelector(`div[class=feed-actions]`)) return;
      this.main=document.createElement('div');
      this.main.className='feed-actions';
      // path.appendChild(this.main);
      path.parentNode.insertBefore(this.main, path.parentNode.children[2]);

      this.hide=document.createElement('button');
      this.hide.className='feedBtn';
      this.hide.textContent='🗜️';
      this.hide.onclick=(e) => {
        e.target.parentNode.parentNode.parentNode.parentNode.classList.toggle('collapsed');
      }
      this.main.appendChild(this.hide);

      this.watched=document.createElement('button');
      this.watched.className='feedBtn';
      this.watched.textContent='✔️';
      this.watched.onclick=(e) => {
        mainSettings.data.watched.includes(e.target.parentNode.parentNode.parentNode.getAttribute('data-content-id')) ? (mainSettings.data.watched = mainSettings.data.watched.filter(i => i !== e.target.parentNode.parentNode.parentNode.getAttribute('data-content-id'))) : mainSettings.data.watched.push(e.target.parentNode.parentNode.parentNode.getAttribute('data-content-id'));
        e.target.parentNode.parentNode.parentNode.parentNode.classList.toggle('watched');
        console.log(mainSettings.data.watched);
      }
      this.main.appendChild(this.watched);

      this.ignore=document.createElement('button');
      this.ignore.className='feedBtn';
      this.ignore.textContent='🗑️';
      this.ignore.onclick=(e) => {
        e.target.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.children[0].children[1].textContent = +e.target.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.children[1].children.length - 1;
        e.target.parentNode.parentNode.parentNode.parentNode.remove();
      }
      this.main.appendChild(this.ignore);
    }
  }

  function feedSearch(){
    let num = 0;
    for(let i = 0, arr = document.querySelectorAll(`div[id=page_wrapper] div[class=feed] :not(div[class=DTF-feed-group]) div[class^=feed__item][class*=l-island-round]`); i < arr.length; i++){
      if(arr[i].querySelector(`div[class=content-header__info]`).children.length <= 2){
        // console.log(arr[i].querySelector(`div[class=content-header__info]`).children[1])
        new FeedActions(arr[i].querySelector(`div[class=content-header__info]`));
        // document.getElementById('dtf-feedGroups').children[2].children[1].appendChild(arr[i]);
        new SubGroup(document.getElementById('dtf-feedGroups').children[2].children[1], arr[i].querySelector(`div[class=content-header__info]`).children[0].children[0].children[1].textContent, arr[i]);
        // if(co[d].classList.value.match(/content-header-author/)) console.log(co[d])
      }else
      if(arr[i].querySelector(`div[class=content-header__info]`).children.length > 2){
        if(arr[i].querySelector(`div[class=content-header__info]`).children[1].classList.value.match(/content-header-author/)){
          if(mainSettings.data.watched.includes(arr[i].getAttribute('data-content-id'))){
            console.log('Watched');
            arr[i].classList.toggle('watched');
          }
          if(arr[i].querySelector(`div[class=content-container]`)){
            console.log(arr[i].querySelector(`div[class=content-container]`).children[0].classList.value);
            if(!arr[i].querySelector(`div[class=content-container]`).children[0].classList.value.match(/content-title/)){
              console.log('NO TITLE!', arr[i]);
              arr[i].classList.add('blocked');
            }
            // console.log(arr[i].querySelector(`div[class=content-container]`).children[0].textContent)
            // if(arr[i].querySelector(`div[class=content-container]`).children[0].textContent.match(/[^]+/)){
              // arr[i].classList.toggle('blocked');
            // }
          }
          // console.log(arr[i].querySelector(`div[class=content-header__info]`).children[0].children[0].children[1].textContent);
          // console.log(arr[i].querySelector(`div[class=content-header__info]`).children[1])
          new FeedActions(arr[i].querySelector(`div[class=content-header__info]`));
          // document.getElementById('dtf-feedGroups').children[2].children[1].appendChild(arr[i]);
          new SubGroup(document.getElementById('dtf-feedGroups').children[1].children[1], arr[i].querySelector(`div[class=content-header__info]`).children[0].children[0].children[1].textContent, arr[i]);
        }
        // if(co[d].classList.value.match(/content-header-author/)) console.log(co[d])
      }
      document.getElementById('dtf-feedGroups').children[1].children[0].children[1].textContent = document.getElementById('dtf-feedGroups').children[1].children[1].children.length;
      document.getElementById('dtf-feedGroups').children[2].children[0].children[1].textContent = document.getElementById('dtf-feedGroups').children[2].children[1].children.length;
    }
  }
