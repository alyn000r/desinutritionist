import React from 'react';
import {render} from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import injectTapEventPlugin from 'react-tap-event-plugin';
import desiNutritionistApp from '../reducers/index';
import Main from './Main'; // Our custom react component

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

let store = createStore(desiNutritionistApp);

// Render the main app react component into the app div.
render(
  <Provider store={store}>
    <Main />
  </Provider>, document.getElementById('app')
);
