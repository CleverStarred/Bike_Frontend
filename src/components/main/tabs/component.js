import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import { Tabs, Tab } from 'react-bootstrap';

const BIKES = {
  titel: 'Велосипеды',
  popular: {
    name: 'Популярные',
    items: [
      {
        name: 'Шоссейные велосипеды',
        link: 'road'
      },
      {
        name: 'Горные велосипеды',
        link: 'mountain'
      },
      {
        name: 'BMX',
        link: 'bmx'
      },
      {
        name: 'Женские',
        link: 'women'
      },
      {
        name: 'Детские',
        link: 'kids'
      }
    ]
  },
  commuter: {
    name: 'Городские',
    items: [
      {
        name: 'Дорожные',
        link: 'flat_bar_road'
      },
      {
        name: 'Городские',
        link: 'urban'
      },
      {
        name: 'Fixed велосипеды',
        link: 'fixed'
      },
      {
        name: 'Класси и Винтаж',
        link: 'classic_vintage'
      },
      {
        name: 'Круизеры',
        link: 'сruiser'
      }
    ]
  },
  more_bikes: {
    name: 'Больше велосипедов...',
    items: [
      {
        name: 'Электровелосипеды',
        link: 'electric'
      },
      {
        name: 'Циклокроссы',
        link: 'cyclocross'
      },
      {
        name: 'Трековые',
        link: 'track'
      },
      {
        name: 'Складные',
        link: 'folding_portable'
      },
      {
        name: 'Скутеры',
        link: 'scooters'
      }
    ]
  }
};

const FRAMES = {
  titel: 'Рамы',
  frames: {
    name: 'Рамы',
    items: [
      {
        name: 'Шоссейные',
        link: 'road'
      },
      {
        name: 'Горные',
        link: 'mountain'
      },
      {
        name: 'Трековые',
        link: 'track'
      },
      {
        name: 'BMX',
        link: 'bmx'
      },
      {
        name: 'Циклокросы',
        link: 'cyclocross'
      },
      {
        name: 'Fixed',
        link: 'fixed'
      }
    ]
  },
  forks: {
    name: 'Вилки',
    items: [
      {
        name: 'Шоссейные',
        link: 'road'
      },
      {
        name: 'Горные',
        link: 'mountain'
      },
      {
        name: 'BMX',
        link: 'bmx'
      },
      {
        name: 'Трековые',
        link: 'track'
      }
    ]
  }
};

const SHOES = {
  titel: 'Обувь',
  popular_shoes: {
    name: 'Популярная обувь',
    items: [
      {
        name: 'Шоссейные',
        link: 'road'
      },
      {
        name: 'Горные',
        link: 'mountain'
      },
      {
        name: 'Трековые',
        link: 'track'
      },
      {
        name: 'Триатлон',
        link: 'triathlon'
      },
      {
        name: 'Для путешествий',
        link: 'touring'
      },
      {
        name: 'BMX',
        link: 'bmx'
      },
      {
        name: 'Беговая',
        link: 'running'
      }
    ]
  },
  accessories: {
    name: 'Аксессуары',
    items: [
      {
        name: 'Шипы',
        link: 'cleats'
      },
      {
        name: 'Бахилы',
        link: 'shoe_covers'
      },
      {
        name: 'Стельки',
        link: 'inner_soles'
      }
    ]
  }
};

const COMPONENTS = {
  titel: 'Запчасти',
  groups: [
    {
      popular: {
        name: 'Популярные',
        items: [
          {
            name: 'Педали',
            link: 'pedals'
          },
          {
            name: 'Groupsets',
            link: 'groupsets'
          },
          {
            name: 'Седла и подседельные штыри',
            link: 'seats_and_saddles'
          },
          {
            name: 'Тормоза и коплектующие',
            link: 'brakes_and_parts'
          },
          {
            name: 'Компьютеры',
            link: 'power_meters'
          }
        ]
      }
    },
    {
      drive_train: {
        name: 'Трансмиссия',
        items: [
          {
            name: 'Кассеты',
            link: 'cassettes'
          },
          {
            name: 'Цепи',
            link: 'chains'
          },
          {
            name: 'Переключатели',
            link: 'derailleurs'
          },
          {
            name: 'Системы',
            link: 'Cranksets'
          },
          {
            name: 'Звезды',
            link: 'chain_rings'
          }
        ]
      }
    },
    {
      handlebars: {
        name: 'Рулевое управление',
        items: [
          {
            name: 'Манетки и Троссы',
            link: 'shifters_cables'
          },
          {
            name: 'Грипсы',
            link: 'grips'
          },
          {
            name: 'Обмотки',
            link: 'bar_tape'
          },
          {
            name: 'Выносы',
            link: 'stems'
          },
          {
            name: 'Якори и Кольца',
            link: 'headsets_spacers'
          }
        ]
      }
    }
  ]
};

