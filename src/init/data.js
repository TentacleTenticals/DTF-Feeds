initMenu.setData = (main, mainCfg) => {
    function linkOpener(i){
      window.open(`https://dtf.ru/${(() => {
        if(i.authorType.match(/User$/)){
          return `u/${i.authorType.match(/User$/) ? `${i.authorID}/${i.feedID}` : `${i.authorID}/${i.feedID}`}`;
        }else
        if(i.authorType.match(/Official subsite|User subsite/)){
          return `s /${i.authorType.match(/Official subsite|User subsite/) ? `${i.authorID}/${i.feedID}` : `${i.authorID}/${i.feedID}`}`;
        }else
        if(i.authorType.match(/DTF Subsite/)){
          return i.authorID;
        }
      })()}`, '_blank').focus();
    };
    function feedOpener(i){
      window.open(`https://dtf.ru/${i.feedID}`, '_blank').focus();
    };
    
    // Игнорируемые
    new Field({
      path: main,
      groupName: 'script data',
      cName: 'flex',
      legend: '💢 Игнорируемые',
      info: 'Подсайты',
      rtn: [],
      liveList: {c:{g:'ignored'}, a:mainCfg,
        list:[
        {
          type: 'object',
          mode: 'view-del',
          label: 'Подсайты',
          name: 'subsites',
          cName: 'vertical',
          view: (e) => {
              if(!e) return;
              return `📛: ${e.author},
              🆔: ${e.authorID},
              ❓: ${e.authorType}`
          },
          buttons: (e, v) => {
              if(!e) return;
              new Button({
                  path: e,
                  cName: 'btn',
                  text: '🔗',
                  onclick: () => {
                      linkOpener(v);
                  }
              })
          },
          clearList: true
        }]
      }
    });
    
    new Field({
      path: main,
      groupName: 'script data',
      cName: 'flex',
      legend: '💢 Игнорируемые',
      info: 'Авторы',
      rtn: [],
      liveList: {c:{g:'ignored'}, a:mainCfg,
        list:[
        {
          type: 'object',
          mode: 'view-del',
          label: 'Авторы',
          name: 'authors',
          cName: 'vertical',
          view: (e) => {
              if(!e) return;
              return `📛: ${e.author},
              🆔: ${e.authorID},
              ❓: ${e.authorType}`
          },
          buttons: (e, v) => {
              if(!e) return;
              new Button({
                  path: e,
                  cName: 'btn',
                  text: '🔗',
                  onclick: () => {
                      linkOpener(v);
                  }
              })
          },
          clearList: true
        }]
      }
    });
    
    new Field({
      path: main,
      groupName: 'script data',
      cName: 'flex',
      legend: '💢 Игнорируемые',
      info: 'Фиды',
      rtn: [],
      liveList: {c:{g:'ignored'}, a:mainCfg,
        list:[
        {
          type: 'object',
          mode: 'view-del',
          label: 'Фиды',
          name: 'feeds',
          cName: 'vertical',
          view: (e) => {
              if(!e) return;
              return `📰🆔: ${e.feedID};
              📰📜 ${e.feedTitle};
              📛: ${e.author};
              🆔: ${e.authorID};
              ❓: ${e.authorType};
              📅: ${e.date};`
          },
          buttons: (e, v) => {
              if(!e) return;
              new Button({
                  path: e,
                  cName: 'btn',
                  text: '🔗',
                  onclick: () => {
                      linkOpener(v);
                  }
              });
              new Button({
                  path: e,
                  cName: 'btn',
                  text: '🔗',
                  onclick: () => {
                      feedOpener(v);
                  }
              })
          },
          clearList: true
        }]
      }
    });
    // Избранные
    new Field({
      path: main,
      groupName: 'script data',
      cName: 'flex',
      legend: '💘 Избранные',
      info: 'Подсайты',
      rtn: [],
      liveList: {c:{g:'favorites'}, a:mainCfg,
        list:[
        {
          type: 'object',
          mode: 'view-del',
          label: 'Подсайты',
          name: 'subsites',
          cName: 'vertical',
          view: (e) => {
              if(!e) return;
              return `📛: ${e.author},
              🆔: ${e.authorID},
              ❓: ${e.authorType}`
          },
          buttons: (e, v) => {
              if(!e) return;
              new Button({
                  path: e,
                  cName: 'btn',
                  text: '🔗',
                  onclick: () => {
                      linkOpener(v);
                  }
              })
          },
          clearList: true
        }]
      }
    });
    
    new Field({
      path: main,
      groupName: 'script data',
      cName: 'flex',
      legend: '💘 Избранные',
      info: 'Авторы',
      rtn: [],
      liveList: {c:{g:'favorites'}, a:mainCfg,
        list:[
        {
          type: 'object',
          mode: 'view-del',
          label: 'Авторы',
          name: 'authors',
          cName: 'vertical',
          view: (e) => {
              if(!e) return;
              return `📛: ${e.author},
              🆔: ${e.authorID},
              ❓: ${e.authorType}`
          },
          buttons: (e, v) => {
              if(!e) return;
              new Button({
                  path: e,
                  cName: 'btn',
                  text: '🔗',
                  onclick: () => {
                      linkOpener(v);
                  }
              })
          },
          clearList: true
        }]
      }
    });
    
//     new Field({
//       path: main,
//       groupName: 'script data',
//       cName: 'flex',
//       legend: '💘 Избранные',
//       info: 'Фиды',
//       rtn: [],
//       liveList: {c:{g:'favorites'}, a:mainCfg,
//         list:[
//         {
//           type: 'object',
//           mode: 'view-del',
//           label: 'Фиды',
//           name: 'feeds',
//           cName: 'vertical',
//           view: (e) => {
//               if(!e) return;
//               return `📰🆔: ${e.feedID};
//               📰📜 ${e.feedTitle};
//               📛: ${e.author};
//               🆔: ${e.authorID};
//               ❓: ${e.authorType};
//               📅: ${e.date};`
//           },
//           buttons: (e, v) => {
//               if(!e) return;
//               new Button({
//                   path: e,
//                   cName: 'btn',
//                   text: '🔗',
//                   onclick: () => {
//                       linkOpener(v);
//                   }
//               });
//               new Button({
//                   path: e,
//                   cName: 'btn',
//                   text: '🔗',
//                   onclick: () => {
//                       feedOpener(v);
//                   }
//               })
//           },
//           clearList: true
//         }]
//       }
//     });
  }
