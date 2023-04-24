import { configureStore } from '@reduxjs/toolkit'

import  productReducer  from '../Reducer/RootReducer'
// import rootSaga from '../Action/ProductAction'
import createSagaMiddleware from 'redux-saga';
import { applyMiddleware } from '@reduxjs/toolkit';


const sagaMiddleware = createSagaMiddleware()
export const Store = configureStore({
  reducer: {
      ProductReducer: productReducer,
    }
})

// sagaMiddleware.run(rootSaga);