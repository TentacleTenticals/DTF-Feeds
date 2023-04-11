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
          name: 'authors'
        },
        {
          type: 'object',
          label: 'Фиды',
          name: 'feeds'
        }]
      }
    });
  }
