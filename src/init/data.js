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
          type: 'string',
          label: 'Подсайты',
          name: 'subsites'
        },
        {
          type: 'string',
          label: 'Авторы',
          name: 'authors'
        },
        {
          type: 'string',
          label: 'Фиды',
          name: 'feeds'
        }]
      }
    });
  }
