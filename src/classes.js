// ==UserScript==
// @name        DTF feeds (lib)
// @namespace   https://github.com/TentacleTenticals/DTF-feeds
// @grant       none
// @version     1.0
// @author      Jafia
// @description Классы
// ==/UserScript==

class Settings {
  constructor(params){
    if(document.getElementById('DTF-settings')) return;
    this.main=document.createElement('div');
    this.main.className='DTF-settings';
    this.main.id='DTF-settings';
    document.body.appendChild(this.main);

    this.close=document.createElement('button');
    this.close.className='btn';
    this.close.textContent='Закрыть настройки';
    this.close.style=`
      width: 100%;
      box-shadow: 0px 0px 2px 0px black;
      cursor: pointer;
    `;
    this.close.onclick=() => {
      this.main.remove();
    }
    this.main.appendChild(this.close);

    this.form=document.createElement('form');
    this.form.id='settings';
    this.form.action='';
    this.form.method='dialog';
    this.form.onsubmit=() => {
      settingsUpdater(db, getSettings());
      this.main.remove();
    }
    this.main.appendChild(this.form);

    this.whatToGroup = new Field({
      path: this.form,
      groupName: 'what to group',
      legend: `Что группировать`,
      style: `display: grid;
      grid-template-columns: repeat(1, max-content);
      width: 100%;`,
      items: [
        {
          type: 'checkbox',
          name: 'subsites',
          checked: mainSettings.settings['what to group']['subsites'],
          text: 'Группировать подсайты'
        },
        {
          type: 'checkbox',
          name: 'blogs',
          checked: mainSettings.settings['what to group']['blogs'],
          text: 'Группировать блоги'
        }
      ]
    });

    this.buttonContainer=document.createElement('div');
    this.buttonContainer.style=`display: grid;
    grid-template-columns: repeat(3, auto);
    justify-content: center;
    /* row-gap: 5px; */
    column-gap: 5px;
    margin-top: 3px;`;
    this.form.appendChild(this.buttonContainer);

    this.submit=document.createElement('input');
    this.submit.type='submit';
    this.submit.id='saveSettings';
    this.submit.value='Сохранить настройки';
    this.buttonContainer.appendChild(this.submit);

    this.backToDefault=document.createElement('input');
    this.backToDefault.type='submit';
    this.backToDefault.value='Сбросить';
    this.backToDefault.onclick=() => {
      // this.main.remove();
    }
    this.backToDefault.disabled = true;
    this.buttonContainer.appendChild(this.backToDefault);

    this.close=document.createElement('input');
    this.close.type='submit';
    this.close.value='Отмена';
    this.close.onclick=() => {
      this.main.remove();
    }
    this.buttonContainer.appendChild(this.close);
  }
}
