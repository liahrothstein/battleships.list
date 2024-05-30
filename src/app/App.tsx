import { Provider } from 'react-redux';

import { Filter } from '@features/index';
import { MainScreen, ShipsCarousel } from '@widgets/index';

import { store } from './store';

import './App.scss';

export default function App() {

  return (
    <Provider store={store}>
      <div className="app">
        <MainScreen />
        <Filter />
        <ShipsCarousel />
      </div>
    </Provider>
  )
}