let defaultSettings = {
  'working mode': {
    'type': 'panel',
    'where to react': {
      'popular': true,
      'new': true,
      'my new': true,
      'bookmarks': false,
      'subsites': true,
      'user pages': true,
      'topics': true,
      'types to show': {
        'popular': 'subsites and blogs',
        'new': 'subsites and blogs',
        'my new': 'subsites and blogs',
        'bookmarks': 'subsites and blogs',
        'subsites': 'subsites and blogs',
        'user pages': 'subsites and blogs',
        'topics': 'subsites and blogs'
      }
    }
  },
  'feeds': {
    'scroll': {
      'block': false
    },
    'settings': {
      'favorite': {
        'subsites': {
          'prevent': 'collapsing and deleting'
        },
        'authors': {
          'prevent': 'collapsing and deleting'
        }
      },
      'visual': {
        'favorite': {
          'color': {
            'panel': '#a3f9c3',
            'feed': '#a3f9c3'
          }
        },
        'ignored': {
          'color': {
            'panel': '#6c2e4c',
            'feed': '#6c2e4c'
          }
        },
        'watched': {
          'color': {
            'feed': '#eadaf7'
          }
        },
        'editor': {
          'color': {
            'feed': '#bde3f7'
          }
        }
      }
    },
    'what to group': {
      'subsites': true,
      'blogs': true
    },
    'filters': {
      'ignored': {
        'feeds': {
          'action': 'collapse'
        },
        'authors': {
          'action': 'collapse'
        },
        'subsites': {
          'action': 'collapse'
        }
      },
      'watched': {
        'feeds': {
          'action': 'collapse'
        }
      },
      'editor': {
        'feeds': {
          'action': 'collapse'
        }
      },
      'subsites': {
        'title': {
          'active': true,
          'action': 'collapse',
          'react text': true,
          'react no text': true,
          'words': []
        },
        'text': {
          'active': true,
          'action': 'collapse',
          'react text': true,
          'react no text': true,
          'words': []
        }
      },
      'blogs': {
        'title': {
          'active': true,
          'action': 'collapse',
          'react text': true,
          'react no text': true,
          'words': []
        },
        'text': {
          'active': true,
          'action': 'collapse',
          'react text': true,
          'react no text': true,
          'words': []
        }
      }
    },
    'attachments': {
      'replace': {
        'videos': true
      },
      'size': {
        'video': 300
      }
    }
  },
  'script data': {
    'ignored': {
      'subsites': [],
      'authors': [],
      'feeds': []
    },
    'favorite': {
      'subsites': [],
      'authors': []
    },
    'watched': {
      'feeds': []
    }
  },
  'scriptInfo': {
    scriptName: 'DTF-Feeds',
    scriptId: 'dtf feeds',
    storeName: 'DTF-Feeds',
    storeDesc: 'Скрипт для улучшенного управления фидами.'
  }
}
