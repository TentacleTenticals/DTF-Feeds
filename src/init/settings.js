function setSettings(main, mainCfg){
    new Field({
      path: main,
      groupName: 'working mode',
      cName: 'grid',
      legend: 'Тип действия',
      info: 'Как скрипту действовать',
      rtn: [],
      select: {c:{g:true}, a:{cfg:mainCfg},
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
      inputs: {c:{g:true}, a:{cfg:mainCfg},
        list:[
          {
            type: 'checkbox',
            label: 'Популярное',
            name: 'popular'
          },
          {
            type: 'checkbox',
            label: 'Новое',
            name: 'new'
          },
          {
            type: 'checkbox',
            label: 'Моё новое',
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
        groupName: 'attachments',
        cName: 'grid',
        legend: 'Вложения в комментариях (настройка)',
        info: 'Автовоспроизведение',
        rtn: [],
        select: {c:{g:true}, a:{cfg:mainCfg},
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
        inputs: {c:{g:true}, a:{cfg:mainCfg},
          list:[
            {
              type: 'checkbox',
              label: 'Подсайты',
              name: 'subsites'
            },
            {
              type: 'checbox',
              label: 'Блоги',
              name: 'blogs'
            }
          ]}
      });

    new Field({
      path: main,
      groupName: 'filters',
      cName: 'grid',
      legend: 'Фильтры',
      info: 'Фильтры фидов',
      rtn: [],
      select: {c:{g:'subsites.title'}, a:{cfg:mainCfg},
        list:[
        {
          label: 'Действие',
          name: 'action',
          options: ['collapse', 'delete']
        }
      ]},
      inputs: {c:{g:'subsites.title'}, a:{cfg:mainCfg},
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
      ]}
    });

    new Field({
      path: main,
      groupName: 'filters',
      cName: 'grid',
      legend: 'Фильтры',
      info: 'Фильтры фидов',
      rtn: [],
      select: {c:{g:'subsites.text'}, a:{cfg:mainCfg},
        list:[
        {
          label: 'Действие',
          name: 'action',
          options: ['collapse', 'delete']
        }
      ]},
      inputs: {c:{g:'subsites.text'}, a:{cfg:mainCfg},
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
      ]}
    });

    new Field({
      path: main,
      groupName: 'filters',
      cName: 'grid',
      legend: 'Фильтры',
      info: 'Фильтры фидов',
      rtn: [],
      select: {c:{g:'blogs.title'}, a:{cfg:mainCfg},
        list:[
        {
          label: 'Действие',
          name: 'action',
          options: ['collapse', 'delete']
        }
      ]},
      inputs: {c:{g:'blogs.title'}, a:{cfg:mainCfg},
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
      ]}
    });

    new Field({
      path: main,
      groupName: 'filters',
      cName: 'grid',
      legend: 'Фильтры',
      info: 'Фильтры фидов',
      rtn: [],
      select: {c:{g:'blogs.title'}, a:{cfg:mainCfg},
        list:[
        {
          label: 'Действие',
          name: 'action',
          options: ['collapse', 'delete']
        }
      ]},
      inputs: {c:{g:'blogs.title'}, a:{cfg:mainCfg},
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
      ]}
    });

    new Field({
      path: main,
      groupName: 'filters',
      cName: 'grid',
      legend: 'Фильтры',
      info: 'Фильтры фидов',
      rtn: [],
      select: {c:{g:'ignored.feeds'}, a:{cfg:mainCfg},
        list:[
        {
          label: 'Действие',
          name: 'action',
          options: ['collapse', 'delete']
        }
      ]},
      inputs: {c:{g:'ignored.feeds'}, a:{cfg:mainCfg},
        list:[
          {
            type: 'color',
            label: 'Активен',
            name: 'color'
          }
      ]}
    });

    new Field({
      path: main,
      groupName: 'filters',
      cName: 'grid',
      legend: 'Фильтры',
      info: 'Фильтры фидов',
      rtn: [],
      select: {c:{g:'ignored.subsites'}, a:{cfg:mainCfg},
        list:[
        {
          label: 'Действие',
          name: 'action',
          options: ['collapse', 'delete']
        }
      ]},
      inputs: {c:{g:'ignored.subsites'}, a:{cfg:mainCfg},
        list:[
          {
            type: 'color',
            label: 'Активен',
            name: 'color'
          }
      ]}
    });

    new Field({
      path: main,
      groupName: 'filters',
      cName: 'grid',
      legend: 'Фильтры',
      info: 'Фильтры фидов',
      rtn: [],
      select: {c:{g:'ignored.authors'}, a:{cfg:mainCfg},
        list:[
        {
          label: 'Действие',
          name: 'action',
          options: ['collapse', 'delete']
        }
      ]},
      inputs: {c:{g:'ignored.authors'}, a:{cfg:mainCfg},
        list:[
          {
            type: 'color',
            label: 'Активен',
            name: 'color'
          }
      ]}
    });

    new Field({
      path: main,
      groupName: 'filters',
      cName: 'grid',
      legend: 'Фильтры',
      info: 'Фильтры фидов',
      rtn: [],
      select: {c:{g:'watched.feeds'}, a:{cfg:mainCfg},
        list:[
        {
          label: 'Действие',
          name: 'action',
          options: ['collapse', 'delete']
        }
      ]},
      inputs: {c:{g:'watched.feeds'}, a:{cfg:mainCfg},
        list:[
          {
            type: 'color',
            label: 'Активен',
            name: 'color'
          }
      ]}
    });
  }
