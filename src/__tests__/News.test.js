import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import News from "../components/News";
import configureStore from 'redux-mock-store' //ES6 modules
import thunk from "redux-thunk";

const middlewares = [thunk];
const mockStore = configureStore(middlewares);
const initStore = { news:{
    news: [
      {
        author: 'Ксения Назарова',
        title: 'Бывший владелец Virtus.pro выиграл 44 миллиона рублей на победе Team Spirit',
        description: 'Бывший владелец российской киберспортивной команды Virtus.pro Антон Черепенников выиграл более 44 миллионов рублей после победы Team Spirit в финале международных соревнований по Dota 2 The International 10. Бизнесмен поставил 1,53 миллиона рублей при коэффициенте ставки 29. «Верил с 1 дня», — написал он.',
        url: 'https://lenta.ru/news/2021/10/18/44_team_spirit/',
        source: 'Lenta',
        image: 'https://icdn.lenta.ru/images/2021/10/18/05/20211018050423260/pic_19538ff4b39d63fe7d0cea14f74efd7e.jpg',
        category: 'general',
        language: 'ru',
        country: 'ru',
        published_at: '2021-10-18T02:17:18+00:00'
      },
      {
        author: null,
        title: 'Hyundai Tucson и Toyota Yaris Cross стали отличниками краш-тестов',
        description: 'Hyundai Tucson и Toyota Yaris Cross стали отличниками краш-тестов',
        url: 'https://rg.ru/2021/10/27/hyundai-tucson-i-toyota-yaris-cross-stali-otlichnikami-krash-testov.html',
        source: 'RG.ru Rossiyskaya Gazeta',
        image: 'https://cdnimg.rg.ru/img/content/219/79/15/596562.jpg',
        category: 'general',
        language: 'ru',
        country: 'ru',
        published_at: '2021-10-27T14:02:05+00:00'
      },
      {
        author: null,
        title: 'В РКН рассказали о штрафах Facebook, Twitter, Telegram, Google и Tiktok',
        description: 'Российские суды в 2021 году за неудаление запрещенной информации оштрафовали Facebook, Twitter, Telegram, Google и TikTok на 180 миллионов рублей, сообщил Роскомнадзор.',
        url: 'https://ria.ru/20211101/shtraf-1757182301.html',
        source: 'RIA Novosti',
        image: null,
        category: 'general',
        language: 'ru',
        country: 'ru',
        published_at: '2021-11-01T09:31:37+00:00'
      },
      {
        author: 'Марина Совина',
        title: 'Российско-украинская команда NaVi выиграла чемпионат мира по CS:GO',
        description: 'Команда NaVi, в состав которой входят российские и украинские киберспортсмены, победила в турнире PGL Major Stockholm 2021 по компьютерной игре CS:GO. В финале NaVi обыграли европейскую команду G2 Esports. Встреча завершилась со счетом 2-0 (16:11 на Ancient, 22:19 на Nuke).',
        url: 'https://lenta.ru/news/2021/11/08/csgo/',
        source: 'Lenta.ru',
        image: 'https://icdn.lenta.ru/images/2021/11/08/01/20211108012447548/pic_f8fd2b79d9882f42236494807bb099f4.jpg',
        category: 'general',
        language: 'ru',
        country: 'ru',
        published_at: '2021-11-07T22:40:01+00:00'
      }
    ]
}
}

it('test News to compare last action with expected', ()=> {
    const store = mockStore(initStore);
    render(
        <Provider store={store}>
          <News />
        </Provider>
      );
    
      const actions = store.getActions();
      const lastAction = actions[actions.length - 1];
      const expected = {
        type: 'NEWS::SET_LOADING',
        loading: true
    }
      expect(lastAction).toEqual(expected);
})
it('test News to Compare render with snapshot', ()=> {
    const store = mockStore(initStore);
    const component = render(
        <Provider store={store}>
          <News />
        </Provider>
      );
    
    expect(component).toMatchSnapshot();
})