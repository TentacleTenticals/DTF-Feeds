function setData(main, mainCfg){
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
          label: 'Список',
          name: 'subsites'
        }]
      }
    });
  }
