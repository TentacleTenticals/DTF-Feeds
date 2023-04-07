function setSettings(main, mainCfg){
    new Field({
      path: main,
      groupName: 'working mode',
      cName: 'grid',
      legend: 'Режим работы',
      info: 'Ручной режим с панелью, или же автоматический с обсервером',
      rtn: [],
      select: {c:true, a:mainCfg,
        list:[
          {
            label: 'Тип действия',
            name: 'type',
            options: ['panel', 'obs']
          }
      ]}
    });

    new Field({
      path: main,
      groupName: 'where to react',
      cName: 'grid',
      legend: 'Где действовать',
      info: 'Где именнно действовать',
      inputs: {c:true, a:mainCfg,
        list:[
          {
            type: 'checkbox',
            label: 'Популярное',
            name: 'popular'
          },
          {
            type: 'checkbox',
            label: 'Свежее',
            name: 'new'
          },
          {
            type: 'checkbox',
            label: 'Моя лента',
            name: 'my new'
          },
          {
            type: 'checkbox',
            label: 'Подсайты',
            name: 'subsites'
          },
          {
            type: 'checkbox',
            label: 'Страницы пользователей',
            name: 'user pages'
          },
          {
            type: 'checkbox',
            label: 'Статьи',
            name: 'topics'
          }
        ]}
      });

      new Field({
        path: main,
        groupName: 'what to show in',
        cName: 'grid',
        legend: 'Что показывать',
        info: 'Бла бла бла',
        rtn: [],
        select: {c:true, a:mainCfg,
          list:[
            {
              label: 'Популярное',
              name: 'popular',
              options: ['subsites', 'blogs', 'subsites and blogs']
            },
            {
              label: 'Новое',
              name: 'new',
              options: ['subsites', 'blogs', 'subsites and blogs']
            },
            {
              label: 'Моё новое',
              name: 'my new',
              options: ['subsites', 'blogs', 'subsites and blogs']
            },
            {
              label: 'Подсайты',
              name: 'subsites',
              options: ['subsites', 'blogs', 'subsites and blogs']
            },
            {
              label: 'Страницы пользователей',
              name: 'user pages',
              options: ['subsites', 'blogs', 'subsites and blogs']
            },
            {
              label: 'Статьи',
              name: 'topics',
              options: ['subsites', 'blogs', 'subsites and blogs']
            }
        ]}
      });

      new Field({
        path: main,
        groupName: 'what to group',
        cName: 'grid',
        legend: 'Группировка',
        info: 'Что группировать',
        rtn: [],
        inputs: {c:true, a:mainCfg,
          list:[
            {
              type: 'checkbox',
              label: 'Подсайты',
              name: 'subsites'
            },
            {
              type: 'checkbox',
              label: 'Блоги',
              name: 'blogs'
            }
          ]}
      });

    new Field({
      path: main,
      groupName: 'filters',
      cName: 'flex',
      legend: 'Фильтры подсайтов',
      info: 'Заголовок',
      rtn: [],
      select: {c:{g:'subsites.title'}, a:mainCfg,
        list:[
        {
          label: 'Действие',
          name: 'action',
          options: ['collapse', 'delete']
        }
      ]},
      inputs: {c:{g:'subsites.title'}, a:mainCfg,
        list:[
          {
            type: 'checkbox',
            label: 'Активен',
            name: 'active'
          },
          {
            type: 'checkbox',
            label: 'Реагировать на заголовок',
            name: 'react on text'
          },
          {
            type: 'checkbox',
            label: 'Реагировать на отсутствие заголовка',
            name: 'react no text'
          }
      ]},
      liveList: {c:{g:'subsites.title'}, a:mainCfg,
        list:[
        {
          type: 'str-value',
          label: 'Regex фильтр заголовков',
          name: 'words'
        }]
      }
    });

    new Field({
      path: main,
      groupName: 'filters',
      cName: 'flex',
      legend: 'Фильтры подсайтов',
      info: 'Текст',
      rtn: [],
      select: {c:{g:'subsites.text'}, a:mainCfg,
        list:[
        {
          label: 'Действие',
          name: 'action',
          options: ['collapse', 'delete']
        }
      ]},
      inputs: {c:{g:'subsites.text'}, a:mainCfg,
        list:[
          {
            type: 'checkbox',
            label: 'Активен',
            name: 'active'
          },
          {
            type: 'checkbox',
            label: 'Реагировать на текст',
            name: 'react on text'
          },
          {
            type: 'checkbox',
            label: 'Реагировать на отсутствие текста',
            name: 'react no text'
          }
      ]},
      liveList: {c:{g:'subsites.text'}, a:mainCfg,
        list:[
        {
          type: 'str-value',
          label: 'Regex фильтр текста',
          name: 'words'
        }]
      }
    });

    new Field({
      path: main,
      groupName: 'filters',
      cName: 'flex',
      legend: 'Фильтры блогов',
      info: 'Заголовок',
      rtn: [],
      select: {c:{g:'blogs.title'}, a:mainCfg,
        list:[
        {
          label: 'Действие',
          name: 'action',
          options: ['collapse', 'delete']
        }
      ]},
      inputs: {c:{g:'blogs.title'}, a:mainCfg,
        list:[
          {
            type: 'checkbox',
            label: 'Активен',
            name: 'active'
          },
          {
            type: 'checkbox',
            label: 'Реагировать на заголовок',
            name: 'react on text'
          },
          {
            type: 'checkbox',
            label: 'Реагировать на отсутствие заголовка',
            name: 'react no text'
          }
      ]},
      liveList: {c:{g:'blogs.title'}, a:mainCfg,
        list:[
        {
          type: 'str-value',
          label: 'Regex фильтр заголовков',
          name: 'words'
        }]
      }
    });

    new Field({
      path: main,
      groupName: 'filters',
      cName: 'flex',
      legend: 'Фильтры блогов',
      info: 'Текст',
      rtn: [],
      select: {c:{g:'blogs.text'}, a:mainCfg,
        list:[
        {
          label: 'Действие',
          name: 'action',
          options: ['collapse', 'delete']
        }
      ]},
      inputs: {c:{g:'blogs.text'}, a:mainCfg,
        list:[
          {
            type: 'checkbox',
            label: 'Активен',
            name: 'active'
          },
          {
            type: 'checkbox',
            label: 'Реагировать на текст',
            name: 'react on text'
          },
          {
            type: 'checkbox',
            label: 'Реагировать на отсутствие текста',
            name: 'react no text'
          }
      ]},
      liveList: {c:{g:'blogs.text'}, a:mainCfg,
        list:[
        {
          type: 'str-value',
          label: 'Regex фильтр текста',
          name: 'words'
        }]
      }
    });

    new Field({
      path: main,
      groupName: 'filters',
      cName: 'grid',
      legend: 'Фильтры фидов',
      info: 'Игнорируемые',
      rtn: [],
      select: {c:{g:'ignored.feeds'}, a:mainCfg,
        list:[
        {
          label: 'Действие',
          name: 'action',
          options: ['collapse', 'delete']
        }
      ]},
      inputs: {c:{g:'ignored.feeds'}, a:mainCfg,
        list:[
          {
            type: 'color',
            label: 'Цвет',
            name: 'color'
          }
      ]}
    });

    new Field({
      path: main,
      groupName: 'filters',
      cName: 'grid',
      legend: 'Фильтры подсайтов',
      info: 'Игнорируемые',
      rtn: [],
      select: {c:{g:'ignored.subsites'}, a:mainCfg,
        list:[
        {
          label: 'Действие',
          name: 'action',
          options: ['collapse', 'delete']
        }
      ]},
      inputs: {c:{g:'ignored.subsites'}, a:mainCfg,
        list:[
          {
            type: 'color',
            label: 'Цвет',
            name: 'color'
          }
      ]}
    });

    new Field({
      path: main,
      groupName: 'filters',
      cName: 'grid',
      legend: 'Фильтры авторов',
      info: 'Игнорируемые',
      rtn: [],
      select: {c:{g:'ignored.authors'}, a:mainCfg,
        list:[
        {
          label: 'Действие',
          name: 'action',
          options: ['collapse', 'delete']
        }
      ]},
      inputs: {c:{g:'ignored.authors'}, a:mainCfg,
        list:[
          {
            type: 'color',
            label: 'Цвет',
            name: 'color'
          }
      ]}
    });

    new Field({
      path: main,
      groupName: 'filters',
      cName: 'grid',
      legend: 'Фильтры фидов',
      info: 'Просмотренные',
      rtn: [],
      select: {c:{g:'watched.feeds'}, a:mainCfg,
        list:[
        {
          label: 'Действие',
          name: 'action',
          options: ['collapse', 'delete']
        }
      ]},
      inputs: {c:{g:'watched.feeds'}, a:mainCfg,
        list:[
          {
            type: 'color',
            label: 'Цвет',
            name: 'color'
          }
      ]}
    });
  }