const ACCESSORIES = {
  titel: 'Аксессуары',
  groups: [
    {
      popular: {
        name: 'Популярные',
        items: [
          {
            name: 'Фонари',
            link: 'lights'
          },
          {
            name: 'Компьютеры',
            link: 'сomputers'
          },
          {
            name: 'Багажники и Боксы',
            link: 'bags'
          },
          {
            name: 'Тренажеры',
            link: 'trainers'
          },
          {
            name: 'Насосы',
            link: 'pumps'
          },
          {
            name: 'Очки',
            link: 'sunglasses'
          },
          {
            name: 'Бутылки и Фляги',
            link: 'bottles_and_cages'
          },
          {
            name: 'Велозамки',
            link: 'bike_locks'
          },
          {
            name: 'Крылья',
            link: 'mudguards'
          },
          {
            name: 'Сигналы и Рога',
            link: 'bells_horns'
          },
          {
            name: 'Питание',
            link: 'nutrition'
          }
        ]
      }
    },
    {
      racks_tools_cleaning: {
        name: 'Крепления, Инструменты и Чистка',
        items: [
          {
            name: 'Смазки/Масло',
            link: 'chain_lubricants'
          },
          {
            name: 'Чистящие средства',
            link: 'cleaning_tools'
          },
          {
            name: 'Инструменты',
            link: 'tools'
          },
          {
            name: 'Велобагажники',
            link: 'pannier_racks'
          },
          {
            name: 'Автокрепления',
            link: 'car_racks'
          },
          {
            name: 'Хранение и Подставки',
            link: 'storage_and_display_stands'
          }
        ]
      }
    },
    {
      featured: {
        name: 'Рекомендуемые',
        items: [
          {
            name: 'Зеркала',
            link: 'handlebar_mirrors'
          },
          {
            name: 'Baskets',
            link: 'Корзины'
          },
          {
            name: 'Коляски для детей',
            link: 'bike_trailers'
          },
          {
            name: 'Детские сиденья',
            link: 'child_seats'
          },
          {
            name: 'Запчасти для самокатов',
            link: 'scooter_parts'
          },
          {
            name: 'Велодинамики',
            link: 'portable_speakers'
          }
        ]
      }
    }
  ]
};

const CLOTHING = {
  titel: 'Одежда',
  groups: [
    {
      upper_body: {
        name: 'Верх',
        items: [
          {
            name: 'Короткие рукава',
            link: 'short_jerseys'
          },
          {
            name: 'Длинныйе рукава',
            link: 'long_jerseys'
          },
          {
            name: 'Безрукавки',
            link: 'sleeveless_jerseys'
          },
          {
            name: 'Жилетки',
            link: 'vests'
          },
          {
            name: 'Куртки',
            link: 'jackets'
          }
        ]
      }
    },
    {
      lower_body: {
        name: 'Низ',
        items: [
          {
            name: 'Шорты',
            link: 'shorts'
          },
          {
            name: 'Велосипедки',
            link: 'knicks'
          },
          {
            name: 'Лосины',
            link: 'tights'
          },
          {
            name: 'MTB Штаны',
            link: 'mtb_ants'
          }
        ]
      }
    },
    {
      accessories: {
        name: 'Аксессуары',
        items: [
          {
            name: 'Перчатки',
            link: 'gloves'
          },
          {
            name: 'Носки',
            link: 'socks'
          },
          {
            name: 'Термобелье',
            link: 'warmers_and_base_layers'
          },
          {
            name: 'Майки',
            link: 't_shirts'
          },
          {
            name: 'Кепки',
            link: 'caps'
          }
        ]
      }
    },
    {
      featured: {
        name: 'Рекомендуемые',
        items: [
          {
            name: 'Компрессия',
            link: 'compression'
          },
          {
            name: 'Комбенизоны',
            link: 'jersey_and_knick_sets'
          },
          {
            name: 'Защита',
            link: 'body_armour'
          },
          {
            name: 'Гидрокостюмы',
            link: 'tri_wetsuits'
          },
          {
            name: 'Купальники',
            link: 'tri_suits'
          }
        ]
      }
    }
  ]
};

const HELMETS = {
  titel: 'Шлемы',
  groups: [
    {
      popular: {
        name: 'Популярные',
        items: [
          {
            name: 'Шоссейные',
            link: 'road'
          },
          {
            name: 'Горные',
            link: 'mountain'
          },
          {
            name: 'Трековые',
            link: 'track'
          },
          {
            name: 'BMX',
            link: 'bmx'
          },
          {
            name: 'Full Face',
            link: 'full_face'
          },
          {
            name: 'Детские',
            link: 'kids'
          }
        ]
      }
    },
    {
      brands: {
        name: 'Бренды',
        items: [
          {
            name: 'Lazer Helmets',
            link: 'lazer_helets'
          },
          {
            name: 'Kask',
            link: 'kask'
          },
          {
            name: 'Giro',
            link: 'giro'
          }
        ]
      }
    }
  ]
};

