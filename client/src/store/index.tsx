import { createStore, combineReducers, applyMiddleware, Store } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

// Reducers
import { systemReducer } from './system/reducer';

const rootReducer = combineReducers({
  system: systemReducer,
});

export type AppState = ReturnType<typeof rootReducer>;

export default function configureStore(): Store {
  const middlewares: any[] = [];
  const middleWareEnhancer = applyMiddleware(...middlewares);

  const enhancer =
    process.env.NODE_ENV === 'development'
      ? composeWithDevTools(middleWareEnhancer)
      : undefined;

  const store = createStore(rootReducer, enhancer);

  return store;
}
