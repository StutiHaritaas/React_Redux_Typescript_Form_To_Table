import { configureStore } from '@reduxjs/toolkit'
import myReducer from './form/Reducer'

const store = configureStore({
  reducer: {
   FormReducer: myReducer
  }
 
})

export default store;
