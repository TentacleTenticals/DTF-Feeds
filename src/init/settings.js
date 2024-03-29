initMenu.setSettings = (main, mainCfg) => {
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
          options: [['panel', 'панель'], ['obs', 'обсервер']]
        }
    ]}
  });

  new Field({
    path: main,
    groupName: 'working mode',
    cName: 'grid',
    legend: 'Где действовать',
    info: 'Где именно действовать',
    inputs: {c:{g:'where to react'}, a:mainCfg,
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
          label: 'Закладки',
          name: 'bookmarks'
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
    groupName: 'working mode',
    cName: 'grid',
    legend: 'Что показывать',
    info: 'Бла бла бла',
    rtn: [],
    select: {c:{g:'where to react.types to show'}, a:mainCfg,
      list:[
        {
          label: 'Популярное',
          name: 'popular',
          options: [['subsites', 'подсайты'], ['blogs', 'блоги'], ['subsites and blogs', 'подсайты и блоги']]
        },
        {
          label: 'Новое',
          name: 'new',
          options: [['subsites', 'подсайты'], ['blogs', 'блоги'], ['subsites and blogs', 'подсайты и блоги']]
        },
        {
          label: 'Моё новое',
          name: 'my new',
          options: [['subsites', 'подсайты'], ['blogs', 'блоги'], ['subsites and blogs', 'подсайты и блоги']]
        },
        {
          label: 'Закладки',
          name: 'bookmarks',
          options: [['subsites', 'подсайты'], ['blogs', 'блоги'], ['subsites and blogs', 'подсайты и блоги']]
        },
        {
          label: 'Подсайты',
          name: 'subsites',
          options: [['subsites', 'подсайты'], ['blogs', 'блоги'], ['subsites and blogs', 'подсайты и блоги']]
        },
        {
          label: 'Страницы пользователей',
          name: 'user pages',
          options: [['subsites', 'подсайты'], ['blogs', 'блоги'], ['subsites and blogs', 'подсайты и блоги']]
        },
        {
          label: 'Статьи',
          name: 'topics',
          options: [['subsites', 'подсайты'], ['blogs', 'блоги'], ['subsites and blogs', 'подсайты и блоги']]
        }
    ]}
  });

  new Field({
    path: main,
    groupName: 'feeds',
    cName: 'grid',
    legend: 'Группировка',
    info: 'Что группировать',
    rtn: [],
    inputs: {c:{g:'what to group'}, a:mainCfg,
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
    groupName: 'feeds',
    cName: 'grid',
    legend: 'Скролл',
    info: 'Действие при окончании скролла',
    rtn: [],
    inputs: {c:{g:'scroll'}, a:mainCfg,
      list:[
        {
          type: 'checkbox',
          label: 'Блокировать',
          name: 'block'
        }
    ]}
  });
    
  new Field({
    path: main,
    groupName: 'feeds',
    cName: 'flex',
    legend: 'Фиды',
    info: 'Действия с фидами от избранных посдайтов или авторов',
    rtn: [],
    select: {a:mainCfg,
      list:[
        {
            label: 'Действие с фидами от избранных подсайтов',
            name: 'prevent',
            c:{g:'settings.favorite.subsites'},
            options: [['all', 'запрет всего'], ['collapsing', 'запрет сворачивания'], ['deleting', 'запрет удаления']]
        },
        {
            label: 'Действие с фидами от избранных авторов',
            name: 'prevent',
            c:{g:'settings.favorite.authors'},
            options: [['all', 'запрет всего'], ['collapsing', 'запрет сворачивания'], ['deleting', 'запрет удаления']]
        }
    ]}
  });
    
  new Field({
    path: main,
    groupName: 'feeds',
    cName: 'grid',
    legend: 'Избранные',
    info: 'Настройки фидов',
    rtn: [],
    inputs: {c:{g:'settings.visual.favorite.color'}, a:mainCfg,
      list:[
        {
          type: 'color',
          label: 'Цвет панели',
          name: 'panel'
        },
        {
          type: 'color',
          label: 'Цвет фида',
          name: 'feed'
        }
    ]}
  });
  new Field({
    path: main,
    groupName: 'feeds',
    cName: 'grid',
    legend: 'Игнорируемые',
    info: 'Настройки фидов',
    rtn: [],
    inputs: {c:{g:'settings.visual.ignored.color'}, a:mainCfg,
      list:[
        {
          type: 'color',
          label: 'Цвет панели',
          name: 'panel'
        },
        {
          type: 'color',
          label: 'Цвет фида',
          name: 'feed'
        }
    ]}
  });
  new Field({
    path: main,
    groupName: 'feeds',
    cName: 'grid',
    legend: 'Фиды',
    info: 'Просмотренные',
    rtn: [],
    inputs: {c:{g:'settings.visual.watched.color'}, a:mainCfg,
      list:[
        {
          type: 'color',
          label: 'Цвет фида',
          name: 'feed'
        }
    ]}
  });
  new Field({
    path: main,
    groupName: 'feeds',
    cName: 'grid',
    legend: 'От редакции',
    info: 'Настройки фидов',
    rtn: [],
    inputs: {c:{g:'settings.visual.editorial.color'}, a:mainCfg,
      list:[
        {
          type: 'color',
          label: 'Цвет фида',
          name: 'feed'
        }
    ]}
  });
  
  new Field({
    path: main,
    groupName: 'feeds',
    cName: 'grid',
    legend: 'Вложения фидов',
    info: 'Какие вложения заменять на их улучшенные версии',
    rtn: [],
    inputs: {c:{g:'attachments.replace'}, a:mainCfg,
      list:[
        {
          type: 'checkbox',
          label: 'Видео',
          name: 'videos'
        },
        {
          type: 'number',
          label: 'Видео',
          name: 'video',
          c:{g:'attachments.size', n:'px'}
        }
    ]}
  });

  new Field({
    path: main,
    groupName: 'feeds',
    cName: 'flex',
    legend: 'Фильтры подсайтов',
    info: 'Заголовок',
    rtn: [],
    select: {c:{g:'filters.subsites.title'}, a:mainCfg,
      list:[
      {
        label: 'Действие',
        name: 'action',
        options: [['none', 'ничего не делать'], ['collapse', 'свернуть'], ['delete', 'удалить']]
      }
    ]},
    inputs: {c:{g:'filters.subsites.title'}, a:mainCfg,
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
    liveList: {c:{g:'filters.subsites.title'}, a:mainCfg,
      list:[
      {
        type: 'string',
        mode: 'edit-del',
        edit: true,
        label: 'Regex фильтр заголовков',
        name: 'words'
      }]
    }
  });

  new Field({
    path: main,
    groupName: 'feeds',
    cName: 'flex',
    legend: 'Фильтры подсайтов',
    info: 'Текст',
    rtn: [],
    select: {c:{g:'filters.subsites.text'}, a:mainCfg,
      list:[
      {
        label: 'Действие',
        name: 'action',
        options: [['none', 'ничего не делать'], ['collapse', 'свернуть'], ['delete', 'удалить']]
      }
    ]},
    inputs: {c:{g:'filters.subsites.text'}, a:mainCfg,
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
    liveList: {c:{g:'filters.subsites.text'}, a:mainCfg,
      list:[
      {
        type: 'string',
        mode: 'edit-del',
        edit: true,
        label: 'Regex фильтр текста',
        name: 'words'
      }]
    }
  });

  new Field({
    path: main,
    groupName: 'feeds',
    cName: 'flex',
    legend: 'Фильтры блогов',
    info: 'Заголовок',
    rtn: [],
    select: {c:{g:'filters.blogs.title'}, a:mainCfg,
      list:[
      {
        label: 'Действие',
        name: 'action',
        options: [['none', 'ничего не делать'], ['collapse', 'свернуть'], ['delete', 'удалить']]
      }
    ]},
    inputs: {c:{g:'filters.blogs.title'}, a:mainCfg,
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
    liveList: {c:{g:'filters.blogs.title'}, a:mainCfg,
      list:[
      {
        type: 'string',
        mode: 'edit-del',
        edit: true,
        label: 'Regex фильтр заголовков',
        name: 'words'
      }]
    }
  });

  new Field({
    path: main,
    groupName: 'feeds',
    cName: 'flex',
    legend: 'Фильтры блогов',
    info: 'Текст',
    rtn: [],
    select: {c:{g:'filters.blogs.text'}, a:mainCfg,
      list:[
      {
        label: 'Действие',
        name: 'action',
        options: [['none', 'ничего не делать'], ['collapse', 'свернуть'], ['delete', 'удалить']]
      }
    ]},
    inputs: {c:{g:'filters.blogs.text'}, a:mainCfg,
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
    liveList: {c:{g:'filters.blogs.text'}, a:mainCfg,
      list:[
      {
        type: 'string',
        mode: 'edit-del',
        edit: true,
        label: 'Regex фильтр текста',
        name: 'words'
      }]
    }
  });

  new Field({
    path: main,
    groupName: 'feeds',
    cName: 'grid',
    legend: 'Фильтры фидов',
    info: 'Игнорируемые',
    rtn: [],
    select: {c:{g:'filters.ignored.feeds'}, a:mainCfg,
      list:[
      {
        label: 'Действие',
        name: 'action',
        options: [['none', 'ничего не делать'], ['collapse', 'свернуть'], ['delete', 'удалить']]
      }
    ]}
  });

  new Field({
    path: main,
    groupName: 'feeds',
    cName: 'grid',
    legend: 'Фильтры подсайтов',
    info: 'Игнорируемые',
    rtn: [],
    select: {c:{g:'filters.ignored.subsites'}, a:mainCfg,
      list:[
      {
        label: 'Действие',
        name: 'action',
        options: [['none', 'ничего не делать'], ['collapse', 'свернуть'], ['delete', 'удалить']]
      }
    ]}
  });

  new Field({
    path: main,
    groupName: 'feeds',
    cName: 'grid',
    legend: 'Фильтры авторов',
    info: 'Игнорируемые',
    rtn: [],
    select: {c:{g:'filters.ignored.authors'}, a:mainCfg,
      list:[
      {
        label: 'Действие',
        name: 'action',
        options: [['none', 'ничего не делать'], ['collapse', 'свернуть'], ['delete', 'удалить']]
      }
    ]}
  });

  new Field({
    path: main,
    groupName: 'feeds',
    cName: 'grid',
    legend: 'Фильтры фидов',
    info: 'Просмотренные',
    rtn: [],
    select: {c:{g:'filters.watched.feeds'}, a:mainCfg,
      list:[
      {
        label: 'Действие',
        name: 'action',
        options: [['none', 'ничего не делать'], ['collapse', 'свернуть'], ['delete', 'удалить']]
      }
    ]}
  });
  
  new Field({
    path: main,
    groupName: 'feeds',
    cName: 'grid',
    legend: 'Фильтры фидов',
    info: 'От редакции',
    rtn: [],
    select: {c:{g:'filters.editorial.feeds'}, a:mainCfg,
      list:[
      {
        label: 'Действие',
        name: 'action',
        options: [['none', 'ничего не делать'], ['collapse', 'свернуть'], ['delete', 'удалить']]
      }
    ]}
  });
}