const WHEELS = {
  titel: 'Колеса',
  groups: [
    {
      popular: {
        name: 'Популярные',
        items: [
          {
            name: 'Шоссейные',
            link: 'road'
          },
          {
            name: 'Горные',
            link: 'mountain'
          },
          {
            name: 'Трековые',
            link: 'track'
          },
          {
            name: 'BMX',
            link: 'bmx'
          }
        ]
      }
    },
    {
      accessories: {
        name: 'Аксессуары',
        items: [
          {
            name: 'Ободные ленты',
            link: 'rim_tape'
          },
          {
            name: 'Колпаки',
            link: 'valve_caps_and_adaptors'
          },
          {
            name: 'Нипели',
            link: 'extension_valves'
          }
        ]
      }
    },
    {
      wheel_parts: {
        name: 'Комплектующие',
        items: [
          {
            name: 'Спицы',
            link: 'spokes'
          },
          {
            name: 'Втулки',
            link: 'Hubs'
          },
          {
            name: 'Обода',
            link: 'rims'
          },
          {
            name: 'Эксцентрики',
            link: 'skewers'
          }
        ]
      }
    }
  ]
};

const TYRES_AND_TUBES = {
  titel: 'Покрышки/Камеры',
  groups: [
    {
      tyres: {
        name: 'Покрышки',
        items: [
          {
            name: 'Шоссейные',
            link: 'road'
          },
          {
            name: 'Горные',
            link: 'mountain'
          },
          {
            name: 'Трековые',
            link: 'track'
          },
          {
            name: 'BMX',
            link: 'bmx'
          },
          {
            name: 'Циклокросовые',
            link: 'cyclocross'
          },
          {
            name: 'Дорожные',
            link: 'сommuter'
          }
        ]
      }
    },
    {
      tubes: {
        name: 'Камеры',
        items: [
          {
            name: 'Ремнаборы',
            link: 'tube_sealant'
          },
          {
            name: 'Камеры',
            link: 'tubes'
          },
          {
            name: 'Нипели',
            link: 'extension_valves'
          }
        ]
      }
    },
    {
      pumps: {
        name: 'Насосы',
        items: [
          {
            name: 'Напольные',
            link: 'floor_pumps'
          },
          {
            name: 'Ручные',
            link: 'hand_pumph'
          },
          {
            name: 'CO2 Балоны',
            link: 'co2_canisters'
          },
          {
            name: 'CO2 Насосы',
            link: 'co2_inflators'
          }
        ]
      }
    }
  ]
};


class MainTabsComponent extends Component {
  constructor(props) {
    super(props);
    this.state = { key: 0 };
    this.handleSelect = this.handleSelect.bind(this);
  }
  handleSelect(key) {
    if (key === this.state.key) {
      this.setState({ key: 0 });
    } else {
      this.setState({ key });
    }
  }

  render() {
    const getTabPanel = (item, group) => (
      <div className="col-md-3">
        <h5>{item[group].name}</h5>
        {item[group].items.map(i => <p key={i.name}><a href="#">{i.name}</a></p>)}
      </div>
    );

    const getTabPanelDouble = (item, group) => (
      <div className="col-md-6">
        <h5>{item[group].name}</h5>
        <div className="row">
          {item[group].items.map(i =>
            <div className="col-md-6"><p key={i.name}><a href="#">{i.name}</a></p></div>
          )}
        </div>
      </div>
    );

    const getTab = (group, key, functionList) => (
      <Tab
        key={key}
        eventKey={key}
        title={
          <span className="text-tab">
            {group.titel}
            {this.state.key === key ?
              <i className="md  md-keyboard-arrow-up" /> :
              <i className="md md-keyboard-arrow-down" />
            }
          </span>
        }
      >
        <div className="row">
          {functionList.map(f => f)}
        </div>
      </Tab>
    );

    return (
      <div className="row">
        <div className="col-md-12">
          <Tabs
            activeKey={this.state.key}
            animation={false}
            onSelect={this.handleSelect}
            id="main-tab"
          >
           <Tab eventKey={0}> Блок с рекламой </Tab>
            {getTab(BIKES, 1, [
              getTabPanel(BIKES, 'popular'),
              getTabPanel(BIKES, 'commuter'),
              getTabPanel(BIKES, 'more_bikes')
            ])}
            {getTab(FRAMES, 2, [
              getTabPanelDouble(FRAMES, 'frames'),
              getTabPanel(FRAMES, 'forks')
            ])}
            {getTab(SHOES, 3, [
              getTabPanelDouble(SHOES, 'popular_shoes'),
              getTabPanel(SHOES, 'accessories')
            ])}
          </Tabs>
        </div>
      </div>
    );
  }
}

export default MainTabsComponent;
