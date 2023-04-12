initMenu.setData = (main, mainCfg) => {
    new Field({
      path: main,
      groupName: 'script data',
      cName: 'flex',
      legend: 'Игнорируемые',
      info: 'Подсайты',
      rtn: [],
      liveList: {c:{g:'ignored'}, a:mainCfg,
        list:[
        {
          type: 'object',
          label: 'Подсайты',
          name: 'subsites'
        },
        {
          type: 'object',
          label: 'Авторы',
          name: 'authors',
          cName: 'vertical',
          view: (e) => {
              return `Name: ${e.author},
              ID: ${e.authorID},
              Type: ${e.authorType}`
          },
          buttons: (e, value) => {
              new Button({
                  path: e,
                  cName: 'btn',
                  text: 'q',
                  onclick: () => {
                      alert(value.authorID);
                  }
              })
          },
          clearList: true
        },
        {
          type: 'object',
          label: 'Фиды',
          name: 'feeds'
        }]
      }
    });
  }
